Vue.component('alerta', {
    template: `
        <section class="alerta" :class="[tipo, posicion]">
            <header class="alerta_header">
                <slot name="header">
                    Header
                </slot>
            </header>
            <div class="alerta_contenido">
                <slot>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Esse, asperiores? Architecto repellendus alias ullam 
                    harum distinctio neque maxime recusandae eos, 
                    quia possimus numquam debitis eligendi, 
                    delectus doloribus ipsam, aliquid praesentium.
                </slot>
            </div>
            <footer class="alerta_footer">
                <slot name="footer">
                Texto del footer
                </slot>
            </footer>
        </section>
    `,
    props: ['tipo', 'posicion']
})

const vm = new Vue({
    el: 'main'
})
