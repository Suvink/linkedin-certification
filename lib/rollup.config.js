import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import typescript from "@rollup/plugin-typescript";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pkg = JSON.parse(readFileSync(join(__dirname, "package.json"), "utf8"));

export default {
    input: "./src/index.ts",
    output: [
        {
            file: "./dist/cjs/index.js",
            format: "cjs",
        },
        {
            file: "./dist/esm/index.js",
            format: "es",
        },
    ],
    external: [...Object.keys(pkg.peerDependencies || {})],
    plugins: [typescript()],
};
