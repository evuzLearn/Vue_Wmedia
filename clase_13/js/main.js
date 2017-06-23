Vue.component('autor', {
    template: `
        <div className="autor-component">
            <h1>{{ nombre }}</h1>
            <h1>{{ name }}</h1>
            <button @click="cambiarProp()">Cambiar Prop</button>
            <button @click="cambiarName()">Cambiar Name</button>
        </div>
    `,
    props: [
        'nombre',
        'edad',
        'numero'
    ],
    mounted() {
        console.log(typeof this.edad);
        console.log(typeof this.numero);
    },
    data () {
        return {
            name: this.nombre
        }
    },
    methods: {
        cambiarProp() {
            // Incorrecto!
            // No se pueden cambiar las props desde el componente
            this.nombre = this.nombre.toUpperCase();
        },
        cambiarName() {
            // Esto es correcto, se copia prop sobre
            // una variable del modelo.
            this.name = this.name.toUpperCase();
        }
    }
})

const vm = new Vue({
    el: 'main',
    data: {
        title: 'Components Property',
        autor: 'Jesús'
    }
})
