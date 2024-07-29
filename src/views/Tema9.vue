<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 9
      h1 Matemáticas financieras

    p(data-aos="fade-down") La matemática financiera incluye las matemáticas aplicadas que estudian el valor del dinero en el tiempo en una operación financiera.

    Separador 
    #t_9_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 9.1 Interés simple

    .bg1.p-4.mb-5   
      .row.justify-content-center
        .col-lg-auto.p-0
          img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/91.svg', alt='')   
        .col.p-0
          .p-3.h-100
            p(data-aos="fade-down") Tasa aplicada sobre un capital inicial que permanece constante en el tiempo y no se añade a períodos sucesivos.

            p(data-aos="fade-down").mb-4 La fórmula que utilizaremos para calcular el interés simple será la siguiente:

            .row.justify-content-center.mb-3
              .col-auto.bg10.p-4.text-white(data-aos="flip-down")
                h5.mb-0 Cn = Co * (1 + (i*n))    
                  
            p(data-aos="fade-down").mb-0 Siendo Co el capital inicial prestado, i la tasa de interés, n el periodo de tiempo considerado y Cn el capital final resultante.    

    Separador 
    #t_9_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 9.2 Interés compuesto

    .row.bg9.align-items-center.pt-3
      .col-lg-12.col-12.px-lg-5.px-4.up
        .row.justify-content-center.align-items-center
          .col-lg-12  
            .row.justify-content-center.mb-4   
              .col-lg-8
                p(data-aos="fade-down") Son activos monetarios que se van añadiendo al capital inicial y sobre el que se van generando nuevos intereses.

                p(data-aos="fade-down") Los intereses generados se van sumando periodo a periodo al capital inicial y a los intereses ya generados anteriormente. De esta manera, se crea valor no solo sobre el capital inicial, sino que los intereses generados previamente ahora se encargan también de generar nuevos intereses. Es decir, se van acumulando los intereses obtenidos para generar más intereses.

                p(data-aos="fade-down") La fórmula es la siguiente: 

                .row.justify-content-center.mb-3
                  .col-auto.bg10.p-4.text-white(data-aos="flip-down")
                    h5.mb-0 Cn = Co (1 – i)n    

                p(data-aos="fade-down") Siendo Co el capital inicial prestado, i la tasa de interés, n el periodo de tiempo considerado y Cn el capital final resultante.                                              
              .col-lg-4
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/92.png', alt='')    

            Separador 
            #t_9_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
              h2 9.3 Anualidades 

            p(data-aos="fade-down") Significa pagos realizados a intervalos iguales de tiempo, que pueden ser anuales, trimestrales, mensuales, quincenales, diarios, etc.

            p(data-aos="fade-down") Existen cinco tipos de anualidades:


    .row.justify-content-center.align-items-center.my-5
      .col-md-6.col-lg-3.mb-4.mb-md-0.up.d-none.d-lg-block(data-aos="fade-right")
        img.img-a.img-t(src='@/assets/curso/temas/93.png', alt='')
      .col-md-11.col-lg-9.mb-4.mb-md-0.up(data-aos="fade-left")
        SlyderF.text-center.mb-3(columnas="col-lg-4")
          .tarjeta.bgcard.ts.h-100.p-4
            .row.justify-content-center.mb-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/temas/94.svg' alt='')
            .row.justify-content-center.mb-3
              .col-auto.bg10.px-2.text-white
                h5.mb-0 Anualidades vencidas 
            p.mb-0 En esta anualidad, los pagos se realizan al final de cada periodo o vencimiento de cada periodo.

          .tarjeta.bgcard.ts.h-100.p-4
            .row.justify-content-center.mb-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/temas/94.svg' alt='')
            .row.justify-content-center.mb-3
              .col-auto.bg10.px-2.text-white
                h5.mb-0 Anualidades anticipadas 
            p.mb-0 En la anualidad anticipada, los pagos se realizan al inicio de cada periodo, es decir, al momento de realizar el contrato u operación.

          .tarjeta.bgcard.ts.h-100.p-4
            .row.justify-content-center.mb-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/temas/94.svg' alt='')
            .row.justify-content-center.mb-3
              .col-auto.bg10.px-2.text-white
                h5.mb-0 Anualidades diferidas
            p.mb-0 En las anualidades diferidas, la operación se realiza específicamente un día y después de cierto plazo, se comienzan a liquidar las anualidades.

          .tarjeta.bgcard.ts.h-100.p-4
            .row.justify-content-center.mb-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/temas/94.svg' alt='')
            .row.justify-content-center.mb-3
              .col-auto.bg10.px-2.text-white
                h5.mb-0 Anualidades generales
            p.mb-0 Las anualidades generales hacen referencia al periodo en que se realizan los pagos, normalmente coinciden con el periodo de capitalización de las anualidades, aunque en ocasiones no coinciden.

          .tarjeta.bgcard.ts.h-100.p-4
            .row.justify-content-center.mb-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/temas/94.svg' alt='')
            .row.justify-content-center.mb-3
              .col-auto.bg10.px-2.text-white
                h5.mb-0 Anualidades simples
            p.mb-0 En las anualidades simples, opuesto a las generales, el periodo de pago y el periodo de capitalización de la tasa sí coinciden (Ávalos, 2003).

    Separador 
    #t_9_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 9.4 Conversión de tasas de interés anuales y periódicas 

    .row.justify-content-center 
      .col-lg-8.my-3
        p(data-aos="fade-down") Las instituciones financieras usan la tasa de interés efectiva con mayor frecuencia, la usan para informar las rentabilidades de sus inversiones o de cuánto le costaría solicitar un préstamo en dicha institución, esta tasa se indica de manera porcentual, cuánto es lo que se renta o cuánto es el costo sobre una cantidad de dinero a invertir o solicitar a un periodo determinado, a pesar que la periodicidad puede ser clasificada de diferentes formas para estas tasas.
        .row.justify-content-center.mb-4
          .col-lg-auto.p-0
            .bg8.p-3.h-100
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/96.svg', alt='')             
          .col.p-0
            .bg8.p-3.h-100.j 
              p(data-aos="fade-down").mb-0 La tasa de interés nominal es una tasa expresada anualmente, genera intereses en varias ocasiones a la periodicidad que aplica, esta tasa no es exacta como la efectiva, porque la tasa nominal es la teoría, no analiza si el usuario tiene que pagar gastos y otros costos.
                        
        p(data-aos="fade-down") Si el usuario tiene que pagar gastos y otros costos.

        p(data-aos="fade-down") La tasa periódica es la tasa que corresponde al período determinado (% por día, mes, bimestre, trimestre, semestre, año).

        p(data-aos="fade-down") Analicemos el siguiente ejemplo:                        
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/95.png', alt='')  

    .row.justify-content-center 
      .col-lg-6.my-3(data-aos="fade-right")
        .bg2.brad.p-4.h-100 
          .row.justify-content-center
            .col-lg-auto
              ol.lista-ol--cuadro.fa-ul
                li 
                  .lista-ol--cuadro__vineta
                    span 1            
            .col
               p(data-aos="fade-down") Pedro de la Torre pide $1.000.000 a una tasa efectiva del 10 %. En este caso, el cálculo sería de la siguiente manera:
               h5(data-aos="fade-down") Monto a pagar: C*(1+i)n

               p(data-aos="fade-down") Aplicando dicha fórmula a nuestros datos, se tendrá el siguiente resultado:
               h5(data-aos="fade-down").mb-0 100.000 * (1 + 0,1)1 = 1.100.000         

      .col-lg-6.my-3(data-aos="fade-left")
        .bg2.brad.p-4.h-100 
          .row.justify-content-center
            .col-lg-auto
              ol.lista-ol--cuadro.fa-ul
                li 
                  .lista-ol--cuadro__vineta
                    span 2            
            .col
               p(data-aos="fade-down").mb-0 En el caso del interés nominal, expresado anualmente, si la periodicidad dice otra cosa, se entiende que durante el periodo que transcurrió, se generaron intereses, por lo cual es muy probable que no se genere la igualdad entre la tasa nominal y efectiva.  

      .col-lg-6.my-3(data-aos="fade-right")
        .bg2.brad.p-4.h-100 
          .row.justify-content-center
            .col-lg-auto
              ol.lista-ol--cuadro.fa-ul
                li 
                  .lista-ol--cuadro__vineta
                    span 3           
            .col
               p(data-aos="fade-down") Utilizando los mismos antecedentes preliminares, pero asumiendo que la tasa es 10 % semestral y conociendo que un año tiene dos semestres, entonces para la fórmula expresada en anualidad, se usa la división de 10/2= 5 %. En este caso y aplicando la fórmula señalada al inicio, el resultado es:

               h5(data-aos="fade-down").mb-0 100.000 * (1 + 0,5)2 = 110.250 

      .col-lg-6.my-3(data-aos="fade-left")
        .bg2.brad.p-4.h-100 
          .row.justify-content-center
            .col-lg-auto
              ol.lista-ol--cuadro.fa-ul
                li 
                  .lista-ol--cuadro__vineta
                    span 4           
            .col
               p(data-aos="fade-down").mb-0 Cuando se divide la ganancia ($#[b 10.250]), sobre el dinero inicial, existe una diferencia, y esta es generada porque en un semestre se generaron intereses que aumentaron el capital y en el segundo semestre aumentó ese capital más el interés previo volvió a aumentar, para dar como resultado los $#[b 110.250]. Por lo cual acá la tasa efectiva fue de #[b 10,25] % anual y no la nominal de #[b 10] %.

    Separador 
    #t_9_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 9.5 Conversión de tasa efectiva a nominal
    .row.justify-content-center.mb-5(data-aos="fade-left") 
      .col-lg-auto
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/85.png', alt='')         
      .col
        p(data-aos="fade-down") Es importante observar la periodicidad en la cual generará intereses, por ejemplo, la tasa efectiva es del 2 % mensual y la quiero convertir a nominal mensual, simplemente habría que multiplicar por 12, por lo cual la tasa efectiva mensual convertida a nominal mensual arroja el 24 % (2 % * 12 meses), se multiplica por doce porque la nominal por defecto es anual, la aclaración de mensual es para indicar que capitaliza intereses de forma mensual. El inconveniente se da cuando la periodicidad no es la misma.

        p(data-aos="fade-down") Es importante observar la periodicidad en ejemplo de conversión de tasa efectiva a tasa nominal con diferente periodicidad:  

    .row.justify-content-center.mb-5(data-aos="fade-left") 
      .col-lg-10
        .bg8.p-4.h-100.brad 
          p(data-aos="fade-down") Una entidad ofrece un crédito a una tasa efectiva del 2 % mensual, se desea convertir a la tasa capitalizable trimestral.

          p(data-aos="fade-down") La ecuación es:

          .row.justify-content-center.mb-4
            .col-auto.bg10.p-4.text-white(data-aos="flip-down")
              h5.mb-0 (1+i)#[sup n] = (1+i)#[sup n]  

          p(data-aos="fade-down") El desarrollo es:

          .row.justify-content-center.mb-4
            .col-auto.bg10.p-4.text-white(data-aos="flip-down")
              h5.mb-0 (1+0,02)#[sup 12] = (1+i)#[sup 4 ] 

          h5(data-aos="fade-down") En este caso se eleva a 12, porque la tasa nominal se debe expresar en años, por otro lado, se eleva a 4, porque son 4 trimestres que componen un año, es decir, las tasas se convierten en conceptos que son comparables. El resultado de esta ecuación, da 6,12 % trimestral aproximado, pero esta tasa es efectiva equivalente a una nominal, por lo cual, para saber la nominal, es una tasa que se expresa en años y que la periodicidad, es para saber cada cuánto tiempo genera intereses, el 6,12 % equivale a efectivamente cuando entrega, por ende, si se multiplica por 4 (cantidad de trimestres que componen un año), la tasa nominal trimestral, es del 24,48 %.  

    p(data-aos="fade-down") La tasa nominal se debe multiplicar por la tasa que se quiere convertir por el número de periodos en los que se puede pagar en un año. Estos períodos son:   

    .row.justify-content-center 
      .col-lg-3.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/97.png', alt='')             
      .col-lg-5.my-3
        .bg2.p-2(data-aos="fade-left")
          .row.justify-content-center.align-items-center 
            .col-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/98.svg', alt='')             
            .col          
              h5(data-aos="fade-down").mb-0 Mensual = 30 días. 
        .bg1.p-2(data-aos="fade-right")
          .row.justify-content-center.align-items-center 
            .col-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/98.svg', alt='')             
            .col          
              h5(data-aos="fade-down").mb-0 Bimestral = 60 días.   
        .bg2.p-2(data-aos="fade-left")
          .row.justify-content-center.align-items-center 
            .col-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/98.svg', alt='')             
            .col          
              h5(data-aos="fade-down").mb-0 Trimestral = 90 días 
        .bg1.p-2(data-aos="fade-right")
          .row.justify-content-center.align-items-center 
            .col-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/98.svg', alt='')             
            .col          
              h5(data-aos="fade-down").mb-0 Cuatrimestral = 120 días.   
        .bg2.p-2(data-aos="fade-left")
          .row.justify-content-center.align-items-center 
            .col-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/98.svg', alt='')             
            .col          
              h5(data-aos="fade-down").mb-0 Semestral = 180 días. 

      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/99.png', alt='')                        

    Separador 
    #t_9_6.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 9.6 Conversión de tasa nominal a tasa efectiva

    p(data-aos="fade-down") En este caso, la ecuación utilizada anteriormente, no cambia, para este caso, lo nominal que por defecto viene expresado en anualidad, se debe convertir en efectivo y eso utiliza la fórmula para que dé como resultado el monto efectivo.

    p(data-aos="fade-down") Ejemplo de conversión de tasa nominal a efectiva:  

    .row.justify-content-center.mb-5(data-aos="fade-left") 
      .col-lg-10
        .bg8.p-4.h-100.brad 
          p(data-aos="fade-down") Se tiene un 12 % capitalizable mensualmente y se quiere convertir a una tasa equivalente bimensual.

          p(data-aos="fade-down") Lo primero que se hace es el 12 % dividirlo en 12, dando como resultado 1 % mensual, hablando de términos efectivos; para llevarlo al efectivo requerido, se debe aplicar la misma ecuación señalada, la ecuación es la siguiente:

          .row.justify-content-center.mb-4
            .col-auto.bg10.p-4.text-white(data-aos="flip-down")
              h5.mb-0 (1+0,01)#[sup 1]2 = (1+i)#[sup 2] 

          p(data-aos="fade-down") El desarrollo es:

          .row.justify-content-center.mb-4
            .col-auto.bg10.p-4.text-white(data-aos="flip-down")
              h5.mb-0 (1+0,02)#[sup 12] = (1+i)#[sup 4 ] 

          h5(data-aos="fade-down") El desarrollo da como resultado que la tasa efectiva es 6,15 % semestral efectivo, para saber la tasa bimensual, se debe dividir en 3 (dado que un semestre está compuesto por tres bimestres), dando como resultado que la tasa efectiva bimensual, es de 2,05 %. 

    p(data-aos="fade-down") Para ampliar la información, lo invitamos a consultar el capítulo 1 del libro #[b Matemáticas financieras], el cual se encuentra en el material complementario.                  
</template>

<script>
export default {
  name: 'Tema9',
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
