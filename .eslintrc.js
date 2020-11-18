module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        semi: ['error', 'never'],
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'no-duplicate-imports': ['error', { includeExports: true }],
        '@typescript-eslint/member-delimiter-style': 0,
        '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
        '@typescript-eslint/no-non-null-assertion': 'off',
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 'error',
        'react/prop-types': 0,
        'arrow-parens': ['error', 'as-needed'],
        'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    }
}
