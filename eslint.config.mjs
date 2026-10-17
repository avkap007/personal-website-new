import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...compat.config({
    plugins: ["tailwindcss"],
    rules: {
      "tailwindcss/no-custom-classname": "off",
      "@next/next/no-html-link-for-pages": "off",
    },
    settings: {
      tailwindcss: {
        callees: ["cn"],
      },
    },
  }),
];

export default eslintConfig;
