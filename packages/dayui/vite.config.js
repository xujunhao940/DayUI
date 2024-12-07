import {defineConfig} from "vite";
import fs from 'fs';
import path from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: "./src/index.ts",
            name: "dayui",
            fileName: "dayui",
            formats: ["es"],
        },
    },
    plugins: [
        {
            name: 'copy-css',
            writeBundle() {
                const srcPath = path.resolve(__dirname, 'src/index.css');
                const destPath = path.resolve(__dirname, 'dist/dayui.css');
                fs.copyFileSync(srcPath, destPath);
            }
        }
    ]
})