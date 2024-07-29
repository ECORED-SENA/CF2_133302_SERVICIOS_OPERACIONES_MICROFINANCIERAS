<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 6
      h1 Tecnologías de la información y la comunicación

    .row.justify-content-center 
      .col-lg-8.my-3
        p(data-aos="fade-down") Las Tecnologías de la Información y las Comunicaciones (TIC), son el conjunto de recursos, herramientas, equipos, programas informáticos, aplicaciones, redes y medios, que permiten la compilación, procesamiento, almacenamiento, transmisión de información como: voz, datos, texto, video e imágenes. Como lo dice Quiroga et al (2014), “el proceso de transición de las últimas tres décadas hacia una economía global, fundamentalmente en el uso de la información y del conocimiento, ha consolidado nuevas fuentes de crecimiento empresarial y productividad”.
        .row.justify-content-center.mb-4
          .col-lg-auto.p-0
            .bg1.p-3.h-100
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/63.svg', alt='')             
          .col.p-0
            .bg1.p-3.h-100.j 
              p(data-aos="fade-down").mb-0 En los últimos años se ha hecho indispensable el uso de las nuevas tecnologías para obtener información cada vez con mayor velocidad, incluso solo con un clic, se borran las distancias para la comunicación entre las personas.
                        
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/64.png', alt='')    


    Separador 
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 6.1 Plataformas tecnológicas 

    p(data-aos="fade-down") Una plataforma tecnológica es un entorno para crear y ejecutar aplicaciones, sistemas y procesos.
    p(data-aos="fade-down") A continuación, conozcamos los tipos más comunes de plataformas tecnológicas.   

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/Fm2mZtUc-38?si=ajjnWt6XBgGCDyCk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 

    Separador 
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 6.2 Aplicación y usos de procesadores de texto   

    .row.justify-content-center 
      .col-lg-9.my-3
        p(data-aos="fade-down") Una aplicación (también llamada app), es simplemente un programa informático creado para llevar a cabo o facilitar una tarea en un dispositivo informático.

        p(data-aos="fade-down") Los procesadores de textos son aplicaciones informáticas destinadas a la creación, edición, modificación, corrección e impresión de documentos de texto.
        .row.justify-content-center.align-items-center.bg19.mb-4
          .col-lg-auto.p-0
            .bg19.p-3.h-100
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/65.svg', alt='')             
          .col.p-0
            .bg19.p-3.h-100.j.text-white 
              p(data-aos="fade-down").mb-0 Por lo general, todos los procesadores de textos son capaces de trabajar con diferentes tipos de fuentes, interlineado, alineación, tamaño de letra, corrección ortográfica y gramatical, trabajo con imágenes y tablas, además de contar con diccionarios en varios idiomas para facilitar la labor de redacción, así como proceder a utilizar herramientas para resaltar determinadas palabras o frases. Es decir, nos da la oportunidad de usar recursos tales como la negrita, la cursiva o el subrayado.
                        
      .col-lg-3.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/66.png', alt='')                         
</template>

<script>
export default {
  name: 'Tema6',
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
