import clsx from "clsx";
export const useClasses = (
  key: string,
  style: { [key: string]: string },
  modifications: (string | (object | undefined))[],
  ...args: string[]
) => {
  const formatModifications = modifications.map((m) => {
    if (typeof m === "object") {
      return Object.keys(m)
        .filter((k) => m[k as keyof typeof m])
        .map((m) => style[`${key}__${m}`])
        .join(" ");
    } else {
      return style[`${key}__${m}`];
    }
  });

  return clsx(style[key], ...formatModifications, args);
};
