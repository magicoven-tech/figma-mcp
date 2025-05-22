# Design Tokens

This directory contains the design tokens for the application, generated from the Figma design system.

## Color System

### Color Tokens

We use a semantic color system with the following categories:

#### 1. Neutral Colors
- Used for text, backgrounds, and borders
- Ranges from white (0) to black (60)
- Use for text, backgrounds, borders, and UI elements

#### 2. Brand Colors
- Primary and secondary brand colors
- Used for primary actions, highlights, and accents

#### 3. Semantic Colors
- **Success**: For positive actions, success states
- **Warning**: For warnings and cautionary states
- **Error**: For errors and destructive actions
- **Info**: For informational messages and links

### Usage

#### In CSS/SCSS
```css
.button {
  background-color: var(--color-brand-primary);
  color: var(--color-neutral-0);
  border: 1px solid var(--color-border-light);
}

.error-message {
  color: var(--color-semantic-error);
  background-color: var(--color-semantic-error-light);
  border-left: 3px solid var(--color-semantic-error);
}
```

#### In JavaScript/React
```jsx
import { colors } from './styles/tokens/colors';

const Button = ({ variant = 'primary' }) => (
  <button 
    style={{
      backgroundColor: variant === 'primary' 
        ? colors.brand.primary.base 
        : colors.neutral[0],
      color: variant === 'primary' 
        ? colors.neutral[0] 
        : colors.neutral[60],
      border: `1px solid ${colors.border.light}`,
    }}
  >
    Click me
  </button>
);
```

### Best Practices

1. **Use semantic names**: Always use semantic color names instead of hex values
2. **Follow the scale**: Use the appropriate shade from the neutral scale
3. **Accessibility**: Ensure sufficient color contrast (minimum 4.5:1 for text)
4. **Consistency**: Use the same color tokens for the same purposes throughout the app

### Theming

To implement dark mode or other themes, override the CSS variables in a theme-specific selector:

```css
[data-theme="dark"] {
  --color-neutral-0: #111111;
  --color-neutral-60: #FFFFFF;
  /* Override other colors as needed */
}
```

## Updating Tokens

When the design system is updated in Figma:

1. Regenerate the design tokens using the Figma MCP Server
2. Update the `colors.js` and `colors.css` files with any new or changed tokens
3. Update this documentation if there are any changes to the color system

## Accessibility

All color combinations should meet WCAG 2.1 AA contrast requirements:
- 4.5:1 for normal text
- 3:1 for large text (18pt+ or 14pt+bold)
- 3:1 for graphical objects and UI components

Use tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) to verify contrast ratios.
