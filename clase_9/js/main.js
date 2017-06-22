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
            this.$http.get('https://randomuser.me/api/?results=200')
                .then(res => {
                    this.personas = res.body.results;
                })
        }
    }
})
