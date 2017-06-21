Vue.filter('alReves', (valor) => valor.split('').reverse().join(''));

const vm1 = new Vue({
    el: 'main',
    data: {
        mensaje: 'Instancia 1'
    },
    beforeUpdate() {
        console.log(`BeforeUpdate: ${this.mensaje}`);
    },
    updated() {
        console.log(`Update: ${this.mensaje}`);
    },
    methods: {
        alReves() {
            this.mensaje = this.mensaje.split('').reverse().join('');
            vm2.mensaje = 'Disparado desde Instancia 1'
        }
    },
    computed: {
        mensajeMayusculas() {
            return this.juegos.filter(juego => juego.puntuacion >= this.threshold);
        }
    }
})

const vm2 = new Vue({
    el: '#app',
    data: {
        mensaje: 'Instancia 2'
    }
})
