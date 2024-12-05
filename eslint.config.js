import js from "@eslint/js";
import react from "eslint-plugin-react";

export default [
    js.configs.recommended,
    {
        rules: {
            "no-unused-vars": "warn",
        },
    },
    react.configs.recommended,
];
