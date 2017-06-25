Vue.component('mis-tareas', {
    props: ['listado'],
    template: '#mis-tareas-template'
})

const vm = new Vue({
    el: 'main',
    data: {
        title: 'Scoped Slots',
        tareas: [
            { titulo: 'Salir a correr' },
            { titulo: 'Recoger la casa' },
            { titulo: 'Aprender Vue' },
            { titulo: 'Ir al gimnasio' },
            { titulo: 'Leer cada día' }
        ]
    }
})
