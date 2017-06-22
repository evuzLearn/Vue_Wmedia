const vm1 = new Vue({
  el: 'main',
  data: {
    title: 'Tareas',
    tareas: [
      {
        descripcion: 'Aprender Vue.js',
        completado: true
      },
      {
        descripcion: 'Aprender ES6',
        completado: true
      },
      {
        descripcion: 'Publicar ejemplos',
        completado: false
      },
      {
        descripcion: 'Aprender Express',
        completado: false
      },
      {
        descripcion: 'Ir al gimnasio',
        completado: true
      }
    ],
  },
  methods: {
    completarTarea(tarea) {
      tarea.completado = !tarea.completado;
    }
  },
  computed: {
    tareasCompletadas() {
      return this.tareas.reduce((ac, tarea) => tarea.completado ? ac + 1 : ac, 0);
    }
  }
})

