const vm = new Vue({
    el: 'main',
    data: {
        personas: null
    },
    mounted() {
        this.cargarPersonas();
    },
    methods: {
        cargarPersonas() {
            axios.get('https://randomuser.me/api/?results=200')
                .then(res => {
                    this.personas = res.data.results;
                })
        }
    }
})
