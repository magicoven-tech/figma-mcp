const fs = require('fs');
const path = require('path');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// Carrega as variáveis de ambiente do arquivo .env
require('dotenv').config();

if (!process.env.FIGMA_API_KEY) {
  console.error('Erro: A variável de ambiente FIGMA_API_KEY não está definida.');
  console.log('Por favor, crie um arquivo .env na raiz do projeto com:');
  console.log('FIGMA_API_KEY=seu_token_aqui');
  process.exit(1);
}

const API_KEY = process.env.FIGMA_API_KEY;
const FILE_KEY = 'pVtzzbGGxHLEQ4i5ffMgPY';
const OUTPUT_DIR = path.join(__dirname, 'style-guide');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function fetchFigmaData() {
  try {
    // Fetch file metadata
    const fileResponse = await fetch(`https://api.figma.com/v1/files/${FILE_KEY}`, {
      headers: { 'X-Figma-Token': API_KEY }
    });
    
    if (!fileResponse.ok) {
      throw new Error(`Error fetching file: ${fileResponse.statusText}`);
    }
    
    const fileData = await fileResponse.json();
    
    // Save the raw data
    fs.writeFileSync(
      path.join(OUTPUT_DIR, 'design_system.json'),
      JSON.stringify(fileData, null, 2)
    );
    
    // Extract and save styles
    const styles = fileData.styles || {};
    fs.writeFileSync(
      path.join(OUTPUT_DIR, 'styles.json'),
      JSON.stringify(styles, null, 2)
    );
    
    // Extract and save components
    const components = fileData.components || {};
    fs.writeFileSync(
      path.join(OUTPUT_DIR, 'components.json'),
      JSON.stringify(components, null, 2)
    );
    
    console.log(`✅ Design system documentation generated in ${OUTPUT_DIR}`);
    console.log('Files created:');
    console.log(`- ${path.join(OUTPUT_DIR, 'design_system.json')}`);
    console.log(`- ${path.join(OUTPUT_DIR, 'styles.json')}`);
    console.log(`- ${path.join(OUTPUT_DIR, 'components.json')}`);
    
  } catch (error) {
    console.error('❌ Error generating documentation:', error.message);
    process.exit(1);
  }
}

fetchFigmaData();
