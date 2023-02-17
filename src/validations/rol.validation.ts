export const validateRol = (value: string, e: any): boolean | string | any => {
  return (
    e.user?.roles?.includes("admin") ||
    e.user?.roles?.includes("editor") ||
    `Is not allowed to update this fields`
  );
};
