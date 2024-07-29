<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Normas de etiqueta y protocolo

    p(data-aos="fade-down") Es el nombre con el que se conoce el trato cordial, especial y en algunos casos digno, que debe tener una persona según su presentación en público, en privado o en algún evento especial y se definen así:

    .row.justify-content-center 
      .col-lg-9.my-3
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg6")
          .row.justify-content-center(titulo="Etiqueta")
            .col-lg-auto
              img.img-a.img-t(src='@/assets/curso/temas/21.png', alt='')         
            .col
              p Son los usos y costumbres que se deben guardar en actos públicos, habitualmente están establecidos por los diferentes actores de los eventos e inclusive, se entiende en muchos de los casos que existe una reglamentación habitual en vestido, forma de hablar, tiempos y presentación. 

          .row.justify-content-center(titulo="Protocolo")
            .col-lg-auto
              img.img-a.img-t(src='@/assets/curso/temas/22.png', alt='')         
            .col
              p Es el conjunto de reglas que establece un grupo, organización o autoridad. Es un contenido parametrizado, con el que los diferentes integrantes de los ambientes se tratan para consolidar la forma de presentarse en un gran comportamiento objetivo, el fundamento del protocolo es organizar.
              p La etiqueta orienta la conducta personal, mientras que el protocolo establece el orden. 

          .row.justify-content-center(titulo="Manuales")
            .col-lg-auto
              img.img-a.img-t(src='@/assets/curso/temas/23.png', alt='')         
            .col
              p Obedeciendo al concepto de manual dado por la Real Academia Española (2020), es un “libro en que se compendia lo más sustancial de una materia”, se presenta esta condición para los bancos de información con los que se debe contar en toda empresa para la gestión de su información, protocolos, códigos y acciones; de esta forma, todos los integrantes de la comunidad empresarial entienden con facilidad los pasos a seguir y formas de actuar en los procesos, en pocas palabras, un manual se puede ver como la guía de trabajo con la empresa, que genera una trazabilidad de sus procesos.               
      .col-lg-3.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/20.png', alt='')

    Separador 
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.1 Código de ética o conducta

    .row.justify-content-center.mb-5        
      .col
        p(data-aos="fade-down") Es un documento rector que sirve a las empresas para consignar ciertas reglas y comportamientos que dirigen el actuar de los empleados y directivos en sus relaciones internas y con el exterior, articulando la misión y visión de la empresa, así como sus valores y principios.

        p(data-aos="fade-down") Los beneficios del código de ética o conducta, son: 
      .col-lg-auto
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/24.svg', alt='')

    .bg7.p-3.brad.mb-5
      .row.justify-content-center
        .col-lg-auto
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/25.png', alt='')             
        .col
          ul.lista-ul.fa-ul.mb-0
            li 
              i.fas.fa-check-circle.color2
              span Comunicar a los empleados cómo se espera que actúen en el ambiente de trabajo.
            li 
              i.fas.fa-check-circle.color2
              span Empoderar a los empleados para manejar dilemas de ética.
            li 
              i.fas.fa-check-circle.color2
              span Promover el comportamiento ético dentro de la empresa, fortaleciendo, en este sentido, la reputación de la empresa, al distinguirla como compañía confiable.
            li 
              i.fas.fa-check-circle.color2
              span Ayudar a prevenir violaciones inadvertidas de ética por parte de los empleados, al definir estándares que sensibilicen a los empleados sobre cómo actuar en situaciones no tan obvias o claras.
            li 
              i.fas.fa-check-circle.color2
              span Proporcionar una guía sobre cómo enfrentar potenciales violaciones de ética, incluyendo las posibles consecuencias para los empleados que hayan incurrido en las mismas.
            li 
              i.fas.fa-check-circle.color2
              span Constituye una herramienta en mercadotecnia con prospectos de empleados, clientes, proveedores y demás terceros.
            li.mb-0 
              i.fas.fa-check-circle.color2
              span Proporcionar un marco común a todos los empleados, fomentando la unidad e identidad. 

    Separador 
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.2 Manuales administrativos

    .row.justify-content-center.mb-5        
      .col-lg-7.my-3
        p(data-aos="fade-down") Son documentos que dicen paso a paso cómo realizar una actividad, pueden ser utilizados para orientar a un empleado, y concentra información amplia y detallada acerca de las bases jurídicas, atribuciones, estructura orgánica, objetivos, políticas, grado de autoridad, responsabilidad, funciones y actividades.
        .bg8.p-3.brad.mb-4
          h5(data-aos="fade-down") Sirven de apoyo en el manejo del personal, evitando ineficiencia en la productividad, redundancia en la actividad y funciones que opera la empresa, así como la comprensión de los empleados en sus propios papeles dentro de la organización.

        p(data-aos="fade-down") Dentro de una organización pueden existir varios tipos de manuales administrativos tales como:          
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/27.png', alt='')       

    .row.bg9.align-items-center.pt-3
      .col-lg-12.col-12.px-lg-5.px-4.up
        .row.justify-content-center.align-items-center
          .col-md-6.col-lg-4.mb-4.mb-md-0.up.d-none.d-lg-block(data-aos="fade-right")
            img.img-a.img-t(src='@/assets/curso/temas/28.png', alt='')
          .col-md-11.col-lg-8.mb-4.mb-md-0.up(data-aos="fade-left")
            SlyderF.text-center.mb-3(columnas="col-lg-6")
              .tarjeta.bgcard.ts.h-100.p-4
                .row.justify-content-center.mb-3
                  .col-12
                    img.img-a.img-t(src='@/assets/curso/temas/30.svg' alt='')
                .row.justify-content-center.mb-3
                  .col-auto.bg10.px-2.text-white
                    h5.mb-0 Manual de historia 
                p.mb-0 Proporciona información histórica sobre la entidad.             
   
              .tarjeta.bgcard.ts.h-100.p-4
                .row.justify-content-center.mb-3
                  .col-12
                    img.img-a.img-t(src='@/assets/curso/temas/30.svg' alt='')
                .row.justify-content-center.mb-3
                  .col-auto.bg10.px-2.text-white
                    h5.mb-0 Manual de la organización 
                p.mb-0 Reposan las normas y estructura orgánica de la empresa y define las funciones de cada área de la organización.  

              .tarjeta.bgcard.ts.h-100.p-4
                .row.justify-content-center.mb-3
                  .col-12
                    img.img-a.img-t(src='@/assets/curso/temas/30.svg' alt='')
                .row.justify-content-center.mb-3
                  .col-auto.bg10.px-2.text-white
                    h5.mb-0 Manual de políticas 
                p.mb-0 Describe los lineamientos a seguir en la toma de decisiones, para el logro de objetivos. 

              .tarjeta.bgcard.ts.h-100.p-4
                .row.justify-content-center.mb-3
                  .col-12
                    img.img-a.img-t(src='@/assets/curso/temas/30.svg' alt='')
                .row.justify-content-center.mb-3
                  .col-auto.bg10.px-2.text-white
                    h5.mb-0 Manual de procedimientos 
                p.mb-0 Integra los procedimientos interrelacionados que pueden comprender a un área o a la totalidad de una dependencia. 

              .tarjeta.bgcard.ts.h-100.p-4
                .row.justify-content-center.mb-3
                  .col-12
                    img.img-a.img-t(src='@/assets/curso/temas/30.svg' alt='')
                .row.justify-content-center.mb-3
                  .col-auto.bg10.px-2.text-white
                    h5.mb-0 Manual de auditoría interna 
                p.mb-0 Agrupa los lineamientos e instrucciones de aplicación específica, a determinados tipos de actividad. 

              .tarjeta.bgcard.ts.h-100.p-4
                .row.justify-content-center.mb-3
                  .col-12
                    img.img-a.img-t(src='@/assets/curso/temas/30.svg' alt='')
                .row.justify-content-center.mb-3
                  .col-auto.bg10.px-2.text-white
                    h5.mb-0 Manual de personal
                p.mb-0 Contiene consideraciones para ayudar a comunicar las actividades y políticas al personal.

              .tarjeta.bgcard.ts.h-100.p-4
                .row.justify-content-center.mb-3
                  .col-12
                    img.img-a.img-t(src='@/assets/curso/temas/30.svg' alt='')
                .row.justify-content-center.mb-3
                  .col-auto.bg10.px-2.text-white
                    h5.mb-0 Manual de actividad económica 
                p.mb-0 Dependiendo de la actividad económica de la empresa, podrán existir de producción y de compras.

          .col-lg-8 
            .row.justify-content-center.my-5
              .col-lg-auto.p-0
                .bg11.p-3.h-100
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/31.svg', alt='')             
              .col.p-0
                .bg12.p-3.h-100.j 
                  p(data-aos="fade-down").mb-0 La empresa podrá determinar cuántos manuales considere, dependiendo de la actividad económica a la que se dedique y la cantidad de procesos que se desempeñen sistémicamente.
          .col-lg-12
            p(data-aos="fade-down") Algunas ventajas de tener manuales administrativos en una entidad, son:   

            .row.justify-content-center
              .col-lg-8
                .bg7.p-4.h-100.brad.j
                  ul.lista-ul.fa-ul.mb-0
                    li 
                      i.fas.fa-check-circle.color2
                      span Logran y mantienen un plan de organización.
                    li 
                      i.fas.fa-check-circle.color2
                      span Facilitan el estudio de los problemas de la organización.
                    li 
                      i.fas.fa-check-circle.color2
                      span Son una fuente permanente de información sobre el trabajo a ejecutar.
                    li 
                      i.fas.fa-check-circle.color2
                      span Ayudan a hacer efectivos los objetivos, las políticas, los procedimientos, las funciones, las normas, etc.
                    li.mb-0 
                      i.fas.fa-check-circle.color2
                      span.mb-0 Son instrumentos útiles en la capacitación del personal.   

              .col-lg-4
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/32.png', alt='')             

</template>

<script>
export default {
  name: 'Tema3',
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
