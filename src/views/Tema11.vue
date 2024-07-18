<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 11
      h1 Verificación de la información

    .row.justify-content-center.mb-4
      .col.p-0
        p(data-aos="fade-down").mb-0 Las personas tienen información que se encuentra en entidades vigiladas y esta no puede ser suministrada a terceros distintos a su propio titular o autoridad judicial o administrativa competente, esto, como garantía constitucional conforme a lo señalado en el Artículo 15 de la Constitución Política, a esto se le llama reserva bancaria.    
      .col-lg-auto.p-0
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/115.png', alt='')             

    Separador 
    #t_11_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 11.1 Técnicas de validación 

    p(data-aos="fade-down") Hace referencia al uso de una gran diversidad de técnicas y herramientas que pueden ser utilizadas por el analista para desarrollar los sistemas de información.
    p(data-aos="fade-down") Las 5 principales técnicas de recolección de datos, son:

    .row.bg24.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4.pb-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12 
            .row.justify-content-center.mb-4
              .col-lg-4
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/116.png', alt='')             

              .col-lg-8
                .row.justify-content-center.bg2.p-3.brad(data-aos="fade-left").mb-3
                  .col-lg-auto
                    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/118.svg', alt='')    
                  .col
                    h5(data-aos="fade-left") Entrevistas
                    p(data-aos="fade-down").mb-0 Es un diálogo dirigido con un propósito específico, por lo general se usa un formato de preguntas y respuestas.

                .row.justify-content-center.bg2.p-3.brad(data-aos="fade-right").mb-3
                  .col-lg-auto
                    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/119.svg', alt='')    
                  .col
                    h5(data-aos="fade-left") La encuesta
                    p(data-aos="fade-down").mb-0 Agrupación de preguntas, las cuales van dirigidas a una muestra representativa de la población o instituciones, cuyo fin es el de conocer estados de opinión o hechos específicos.

                .row.justify-content-center.bg2.p-3.brad(data-aos="fade-left").mb-3
                  .col-lg-auto
                    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/120.svg', alt='')    
                  .col
                    h5(data-aos="fade-left") La observación
                    p(data-aos="fade-down").mb-0 Es una técnica que sirve para que la persona que la esté ejecutando participe, mirando como espectador, el desarrollo de las actividades que lleva a cabo una persona para conocerla mejor. Permite al observador determinar qué se está haciendo, cómo se está haciendo, quién lo hace, cuándo se lleva a cabo, cuánto tiempo toma, dónde se hace y por qué se hace.

                .row.justify-content-center.bg2.p-3.brad(data-aos="fade-right").mb-3
                  .col-lg-auto
                    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/121.svg', alt='')    
                  .col
                    h5(data-aos="fade-left") Diccionario de datos
                    p(data-aos="fade-down").mb-0 Lista de todos los elementos con los diagramas de flujo de datos que explican un sistema.

                .row.justify-content-center.bg2.p-3.brad(data-aos="fade-left")
                  .col-lg-auto
                    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/122.svg', alt='')    
                  .col
                    h5(data-aos="fade-left") Diagrama de flujo
                    p(data-aos="fade-down").mb-0 Representación gráfica de un proceso. Útil para determinar cómo funciona realmente el proceso, para producir un resultado.


    Separador 
    #t_11_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 11.2 Respaldo de la información

    p(data-aos="fade-down") El asesor microfinanciero dentro de sus funciones, tiene la verificación de los soportes y de toda la información que presenta el propietario del negocio, en los cuales está toda la documentación en físico que proporciona el cliente, tales como:
     
    .row.justify-content-center.mb-4   
      .col-lg-8
        .bg7.p-3.brad
          .row.justify-content-center
            .col-lg-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/105.svg', alt='')             
            .col
              ul.lista-ul.fa-ul.mb-0
                li 
                  i.fas.fa-check-circle.color2
                  span Facturas de proveedores.
                li 
                  i.fas.fa-check-circle.color2
                  span Referencias comerciales de sus proveedores.
                li 
                  i.fas.fa-check-circle.color2
                  span Referencias bancarias (si las hay).
                li 
                  i.fas.fa-check-circle.color2
                  span Lista de clientes con sus respectivos teléfonos de contacto.
                li 
                  i.fas.fa-check-circle.color2
                  span Registro único tributario (si lo tiene).
                li 
                  i.fas.fa-check-circle.color2
                  span Contrato de arrendamiento de local donde funciona el negocio (en caso de ser arrendado).
                li.mb-0 
                  i.fas.fa-check-circle.color2
                  span Adicional, la información que levanta el asesor comercial como referenciación zonal (información de los vecinos más cercanos al negocio).              
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/124.png', alt='')                     
</template>

<script>
export default {
  name: 'Tema11',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
