Vue.component('mis-tareas', {
    template: `<ul>
        <li v-for="(tarea, index) in tareas">{{index + 1}} - {{ tarea.title }}</li>
    </ul>`,
    props: [
        'tareas'
    ]
})

Vue.component('cargar-tareas', {
    template: `<ul>
        <li v-for="(tarea, index) in tareas">{{index + 1}} - {{ tarea.title }}</li>
    </ul>`,
    data() {
        return {
            tareas: [],
        }
    },
    mounted() {
        this.cargarTareas();
    },
    methods: {
        cargarTareas() {
            axios.get('https://jsonplaceholder.typicode.com/todos')
                .then(res => {
                    this.tareas = res.data;
                })
        }
    }
})

const vm = new Vue({
    el: 'main',
    data: {
        tareasAjax: [],
        albumsAjax: [],
    },
    mounted() {
        this.cargarTareas();
        this.cargarAlbums();
    },
    methods: {
        cargarTareas() {
            axios.get('https://jsonplaceholder.typicode.com/todos')
                .then(res => {
                    this.tareasAjax = res.data;
                })
        },
        cargarAlbums() {
            axios.get('https://jsonplaceholder.typicode.com/albums')
                .then(res => {
                    this.albumsAjax = res.data;
                })
        }
    }
})
