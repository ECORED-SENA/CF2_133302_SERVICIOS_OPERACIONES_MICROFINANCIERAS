<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 5
      h1 Gestión de la información
    .row.justify-content-center 
      .col-lg-9.my-3
        p(data-aos="fade-down") La gestión de la información puede ser comprendida bajo dos enfoques distintos; el primero, relacionado al profesional de la información como gestor de una unidad de trabajo, en este caso pudiendo ser una red, sistema, unidad o servicio de información; el segundo, relacionado con procesos y actividades en una organización, correspondiente a cualquier segmento económico: industrial, comercial, financiero, jurídico, científico, educativo, tecnológico, sindical, de salud, entre otros.
        .row.justify-content-center.mb-4
          .col-lg-auto.p-0
            .bg17.p-3.h-100
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/56.svg', alt='')             
          .col.p-0
            .bg17.p-3.h-100.j 
              p(data-aos="fade-down").mb-0 Las personas son bombardeadas con mucha información a lo largo de la vida, es por esta razón que se hace necesario tener una gestión de ella de la mano de una ética, debido a que mucha información se puede considerar privada y debe ser delicado su manejo.            
      .col-lg-3.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/57.png', alt='')

    Separador 
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.1 Tipos de información 
    p(data-aos="fade-down") La información es un conjunto de datos previamente ordenados y supervisados, que logran transmitir un determinado mensaje, el cual se basa en un fenómeno o en un ente.
    p(data-aos="fade-down").mb-5 A continuación, se enuncian y presentan de manera puntual, los tipos de información más frecuentes:

    .row.justify-content-center.align-items-center
      .col-md-6.col-lg-3.mb-4.mb-md-0.up.d-none.d-lg-block(data-aos="fade-right")
        img.img-a.img-t(src='@/assets/curso/temas/58.png', alt='')
      .col-md-11.col-lg-9.mb-4.mb-md-0.up(data-aos="fade-left")
        SlyderF.text-center.mb-3(columnas="col-lg-6")
          .tarjeta.bgcard.ts.h-100.p-4
            .row.justify-content-center.mb-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/temas/59.svg' alt='')
            .row.justify-content-center.mb-3
              .col-auto.bg10.px-2.text-white
                h5.mb-0 Información privilegiada 
            p.mb-0 Información que aún no se ha hecho pública, de carácter concreto. 

          .tarjeta.bgcard.ts.h-100.p-4
            .row.justify-content-center.mb-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/temas/59.svg' alt='')
            .row.justify-content-center.mb-3
              .col-auto.bg10.px-2.text-white
                h5.mb-0 Información privada 
            p.mb-0 Es el tipo de información donde se prohibe estrictamente su publicación al público en general, porque su contenido puede llegar a afectar la intimidad de una persona.

          .tarjeta.bgcard.ts.h-100.p-4
            .row.justify-content-center.mb-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/temas/59.svg' alt='')
            .row.justify-content-center.mb-3
              .col-auto.bg10.px-2.text-white
                h5.mb-0 Información externa 
            p.mb-0 Se trata de la información que después de ser creada por ciertas vías externas, es que llega a entrar en la organización o en la empresa.

          .tarjeta.bgcard.ts.h-100.p-4
            .row.justify-content-center.mb-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/temas/59.svg' alt='')
            .row.justify-content-center.mb-3
              .col-auto.bg10.px-2.text-white
                h5.mb-0 Información pública
            p.mb-0 Se trata del tipo de información que se da a conocer al público en general, y que toda persona tiene derecho a ella.

          .tarjeta.bgcard.ts.h-100.p-4
            .row.justify-content-center.mb-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/temas/59.svg' alt='')
            .row.justify-content-center.mb-3
              .col-auto.bg10.px-2.text-white
                h5.mb-0 Información semántica 
            p.mb-0 Es el tipo de información que emplea un medio de información, sea falsa o verdadera a la hora de transmitirse. 

          .tarjeta.bgcard.ts.h-100.p-4
            .row.justify-content-center.mb-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/temas/59.svg' alt='')
            .row.justify-content-center.mb-3
              .col-auto.bg10.px-2.text-white
                h5.mb-0 Información selectiva 
            p.mb-0 Es el tipo de información que solo puede ser transmitida a través de símbolos no semánticos, es decir, aquellos símbolos que no están relacionados con los aspectos del significado, sentido o interpretación de algún elemento. Solo pueden transmitirse por medio de afirmaciones verdaderas o falsas.  

          .tarjeta.bgcard.ts.h-100.p-4
            .row.justify-content-center.mb-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/temas/59.svg' alt='')
            .row.justify-content-center.mb-3
              .col-auto.bg10.px-2.text-white
                h5.mb-0 Información interna
            p.mb-0 Es la información que tiende a circular de forma interna, por una organización o una determinada empresa.

          .tarjeta.bgcard.ts.h-100.p-4
            .row.justify-content-center.mb-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/temas/59.svg' alt='')
            .row.justify-content-center.mb-3
              .col-auto.bg10.px-2.text-white
                h5.mb-0 Información indirecta
            p.mb-0 No es proporcionada directamente por una fuente, sino que se encuentra después de revisar las sugerencias de los documentos idóneos para contenerla. 

          .tarjeta.bgcard.ts.h-100.p-4
            .row.justify-content-center.mb-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/temas/59.svg' alt='')
            .row.justify-content-center.mb-3
              .col-auto.bg10.px-2.text-white
                h5.mb-0 Información directa
            p.mb-0 Se trata de todos los datos que llegan a dar a conocer determinada información que se busca, de manera inmediata, sin tener necesidad de recurrir a otro tipo de fuente.  

    Separador 
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.2 Métodos de recolección

    .row.justify-content-center 
      .col-lg-9.my-3
        p(data-aos="fade-down") La recopilación de información es esencial para comprender y analizar un tópico específico, para tomar buenas decisiones comerciales y para desarrollar productos valiosos y atractivos.

        p(data-aos="fade-down") Los métodos dependen del tipo de investigación, la cual puede ser cualitativa, cuantitativa o mixta.
        .row.justify-content-center.mb-4
          .col-lg-auto.p-0
            .bg1.p-3.h-100
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/60.svg', alt='')             
          .col.p-0
            .bg1.p-3.h-100.j 
              p(data-aos="fade-down").mb-0 La investigación cuantitativa implica la recopilación de datos numéricos, usan datos medibles para formular hechos y descubrir ciertos patrones. Si la investigación no necesita números, entonces es cualitativa, la cual necesitará un muestreo y diseño de muestra.  
                        
      .col-lg-3.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/57.png', alt='')     

    p(data-aos="fade-down") Algunos métodos de recopilación de datos de investigación son:   
    .row.justify-content-center.my-4
      .col-lg-5
        .bg18.p-3.brad.h-100
          .row.justify-content-center
            .col
              h5 Métodos cuantitativos
              ul.lista-ul.fa-ul
                li 
                  i.fas.fa-check-circle.color2
                  span Encuestas con preguntas cerradas.
                li 
                  i.fas.fa-check-circle.color2
                  span Ensayos/experimentos clínicos.
                li 
                  i.fas.fa-check-circle.color2
                  span Extracción de datos de la computadora y sistemas de información. 
                li 
                  i.fas.fa-check-circle.color2
                  span Observación y registro de eventos.       
            .col-lg-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/61.svg', alt='')    

      .col-lg-5
        .bg18.p-3.brad.h-100
          .row.justify-content-center
            .col
              h5 Métodos cualitativos
              ul.lista-ul.fa-ul
                li 
                  i.fas.fa-check-circle.color2
                  span Revisión de documentos.
                li 
                  i.fas.fa-check-circle.color2
                  span Entrevistas en profundidad.
                li 
                  i.fas.fa-check-circle.color2
                  span Métodos de observación      
            .col-lg-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/62.svg', alt='')                         
         
    p(data-aos="fade-down") Con respecto a la información, la ética es un concepto fundamental, y para ampliar la información sobre el tema, lo invitamos a consultar el capítulo 1 del libro Ética de la información, el cual se encuentra en el material complementario.         
</template>

<script>
export default {
  name: 'Tema5',
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
