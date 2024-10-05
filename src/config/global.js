export default {
  global: {
    componenteFormativo: 'Contrastar la información',
    descripcionCurso:
      'El sistema financiero en Colombia es una fuerza importante que todos los empresarios y microempresarios deben conocer; es ahí, cuando los asesores microfinancieros hacen la entrada como el vínculo entre los emprendedores o microempresarios y el sistema financiero permitiendo a miles de personas adquirir créditos para apoyar sus ideas de negocio y son las entidades financieras las encargadas de hacer esta tarea con garantías justas que permitan el desarrollo económico del país y sus ciudadanos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Georreferenciación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Zonas',
            hash: 't_1_1',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Productos y servicios microfinancieros',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Normas de etiqueta y protocolo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Código de ética o conducta',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Manuales administrativos',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Inteligencia emocional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Capacidades',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Habilidades',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Resiliencia',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Lenguaje verbal',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Lenguaje no verbal',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Gestión de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Tipos de información',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Métodos de recolección',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Tecnologías de la información y la comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Plataformas tecnológicas',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Aplicación y usos de procesadores de texto',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Técnicas de ventas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Asesoría integral',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Parámetros de entrevista',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Promoción (<i>marketing</i> digital)',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Conocimiento de los competidores',
            hash: 't_7_4',
          },
          {
            numero: '7.5',
            titulo: 'Términos y condiciones',
            hash: 't_7_5',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Centrales de información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Matemáticas financieras',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '9.1',
            titulo: 'Interés simple',
            hash: 't_9_1',
          },
          {
            numero: '9.2',
            titulo: 'Interés compuesto',
            hash: 't_9_2',
          },
          {
            numero: '9.3',
            titulo: 'Anualidades',
            hash: 't_9_3',
          },
          {
            numero: '9.4',
            titulo: 'Conversión de tasas de interés anuales y periódicas',
            hash: 't_9_4',
          },
          {
            numero: '9.5',
            titulo: 'Conversión de tasa efectiva a nominal',
            hash: 't_9_5',
          },
          {
            numero: '9.6',
            titulo: 'Conversión de tasa nominal a tasa efectiva',
            hash: 't_9_6',
          },
        ],
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Políticas organizacionales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema11',
        numero: '11',
        titulo: 'Verificación de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '11.1',
            titulo: 'Técnicas de validación',
            hash: 't_11_1',
          },
          {
            numero: '11.2',
            titulo: 'Respaldo de la información',
            hash: 't_11_2',
          },
        ],
      },
      {
        nombreRuta: 'tema12',
        numero: '12',
        titulo: 'Administración de riesgos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '12.1',
            titulo:
              'Criterios para la identificación de alertas y operaciones sospechosas',
            hash: 't_12_1',
          },
        ],
      },
      {
        nombreRuta: 'tema13',
        numero: '13',
        titulo: 'Propuestas comerciales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '13.1',
            titulo: 'Plan táctico o plan estratégico de ventas',
            hash: 't_13_1',
          },
        ],
      },
      {
        nombreRuta: 'tema14',
        numero: '14',
        titulo: 'Educación económica y financiera',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '14.1',
            titulo: 'Presupuesto',
            hash: 't_14_1',
          },
          {
            numero: '14.2',
            titulo: 'Ahorro',
            hash: 't_14_2',
          },
          {
            numero: '14.3',
            titulo: 'Inversión',
            hash: 't_14_3',
          },
          {
            numero: '14.4',
            titulo: 'Inclusión y canales transaccionales',
            hash: 't_14_4',
          },
          {
            numero: '14.5',
            titulo: 'Manejo de crédito',
            hash: 't_14_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/133302_CF02_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Productos y servicios microfinancieros',
      referencia:
        'Chaparro, C. (2013). Manual productos, servicios y activos financieros. Editorial CEP, S.L.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/50720 ',
    },
    {
      tema: 'Métodos de recolección',
      referencia:
        'Buxarrais, M. y Prats, E. (2013). Ética de la información. Editorial UOC. ',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/56316 ',
    },
    {
      tema: 'Técnicas de ventas',
      referencia:
        'Arenal Laza, C. (2017). Técnicas de venta: UF0031. Editorial Tutor Formación.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/44231 ',
    },
    {
      tema: 'Centrales de información',
      referencia:
        'Rodríguez, S. (2017). Finanzas personales, su mejor plan de vida. ',
      tipo: 'Libro',
      link:
        'https://www-digitaliapublishing-com.bdigital.sena.edu.co/a/54794/finanzas-personales--su-mejor-plan-de-vida ',
    },
    {
      tema: 'Conversión de tasa nominal a tasa efectiva',
      referencia:
        'Rodríguez Franco, J. (2015). Matemáticas financieras. Grupo Editorial Patria. ',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/40386 ',
    },
    {
      tema: 'Políticas organizacionales',
      referencia: 'Pucheu, (2014). Desarrollo y eficacia organizacional.',
      tipo: 'Libro',
      link:
        'https://www-digitaliapublishing-com.bdigital.sena.edu.co/a/38233/desarrollo-y-eficacia-organizacional ',
    },
    {
      tema: 'Educación económica y financiera',
      referencia:
        'Castillo, H. y Garzón, C. (2018). Programa de educación económica y financiera para jóvenes universitarios. Ediciones USTA. ',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/126104 ',
    },
  ],
  glosario: [
    {
      termino: 'Amortización financiera',
      significado:
        'es la devolución o el pago parcial o total de una deuda en la fecha de vencimiento pactada, por ejemplo, una hipoteca o un préstamo.',
    },
    {
      termino: 'CDT',
      significado:
        'Certificado de Depósito a Término, es un documento que representa un valor con el cual se realizó la apertura y tiene un plazo de vencimiento. En este documento se puede transferir la titularidad como endoso a otra persona natural o jurídica, genera unos rendimientos, los cuales son pactados en el momento de la apertura.',
    },
    {
      termino: 'Garantía',
      significado:
        'la garantía bancaria es el documento por el cual un banco respalda la obligación contraída por un cliente. Así, se compromete a responder en caso de incumplimiento, en el sector financiero existe garantía personal (pagaré), hipotecaria (vivienda o inmueble) y prenda (vehículo o maquinaria).',
    },
    {
      termino: 'Tarjeta crédito',
      significado:
        'es un documento de material plástico o metal, emitido por un banco o institución especializada a nombre de una persona, que podrá utilizarla para efectuar compras sin tener que pagar en efectivo y pudiendo, además, llevar el pago de los productos a períodos futuros.',
    },
    {
      termino: 'Tarjeta débito',
      significado:
        'instrumento financiero emitido por un banco o caja de ahorros, que permite al cliente realizar operaciones financieras solo con el saldo disponible en su cuenta. El pago en una tarjeta de débito conlleva de manera directa un cargo en dicha cuenta de la que es titular.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alarcón, D. (2015). La gestión de la información en la sociedad abierta. Dextra Editorial.',
    },
    {
      referencia:
        'Alonso & Berggrun (2015). Introducción al análisis de riesgo financiero. ',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=3224',
    },
    {
      referencia:
        'Arenal Laza, C. (2017). Técnicas de venta: UF0031. Editorial Tutor Formación. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/44231 ',
    },
    {
      referencia: 'Aristóteles (349 a.C.) Ética a Nicómaco. ',
      link:
        'https://bioetica.colmed5.org.ar/wp-content/uploads/2019/11/%C3%89tica-a-Nic%C3%B3maco-Arist%C3%B3teles.pdf',
    },
    {
      referencia: 'Avalos, M. (2003). Matemáticas Financieras. México: ECAFSA.',
    },
    {
      referencia: 'Banco Caja Social (s. F.). CDT Tasa Variable. ',
      link: 'https://www.bancocajasocial.com/inversion/cdt-tasa-variable/',
    },
    {
      referencia:
        'Buxarrais, M. y Prats, E. (2013). Ética de la información. Editorial UOC. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/56316 ',
    },
    {
      referencia:
        'Cáceres, J. & Larco, G. (2016). Análisis, diseño, desarrollo e implementación de un sistema de georreferenciación de operadores económico para la Superintendencia de Control del Poder de Mercado. ',
      link:
        'https://dspace.ups.edu.ec/bitstream/123456789/13039/1/UPS%20-%20ST002232.pdf ',
    },
    {
      referencia:
        'Castillo, H. y Garzón, C. (2018). Programa de educación económica y financiera para jóvenes universitarios. Ediciones USTA. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/126104 ',
    },
    {
      referencia:
        'Chaparro, C. (2013). Manual productos, servicios y activos financieros. Editorial CEP, S.L. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/50720 ',
    },
    {
      referencia:
        'Confiar (s. f.). Cuentas de ahorro de la Cooperativa Confiar. ',
      link: 'https://www.confiar.coop/ahorro/cuentas-de-ahorro ',
    },
    {
      referencia: 'Cyrulnik, B. (s.f.). Boris Cyrulnik. ',
      link:
        'https://mavmsite.wordpress.com/2009/09/27/20090927-la-resiliencia-es-el-arte-de-navegar-en-los-torrentes-el-arte-de-metamorfosear-el-dolor-para-darle-sentido-la-capacidad-de-ser-feliz-incluso-cuando-tienes-heridas-en-el-alma-boris-cy/  ',
    },
    {
      referencia: 'Educalingo (s. f.). Zonificación. ',
      link: 'https://educalingo.com/es/dic-es/zonificar ',
    },
    {
      referencia:
        'Finandina (2020). ¿De qué forma te evalúan las centrales de riesgo en Colombia? ',
      link:
        'https://www.bancofinandina.com/finanblog/noticias/2019/12/23/como-te-evaluan-las-centrales-de-riesgo-en-colombia ',
    },
    {
      referencia:
        'Geovis (2017). Georreferenciación, ubique todo su potencial. ',
      link:
        'http://www.geobis.com/es/georeferenciacion-ubique-todo-su-potencial/ ',
    },
    {
      referencia: 'Goleman, D. (1997). La inteligencia emocional.',
    },
    {
      referencia:
        'Londoño, M. (2009). Cómo sobrevivir al cambio : inteligencia emocional y social en la empresa. Cap. 2. ',
      link:
        'https://www-digitaliapublishing-com.bdigital.sena.edu.co/a/37854/como-sobrevivir-al-cambio---inteligencia-emocional-y-social-en-la-empresa ',
    },
    {
      referencia:
        'López, A. (2018). Microseguros: Definición, Características y Beneficios. ',
      link:
        'https://www.rankia.co/blog/mejores-seguros-colombia/3739367-microseguros-definicion-caracteristicas-beneficios ',
    },
    {
      referencia:
        'Martínez Guillén. (2014). Manual básico de protocolo empresarial y social. Ediciones Díaz de Santos.',
    },
    {
      referencia: 'Pucheu, (2014). Desarrollo y eficacia organizacional. ',
      link:
        'https://www-digitaliapublishing-com.bdigital.sena.edu.co/a/38233/desarrollo-y-eficacia-organizacional ',
    },
    {
      referencia:
        'Quiroga et al. (2014). La gestión del conocimiento y las tecnologías de la información y la comunicación en las organizaciones. ',
      link:
        'https://www-digitaliapublishing-com.bdigital.sena.edu.co/a/47656/la-gestion-del-conocimiento-y-las-tecnologias-de-la-informacion-y-la-comunicacion-en-las-organizaciones ',
    },
    {
      referencia: 'Real Academia Española (2020). Manual. ',
      link: 'https://dle.rae.es/manual. ',
    },
    {
      referencia:
        'Rodríguez Franco, J. (2015). Matemáticas financieras. Grupo Editorial Patria. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/40386 ',
    },
    {
      referencia:
        'Rodríguez, S. (2017). Finanzas personales, su mejor plan de vida. ',
      link:
        'https://www-digitaliapublishing-com.bdigital.sena.edu.co/a/54794/finanzas-personales--su-mejor-plan-de-vida ',
    },
    {
      referencia:
        'Fasecolda. (s.f.). Capítulo 12 Sistema de administración de riesgo operativo (SARO). ',
      link:
        'https://publicaciones.fasecolda.com/regimen-de-seguros/chapter/p2-c12/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Vilma Andrea Baracaldo Neira',
          cargo: 'Experta temática',
          centro: 'Centro de Servicios Financieros - Regional Distrito Capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animador y productor multimedia',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortes',
          cargo: 'Actividad didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
