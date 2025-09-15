import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tseslint from "@typescript-eslint/eslint-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next"),
  {
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      "no-var": "error",
      // → var 사용 불가능

      "prefer-const": "error",
      // → const 권장, let은 특수한 경우 사용가능

      "@typescript-eslint/no-explicit-any": "error",
      //

      eqeqeq: ["error", "always"],
      // → == 대신 === 사용
    },
  },
];

export default eslintConfig;
