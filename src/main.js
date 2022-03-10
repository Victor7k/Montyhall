import Vue from 'vue'
import App from './App'

new Vue({
    render: h => h(App) // Versão do Client.
    /*
    O 'h' seria o 'createElement'

    render(createElement) {
        return createElement(App)
    }
    */
}).$mount("#app") // Versão do Client. O $mount("#app") tem o mesmo objetivo q o el: '#app'. Este id aponta para o q esta no 'index'