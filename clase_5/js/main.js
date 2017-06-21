Vue.filter('alReves', (valor) => valor.split('').reverse().join(''));

const vm = new Vue({
    el: 'main',
    data: {
        threshold: 5,
        busqueda: null,
        juegos: [
            {
                titulo: 'Battlefield 1',
                genero: 'FPS',
                puntuacion: 9
            },
            {
                titulo: 'Civilizazion VI',
                genero: 'Estrategia',
                puntuacion: 10
            },
            {
                titulo: 'Resident Evil 7',
                genero: 'Survival Horror',
                puntuacion: 7
            }
        ]
    },
    methods: {
        agregarTarea() {
            this.tareas.unshift(this.nuevaTarea);
            this.nuevaTarea = null;
        }
    },
    computed: {
        mejoresJuegos() {
            return this.juegos.filter(juego => juego.puntuacion >= this.threshold);
        },
        buscarJuego() {
            return this.juegos.filter(juego => juego.titulo.includes(this.busqueda));
        }
    }
})

// Vanilla JS
// function agregarTarea() {
//     const input = document.querySelector('input[type=text]');
//     vm.tareas.unshift(input.value);
//     input.value;
// }