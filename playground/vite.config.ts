import { resolve } from "path";
import { defineConfig } from "vite";
import edge from "../src";

export default defineConfig({
    root: resolve(__dirname, "src"),
    plugins: [edge()]
});
