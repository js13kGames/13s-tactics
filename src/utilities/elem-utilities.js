export const setElemSize = (elem, width, height) => {
    elem.width = width;
    elem.height = height;
}

export const createElem = (parentElem, elemType, id, classList, width, height, isMobile, backgroundColor, clickFn, endClickFn) => {
    let elem = document.createElement(elemType);
    if (id) elem.id = id;
    if (classList) classList.forEach((e) => elem.classList.add(e));
    if (width) elem.width = width;
    if (height) elem.height = height;
    if (backgroundColor) elem.style.backgroundColor = backgroundColor;
    if (clickFn) elem.addEventListener(isMobile ? 'touchstart' : 'mousedown', (e) => eventFn(e, clickFn))
    if (endClickFn) elem.addEventListener(isMobile ? 'touchend' : 'mouseup', (e) => eventFn(e, endClickFn));
    parentElem.appendChild(elem);
    return elem;
}

const eventFn = (e, fn) => {
    e.preventDefault();
    fn(e);
};