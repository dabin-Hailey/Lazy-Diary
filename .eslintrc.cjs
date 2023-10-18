module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    // "plugin:react/jsx-runtime",
    "plugin:react/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "prettier"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/no-unknown-property": ["error", { "ignore": ["css"] }],
    "no-unused-vars": "off", // 사용하지 않는 변수 경고 끄기
    indent: ["error", 2], // 들여쓰기 스타일 설정 (2칸 들여쓰기)
    semi: ["error", "always"], // 세미콜론(;) 사용 강제 설정
  },
};
