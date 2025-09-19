import globals from "globals";
import { defineConfig } from "eslint/config";
import path from "path";

export default defineConfig([
  {
    files: ["src/**/*.ts"],
    extends: ["plugin:@typescript-eslint/recommended"],
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        project: path.resolve(__dirname, "tsconfig.json"),
        tsconfigRootDir: __dirname,
      },
    },
  },
]);
