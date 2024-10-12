/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

/** no type def libraries for these libraries */
declare module "cytoscape-cola";
declare module "cytoscape-spread";
// custom-elements.d.ts
declare namespace JSX {
interface IntrinsicElements {
'nightingale-msa': any;
}
}