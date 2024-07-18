<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.bgi.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4.pb-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12  
            .row.justify-content-center.bg1.brad.mb-5          
              .col-lg-9.j
                .p-3
                  p(data-aos="fade-down").mb-0 En el presente componente formativo, estudiaremos cómo los productos y servicios microfinancieros representan una herramienta crucial en la promoción de la inclusión financiera y el desarrollo económico sostenible. Para su efectiva implementación, es esencial contar con un marco de normas de etiqueta y protocolo que incluya un sólido código de ética o conducta y manuales administrativos claros y actualizados. Además, la inteligencia emocional juega un papel fundamental en este contexto, ya que las capacidades de manejo emocional, habilidades de comunicación verbal y no verbal, así como la resiliencia, son elementos clave para construir relaciones sólidas con los clientes y garantizar un servicio de calidad.                
              .col-lg-3.p-0
                img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/2.png', alt='') 

            .row.justify-content-center
              .col-lg-4.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3.png', alt='')                          
              .col-lg-8.my-3
                p(data-aos="fade-down") La gestión de la información y el uso adecuado de las tecnologías de la información y la comunicación son aspectos imprescindibles en la operación eficiente de productos y servicios microfinancieros. Comprender los tipos de información requeridos y los métodos de recolección pertinentes, junto con el dominio de plataformas tecnológicas y la aplicación adecuada de procesadores de texto, optimiza los procesos internos y fortalece la capacidad de respuesta a las necesidades del mercado. Además, las técnicas de ventas bien definidas, respaldadas por una sólida educación financiera y una comprensión de las políticas organizacionales, son fundamentales para el diseño de propuestas comerciales efectivas que impulsen el crecimiento y la sostenibilidad en el sector microfinanciero.

                h5(data-aos="fade-down").mb-0 Muchos éxitos en este proceso de aprendizaje.         
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
