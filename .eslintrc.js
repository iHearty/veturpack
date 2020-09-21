module.exports = {
   root: true,
   env: {
      node: true
   },
   extends: [
      'plugin:vue/essential',
      '@vue/standard'
   ],
   parserOptions: {
      parser: 'babel-eslint'
   },
   rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'indent': ['error', 3],
      'quotes': ['error', 'single'],
      'comma-style': ['error', 'last'],
      'semi': ['error', 'always'],
      'comma-dangle': ["error", {
         'arrays': 'always',
         'objects': 'always',
         'imports': 'never',
         'exports': 'never',
         'functions': 'never',
      }],
      'space-before-function-paren': ['error', 'never'],
      'keyword-spacing': [
         'error',
         {
            'overrides': {
               'if': { 'after': false },
               'for': { 'after': false },
               'while': { 'after': false },
            }
         }
      ],
   }
}
