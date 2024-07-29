<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 14
      h1 Educación económica y financiera

    .row.justify-content-center.mb-4 
      .col-lg-8.my-3
        p(data-aos="fade-down") Es el proceso por el cual los consumidores e inversores financieros mejoran su entendimiento de los productos, conceptos y riesgos financieros y, mediante información, instrucción y asesoramiento objetivos, desarrollan las habilidades y la confianza para llegar a ser más conscientes de los riesgos y oportunidades financieras, para realizar elecciones informadas, saber dónde dirigirse en caso de requerir ayuda y adoptar otras acciones efectivas para mejorar su nivel de bienestar. 
        
        .row.justify-content-center.bg13.mb-4 
          .col-lg-3.p-0.j
            img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/158.png', alt='')              
          .col-lg-9.my-3.j(data-aos="fade-right")
            h5(data-aos="fade-down").mb-0 El Banco de la República busca fomentar la educación económica y financiera entre la población colombiana, con el objetivo de fortalecer y divulgar las funciones del banco central, así como afianzar temas de economía y de finanzas básicas en todas las audiencias.      
        .row.justify-content-center
          .col-lg-auto
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/159.svg', alt='')             
          .col
            p(data-aos="fade-down") La educación financiera debería comenzar en el hogar, sin embargo, muchas veces no es así, es por eso que desde la academia y ahora las entidades financieras, tienen esta ardua labor para que desde muy jóvenes las personas aprendan a manejar el dinero y tengan sus finanzas personales sanas. Para ampliar la información, lo invitamos a consultar el libro #[b Programa de educación económica y financiera para jóvenes universitarios], el cual se encuentra en el material complementario.                          
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/157.png', alt='') 

    Separador 
    #t_14_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 14.1 Presupuesto

    .row.justify-content-center.mb-4 
      .col-lg-7.my-3
        p(data-aos="fade-down") Un presupuesto es el registro del dinero que está ingresando al hogar, así como del que está saliendo.
        .bg3.p-3.brad
          .row.justify-content-center
            .col-lg-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/160.svg', alt='')             
            .col
              h5(data-aos="fade-left") ¿Para qué sirve un presupuesto?
              ul.lista-ul.fa-ul.mb-0
                li 
                  i.fas.fa-check-circle.color2
                  span Saber cuánto dinero se recibe en el hogar o las empresas.
                li 
                  i.fas.fa-check-circle.color2
                  span Saber cuánto y en qué se gasta el dinero.
                li 
                  i.fas.fa-check-circle.color2
                  span Ajustar los gastos de acuerdo con los ingresos.
                li 
                  i.fas.fa-check-circle.color2
                  span Tomar decisiones de cuánto, cuándo y en qué gastar.
                li 
                  i.fas.fa-check-circle.color2
                  span Fijar metas de ahorro para lograr los sueños.
                li.mb-0 
                  i.fas.fa-check-circle.color2
                  span Prepararse mejor para las emergencias.                                
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/161.svg', alt='')       

    p(data-aos="fade-down") Los elementos de un presupuesto, son:

    TabsA.color-acento-botones.mb-5(data-aos="fade-right")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Gastos")  
        .row.justify-content-center
          .col-lg-auto
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/163.svg', alt='')             
          .col
            h5 Gastos
            p Son las salidas de dinero, que generalmente nunca vuelven, se divide en dos: 
            ul.lista-ul.fa-ul.mb-0
              li 
                i.fas.fa-check-circle.color2
                span #[b Necesarios:] aquellos que buscan satisfacer necesidades básicas para vivir como la alimentación, la vivienda, la ropa, etc.

              li 
                i.fas.fa-check-circle.color2
                span #[b Innecesarios:] aquellos que no son indispensables para vivir, pero sí suplen un deseo, como por ejemplo, un celular costoso, gustos en general.               
      .tarjeta.color-acento-botones--borde.p-4(titulo="Ingresos")  
        .row.justify-content-center
          .col-lg-auto
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/162.svg', alt='')             
          .col
            h5 Ingresos
            p Son las entradas de dinero o recursos. Pueden provenir de salarios, ventas, rentas o devoluciones de dinero. 
      .tarjeta.color-acento-botones--borde.p-4(titulo="Ahorro")  
        .row.justify-content-center
          .col-lg-auto
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/164.svg', alt='')             
          .col
            h5 Ahorro
            p Parte de los ingresos que se reserva para futuras necesidades, imprevistos, cumplimiento de metas, sueños o proyectos, lo ideal es que dicha reserva sea mínima el 10 % del total de los ingresos. 
      .tarjeta.color-acento-botones--borde.p-4(titulo="Dinero disponible")  
        .row.justify-content-center
          .col-lg-auto
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/165.svg', alt='')             
          .col
            h5 Dinero disponible
            p Es el dinero que queda después de recibir ingresos y restar el ahorro, junto con el total de gastos.  

    .row.bg20.align-items-center.pt-3.mb-5
      .col-lg-12.col-12.px-lg-5.px-4.up
        .row.justify-content-center.align-items-center
          .col-lg-12   
            SlyderF.text-center.mb-3.py-4(columnas="col-lg-4")
              .tarjeta.bgw.ts.h-100.p-4
                .row.justify-content-center.mb-3
                  .col-12
                    img.img-a.img-t(src='@/assets/curso/temas/166.svg' alt='')
                p.mb-0 Tome nota de todos los ingresos (salario, utilidades por ventas, arriendos, pensión, otros ingresos).
              .tarjeta.bgw.ts.h-100.p-4
                .row.justify-content-center.mb-3
                  .col-12
                    img.img-a.img-t(src='@/assets/curso/temas/167.svg' alt='')
                p.mb-0 Separe el porcentaje que destina para ahorro (recuerde en lo posible el 10 % de sus ingresos).
              .tarjeta.bgw.ts.h-100.p-4
                .row.justify-content-center.mb-3
                  .col-12
                    img.img-a.img-t(src='@/assets/curso/temas/168.svg' alt='')
                p.mb-0 Tome nota de cada gasto, no olvide ninguno desde los más representativos hasta los más pequeños (llamados gastos hormigas o fugas financieras), como por ejemplo, el tinto, el cigarrillo, el chance o baloto, golosinas, etc.
              .tarjeta.bgw.ts.h-100.p-4
                .row.justify-content-center.mb-3
                  .col-12
                    img.img-a.img-t(src='@/assets/curso/temas/169.svg' alt='')
                p.mb-0 Posteriormente al total de todos los ingresos, reste el total de todos los gastos, incluyendo el ahorro, esto le dará como resultado el dinero disponible.
              .tarjeta.bgw.ts.h-100.p-4
                .row.justify-content-center.mb-3
                  .col-12
                    img.img-a.img-t(src='@/assets/curso/temas/170.svg' alt='')
                p.mb-0 Recuerde que es importante clasificar los gastos (necesarios y no necesarios). 

    p(data-aos="fade-down") Para finalizar este tema, tenga en cuenta los siguientes consejos prácticos sobre el presupuesto:

    .row.justify-content-center.mb-5
      .col-lg-3.my-2
        .bg4.brad.p-1.px-2.h-100.j1         
          .row.justify-content-center.align-items-center
            .col-lg-auto.my-1
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/171.svg', alt='')         
            .col.my-1
              h5(data-aos="fade-down").mb-0 Evite los gastos innecesarios. 
      .col-lg-3.my-2
        .bg4.brad.p-1.px-2.h-100.j1         
          .row.justify-content-center.align-items-center
            .col-lg-auto.my-1
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/172.svg', alt='')         
            .col.my-1
              h5(data-aos="fade-down").mb-0 Encuentre otra manera de hacer más ingresos.
      .col-lg-3.my-2
        .bg4.brad.p-1.px-2.h-100.j1       
          .row.justify-content-center.align-items-center 
            .col-lg-auto.my-1
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/173.svg', alt='')         
            .col.my-1
              h5(data-aos="fade-down").mb-0 Ahorre lo que le sea posible, para pagar dudas, en lo posible las que tengan interés más alto.
      .col-lg-3.my-2
        .bg4.brad.p-1.px-2.h-100.j1         
          .row.justify-content-center.align-items-center
            .col-lg-auto.my-1
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/174.svg', alt='')         
            .col.my-1
              h5(data-aos="fade-down").mb-0 No solicite más dinero prestado.

    Separador 
    #t_14_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 14.2 Ahorro
    .row.justify-content-center.mb-4  
      .col-lg-8.my-3
        p(data-aos="fade-down") El ahorro es una reserva económica que se hace en el presente para ser utilizada en el futuro. Puede ahorrar solo o en familia, y se puede hacer en dinero, animales, joyas, tierras, semillas, entre otros.             
              
        .row.justify-content-center
          .col-lg-8.my-3
            .bg7.p-3.brad
              .row.justify-content-center
                .col-lg-auto
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/177.svg', alt='')             
                .col
                  ul.lista-ul.fa-ul.mb-0
                    li 
                      i.fas.fa-check-circle.color2
                      span Tranquilidad. 
                    li 
                      i.fas.fa-check-circle.color2
                      span Para un mejor futuro.
                    li 
                      i.fas.fa-check-circle.color2
                      span Para la vejez.
                    li.mb-0 
                      i.fas.fa-check-circle.color2
                      span Tipos de ahorro.    
          .col-lg-4.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/176.png', alt='')   

      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/175.svg', alt='')             

    p(data-aos="fade-down") El ahorro tiene dos tipos, los cuales se presentan a continuación:

    .row.justify-content-center.mb-5 
      .col-lg-6.my-3(data-aos="zoom-in")
        .bg14.brad.p-4.h-100
          .row.justify-content-center.mb-3
            .col-lg-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/178.png', alt='')             
            .col        
              .row.justify-content-start.mb-3
                .col-auto.bg10.px-2.text-white
                  h5.mb-0 Informal                 
              p(data-aos="fade-down").mb-0 El dinero se guarda en una alcancía, en el colchón, escondido en algún lugar, o se compromete en cadenas o natilleras, entre otros.
          h5.mb-3 Ventajas:
          ul.lista-ul.fa-ul.mb-4
            li 
              i.fas.fa-check-circle.color2
              span Fácil acceso.
            li 
              i.fas.fa-check-circle.color2
              span Los ahorros grupales, como las cadenas y las natilleras, propician espacios para compartir y disfrutar en grupo, la disciplina, la vigilancia y el apoyo entre sus miembros.  

          h5.mb-3 Ventajas: Riesgos y desventajas para su dinero:
          ul.lista-ul.fa-ul.mb-4
            li 
              i.fas.fa-check-circle.color2
              span Está expuesto a pérdida o robo.
            li 
              i.fas.fa-check-circle.color2
              span No gana intereses.
            li 
              i.fas.fa-check-circle.color2
              span Se gasta con facilidad.
            li 
              i.fas.fa-check-circle.color2
              span Si se pierde, es muy difícil reclamar.
            li 
              i.fas.fa-check-circle.color2
              span No aporta en la construcción del historial crediticio.     

      .col-lg-6.my-3(data-aos="zoom-in")
        .bg14.brad.p-4.h-100
          .row.justify-content-center.mb-3
            .col-lg-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/179.png', alt='')             
            .col        
              .row.justify-content-start.mb-3
                .col-auto.bg10.px-2.text-white
                  h5.mb-0 Formal              
              p(data-aos="fade-down").mb-0 Es una forma de ahorrar en la que se guarda el dinero en reserva en una institución financiera vigilada, controlada y supervisada por una entidad del Estado. Esta entidad garantiza la seguridad de sus ahorros.
          h5.mb-3 Ventajas:
          ul.lista-ul.fa-ul.mb-4
            li 
              i.fas.fa-check-circle.color2
              span El dinero está seguro bajo la custodia de una entidad regulada.
            li 
              i.fas.fa-check-circle.color2
              span El dinero gana intereses.
            li 
              i.fas.fa-check-circle.color2
              span Las entidades financieras permiten acceder a distintas formas de inversión, para maximizar las utilidades.
            li 
              i.fas.fa-check-circle.color2
              span Crear un historial de ahorro le ayudará a acceder a otros servicios financieros útiles como créditos.
            li 
              i.fas.fa-check-circle.color2
              span En el remoto caso que una entidad inscrita llegara a quebrar, el seguro de depósitos de Fogafín o Fogacoop le garantiza la devolución de su dinero, hasta un tope de 50 millones de pesos.
            li 
              i.fas.fa-check-circle.color2
              span En una entidad vigilada, usted tiene cómo y a quién reclamar.
            li 
              i.fas.fa-check-circle.color2
              span Se puede disponer del total del dinero depositado, sin dejar un saldo mínimo (Ley 1793 de 2016).  

          h5.mb-3 Desventajas:
          ul.lista-ul.fa-ul.mb-0
            li 
              i.fas.fa-check-circle.color2
              span Algunas entidades piden un depósito mínimo inicial para abrir un producto de ahorro.
            li 
              i.fas.fa-check-circle.color2
              span Algunas entidades cobran comisiones.  

    Separador 
    #t_14_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 14.3 Inversión

    p(data-aos="fade-down") Una inversión es el dinero que sale de nuestro bolsillo con el fin de multiplicarse a través de algunos mecanismos que ofrece el sector real o financiero.

    p(data-aos="fade-down") Recomendaciones antes de invertir:       

    .row.bg9.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4.up
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.mb-4
              .col-lg-3.my-2
                .bg4.brad.p-1.px-2.h-100.j1         
                  .row.justify-content-center.align-items-center
                    .col-lg-auto.my-1
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/180.svg', alt='')         
                    .col.my-1
                      h5(data-aos="fade-down").mb-0 Informarse. 
              .col-lg-3.my-2
                .bg4.brad.p-1.px-2.h-100.j1        
                  .row.justify-content-center.align-items-center
                    .col-lg-auto.my-1
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/181.svg', alt='')         
                    .col.my-1
                      h5(data-aos="fade-down").mb-0 Considerar el plazo de la inversión.
              .col-lg-3.my-2
                .bg4.brad.p-1.px-2.h-100.j1       
                  .row.justify-content-center.align-items-center 
                    .col-lg-auto.my-1
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/182.svg', alt='')         
                    .col.my-1
                      h5(data-aos="fade-down").mb-0 Analizar los rendimientos.
              .col-lg-3.my-2
                .bg4.brad.p-1.px-2.h-100.j1         
                  .row.justify-content-center.align-items-center
                    .col-lg-auto.my-1
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/183.svg', alt='')         
                    .col.my-1
                      h5(data-aos="fade-down").mb-0 Tener en cuenta los costos relacionados con la inversión.
              .col-lg-3.my-2
                .bg4.brad.p-1.px-2.h-100.j1         
                  .row.justify-content-center.align-items-center
                    .col-lg-auto.my-1
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/184.svg', alt='')         
                    .col.my-1
                      h5(data-aos="fade-down").mb-0 Evaluar los riesgos.
              .col-lg-3.my-2
                .bg4.brad.p-1.px-2.h-100.j1       
                  .row.justify-content-center.align-items-center 
                    .col-lg-auto.my-1
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/185.svg', alt='')         
                    .col.my-1
                      h5(data-aos="fade-down").mb-0 Diversificar las inversiones.
              .col-lg-3.my-2
                .bg4.brad.p-1.px-2.h-100.j1         
                  .row.justify-content-center.align-items-center
                    .col-lg-auto.my-1
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/186.svg', alt='')         
                    .col.my-1
                      h5(data-aos="fade-down").mb-0 Leer todos los documentos antes de firmar.
              .col-lg-3.my-2
                .bg4.brad.p-1.px-2.h-100.j1         
                  .row.justify-content-center.align-items-center
                    .col-lg-auto.my-1
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/187.svg', alt='')         
                    .col.my-1
                      h5(data-aos="fade-down").mb-0 En caso de abrir un negocio, tener en cuenta que se debe conocer de él. 

            p(data-aos="fade-down") Claves para evaluar una inversión: 

            .row.justify-content-center
              .col-lg-3.my-2
                .bg29.brad.p-1.px-2.h-100.j1
                  .row.justify-content-center.align-items-center
                    .col-lg-auto.my-1
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/188.svg', alt='')         
                    .col.my-1
                      h5(data-aos="fade-down").mb-0 Plazo. 
              .col-lg-3.my-2
                .bg29.brad.p-1.px-2.h-100.j1         
                  .row.justify-content-center.align-items-center
                    .col-lg-auto.my-1
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/189.svg', alt='')         
                    .col.my-1
                      h5(data-aos="fade-down").mb-0 Rentabilidad.
              .col-lg-3.my-2
                .bg29.brad.p-1.px-2.h-100.j1     
                  .row.justify-content-center.align-items-center 
                    .col-lg-auto.my-1
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/190.svg', alt='')         
                    .col.my-1
                      h5(data-aos="fade-down").mb-0 Riesgo.
              .col-lg-3.my-2
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/191.png', alt='') 

    Separador 
    #t_14_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 14.3 Inversión

    p(data-aos="fade-down") Son los medios por los cuales las personas realizan transacciones financieras, estos pueden ser:

    .row.bg30.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4.pb-3 
        .row.justify-content-center.align-items-center          
          .col-lg-12  
            .row.justify-content-center
              .col-lg-3.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/193.png', alt='')       
              .col-lg-9.my-3
                .bg25.p-2
                  h5(data-aos="fade-left").mb-0.ps-2 Presenciales
                .bg26.p-4
                  ul.lista-ul.fa-ul.mb-0
                    li 
                      i.fas.fa-check-circle.color2
                      span #[b Oficinas bancarias:] las entidades financieras cuentan con una amplia red de oficinas ubicadas en diferentes ciudades y municipios, inclusive a nivel mundial. Allí pueden realizarse diferentes transacciones y operaciones como consignaciones, retiros, pagos, transferencias, entre otros.

                    li 
                      i.fas.fa-check-circle.color2
                      span #[b Cajeros automáticos:] a través de esos canales se pueden realizar retiros, pagos y transferencias, avances, etc., en su gran mayoría no tienen restricción de horario y tienen límites en sus montos diarios.

                    li 
                      i.fas.fa-check-circle.color2
                      span #[b Datáfonos:] son terminales instalados en diferentes establecimientos de comercio, los cuales permiten transacciones con sus clientes, mediante el uso de tarjetas de crédito y débito.

                    li 
                      i.fas.fa-check-circle.color2
                      span #[b Corresponsales bancarios:] son establecimientos de comercio que prestan un servicio a una entidad financiera, para que sus clientes puedan realizar algunas transacciones, evitando desplazamientos a las oficinas de la entidad financiera. 
            .row.justify-content-center
              .col-lg-9.my-3
                .bg25.p-2
                  h5(data-aos="fade-left").mb-0.ps-2 No presenciales
                .bg26.p-4
                  ul.lista-ul.fa-ul.mb-0
                    li 
                      i.fas.fa-check-circle.color2
                      span #[b Línea telefónica:] servicio de las entidades financieras, las cuales funcionan 24 horas al día, los 365 días del año, sirven para consultas o realizar algunas transacciones como bloqueos, pagos, transferencias, solicitud de extractos, entre otros.

                    li 
                      i.fas.fa-check-circle.color2
                      span #[b Banca móvil:] servicio a través de un dispositivo móvil, el cual permite realizar consultas, pagos, transferencias.

                    li 
                      i.fas.fa-check-circle.color2
                      span #[b Banca virtual:] servicio de banca por Internet, que permite realizar consultas y operaciones bancarias con seguridad y fácil manejo, disponible 24 horas al día los 7 días de la semana. 

              .col-lg-3.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/194.png', alt='')                  

    Separador 
    #t_14_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 14.5 Crédito

    p(data-aos="fade-down") Crédito o préstamo es el dinero que una persona, cooperativa o entidad financiera, entre otros, le otorga en el presente con el compromiso de devolver estos recursos en el futuro, bien sea a través del pago de cuotas o en un solo pago, junto con un interés y otros cobros asociados.

    p(data-aos="fade-down") Conozcamos más información sobre los créditos: 

    .row.bg27.align-items-center.mb-5
      .col-lg-12.col-12.px-lg-5.p-5 
        .row.justify-content-center.align-items-center          
          .col-lg-12 
            SlyderA(tipo="b")
              .row.justify-content-center
                .col-lg-6.my-3
                  .text-white 
                    p Las personas solicitan créditos básicamente para: 
                  ul.lista-ul.fa-ul.mb-0
                    li 
                      i.fas.fa-check-circle.color2
                      span.text-white Invertir o aprovechar una oportunidad de negocio.
                    li 
                      i.fas.fa-check-circle.color2
                      span.text-white Gastar, si las personas no han ahorrado lo suficiente, deben acudir al préstamo para suplir sus necesidades o gustos.
                    li 
                      i.fas.fa-check-circle.color2
                      span.text-white Solucionar emergencias.             
                .col-lg-4.my-3 
                  img.img-a.img-t(src='@/assets/curso/temas/195.png', alt='')

              .row.justify-content-center
                .col-lg-6.my-3
                  .text-white 
                    p Para elegir el préstamo adecuado, se debe tener en cuenta que el objetivo es que el dinero solicitado permita producir más dinero por medio de indicadores como: 
                  ul.lista-ul.fa-ul.mb-0
                    li 
                      i.fas.fa-check-circle.color2
                      span.text-white Calcular la capacidad de pago antes de tomar el crédito.
                    li 
                      i.fas.fa-check-circle.color2
                      span.text-white Averiguar todos los costos y compromisos que se van a asumir.
                    li 
                      i.fas.fa-check-circle.color2
                      span.text-white Usar el dinero exclusivamente para el objetivo que se solicitó.
             
                .col-lg-4.my-3 
                  img.img-a.img-t(src='@/assets/curso/temas/196.png', alt='')

              .row.justify-content-center
                .col-lg-6.my-3
                  .text-white 
                    p Las ventajas de los créditos pueden ser: 
                  ul.lista-ul.fa-ul.mb-0
                    li 
                      i.fas.fa-check-circle.color2
                      span.text-white Acceso a una cantidad de dinero mayor de la que se tiene ahorrada.
                    li 
                      i.fas.fa-check-circle.color2
                      span.text-white Con un préstamo puede aprovechar oportunidades de negocio o invertir.
                    li 
                      i.fas.fa-check-circle.color2
                      span.text-white Permite enfrentar mejor una emergencia en el caso que no cuente con  ahorros suficientes.             
                .col-lg-4.my-3 
                  img.img-a.img-t(src='@/assets/curso/temas/197.png', alt='')

              .row.justify-content-center
                .col-lg-6.my-3
                  .text-white 
                    p Responsabilidades frente al crédito: 
                  ul.lista-ul.fa-ul.mb-0
                    li 
                      i.fas.fa-check-circle.color2
                      span.text-white Los préstamos son acuerdos con condiciones muy claras y serias sobre costos y plazos de pago.
                    li 
                      i.fas.fa-check-circle.color2
                      span.text-white Si se atrasa en el pago de una deuda, los intereses serán mayores y no pagar siempre traerá consecuencias.
                    li 
                      i.fas.fa-check-circle.color2
                      span.text-white Cuando recibe dinero de un préstamo, se compromete a pagar y a aceptar las condiciones. Asegúrese de que puede cumplir antes de firmar.             
                .col-lg-4.my-3 
                  img.img-a.img-t(src='@/assets/curso/temas/198.png', alt='')

    p(data-aos="fade-down") A nivel general, existen dos tipos de crédito:

    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0 #[b.t3 Crédito] informal   

    .row.justify-content-center
      .col-lg-10.my-3
        p(data-aos="fade-down") Son los préstamos realizados por prestamistas comúnmente llamados gota a gota, casas de empeño, grupo de autoayuda y cadenas. 
        .bg31.p-3(data-aos="fade-left")
          p(data-aos="fade-down").mb-0 #[b Ventajas:] el dinero se obtiene inmediatamente y poca o ninguna documentación o trámites.
        .bg32.p-3(data-aos="fade-right")
          p(data-aos="fade-down").mb-0 #[b Riesgos y desventajas:] es muy caro.                 
      .col-lg-2.my-3 
        img.img-a.img-t(src='@/assets/curso/temas/199.png', alt='') 

    p(data-aos="fade-down") Los modelos de crédito informal pueden llegar a ser riesgosos, en algunos casos utilizan amenazas para lograr los pagos de las cuotas.

    p(data-aos="fade-down").mb-5 No cuenta con normas o regulaciones emitidas por el Estado, cuyo objetivo es protegerlo, ejemplo, régimen de cláusulas y prácticas abusivas. 

    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0 #[b.t3 Crédito] formal   

    .row.justify-content-center
      .col-lg-9.my-3
        p(data-aos="fade-down") Se refiere a los préstamos realizados por instituciones que son reguladas y supervisadas por la Superintendencia Financiera o la Superintendencia de la Economía Solidaria. Dentro de estas se incluyen bancos comerciales, compañías de seguros, financieras y cooperativas, quienes deben reportar al gobierno todas sus transacciones de forma regular. 
        .bg5.brad.p-4
          h5(data-aos="fade-down") Ventajas: 
          ul.lista-ul.fa-ul.mb-0
            li 
              i.fas.fa-check-circle.color2
              span Las entidades pueden otorgar créditos a largo plazo.
            li 
              i.fas.fa-check-circle.color2
              span Su información financiera se maneja con privacidad.
            li 
              i.fas.fa-check-circle.color2
              span Crea un historial crediticio.
            li 
              i.fas.fa-check-circle.color2
              span Las entidades operan bajo reglamentos financieros.
            li 
              i.fas.fa-check-circle.color2
              span Tiene derecho a asesoría financiera y buen trato.
            li.mb-0 
              i.fas.fa-check-circle.color2
              span El régimen de intereses por el uso del dinero y en caso de mora tiene regulación y vigilancia estatal (topes máximos).                        
      .col-lg-3.my-3 
        img.img-a.img-t(src='@/assets/curso/temas/200.png', alt='')  

</template>

<script>
export default {
  name: 'Tema14',
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
