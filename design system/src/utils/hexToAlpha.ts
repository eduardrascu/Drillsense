export const hexToAlpha = (hex: string, alpha: number): string => {
  // Convert hex to RGB
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  // Convert alpha percentage to hex
  const alphaHex = Math.round((alpha / 100) * 255).toString(16).padStart(2, '0');

  // Return hex with alpha
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}${alphaHex}`;
}