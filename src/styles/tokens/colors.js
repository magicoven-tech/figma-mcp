/**
 * Design System Color Tokens
 * Generated from Figma design system
 * Last Updated: 2025-05-22
 * 
 * This file contains all color tokens mapped from the Figma design system.
 * Each color includes its original Figma ID and a semantic name.
 * 
 * @type {Object}
 */

export const colors = {
  // ============ Neutral Colors ============
  neutral: {
    0: '#FFFFFF',    // fill-hgcx9l - White
    10: '#F4F4F5',  // fill-hj71jc2 - Light gray (subtle background)
    20: '#DDE1E4',  // fill-hh7wp1q - Light border
    30: '#BABEC9',  // fill-hm1pgj3 - Medium gray (secondary text)
    40: '#636B7E',  // fill-hx75z0u - Dark gray (secondary text)
    50: '#22242A',  // fill-hrul194 - Primary text
    60: '#111111',  // fill-hu7pl5 - Black
  },
  
  // ============ Brand Colors ============
  brand: {
    primary: {
      base: '#FF337C',  // fill-h9qxh25 - Primary brand color
      dark: '#C81D5B',  // fill-hi9oovo - Primary hover/dark
    },
    secondary: {
      base: '#AA70FF',  // fill-hcawcq8 - Secondary brand color
    },
    dark: '#262F4A',  // fill-hv4xoak - Dark background/text
    accent: '#DD185F',   // fill-hql8f81 - Accent color
  },
  
  // ============ Semantic Colors ============
  semantic: {
    // Success Colors
    success: {
      base: '#0AB15F',  // fill-h50r7s - Success text/icon
      dark: '#1A7B41',   // fill-ho0gtgv - Success hover
      light: '#E5FFF3',  // fill-h5bplp0 - Success background
    },
    
    // Warning Colors
    warning: {
      base: '#FFDA57',  // fill-h1hiax6 - Warning text/icon
      dark: '#F5963D',   // fill-hrqmhzo - Warning hover
      light: '#FFF8D6',  // fill-ho3net - Warning background
    },
    
    // Error Colors - Updated to match brand colors from screenshot
    error: {
      base: '#E04747',  // Updated to match brand primary color from screenshot
      dark: '#B21919',   // Updated to match brand primary dark from screenshot
      darker: '#8C0A0A', // Darker shade for error states
      light: '#FFEBEB',  // fill-hzmfzj - Using subtle error as light
      lighter: '#FFF4F4',// fill-hq9lal - Using error light as lighter
      subtle: '#FFF8F8'  // Lighter shade for subtle backgrounds
    },
    
    // Info Colors
    info: {
      base: '#3D96FF',   // fill-hflhuor - Info text/icon
      dark: '#7785FF',   // fill-hkkn0cs - Info hover
      light: '#EAF6FF',  // fill-hvvngyl - Info background
    },
  },
  
  // ============ Background Colors ============
  background: {
    default: '#FFFFFF',
    subtle: '#F4F4F5',
    brandSubtle: '#FEEBF2',  // fill-hfo0f35 - Brand subtle background
    secondarySubtle: '#EDE0FF', // fill-hbl6zr5 - Secondary subtle background
  },
  
  // ============ Border Colors ============
  border: {
    default: '#DDE1E4',
    light: '#E0E4FF',    // fill-h27wpkh - Light border
    subtle: '#F4F4F5',
    medium: '#DDDFE4',   // fill-hhdemzc - Medium border
    strong: '#FFEAD6',   // fill-h1074gr - Strong border
  },
  
  // ============ Text Colors ============
  text: {
    primary: '#22242A',
    secondary: '#636B7E',
    tertiary: '#BABEC9',
    onPrimary: '#FFFFFF',
    onDark: '#FFFFFF',
  },
  
  // ============ Interactive States ============
  interactive: {
    primary: '#FF337C',
    primaryHover: '#C81D5B',
    secondary: '#F4F4F5',
    secondaryHover: '#DDE1E4',
  },
};

/**
 * Get a color value by its Figma ID
 * @param {string} figmaId - The Figma ID of the color (e.g., 'h9qxh25' or 'fill-h9qxh25')
 * @returns {string} The color value in hex format or null if not found
 * @example
 * // Returns '#FF337C'
 * getColorByFigmaId('h9qxh25');
 * getColorByFigmaId('fill-h9qxh25');
 */
export function getColorByFigmaId(figmaId) {
  const colorMap = {
    // Neutral Colors
    'hgcx9l': '#FFFFFF',    // fill-hgcx9l - White
    'hj71jc2': '#F4F4F5',  // fill-hj71jc2 - Light gray (subtle background)
    'hh7wp1q': '#DDE1E4',  // fill-hh7wp1q - Light border
    'hm1pgj3': '#BABEC9',  // fill-hm1pgj3 - Medium gray (secondary text)
    'hx75z0u': '#636B7E',  // fill-hx75z0u - Dark gray (secondary text)
    'hrul194': '#22242A',  // fill-hrul194 - Primary text
    'hu7pl5': '#111111',   // fill-hu7pl5 - Black
    
    // Brand Colors
    'h9qxh25': '#FF337C',  // fill-h9qxh25 - Primary brand color
    'hi9oovo': '#C81D5B',  // fill-hi9oovo - Primary hover/dark
    'hcawcq8': '#AA70FF',  // fill-hcawcq8 - Secondary brand color
    'hv4xoak': '#262F4A',  // fill-hv4xoak - Dark background/text
    'hql8f81': '#DD185F',  // fill-hql8f81 - Accent color
    
    // Success Colors
    'h50r7s': '#0AB15F',   // fill-h50r7s - Success text/icon
    'ho0gtgv': '#1A7B41',  // fill-ho0gtgv - Success hover
    'h5bplp0': '#E5FFF3',  // fill-h5bplp0 - Success background
    
    // Warning Colors
    'h1hiax6': '#FFDA57',  // fill-h1hiax6 - Warning text/icon
    'hrqmhzo': '#F5963D',  // fill-hrqmhzo - Warning hover
    'ho3net': '#FFF8D6',   // fill-ho3net - Warning background
    
    // Error Colors
    'h901gy1': '#FF4E4C',  // fill-h901gy1 - Error text/icon
    'h5sja8o': '#E04747',  // fill-h5sja8o - Error hover
    'h6qeriv': '#B21919',  // fill-h6qeriv - Error active
    'hq9lal': '#FFF4F4',   // fill-hq9lal - Error background
    'h1nahdx': '#FFD6D6',  // fill-h1nahdx - Lighter error state
    'hzmfzj': '#FFEBEB',   // fill-hzmfzj - Subtle error background
    
    // Info Colors
    'hflhuor': '#3D96FF',  // fill-hflhuor - Info text/icon
    'hkkn0cs': '#7785FF',  // fill-hkkn0cs - Info hover
    'hvvngyl': '#EAF6FF',  // fill-hvvngyl - Info background
    
    // Additional Colors
    'hfo0f35': '#FEEBF2',  // fill-hfo0f35 - Brand subtle background
    'hbl6zr5': '#EDE0FF',  // fill-hbl6zr5 - Secondary subtle background
    'h27wpkh': '#E0E4FF',  // fill-h27wpkh - Light border
    'hhdemzc': '#DDDFE4',  // fill-hhdemzc - Medium border
    'h1074gr': '#FFEAD6',  // fill-h1074gr - Strong border
  };
  
  // Remove 'fill-' prefix if present
  const cleanId = figmaId.replace(/^fill-/, '');
  const color = colorMap[cleanId];
  
  if (!color) {
    console.warn(`Color with Figma ID '${figmaId}' not found`);
    return null;
  }
  
  return color;
}

/**
 * Get a color token by its semantic path
 * @param {string} path - The path to the color (e.g., 'brand.primary.base')
 * @returns {string} The color value in hex format or a CSS variable reference
 * @example
 * // Returns '#FF337C'
 * getColor('brand.primary.base');
 * // Returns 'var(--color-brand-primary)'
 * getColor('brand.primary');
 */
export function getColor(path) {
  if (!path) {
    console.warn('Color path is required');
    return '#000000'; // Fallback color
  }
  
  const parts = path.split('.');
  let current = colors;
  
  for (const part of parts) {
    if (current[part] === undefined) {
      console.warn(`Color path '${path}' not found`);
      return '#000000'; // Fallback color
    }
    current = current[part];
  }
  
  return current;
}

/**
 * Get a CSS variable string for a color token
 * @param {string} path - The path to the color (e.g., 'brand.primary')
 * @returns {string} The CSS variable string (e.g., 'var(--color-brand-primary)')
 * @example
 * // Returns 'var(--color-brand-primary)'
 * cssVar('brand.primary');
 */
export function cssVar(path) {
  if (!path) {
    console.warn('Color path is required for cssVar');
    return 'var(--color-error)';
  }
  
  // Convert camelCase to kebab-case and join with hyphens
  const varName = path
    .split('.')
    .map(part => part.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase())
    .join('-');
    
  return `var(--color-${varName})`;
}

// For TypeScript/IntelliSense support
/**
 * @typedef {Object} ColorPalette
 * @property {string} base - Base color
 * @property {string} [dark] - Dark variant
 * @property {string} [light] - Light variant
 * @property {string} [darker] - Darker variant
 * @property {string} [lighter] - Lighter variant
 * @property {string} [subtle] - Subtle variant
 */

/**
 * @typedef {Object} ColorTokens
 * @property {Object} neutral - Neutral colors
 * @property {string} neutral.0 - White
 * @property {string} neutral.10 - Light gray (subtle background)
 * @property {string} neutral.20 - Light border
 * @property {string} neutral.30 - Medium gray (secondary text)
 * @property {string} neutral.40 - Dark gray (secondary text)
 * @property {string} neutral.50 - Primary text
 * @property {string} neutral.60 - Black
 * 
 * @property {Object} brand - Brand colors
 * @property {Object} brand.primary - Primary brand colors
 * @property {string} brand.primary.base - Base primary color
 * @property {string} brand.primary.dark - Dark primary color
 * @property {Object} brand.secondary - Secondary brand colors
 * @property {string} brand.secondary.base - Base secondary color
 * @property {string} brand.dark - Dark background/text color
 * @property {string} brand.accent - Accent color
 * 
 * @property {Object} semantic - Semantic colors
 * @property {ColorPalette} semantic.success - Success colors
 * @property {ColorPalette} semantic.warning - Warning colors
 * @property {ColorPalette} semantic.error - Error colors
 * @property {ColorPalette} semantic.info - Info colors
 * 
 * @property {Object} background - Background colors
 * @property {string} background.default - Default background
 * @property {string} background.subtle - Subtle background
 * @property {string} background.brandSubtle - Brand subtle background
 * @property {string} background.secondarySubtle - Secondary subtle background
 * 
 * @property {Object} border - Border colors
 * @property {string} border.default - Default border
 * @property {string} border.light - Light border
 * @property {string} border.subtle - Subtle border
 * @property {string} border.medium - Medium border
 * @property {string} border.strong - Strong border
 * 
 * @property {Object} text - Text colors
 * @property {string} text.primary - Primary text
 * @property {string} text.secondary - Secondary text
 * @property {string} text.tertiary - Tertiary text
 * @property {string} text.onPrimary - Text on primary color
 * @property {string} text.onDark - Text on dark background
 * 
 * @property {Object} interactive - Interactive state colors
 * @property {string} interactive.primary - Primary interactive
 * @property {string} interactive.primaryHover - Primary hover state
 * @property {string} interactive.secondary - Secondary interactive
 * @property {string} interactive.secondaryHover - Secondary hover state
 */
