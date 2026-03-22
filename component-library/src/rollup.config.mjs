import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import image from "@rollup/plugin-image";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import dts from "rollup-plugin-dts";
import packageJson from "../package.json" with { type: "json" };

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            resolve(),
            commonjs(),
            json(),
            typescript({
                tsconfig: "./tsconfig.json",
                declaration: false,
                outDir: "dist",
                noEmit: false,
                incremental: false,
                exclude: ["**/*.test.ts", "**/*.test.tsx", "src/app/**", "src/authConfig.ts", "src/lib/**", "src/db/**", "src/proxy.ts"],
            }),
            babel({
                babelHelpers: "bundled",
                presets: ["@babel/preset-env", "@babel/preset-react"],
                extensions: [".js", ".jsx", ".ts", ".tsx"],
                exclude: "node_modules/**",
            }),
            postcss(),
            image(),
            terser(),
        ],
        external: ["react", "react-dom", "next", "next-themes", "next/image", "next/link", "next/navigation", "next-auth"],
    },
    {
        input: "src/index.ts",
        output: [{ file: packageJson.types, format: "esm" }],
        plugins: [dts()],
        external: [/\.css$/],
    },
];