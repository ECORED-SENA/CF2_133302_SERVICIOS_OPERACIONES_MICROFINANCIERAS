<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 8
      h1 Centrales de información

    p(data-aos="fade-down") Las bases de datos o centrales de información en Colombia son la Central de Información de la Asociación Bancaria y de Entidades Financieras de Colombia -CIFIN-, Datacrédito, Covinoc, Computec, Credicheque y Fenalcheque.
    .row.justify-content-center.mb-4 
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/82.png', alt='')      
      .col-lg-8.my-3
        p(data-aos="fade-down") Estas entidades son sociedades o agremiaciones de carácter privado en las cuales se registra el comportamiento crediticio, financiero y comercial de las personas que celebren operaciones con entida des financieras, cooperativas y empresas del sector real.
        .row.justify-content-center.mb-4
          .col-lg-auto.p-0
            .bg13.p-3.h-100
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/83.svg', alt='')             
          .col.p-0
            .bg13.p-3.h-100.j 
              h5(data-aos="fade-down").mb-0 Ahora, el buró de crédito es una empresa privada, independiente de las instituciones financieras, de las comerciales y de las gubernamentales, que tiene como fin concentrar y proporcionar a sus empresas afiliadas, la información referente al comportamiento que han tenido las personas físicas y morales con respecto a sus créditos.

    p(data-aos="fade-down") Existen básicamente 2 tipos de consulta:

    .row.justify-content-center.my-5
      .col-lg-5
        .bg18.p-3.brad.h-100
          h5(data-aos="fade-up") Interna
          p(data-aos="fade-down").mb-0 Es la que se realiza al interior de las empresas. Normalmente, las entidades financieras tienen sus propias consultas internas, es decir, observan el comportamiento financiero de sus clientes con sus productos y servicios.


      .col-lg-5
        .bg18.p-3.brad.h-100
          h5(data-aos="fade-up") Externa 
          p(data-aos="fade-down").mb-0 Son las realizadas por las centrales de riesgo, las cuales almacenan los datos de identificación, ubicación demográfica, comportamiento de pago y nivel de endeudamiento. De acuerdo con la Ley 1266 de 2008, tienen la competencia de llevar y conservar los datos de las personas que celebran operaciones crediticias con entidades financieras o empresas.

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/84.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las centrales de riesgo en Colombia verifican sus datos crediticios de forma mensual. Es decir, que revisan los pagos realizados de forma puntual, las deudas por pagar, los ingresos y su capacidad de pago. A su vez, registran y evalúan tus finanzas. Tenga presente que se puede obtener información hasta de los últimos 24 meses. Si cuenta con un reporte negativo, esta información no podrá exceder los cuatro años en la base de datos. De acuerdo con la Sentencia C-1011 de 2008, este tiempo será contado a partir de la fecha en que se cancelen las cuotas u obligaciones vencidas. Además, si la deuda contraída es menor a dos años, no podrá permanecer el doble del tiempo en que incurrió en mora. (Finandina, 2020)            


    .row.justify-content-center.mb-5(data-aos="fade-left") 
      .col-lg-auto
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/85.png', alt='')         
      .col
        p(data-aos="fade-down") Ahora, la interpretación dependerá del buró de crédito al cual se esté refiriendo, por ejemplo, en CIFIN, Central de Información Financiera, aparecerán todos los datos de la persona a quien se esté consultando con todos los productos del activo y del pasivo, vigentes o cancelados, que tenga o haya tenido al momento de la consulta en los tres sectores de la economía: sector financiero, real y solidario.

        p(data-aos="fade-down").mb-0 En la consulta a la CIFIN, se encuentra la siguiente información:


    .row.bg9.align-items-center.pt-3
      .col-lg-12.col-12.px-lg-5.px-4.up
        .row.justify-content-center.align-items-center
          .col-lg-12  
            .row.justify-content-center.mb-4   
              .col-lg-8
                .bg7.p-3.brad
                  .row.justify-content-center
                    .col-lg-auto
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/87.svg', alt='')             
                    .col
                      ul.lista-ul.fa-ul.mb-0
                        li 
                          i.fas.fa-check-circle.color2
                          span Resumen de endeudamiento.
                        li 
                          i.fas.fa-check-circle.color2
                          span Información de cuentas (corriente y de ahorros).
                        li 
                          i.fas.fa-check-circle.color2
                          span Información de endeudamiento en los sectores financiero, asegurador y solidario.
                        li 
                          i.fas.fa-check-circle.color2
                          span Información de endeudamiento en el sector real (adquisición de bienes y prestación de servicios).
                        li 
                          i.fas.fa-check-circle.color2
                          span Huella de consulta últimos 6 meses.
                        li.mb-0 
                          i.fas.fa-check-circle.color2
                          span Endeudamiento global: consolidado trimestral, información detallada y actualizaciones.                 
              .col-lg-4
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/86.png', alt='')        

          p(data-aos="fade-down").mb-4 La Ley #[i Habeas Data] busca proteger los datos personales de los colombianos. Eso quiere decir que cualquier persona natural o jurídica, que desee usar un dato personal que aparece en una base de datos, debe cumplir un requisito, el de solicitar la respectiva autorización del titular de ese dato. Si no lo hace, infringe la Ley y se someterá a una sanción por parte de la Superintendencia de Industria y Comercio - SIC.      
          .row.justify-content-center
            .col-lg-10
              .row.justify-content-center.bg8.mb-5
                .col-lg-auto.p-0
                  .bg8
                    img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/88.png', alt='')             
                .col.p-0
                  .bg8.p-3.h-100.j 
                    p(data-aos="fade-down").mb-0 De acuerdo con el Artículo 14 de la Ley 1266 de 2008, en el historial de crédito se reporta la información positiva y negativa del titular. Por información positiva debe entenderse aquella que evidencia el buen comportamiento de pago del titular, es decir, cuando el titular cumple la obligación en el tiempo y forma debida. Por otra parte, el reporte de información negativa refleja el estado de mora en las cuotas u obligaciones del titular cuando no se cumplen en el tiempo y forma de pago debida.       

    .row.justify-content-center.bg10.mb-5
      .col-lg-auto.p-0
        .bg10
          img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/89.png', alt='')             
      .col.p-0
        .bg10.p-3.h-100.j.text-white 
          p(data-aos="fade-down").mb-0 Es importante tener en cuenta que el reporte de información positiva o negativa no sólo se refiere a obligaciones contraídas con entidades financieras, como créditos de vivienda o tarjetas de crédito, también incluye las obligaciones contraídas con establecimientos de comercio como líneas de telefonía celular y televisión por cable, entre otros servicios, o incumplimiento en pago de productos.     

    .row.justify-content-center
      .col.p-0
        .p-3.h-100.j
          p(data-aos="fade-down").mb-0 Es fundamental mantener el buen nombre frente a las entidades financieras, del sector real y solidario, para ello se hace necesario tener en cuenta las finanzas personales como herramienta fundamental, y para conocer más sobre este tema, lo invitamos a consultar el capítulo 1 del libro Finanzas personales, su mejor plan de vida, el cual se encuentra en el material complementario.        
      .col-lg-auto.p-0
        img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/90.png', alt='')             
                                    
</template>

<script>
export default {
  name: 'Tema8',
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
