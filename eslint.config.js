import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'

export default tseslint.config(
  // https://eslint.org/docs/latest/use/configure/configuration-files#configuration-objects
  // ignores - An array of glob patterns indicating the files that the configuration object should not apply to.
  // If not specified, the configuration object applies to all files matched by files.
  // If ignores is used without any other keys in the configuration object,
  // then the patterns act as global ignores and it gets applied to every configuration object.
  // 
  // **EXPLANATION IN SIMPLE ENGLISH**
  // If you want to ignore certain files or directories, you can specify them in the 'ignores' array.
  // This array must be kept in a separate object.
  {
    ignores: [
      'dist/**',
      'docs/**',
      'node_modules/**',
      '**/*.min.js',
      '**/*.mjs'
    ],
  },
  // The rest of the configuration
  {
    files: ['**/*.ts', '**/*.tsx'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        React: true,
        JSX: true
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      // "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
      // '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      // 'no-unused-vars': 'off',
    }
  }
)
