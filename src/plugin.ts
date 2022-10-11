import edgeJs from "edge.js";
import { Plugin } from "vite";
import { EdgeConfig } from "./interface";

export function edge(config?: EdgeConfig): Plugin {
    return {
        name: "vite:edge.js",
        configResolved(config) {
            edgeJs.mount(config.root);
        },
        transformIndexHtml: {
            enforce: "pre",
            transform(html: string): Promise<string> {
                return edgeJs.renderRaw(html, config?.state);
            }
        }
    };
}
