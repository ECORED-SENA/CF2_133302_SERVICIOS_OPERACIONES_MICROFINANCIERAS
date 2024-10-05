<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Georreferenciación
      
    p(data-aos="fade-down") La georreferenciación es un proceso de localización geográfica dentro de un sistema de coordenadas, cuyo objetivo es ubicar una dirección dentro de un mapa.     

    .row.justify-content-center.mb-4          
      .col-lg-10
        .row.justify-content-center       
          .col-lg-9.my-3(data-aos="fade-right")
            .bloque-texto-d.color-secundario.p-4
              .bloque-texto-d__texto.mb-2
                i.fas.fa-quote-left
                h5 La georreferenciación es el posicionamiento en el que se define la localización de un objeto espacial representado mediante punto, vector, área y volumen, en un sistema de coordenadas y datos determinado.
                i.fas.fa-quote-right
              .bloque-texto-d__autor 
                .h5.mb-0 (Cáceres y Larco, 2015).                     
          .col-lg-3.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/4.png', alt='')                          

    .row.justify-content-center 
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/5.png', alt='')             
      .col-lg-8.my-3
        p(data-aos="fade-down") Este punto generalmente está asociado con algunos datos sociodemográficos como el estrato, el barrio, la localidad, entre otros, y se puede hacer a través de elementos tecnológicos satelitalmente rastreados o de manera manual, por medio de un mapa de datos y direcciones de los clientes.

        p(data-aos="fade-down") Con la georreferenciación se logran grandes desarrollos geográficos y espaciales, entre los que se encuentran:                  
        .bg2.p-1(data-aos="fade-left")
          .row.justify-content-center.align-items-center 
            .col-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/6.svg', alt='')             
            .col          
              h5(data-aos="fade-down").mb-0 Conocer la cobertura geográfica de la zona.
        .bg1.p-1(data-aos="fade-right")
          .row.justify-content-center.align-items-center 
            .col-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/6.svg', alt='')             
            .col          
              h5(data-aos="fade-down").mb-0 Entender la ubicación geográfica de clientes en mapas.
        .bg2.p-1(data-aos="fade-left")
          .row.justify-content-center.align-items-center 
            .col-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/6.svg', alt='')             
            .col          
              h5(data-aos="fade-down").mb-0 Analizar el cliente.        
    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1 Zonas  

    .row.justify-content-center 
      .col-lg-9.my-3
        p(data-aos="fade-down") Indica la división de un área geográfica en sectores homogéneos, conforme a ciertos criterios, por ejemplo, las empresas pueden dividir los territorios donde tienen influencia de clientes por zonas para mayor control de ventas, y asesores que atiendan dichos clientes, o por cualquier otro aspecto que la empresa considere.   
        .row.justify-content-center.bg3.p-4(data-aos="fade-left") 
          .col-lg-auto.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.png', alt='')         
          .col.my-3
            h5(data-aos="fade-down").mb-0 En cuanto a las entidades microfinancieras, zonifican las áreas para asignación de asesores de crédito en determinados lugares, así tendrán claro a qué clientes se van a dirigir conociendo las características de la zona, qué tipo de mercado se encuentra allí, teniendo una asesoría personalizada que genere confianza con los clientes. Si al asesor de microcrédito le referencian un cliente que se encuentra en otra zona que no es la de él, deberá entregarlo al compañero asesor que tenga asignada la zona donde se encuentra dicho cliente.     
               
      .col-lg-3.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/7.png', alt='')             
    
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
