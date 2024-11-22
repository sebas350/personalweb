import { JSDOM } from 'jsdom';

const { window } = new JSDOM(`<!DOCTYPE html><html><body><div id="root"></div></body></html>`);
const { document } = window;
const { HTMLElement, Node } = window;

export { window, document, HTMLElement, Node };