export const darkenRGBAColor = (rgbaColor: any) => {
  const rgbaValues = rgbaColor.match(/\d+(\.\d+)?/g);
  const r = parseInt(rgbaValues[0]);
  const g = parseInt(rgbaValues[1]);
  const b = parseInt(rgbaValues[2]);
  return `rgba(${r},${g},${b},1)`;
};
