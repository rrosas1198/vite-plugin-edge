import { resolve } from "path";
import { defineConfig } from "vite";
import edge from "../src";

export default defineConfig({
    root: resolve(__dirname, "src"),
    plugins: [
        edge({
            state: {
                user: {
                    username: "virk",
                    email: "virk@adonisjs.com",
                    isAdmin: true,
                    profile: {
                        avatarUrl: "foo"
                    },
                    lastLoginAt: null
                }
            }
        })
    ]
});
