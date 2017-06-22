const vm = new Vue({
    el: 'main',
    data: {
        title: 'Transiciones',
        mostrar: true,
        mensajes: {
            transicion: 'Transiciones CSS con Vue.js',
            animacion: 'Animaciones CSS con Vue.js',
            animationCustom: 'Animaciones custom CSS con Vue.js',
            entreElementos: 'Transiciones entre elementos con Vue.js'
        }
    },
    methods: {
        toogleMostrar() {
            this.mostrar = !this.mostrar;
        }
    }
})
