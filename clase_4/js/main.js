const vm = new Vue({
    el: 'main',
    data: {
        tareas: [
            'Aprender Vue.js',
            'Aprender ES6',
            'Publicar ejemplos'
        ],
        nuevaTarea: null
    },
    methods: {
        agregarTarea() {
            this.tareas.unshift(this.nuevaTarea);
            this.nuevaTarea = null;
        }
    }
})

// Vanilla JS
// function agregarTarea() {
//     const input = document.querySelector('input[type=text]');
//     vm.tareas.unshift(input.value);
//     input.value;
// }