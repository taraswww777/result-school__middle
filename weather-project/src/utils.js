export const createElement = (tagName, attrs) => {
    const elem = document.createElement(tagName)

    if (attrs && elem) {
        Object.keys(attrs).forEach((key) => {
            elem[key] = attrs[key]
        })
    }

    return elem
}


export const createDiv = (options = {}) => {
    return createElement('div', options);
}


