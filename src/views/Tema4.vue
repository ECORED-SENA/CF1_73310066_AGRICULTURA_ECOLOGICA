<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Elementos de la agroecología
    .row.align-items-center
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        p.mb-0 Según FAO (2018), los agroecosistemas manejan elementos que son fundamentales desde el punto de vista agroecológico, encontrando: biodiversidad, intercambio de conocimientos, sinergias, eficiencia, reciclaje, resiliencia, valores humanos y sociales, cultura y tradiciones alimentarias, gobernanza responsable, economía circular y solidaria.
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema4/img1.svg", style="width: 300px", alt="").m-auto
    Separador
    #t_4_1
    .titulo-segundo.color-secundario
      h2 4.1 Biodiversidad
    .row.align-items-center
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p Los sistemas agroecológicos optimizan la diversidad de las especies y de los recursos genéticos. Esto significa que, además de contener  plantas, animales y microorganismos, dentro de estos se encuentra diversidad; por ejemplo, de especies vegetales de distintas alturas y formas que reciben el nombre de estratos, lo que favorece la llamada diversidad vertical.
        p La diversidad en prácticas agroecológicas permite:
        .row.justify-content-center
          .col-10.col-md-8.col-lg-6.mb-4.mb-lg-0
            .p-4.bg-c8
              .row.align-items-center
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src="@/assets/curso/tema4/img2.png", style="width: 100px", alt="").m-auto
                .col
                  p.mb-0 #[b Cultivos intercalados]
                  p.mb-0 Uso de barreras vivas, tutores vivos y cultivos asociados que incrementan la diversidad espacial.
          .col-10.col-md-8.col-lg-6
            .p-4.bg-c8.h-100
              .row.align-items-center
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src="@/assets/curso/tema4/img3.png", style="width: 100px", alt="").m-auto
                .col
                  p.mb-0 #[b Rotación de cultivos]
                  p.mb-0 Favorece la diversidad temporal.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema4/img1.png", style="width: 380px", alt="").m-auto
    .row.bg-c16
      .col-12
        .px-5.pt-5
          p.mb-5(data-aos="fade-right") Los sistemas integrados son:
          .row.justify-content-center.mb-5
            .col-md-8.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
              .row
                .col-12
                  figure
                    img(src="@/assets/curso/tema4/img5.png", style="width: 490px", alt="").m-auto
                .col-12
                  .p-4.bg-c17
                    p.mb-0 #[b Agroecosistemas de producción]
                    p.mb-0 Incluyen tanto la producción agrícola como pecuaria, favoreciendo la diversidad espacial.
            .col-md-8.col-lg-5(data-aos="fade-left")
              .row
                .col-12
                  figure
                    img(src="@/assets/curso/tema4/img6.png", style="width: 490px", alt="").m-auto
                .col-12
                  .p-4.bg-c17
                    p.mb-0 #[b Producción acuícola integrada]
                    p.mb-0 Siguen los mismos principios en cuanto a biodiversidad.
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade-right")
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema4/img7.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 El incremento de la biodiversidad favorece los llamados servicios ambientales, tales como #[b la polinización y la calidad del suelo], que son fundamentales en la agricultura. Además, aumenta #[b la productividad y la eficiencia en el uso de los recursos]. Los sistemas diversos son más resilientes ante situaciones como el cambio climático. También ofrecen alternativas de ingresos económicos al cubrir el deseo de algunos consumidores de alimentos y productos más sanos y respetuosos con el ambiente.
    Separador
    #t_4_2
    .titulo-segundo.color-secundario
      h2 4.2 Intercambio de conocimientos
    .row.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p Las prácticas agroecológicas se adaptan según el contexto ambiental, social, económico, cultural y político. Esta adaptación depende en gran medida del intercambio de conocimientos, tanto del nivel académico como del saber popular, involucrando a los actores conocedores del medio, canalizando la expansión y la formación de nuevos saberes, enfatizando la experiencia en campo y los consiguientes resultados.
        p Las fuentes de conocimiento son:
        .row.mb-3
          .col-12
            .p-3.bg-c8
              .row.align-items-center
                .col-auto
                  figure
                    img(src="@/assets/curso/tema4/img2.svg", style="width: 50px", alt="").m-auto
                .col
                  p.mb-0 #[b Conocimientos académicos o científicos]
                  p.mb-0 Aportan investigaciones y teorías que fundamentan las prácticas agroecológicas.
        .row
          .col-12
            .p-3.bg-c8
              .row.align-items-center
                .col-auto
                  figure
                    img(src="@/assets/curso/tema4/img3.svg", style="width: 50px", alt="").m-auto
                .col
                  p.mb-0 #[b Saber popular]
                  p.mb-0 lncluye el conocimiento tradicional y las experiencias de los agricultores y comunidades locales.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema4/img8.png", style="width: 380px", alt="").m-auto
    p.mb-5(data-aos="fade-right") Los beneficios del intercambio de conocimientos son:
    .row.justify-content-center
      .col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.bg-c11
          figure.mb-3
            img(src='@/assets/curso/tema4/img4.svg', style="width: 100px", alt='').m-auto
          .row.mb-3
            .col-12
              .p-3.bg-white
                p.text-center.mb-0 #[b Adaptación al cambio climático]
          p.text-center.mb-0 Combinación de conocimientos prácticos y científicos para enfrentar desafíos climáticos.
      .col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
        .p-4.bg-c11
          figure.mb-3
            img(src='@/assets/curso/tema4/img5.svg', style="width: 100px", alt='').m-auto
          .row.mb-3
            .col-12
              .p-3.bg-white
                p.text-center.mb-0 #[b Innovación y soluciones ecológicas]
          p.text-center.mb-0 La promoción de procesos participativos y el intercambio de saberes contribuyen a la creación de soluciones adaptadas a cada contexto.
      .col-md-8.col-lg-4(data-aos="fade-left")
        .p-4.bg-c11
          figure.mb-3
            img(src='@/assets/curso/tema4/img6.svg', style="width: 100px", alt='').m-auto
          .row.mb-3
            .col-12
              .p-3.bg-white
                p.text-center.mb-0 #[b Experiencia en campo]
          p.text-center.mb-0 La práctica y resultados obtenidos en el campo fortalecen y validan los conocimientos compartidos.
    Separador
    #t_4_3
    .titulo-segundo.color-secundario
      h2 4.3 Sinergias
    p(data-aos="fade-right") Las sinergias son las interacciones entre dos o más componentes de un sistema con una función común que es la de producir un resultado.
    p.mb-5(data-aos="fade-right") En agroecosistemas, las sinergias son particularmente importantes porque:
    .row.bg-c18.mb-5
      .col-12
        .p-5
          .row.justify-content-center
            .col-md-6.col-lg-5.mb-5.mb-md-0(data-aos="fade-right")
              .tarjeta-avatar
                img(src='@/assets/curso/tema4/img7.svg' alt='AvatarTop')
                .tarjeta.color-primario
                  .p-4
                    h2.text-center Eficiencia de uso de recursos
                    p.text-center Las sinergias aumentan la eficiencia en el uso de los recursos disponibles.
            .col-md-6.col-lg-5(data-aos="fade-left")
              .tarjeta-avatar
                img(src='@/assets/curso/tema4/img8.svg' alt='AvatarTop')
                .tarjeta.color-primario
                  .p-4
                    h2.text-center Resiliencia
                    p.text-center Las interacciones positivas entre los componentes del sistema aumentan la capacidad de recuperación y adaptación del sistema ante cambios y desafíos.
    p.mb-5(data-aos="fade-right") Los beneficios de las sinergias son:
    .row.justify-content-center
      .col-10.col-md-8.col-lg-5.m-2(data-aos="fade-right")
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/tema4/img10.png', style="width: 530px", alt='').m-auto
          .col-12.bg-c19
            .p-4
              p.text-center #[b Mitigación de los efectos del cambio climático]
              p.text-center.mb-0 Las sinergias favorecen la adaptación al cambio climático.
      .col-10.col-md-8.col-lg-5.m-2(data-aos="fade-left")
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/tema4/img11.png', style="width: 530px", alt='').m-auto
          .col-12.bg-c19
            .p-4
              p.text-center #[b Promoción en sistemas agroecológicos]
              p.text-center.mb-0 Los sistemas agroecológicos promueven al máximo las sinergias positivas dentro del sistema, optimizando los beneficios de cada componente y su interacción.
    Separador
    #t_4_4
    .titulo-segundo.color-secundario
      h2 4.4 Eficiencia
    p(data-aos="fade-right") Se refiere a la óptima utilización de los recursos necesarios para producir: #[b agua, suelo, clima, recurso humano y animal].
    p.mb-5(data-aos="fade-right") La eficiencia en agroecosistemas  se da a través de:
    .row.justify-content-center.mb-5
      .col-lg-10
        .row.align-items-center
          .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
            .p-4.bg-c3
              .row.align-items-center
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema4/img9.svg', style="width: 170px", alt='').m-auto
                .col
                  .row
                    .col-12.mb-3
                      .p-3.bg-c8
                        p.text-center.mb-0 #[b Uso de energía sola]
                    .col-12.mb-3
                      .p-3.bg-c8
                        p.text-center.mb-0 #[b Consumo de recursos]
                    .col-12
                      .p-3.bg-c8
                        p.text-center.mb-0 #[b Gestión de carbono y nitrógeno del aire y suelo]
          .col-lg-4(data-aos="fade-left")
            figure
              img(src='@/assets/curso/tema4/img12.png', style="width: 295px", alt='').m-auto
    .row.align-items-center
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4/img13.png', style="width: 250px", alt='').m-auto
      .col-lg-9(data-aos="fade-left")
        p Los beneficios de la eficiencia son:
        .row
          .col-12.bg-c2
            .p-3
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema4/img10.svg', style="width: 30px", alt='').m-auto
                .col
                  p.mb-0 #[b Menores costos de producción.]
          .col-12.bg-c12
            .p-3
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema4/img11.svg', style="width: 30px", alt='').m-auto
                .col
                  p.mb-0 #[b Disminución de los efectos ambientales negativos.]
          .col-12.bg-c2
            .p-3
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema4/img12.svg', style="width: 30px", alt='').m-auto
                .col
                  p.mb-0 #[b Reducción de la dependencia de recursos externos al sistema.]
          .col-12.bg-c12
            .p-3
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema4/img13.svg', style="width: 30px", alt='').m-auto
                .col
                  p.mb-0 #[b Aumento de la autonomía y resiliencia ante adversidades ambientales, sociales o económicas.]
          .col-12.bg-c2
            .p-3
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema4/img14.svg', style="width: 30px", alt='').m-auto
                .col
                  p.mb-0 #[b Incremento en los rendimientos.]
    Separador
    #t_4_5
    .titulo-segundo.color-secundario
      h2 4.5 Reciclaje
    .row.justify-content-center.mb-4
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p Los sistemas naturales no presentan desperdicio ni contaminación y los agroecosistemas intentan imitar estos sistemas, por lo que se deben reciclar nutrientes, agua y biomasa a fin de reducir sus salidas en forma de desechos. Entre menos desperdicio, mayor eficiencia del sistema.
        p Las prácticas de reciclaje en agricultura ecológica son:
        .row
          .col-md-6.mb-4.mb-md-0
            .p-4.bg-c11
              figure.mb-3
                img(src='@/assets/curso/tema4/img15.svg', style="width: 60px", alt='')
              p.mb-0 #[b Reutilización de residuos]
              p.mb-0 Los residuos de la producción se transforman en insumos disponibles para los cultivos y los animales.
          .col-md-6
            .p-4.bg-c11
              figure.mb-3
                img(src='@/assets/curso/tema4/img16.svg', style="width: 60px", alt='')
              p.mb-0 #[b Circulación de biomasa]
              p.mb-0 La biomasa circula internamente en el sistema, tratando de no dejar escapar eI mínimo recurso.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img14.png', style="width: 350px", alt='').m-auto
    p.mb-4 Las aplicaciones del reciclaje son:
    .row.justify-content-center
      .col-10.col-md-8.col-lg.m-2(data-aos="fade-right")
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/tema4/img15.png', style="width: 530px", alt='').m-auto
          .col-12.bg-c19
            .p-4
              p.text-center #[b Agua]
              p.text-center.mb-0 Reutilización y manejo eficiente del agua.
      .col-10.col-md-8.col-lg.m-2(data-aos="fade-top")
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/tema4/img16.png', style="width: 530px", alt='').m-auto
          .col-12.bg-c19
            .p-4
              p.text-center #[b Materia orgánica]
              p.text-center.mb-0 Uso de estiércol, restos de animales y residuos de cosecha.
      .col-10.col-md-8.col-lg.m-2(data-aos="fade-left")
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/tema4/img17.png', style="width: 530px", alt='').m-auto
          .col-12.bg-c19
            .p-4
              p.text-center #[b Residuos de prácticas culturales]
              p.text-center.mb-0 Aprovechamiento de todos los desechos generados durante las prácticas agrícolas.
    Separador
    #t_4_6
    .titulo-segundo.color-secundario
      h2 4.6 Resiliencia
    .row.bg-c20
      .col-12
        .px-5
          .row.align-items-center.mb-5
            .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
              p La resiliencia es la capacidad de un sistema de recuperarse de las alteraciones. El sistema se encuentra en equilibrio hasta que sucede una anomalía que lo perturba. En el caso de los agroecosistemas, pueden ser fenómenos meteorológicos, ataque de plagas o enfermedades, contaminaciones extremas, entre otros.
              p.mb-0 La resiliencia en agroecosistemas se da:
            .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src="@/assets/curso/tema4/img17.svg", style="width: 300px", alt="").m-auto
          .row.justify-content-center
            .col-11.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
              .p-4.bg-c21
                figure.mb-4
                  img(src='@/assets/curso/tema4/img19.png', style="width: 350px", alt='')
                .row.mb-3
                  .col-12
                    .p-3.bg-white
                      p.text-center.mb-0 #[b Diversidad biológica]
                p.text-center.mb-0 La diversidad biológica de los agroecosistemas hace que exista una autorregulación de las poblaciones o infecciones, haciendo que sus efectos no sean nefastos y que rápidamente vuelvan a su estado de equilibrio los sistemas.
            .col-11.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
              .p-4.bg-c21
                figure.mb-4
                  img(src='@/assets/curso/tema4/img20.png', style="width: 350px", alt='')
                .row.mb-3
                  .col-12
                    .p-3.bg-white
                      p.text-center.mb-0 #[b Fenómenos meteorológicos y contaminaciones extremas]
                p.text-center.mb-0 Los agroecosistemas pueden enfrentar y recuperarse de eventos climáticos adversos y contaminaciones severas.
            .col-11.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
              .p-4.bg-c21
                figure.mb-4
                  img(src='@/assets/curso/tema4/img21.png', style="width: 350px", alt='')
                .row.mb-3
                  .col-12
                    .p-3.bg-white
                      p.text-center.mb-0 #[b Variabilidad en la producción]
                p.text-center.mb-0 La variabilidad en la producción hace que, ante una novedad en alguno de los sistemas de producción, sea subsanada por otro en la misma unidad productiva.
            .col-11.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-left")
              .p-4.bg-c21
                figure.mb-4
                  img(src='@/assets/curso/tema4/img22.png', style="width: 350px", alt='')
                .row.mb-3
                  .col-12
                    .p-3.bg-white
                      p.text-center.mb-0 #[b Influencia mutua]
                p.text-center.mb-0 Los agroecosistemas forman parte de las comunidades humanas y, por tanto, es mutua su influencia.
    Separador
    #t_4_7
    .titulo-segundo.color-secundario
      h2 4.7 Valores humanos y sociales
    p.mb-5(data-aos="fade-left") El desarrollo sostenible se entiende como el cubrimiento de las necesidades presentes sin comprometer los recursos para las generaciones futuras. De igual manera, en el marco de las Naciones Unidas se formularon los llamados Objetivos del Desarrollo Sostenible, los cuales promueven un llamado mundial a erradicar la pobreza, proteger el planeta y lograr que todas las personas gocen de paz y prosperidad.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img23.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p #[b Agroecología y objetivos del desarrollo sostenible]
        br
        br
        p La agroecología se ubica en estos objetivos, relacionados con la mejora de los medios de vida. El productor es un componente esencial en los sistemas alimentarios y, por lo tanto, los valores humanos y sociales que le rodean son fundamentales en el logro de reconocer la dignidad humana, la equidad, la inclusión y la justicia.
    p.mb-5(data-aos="fade-right") Los beneficios de los agroecosistemas son:
    .row.justify-content-center.align-items-center
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Fomento de la autonomía")
            .col-md-8.mb-4.mb-md-0
              p.mb-0 Los agroecosistemas fomentan la autonomía de los productores.
            .col-md-4
              figure
                img(src='@/assets/curso/tema4/img25.png', style="width: 350px", alt='')
          .row(numero="2" titulo="Superación de la pobreza y malnutrición")
            .col-md-8.mb-4.mb-md-0
              p.mb-0 Ayudan a superar la pobreza, el hambre y la malnutrición.
            .col-md-4
              figure
                img(src='@/assets/curso/tema4/img26.png', style="width: 350px", alt='')
          .row(numero="3" titulo="Garantía de derechos")
            .col-md-8.mb-4.mb-md-0
              p.mb-0 Aseguran los mismos derechos a generaciones futuras.
            .col-md-4
              figure
                img(src='@/assets/curso/tema4/img27.png', style="width: 350px", alt='')
          .row(numero="4" titulo="Inclusión de mujeres")
            .col-md-8.mb-4.mb-md-0
              p.mb-0 Incluyen a las mujeres como parte del sistema de producción agrícola, brindándoles oportunidades en conocimientos, participación colectiva y oportunidades de ingresos.
            .col-md-4
              figure
                img(src='@/assets/curso/tema4/img28.png', style="width: 350px", alt='')
          .row(numero="5" titulo="Oportunidades")
            .col-md-8.mb-4.mb-md-0
              p.mb-0 Ofrecen a los jóvenes la oportunidad de una opción de vida con un trabajo digno y amigable con el medioambiente.
            .col-md-4
              figure
                img(src='@/assets/curso/tema4/img29.png', style="width: 350px", alt='')
      .col-lg-3(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img24.png', style="width: 350px", alt='').m-auto
    Separador
    #t_4_8
    .row.bg-c22
      .col-12
        .px-5
          .titulo-segundo.color-secundario
            h2 4.8 Cultura y tradiciones alimentarias
          p(data-aos="fade-right") La agroecología brinda la posibilidad de producir alimentos para surtir una dieta sana, diversificada y culturalmente adecuada, contribuyendo a la seguridad alimentaria y a la nutrición. También, promueve la producción de alimentos saludables, haciéndolos disponibles mediante su producción ecológica.
          p.mb-5(data-aos="fade-right") Los beneficios de la agroecología en la cultura alimentaria son:
          .row.justify-content-center.mb-5
            .col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              .p-4.bg-c11
                figure.mb-3
                  img(src='@/assets/curso/tema4/img18.svg', style="width: 100px", alt='').m-auto
                .row.mb-3
                  .col-12
                    .p-3.bg-white
                      p.text-center.mb-0 #[b Dieta sana y diversificada]
                p.text-center.mb-0 Posibilidad de producir alimentos que conforman una dieta equilibrada y variada.
            .col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
              .p-4.bg-c11
                figure.mb-3
                  img(src='@/assets/curso/tema4/img19.svg', style="width: 100px", alt='').m-auto
                .row.mb-3
                  .col-12
                    .p-3.bg-white
                      p.text-center.mb-0 #[b Producción culturalmente adecuada]
                p.text-center.mb-0 Alimentos que respetan y mantienen las tradiciones culturales.
            .col-md-8.col-lg-4(data-aos="fade-left")
              .p-4.bg-c11
                figure.mb-3
                  img(src='@/assets/curso/tema4/img20.svg', style="width: 100px", alt='').m-auto
                .row.mb-3
                  .col-12
                    .p-3.bg-white
                      p.text-center.mb-0 #[b Seguridad alimentaria y nutrición]
                p.text-center.mb-0 Contribuye a la seguridad alimentaria y a una mejor nutrición.
          .row
            .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema4/img31.png', style="width: 440px", alt='').m-auto
            .col-lg-7(data-aos="fade-left")
              p La recuperación de la diversidad alimentaria se da por:
              .row.mb-3
                .col-12
                  .p-4.bg-c8.rounded
                    p.mb-0 #[b Recuperación de alimentos variados]
                    p.mb-0 La agroecología recupera la diversidad de alimentos, haciendo más sostenible todo el sistema.
              .row.mb-3
                .col-12
                  .p-4.bg-c8.rounded
                    p.mb-0 #[b Disponibilidad de alimentos saludables]
                    p.mb-0 Promueve la producción de alimentos saludables mediante prácticas ecológicas.
    Separador
    #t_4_9
    .titulo-segundo.color-secundario
      h2 4.9 Gobernanza responsable
    .row
      .col-lg-8.bg-c2.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4
          p.mb-0 Se refiere a los mecanismos oficiales de respaldo al fomento de producción bajo sistemas agroecológicos. Algunos ejemplos de ello pueden ser la diferenciación mediante #[b marcas o sellos debidamente reglamentados, los incentivos], así como #[b los subsidios] a quienes brindan servicios ambientales. Igualmente, el adecuado acceso a los recursos naturales y de tierra, protegiendo suelos, biodiversidad y ofreciendo servicios ecosistémicos.
      .col-lg-4.ps-lg-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img32.png', style="width: 450px", alt='').m-auto
    Separador
    #t_4_10
    .titulo-segundo.color-secundario
      h2 4.10 Economía circular y solidaria
    .row.bg-c23
      .col-12
        .px-5
          .row
            .col-lg-8(data-aos="fade-right")
              p Promueve los mercados locales creando una economía rotativa. Los ingresos de los productores y un precio justo para los consumidores pueden darse en circuitos cortos. Se crean mercados más equitativos y sostenibles.
              .row.mb-4
                .col-12
                  .p-4.bg-c21
                    .row.align-items-center
                      .col-md-auto
                        figure
                          img(src='@/assets/curso/tema4/img21.svg', style="width: 100px", alt='').m-auto
                      .col
                        p.mb-0 La necesidad y el deseo de los consumidores de obtener productos más sanos se cubre con una producción accesible en mercados locales, etiquetas de denominación de origen, comercio electrónico, entre otros. Estos sistemas ayudan a disminuir el desperdicio, acortar las cadenas de valor de los alimentos y hacer más eficiente el uso de los recursos.
              p Los beneficios de la economía circular y solidaria son:
              .row
                .col-md-6.col-lg-3.mb-4.mb-lg-0
                  .p-4.bg-c11
                    figure.mb-3
                      img(src='@/assets/curso/tema4/img22.svg', style="width: 60px", alt='')
                    p #[b Mercados locales]
                    p.mb-0 Fomenta la producción accesible en mercados locales.
                .col-md-6.col-lg-3.mb-4.mb-lg-0
                  .p-4.bg-c11
                    figure.mb-3
                      img(src='@/assets/curso/tema4/img23.svg', style="width: 60px", alt='')
                    p #[b Etiquetas de denominación de origen]
                    p.mb-0 Garantizan la autenticidad y calidad de los productos.
                .col-md-6.col-lg-3.mb-4.mb-lg-0
                  .p-4.bg-c11
                    figure.mb-3
                      img(src='@/assets/curso/tema4/img24.svg', style="width: 60px", alt='')
                    p #[b Comercio electrónico]
                    p.mb-0 Facilita la distribución de productos agroecológicos.
                .col-md-6.col-lg-3.mb-4.mb-lg-0
                  .p-4.bg-c11
                    figure.mb-3
                      img(src='@/assets/curso/tema4/img24.svg', style="width: 60px", alt='')
                    p #[b Reducción del desperdicio]
                    p.mb-0 Ayuda a disminuir el desperdicio de alimentos.
            .col-lg-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema4/img34.png', style="width: 350px", alt='').m-auto

</template>

<script>
export default {
  name: 'Tema4',
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
