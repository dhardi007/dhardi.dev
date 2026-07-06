export function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace("#", "");
  return [
    parseInt(clean.substring(0, 2), 16),
    parseInt(clean.substring(2, 4), 16),
    parseInt(clean.substring(4, 6), 16),
  ];
}

export function hexToRgba(hex: string, alpha: number): string {
  const [r, g, b] = hexToRgb(hex);
  return `rgba(${r},${g},${b},${alpha})`;
}

export function hexToShadow(hex: string, alpha: number): string {
  const [r, g, b] = hexToRgb(hex);
  return `${r},${g},${b}`;
}

export function hexToBorder(hex: string): string {
  return `${hex}40`;
}
