module.exports = {
    env: {
        //코드검사 환경
        browser: true,
        node: true
    },
    extends: [
        //코드검사 규칙정의

        //vue
        //'plugin:vue/vue3-essential',//Lv1
        'plugin:vue/vue3-strongly-recommended',//Lv2
        //'plugin:vue/vue3-recommended',//Lv3

        //js
        'eslint:recommended'
    ],
    parserOptions: {
        //es6 -> es5 에서도 동작가능하게함
        parser: 'babel-eslint'
    },
    rules: {
        "vue/html-comment-content-newline": ["error",
            {
            "singleline": "never",
            "multiline": "never",
            },
            {
            "exceptions": []
            }
        ],

        "vue/html-self-closing": ["error", {
            "html": {
              "void": "always",
              "normal": "never",
              "component": "always"
            },
            "svg": "always",
            "math": "always"
          }]
          
    }
}