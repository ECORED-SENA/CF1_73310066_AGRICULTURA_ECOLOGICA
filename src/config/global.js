export default {
  global: {
    componenteFormativo: 'Principios de la agroecología',
    descripcionCurso:
      'Este componente formativo aborda la agroecología, incluyendo principios, prácticas y certificaciones agrícolas ecológicas. Explora modelos alternativos de agricultura como la agricultura ecológica, orgánica, biológica y natural. También destaca la importancia de la biodiversidad, el reciclaje y la resiliencia en los agroecosistemas, y promueve valores humanos y sociales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Generalidades',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Certificaciones agrícolas ecológicas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Principios de la agroecología',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Elementos de la agroecología',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Biodiversidad',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Intercambio de conocimientos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Sinergias',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Eficiencia',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Reciclaje',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Resiliencia',
            hash: 't_4_6',
          },
          {
            numero: '4.7',
            titulo: 'Valores humanos y sociales',
            hash: 't_4_7',
          },
          {
            numero: '4.8',
            titulo: 'Cultura y tradiciones alimentarias',
            hash: 't_4_8',
          },
          {
            numero: '4.9',
            titulo: 'Gobernanza responsable',
            hash: 't_4_9',
          },
          {
            numero: '4.10',
            titulo: 'Economía circular y solidaria',
            hash: 't_4_10',
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
        download: 'downloads/prueba.pdf',
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
      tema: 'Generalidades',
      referencia:
        'Ecología verde (2018). Qué es la AGROECOLOGÍA - Agroecologia CARACTERÍSTICAS [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/NJ1CBZ34WyQ?feature=shared',
    },
    {
      tema: 'Certificaciones agrícolas ecológicas',
      referencia:
        'VisionSacha (2020).   Certificación Orgánica [Clase 1] [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/aZZvyosK_-w?feature=shared',
    },
    {
      tema: 'Principios de la agroecología',
      referencia:
        'Secretaria General Comunidad Andina. (2011). Agricultura Familiar Agroecológica Campesina en la Comunidad Andina.',
      tipo: 'PDF',
      link:
        'http://www.comunidadandina.org/StaticFiles/2011610181827revista_agroecologia.pdf',
    },
    {
      tema: 'Principios de la agroecología',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2022). Bases conceptuales de la agroecología. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/iPpLdjtIbtA?feature=shared',
    },
    {
      tema: 'Principios de la agroecología',
      referencia:
        'Altieri, M. (2022.). Agroecología: Principios y estrategias para diseñar una agricultura que conserva recursos naturales y asegura la soberanía alimentaria. Corporación Grupo Semillas.',
      tipo: 'Documento',
      link:
        'https://www.semillas.org.co/es/publicaciones/agroecologia-principios-y-estrategias-para-disenar-una-agricultura-que-conserva-recursos-naturales-y-asegura-la-soberania',
    },
    {
      tema: 'Elementos de la agroecología',
      referencia:
        'INIA Chile (2021).¿Cuáles son los principios de la agroecología?. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/xDFrLFScR_A?feature=shared',
    },
  ],
  glosario: [
    {
      termino: 'Agricultura orgánica',
      significado:
        'sistema de producción agrícola que maximiza el uso de recursos internos de la finca, enfatizando la fertilidad del suelo y minimizando el uso de insumos no renovables y sintéticos.',
    },
    {
      termino: 'Agroecología',
      significado:
        'disciplina científica que estudia los componentes de un sistema agrícola, sus interrelaciones y la manera de intervenirlo con prácticas sostenibles.',
    },
    {
      termino: 'Biodiversidad',
      significado:
        'diversidad de especies y recursos genéticos dentro de un ecosistema, fundamental para la resiliencia y sostenibilidad de los agroecosistemas.',
    },
    {
      termino: 'Certificación ecológica',
      significado:
        'proceso de verificación que asegura que los productos agrícolas cumplen con normas específicas de producción ecológica.',
    },
    {
      termino: 'Coberturas vivas',
      significado:
        'cultivos rastreros o de porte bajo utilizados para proteger y mejorar la calidad del suelo.',
    },
    {
      termino: 'Control biológico',
      significado:
        'uso de organismos vivos para regular la población de plagas y enfermedades en la agricultura.',
    },
    {
      termino: 'Permacultura',
      significado:
        'sistema de diseño agrícola que busca crear ecosistemas de producción sostenibles y autosuficientes.',
    },
    {
      termino: 'Reciclaje',
      significado:
        'proceso de reutilización de nutrientes, agua y biomasa dentro de un agroecosistema para reducir desperdicios y aumentar la eficiencia.',
    },
    {
      termino: 'Resiliencia',
      significado:
        'capacidad de un sistema agrícola de recuperarse de alteraciones o perturbaciones, como plagas, enfermedades o cambios climáticos.',
    },
    {
      termino: 'Sinergias',
      significado:
        'interacciones entre componentes de un sistema agrícola que producen un efecto combinado mayor al que producirían por separado, mejorando la eficiencia y resiliencia del sistema.',
    },
  ],
  referencias: [
    {
      referencia:
        'Altieri, M. A. (1985). Agroecología: principios y estrategias para diseñar una agricultura que conserva recursos naturales y asegura la soberanía alimentaria. Berkeley: Universidad de California.',
      link: '',
    },
    {
      referencia: 'EOCC. (2018). BCS ÖKO-GARANTIE. ',
      link: 'https://eocc.nu/members/bcs-oko-garantie/',
    },
    {
      referencia:
        'FAO. (2018). Plataforma de conocimientos sobre agricultura familiar. ',
      link: 'http://www.fao.org/family-farming/themes/agroecology/es/',
    },
    {
      referencia: 'FAO. (s.f.). ¿Qué es la agricultura orgánica? ',
      link: 'http://www.fao.org/docrep/007/ad818s/ad818s03.htm',
    },
    {
      referencia:
        'Gliessman, S. (2002). Agroecología. Procesos Ecológicos en Agricultura Sostenible. Turrialba: LITOCAT.',
      link: '',
    },
    {
      referencia: 'GLOBAL G.A.P. (2018). Certificación GLOBAL G.A.P. ',
      link: 'https://www.globalgap.org/es',
    },
    {
      referencia:
        'González, K. (2018). Prepare Biofertilizantes de elementos menores. ',
      link:
        'https://zoovetesmipasion.com/produccion-sostenible/prepare-un-caldo-super-magro-de-elementos-menores/',
    },
    {
      referencia: 'PNUD. (2018). Los ODS en acción. ',
      link:
        'http://www.undp.org/content/undp/es/home/sustainable-development-goals.html',
    },
    {
      referencia:
        'Rainforest Alliance. (2018). Qué significa el Certificado Rainforest Alliance? ',
      link:
        'https://www.rainforest-alliance.org/lang/es/about/rainforest-alliance-certified-seal',
    },
    {
      referencia:
        'Secretaria General Comunidad Andina. (2011). Agricultura Familiar Agroecológica Campesina en la Comunidad Andina. ',
      link:
        'http://www.comunidadandina.org/StaticFiles/2011610181827revista_agroecologia.pdf',
    },
    {
      referencia: 'USDA. (2018). USDA ORGANIC. ',
      link: 'https://www.usda.gov/topics/organic',
    },
    {
      referencia: 'UTZ. (2018). Certificación UTZ. ',
      link: 'https://utz.org/language-landingpage/sp/#undefined',
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
          nombre: 'Nina Elvira Rocha Nieto',
          cargo: 'Experta temática',
          centro:
            'Centro de Atención al Sector Agropecuario - Regional Risaralda',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Gissela Del Carmen Alvis Ladino',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Gloria Lida Alzate Suarez',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locutor',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Locutor',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Germán Acosta Ramos',
          cargo: 'Locutor',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locutor',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Productor pódcast',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'José Eduardo Solano Rivero',
          cargo: 'Productor pódcast',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Gustavo Adolfo Contreras Barranco',
          cargo: 'Guionista validador',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Guionista validador',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Jaime Hernán Tejada Llano',
        //  cargo: 'Validador y vinculador de recursos educativos digitales',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
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
