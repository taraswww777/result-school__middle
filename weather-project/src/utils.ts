export const createElement = (tagName: string, attrs: Partial<Element> & Record<string, string | number>) => {
  const elem = document.createElement(tagName);

  if (attrs && elem) {
    Object.keys(attrs).forEach((key) => {
      // see: https://stackoverflow.com/questions/56568423/typescript-no-index-signature-with-a-parameter-of-type-string-was-found-on-ty
      // А вообще так плохо делать
      (elem as any)[key] = (attrs as any)[key];
    });
  }

  return elem;
};

export const createDiv = (options = {}) => createElement('div', options);
