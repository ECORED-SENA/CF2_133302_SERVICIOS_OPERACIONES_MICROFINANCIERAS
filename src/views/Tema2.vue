<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Productos y servicios microfinancieros

    .row.justify-content-center 
      .col-lg-9.my-3
        p(data-aos="fade-down") Los productos y servicios microfinancieros generalmente son los beneficios tangibles e intangibles que una entidad financiera o microfinanciera entrega exclusivamente a sus clientes microempresarios.

        p(data-aos="fade-down") Son los centros de relación entre la entidad y sus usuarios, los siguientes son los más relevantes según su nivel de prestación, y dependiendo del portafolio de la entidad:
        .row.justify-content-center.mb-4 
          .col-lg-4.my-2
            .bg4.brad.p-1.px-2.h-100.j1         
              .row.justify-content-center.align-items-center
                .col-lg-auto.my-1
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/10.svg', alt='')         
                .col.my-1
                  h5(data-aos="fade-down").mb-0 El microcrédito   
          .col-lg-4.my-2
            .bg4.brad.p-1.px-2.h-100.j1         
              .row.justify-content-center.align-items-center
                .col-lg-auto.my-1
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/11.svg', alt='')         
                .col.my-1
                  h5(data-aos="fade-down").mb-0 Tarjetas de crédito 
          .col-lg-4.my-2
            .bg4.brad.p-1.px-2.h-100.j1       
              .row.justify-content-center.align-items-center 
                .col-lg-auto.my-1
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/12.svg', alt='')         
                .col.my-1
                  h5(data-aos="fade-down").mb-0 Microahorro   
               
          .col-lg-4.my-2
            .bg4.brad.p-1.px-2.h-100.j1         
              .row.justify-content-center.align-items-center
                .col-lg-auto.my-1
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/13.svg', alt='')         
                .col.my-1
                  h5(data-aos="fade-down").mb-0 Microseguros
          .col-lg-4.my-2
            .bg4.brad.p-1.px-2.h-100.j1         
              .row.justify-content-center.align-items-center
                .col-lg-auto.my-1
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/14.svg', alt='')         
                .col.my-1
                  h5(data-aos="fade-down").mb-0 CDT
          .col-lg-4.my-2
            .bg4.brad.p-1.px-2.h-100.j1       
              .row.justify-content-center.align-items-center 
                .col-lg-auto.my-1
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/15.svg', alt='')         
                .col.my-1
                  h5(data-aos="fade-down").mb-0 Oficina virtual

          .col-lg-4.my-2
            .bg4.brad.p-1.px-2.h-100.j1         
              .row.justify-content-center.align-items-center
                .col-lg-auto.my-1
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/16.png', alt='')         
                .col.my-1
                  h5(data-aos="fade-down").mb-0 PSE
          .col-lg-4.my-2
            .bg4.brad.p-1.px-2.h-100.j1         
              .row.justify-content-center.align-items-center
                .col-lg-auto.my-1
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/17.svg', alt='')         
                .col.my-1
                  h5(data-aos="fade-down").mb-0 Banca móvil
          .col-lg-4.my-2
            .bg4.brad.p-1.px-2.h-100.j1       
              .row.justify-content-center.align-items-center 
                .col-lg-auto.my-1
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/18.svg', alt='')         
                .col.my-1
                  h5(data-aos="fade-down").mb-0 Tarjeta débito
      .col-lg-3.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/9.png', alt='')    


    p(data-aos="fade-down") Las características de cada uno, dependen en gran medida de las políticas de cada entidad, sin embargo, a nivel general se encuentran:

    TabsA.color-acento-botones.mb-5(data-aos="fade-right")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Microcrédito") 
        img.img-t.mb-4(src='@/assets/curso/temas/10.svg', alt='') 
        h5 El microcrédito
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color2
            span Préstamos pequeños, que se usan para impulsar proyectos productivos; su destino puede ser capital de trabajo, adquisición de activos fijos productivos, inclusive, libre inversión, entre otros.
          li 
            i.fas.fa-check-circle.color2
            span La amortización o pago de capital depende de cada proyecto, y puede ser a corto o mediano plazo.
          li 
            i.fas.fa-check-circle.color2
            span Pueden existir períodos de gracia o no pago y en otros, devolución parcial o total del dinero.
          li 
            i.fas.fa-check-circle.color2
            span El valor dependerá de la necesidad del negocio y la capacidad de endeudamiento.
          li 
            i.fas.fa-check-circle.color2
            span Las tasas de interés máximo son estipuladas por la Superintendencia Financiera de Colombia.
          li 
            i.fas.fa-check-circle.color2
            span La garantía dependerá de la política de crédito de la entidad.  

      .tarjeta.color-acento-botones--borde.p-4(titulo="Tarjetas de crédito") 
        img.img-t.mb-4(src='@/assets/curso/temas/11.svg', alt='') 
        h5 Tarjetas de crédito 
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color2
            span Tasas de interés preferencial.
          li 
            i.fas.fa-check-circle.color2
            span Compras nacionales e internacionales.
          li 
            i.fas.fa-check-circle.color2
            span Disponibilidad de avances (dinero en efectivo).
          li 
            i.fas.fa-check-circle.color2
            span Con ella puede realizar pagos de insumos para la microempresa.
          li 
            i.fas.fa-check-circle.color2
            span Puede tener asistencias y seguros exclusivos para microempresarios.
          li 
            i.fas.fa-check-circle.color2
            span Los cupos dependen de la política de crédito de la entidad y de la capacidad de endeudamiento del microempresario.   
      .tarjeta.color-acento-botones--borde.p-4(titulo="Microahorro") 
        img.img-t.mb-4(src='@/assets/curso/temas/12.svg', alt='') 
        h5 Microahorro
        p Las cuentas de ahorro tendrán características diferentes, dependiendo de la entidad financiera, podrán: 
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color2
            span No tener cuota de manejo.
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color2
            span Tener retiros ilimitados.
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color2
            span No requerir saldos mínimos.
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color2
            span Contar con el beneficio del no cobro del 4x1000.
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color2
            span Montos mínimos de apertura.
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color2
            span Medios de manejo: tarjeta débito o libreta.
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color2
            span Liquidación de intereses (según promedios).
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color2
            span Seguro FOGAFIN.  

      .tarjeta.color-acento-botones--borde.p-4(titulo="Microseguros") 
        img.img-t.mb-4(src='@/assets/curso/temas/13.svg', alt='') 
        h5 Microseguros
        p Son una forma de protección económica dirigida a los pobres, frente a una amenaza o contra la posibilidad de sufrir alguna pérdida humana o material, como lo expone López (2018) en estos tres puntos:
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color2
            span Buscan prevenir que, ante adversidades económicas inesperadas, las personas de escasos recursos caigan más en la pobreza o se perpetúen en ella.
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color2
            span Su cobertura es limitada y sus primas son de bajo costo.
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color2
            span Mitigación de las pérdidas económicas de la población pobre frente a los diferentes riesgos.  

      .tarjeta.color-acento-botones--borde.p-4(titulo="CDT") 
        img.img-t.mb-4(src='@/assets/curso/temas/14.svg', alt='') 
        h5 CDT
        p Certificados de depósito a término fijo: 
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color2
            span Reconoce intereses fijos o variables, dependiendo del monto y plazo pactados.
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color2
            span Negociable en la bolsa de valores.
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color2
            span Posibilidad de endoso (transferir a otra persona), antes de su vencimiento.
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color2
            span Seguro FOGAFIN.  

      .tarjeta.color-acento-botones--borde.p-4(titulo="Oficina virtual") 
        img.img-t.mb-4(src='@/assets/curso/temas/15.svg', alt='') 
        h5 Oficina virtual
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color2
            span Ahorra tiempo al realizar transacciones desde cualquier lugar.
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color2
            span Minimiza los costos financieros por transacciones y consultas.
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color2
            span Accede al portafolio de productos y servicios financieros de la entidad.
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color2
            span Dispone de la información financiera.
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color2
            span Se pueden matricular cuentas de otras entidades, así como facturas y servicios públicos.
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color2
            span Se pueden realizar transacciones como avances de tarjeta a cuentas de ahorro o corriente, abonos a créditos y recargas de celulares. 

      .tarjeta.color-acento-botones--borde.p-4(titulo="PSE (Pagos Seguros en Línea)") 
        img.img-t.mb-4(src='@/assets/curso/temas/16.png', alt='') 
        h5 PSE (Pagos Seguros en Línea)
        p Como lo dijeron en el Colegio Agustiniano en 2016, en su instructivo PSE Sistema centralizado y estandarizado, desarrollado por ACH Colombia, las empresas brindan a los usuarios la posibilidad de realizar sus pagos y/o compras a través de Internet, debitando los recursos de la entidad financiera donde tenga su dinero y depositándolos en la cuenta de las empresas.
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color2
            span Confirma e identifica en línea y en tiempo real, las transacciones.
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color2
            span Ahorra gastos operativos, tiempos y recursos.
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color2
            span Evita errores en pagos y/o recaudo.
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color2
            span Brinda seguridad y agilidad al reducir el manejo de efectivo.  

      .tarjeta.color-acento-botones--borde.p-4(titulo="Banca móvil") 
        img.img-t.mb-4(src='@/assets/curso/temas/17.svg', alt='') 
        h5 Banca móvil
        p Alternativa que ofrecen las entidades financieras, se puede usar a través del celular, teniendo acceso inmediato a los productos para realizar transacciones. Las operaciones que se pueden realizar por este medio son:
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color2
            span Se pueden realizar consultas y pagos.
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color2
            span Tienen medidas de seguridad y eliminan traslados innecesarios, ahorrando tiempo.
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color2
            span Servicio las 24 horas.
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color2
            span Agilidad en trámites.
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color2
            span Reducción de costos.  
            
      .tarjeta.color-acento-botones--borde.p-4(titulo="Tarjeta débito") 
        img.img-t.mb-4(src='@/assets/curso/temas/18.svg', alt='') 
        h5 Tarjeta débito
        p Es un medio de manejo para las cuentas de ahorro y/o corriente de los clientes, son los plásticos con los que se caracteriza al cliente, para ser reconocido por los canales digitales análogos como los son los datáfonos y los cajeros electrónicos. Estos elementos tienen las siguientes características especiales:
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color2
            span Contiene la información del cliente por medio de un chip.
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color2
            span Se pueden realizar transacciones en oficinas, cajeros automáticos, compras en establecimientos comerciales y por Internet.
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color2
            span Hace las funciones del dinero en efectivo, sin llevarlo consigo.
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color2
            span Tiene clave para su uso y es asignada por el mismo cliente.
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color2
            span Puede o no tener cuota de manejo (depende del tipo de cuenta y de la política de la entidad).

    .row.justify-content-center
      .col-lg-10            
        .row.justify-content-center.bg5.p-4.brad(data-aos="fade-left") 
          .col-lg-auto
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/19.png', alt='')         
          .col
            p(data-aos="fade-down").mb-0 Para ampliar la información, lo invitamos a consultar el capítulo 3 del libro Manual de productos, servicios y activos financieros, el cual se encuentra en el material complementario.            
</template>

<script>
export default {
  name: 'Tema2',
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
