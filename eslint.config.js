// @ts-check
import eslint from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import tseslint from 'typescript-eslint'
import reactRefresh from 'eslint-plugin-react-refresh'
import stylistic from '@stylistic/eslint-plugin'
import simpleImportSort from "eslint-plugin-simple-import-sort";


const compat = new FlatCompat()
const e = 'error'
const w = 'warn'
export default tseslint.config(
    eslint.configs.recommended,
    ...compat.extends('plugin:react/recommended'),
    ...compat.extends('plugin:react/jsx-runtime'),
    ...compat.extends('plugin:react-hooks/recommended'),
    ...tseslint.configs.stylisticTypeChecked,
    ...tseslint.configs.strictTypeChecked,
    {
        settings: {
            react: {
                version: 'detect'
            }
        },
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            }
        },
        ignores: ['dist', 'eslint.config.js', 'vite-env.d.ts'],
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        plugins: {
            '@stylistic': stylistic,
            'simple-import-sort': simpleImportSort,
            tsLint: tseslint.plugin,
            reactRefresh,
        },

        rules: {
            "simple-import-sort/imports": w,
            'reactRefresh/only-export-components': [
                e,
                { allowConstantExport: true }
            ],
            'eqeqeq': [
                e,
                'smart'
            ],
            'no-var': e,

            '@typescript-eslint/no-confusing-void-expression': 'off',
            '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
            '@typescript-eslint/strict-boolean-expressions': [e, {allowNullableBoolean: true, allowNullableObject: false}],

            // react rules
            'react/destructuring-assignment': e,
            'react/forward-ref-uses-ref': w,
            'react/hook-use-state': [w, {allowDestructuredState: true}],
            'react/iframe-missing-sandbox': e,
            'react/jsx-no-constructed-context-values': e,
            'react/jsx-no-leaked-render': e,
            'react/jsx-pascal-case': w,
            'react/jsx-props-no-spread-multi': w,
            'react/no-array-index-key': e,
            'react/no-invalid-html-attribute': e,
            'react/no-object-type-as-default-prop': w,
            'react/no-this-in-sfc': e,
            'react/no-unescaped-entities': 'off',
            'react/no-unstable-nested-components': e,
            'react/prefer-stateless-function': e,
            'react/self-closing-comp': w,
            'react/style-prop-object': w,
            'react/void-dom-elements-no-children': e,

            // Builtin eslint styling rules
            'camelcase': e,
            'capitalized-comments': w,
            'dot-notation': w,
            'no-lonely-if': w,
            'no-lone-blocks': w,
            'no-implicit-coercion': e,
            'no-param-reassign': e,
            'no-return-assign': e,
            'no-shadow': e,
            'no-useless-return': w,
            'no-unneeded-ternary': w,
            'prefer-arrow-callback': w,

            // Typescript styling rules
            '@stylistic/block-spacing': w,
            '@stylistic/comma-spacing': w,
            '@stylistic/function-call-spacing': w,
            '@stylistic/key-spacing': w,
            '@stylistic/keyword-spacing': w,
            '@stylistic/member-delimiter-style': [w, { multiline: { delimiter: 'none' }, singleline: { delimiter: 'comma' } }],
            '@stylistic/object-curly-spacing': [w, 'always'],
            '@stylistic/object-property-newline': [w, { allowAllPropertiesOnSameLine: true }],
            '@stylistic/quotes': [w, 'single'],
            '@stylistic/quote-props': [w, 'as-needed'],
            '@stylistic/semi': [w, 'never'],
            '@stylistic/space-before-blocks': w,
            '@stylistic/space-before-function-paren': [w, { named: 'never' }],
            '@stylistic/space-infix-ops': w,
            '@stylistic/type-annotation-spacing': w,

            //Jsx styling rules
            '@stylistic/jsx-curly-brace-presence': [w, 'never'],
            '@stylistic/jsx-curly-spacing': w,
            '@stylistic/jsx-equals-spacing': w,
            '@stylistic/jsx-function-call-newline': w,
            '@stylistic/jsx-indent-props': w,
            '@stylistic/jsx-pascal-case': w,
            '@stylistic/jsx-props-no-multi-spaces': w,
            '@stylistic/jsx-self-closing-comp': w,
            '@stylistic/jsx-tag-spacing': w
        }
    }
)
