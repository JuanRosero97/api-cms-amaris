export const validateHexColor = (
  value: string,
  e: any
): boolean | string | any => {
  if (value) {
    return (
      value.match(/^#(?:[0-9a-fA-F]{3}){1,2}$/)?.length === 1 ||
      `${value} is not a valid hex color`
    );
  }
  return `${value} is not a valid hex color`;
};
