/*
 ********************************************************************
 * Licensed Materials - Property of HCL                             *
 *                                                                  *
 * Copyright HCL Technologies Ltd. 2025. All Rights Reserved.       *
 *                                                                  *
 * Note to US Government Users Restricted Rights:                   *
 *                                                                  *
 * Use, duplication or disclosure restricted by GSA ADP Schedule    *
 ********************************************************************
*/

import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";
import wc from "eslint-plugin-wc";
import lit from "eslint-plugin-lit";
import why from "eslint-plugin-why";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";

import unsupportedPropertyNameRule from "./src/eslint/custom-rules/unsupported-property-name-rule.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("eslint:recommended"), {
    files: ["**/*.js", "**/*.ts"],

    plugins: {
        custom: {
            rules: {
                unsupportedPropertyNameRule
            }
        },
        "@typescript-eslint": typescriptEslint,
        wc,
        lit,
        why,
    },

    languageOptions: {
        globals: {
            ...globals.mocha,
            ...globals.browser,
            ...globals.jquery,
            ...globals.node,
            window: "readonly",
            document: "readonly",
        },

        parser: tsParser,
    },

    rules: {
        "@typescript-eslint/no-unused-vars": ["error", {
            vars: "all",
            args: "none",
            varsIgnorePattern: "inject|param|(\\w+)Bindings",
            ignoreRestSiblings: false,
        }],

        "max-len": ["error", {
            code: 200,
        }],

        "semi": ["error", "always"],
        "indent": ["error", 2, {
            ignoredNodes: [
                "TemplateLiteral > *",
                "PropertyDefinition[decorators.length > 0] > .key",
                "TemplateLiteral ArrowFunctionExpression > BlockStatement"
            ],
            outerIIFEBody: 0,
            offsetTernaryExpressions: false,
            SwitchCase: 1,
            MemberExpression: 1,
            ObjectExpression: 1,
            ImportDeclaration: 1,
            ArrayExpression: 1,
            FunctionExpression: {
                body: 1,
                parameters: 1
            },
            FunctionDeclaration: {
                body: 1,
                parameters: 1
            },
            StaticBlock: {
                body: 1
            }
        }],

        "no-async-promise-executor": ["error"],
        "no-unused-vars": ["off"],
        "no-shadow": "off",
        "why/tell-me-why": "error",

        "no-undef": ["error", {
            typeof: false,
        }],

        "no-console": ["error"],
        "no-useless-constructor": 0,

        "custom/unsupportedPropertyNameRule": "error",

        "no-empty-function": ["error", {
            allow: ["constructors"],
        }],

        "no-param-reassign": "off",
        "@typescript-eslint/default-param-last": ["error"],

        "@typescript-eslint/no-explicit-any": ["error", {
            ignoreRestArgs: false,
        }],

        "@typescript-eslint/no-shadow": "error",
        "arrow-body-style": ["error", "always"],
        "space-before-blocks": ["error", "always"],
        "object-curly-spacing": ["error", "always"],
        "comma-spacing": ["error", { "before": false, "after": true }],

        "keyword-spacing": ["error", {
            before: true,
            after: true,
        }],

        "class-methods-use-this": 0,
        "default-param-last": "off",
        "import/no-extraneous-dependencies": 0,

        "import/no-unresolved": [0, {
            commonjs: true,
            caseSensitive: true,
        }],

        "import/prefer-default-export": "off",
    },
}, ...storybook.configs["flat/recommended"]];
