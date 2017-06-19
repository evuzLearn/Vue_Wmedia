const vm = new Vue({
    el: 'main',
    data: {
        tareas: [
            {
                descripcion: 'Aprender Vue.js',
                prioridad: true,
                antiguedad: 58
            },
            {
                descripcion: 'Aprender ES6',
                prioridad: false,
                antiguedad: 135
            },
            {
                descripcion: 'Publicar ejemplos',
                prioridad: true,
                antiguedad: 76
            }
        ],
        nuevaTarea: null,
        msg: 'Hola mundo!'
    },
    methods: {
        agregarTarea() {
            this.tareas.unshift(this.nuevaTarea);
            this.nuevaTarea = null;
        }
    },
    computed: {
        mensajeAlReves() {
            return this.msg.split('').reverse().join('')
        },
        tareasConPrioridad() {
            return this.tareas.filter(tarea => tarea.prioridad);
        },
        tareasPorAntiguedad() {
            return this.tareas.sort((a, b) => b.antiguedad - a.antiguedad);
        }
    }
})

// Vanilla JS
// function agregarTarea() {
//     const input = document.querySelector('input[type=text]');
//     vm.tareas.unshift(input.value);
//     input.value;
// }