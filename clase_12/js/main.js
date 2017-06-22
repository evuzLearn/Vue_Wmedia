Vue.component('generar-ganador', {
    props: [
        'listado'
    ],
    // template: '#elegirGanadorTemplate',
    methods: {
        elegirGanador() {
            let cantidad = this.participantes.length;
            let indice = Math.floor((Math.random() * cantidad));
            this.ganador = this.participantes[indice - 1]
        }
    },
    data() {
        return {
            ganador: false,
            participantes: this.listado
        }
    }
})

const vm = new Vue({
    el: 'main',
    data: {
        title: 'Components Templates',
        personas: [
            'Juan', 'Alicia', 'Pedro', 'Javier', 'Marcos'
        ]
    }
})
