Vue.component('candidato', {
    template: `#candidato-template`,
    // props: ['nombre','correoe','imagen']
    props: {
        nombre: { type: [String, Array], required: true },
        correoe: String, //null == any
        imagen: { type: String, default:'Sin imagen' },
        location: {
            type: Object,
            default () {
                return {
                    city: 'Jerez'
                }
            }
        }
    }
})

const vm = new Vue({
    el: 'main',
    mounted() {
        this.obtenerCandidatos();
    },
    data: {
        title: 'Validación de propiedades',
        candidatos: []
    },
    methods: {
        obtenerCandidatos() {
            axios.get('https://randomuser.me/api/?results=100')
                .then(res => {
                    this.candidatos = res.data.results;
                })
        }
    }
})
