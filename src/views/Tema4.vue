<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Elementos de la agroecología
    .row.align-items-center
      .col-lg-9.order-2.order-lg-1
        p.mb-0 Según FAO (2018), los agroecosistemas manejan elementos que son fundamentales desde el punto de vista agroecológico, encontrando: biodiversidad, intercambio de conocimientos, sinergias, eficiencia, reciclaje, resiliencia, valores humanos y sociales, cultura y tradiciones alimentarias, gobernanza responsable, economía circular y solidaria.
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema4/img1.svg", style="width: 300px", alt="").m-auto
    Separador
    #t_4_1
    .titulo-segundo.color-secundario
      h2 4.1 Biodiversidad
    .row.align-items-center
      .col-lg-8.order-2.order-lg-1
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
                  p.mb-0 Incluyen tanto la producción agrícola como pecuaria, favoreciendo la diversidad espacial.
          .col-10.col-md-8.col-lg-6
            .p-4.bg-c8.h-100
              .row.align-items-center
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src="@/assets/curso/tema4/img3.png", style="width: 100px", alt="").m-auto
                .col
                  p.mb-0 #[b Rotación de cultivos]
                  p.mb-0 Favorece la diversidad temporal.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema4/img1.png", style="width: 380px", alt="").m-auto
    .row.bg-c16
      .col-12
        .px-5.pt-5
          p.mb-5 Los sistemas integrados son:
          .row.justify-content-center.mb-5
            .col-md-8.col-lg-5.mb-4.mb-lg-0
              .row
                .col-12
                  figure
                    img(src="@/assets/curso/tema4/img5.png", style="width: 490px", alt="").m-auto
                .col-12
                  .p-4.bg-c17
                    p.mb-0 #[b Agroecosistemas de producción]
                    p.mb-0 Incluyen tanto la producción agrícola como pecuaria, favoreciendo la diversidad espacial.
            .col-md-8.col-lg-5
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
      .col-lg-8.order-2.order-lg-1
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
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema4/img8.png", style="width: 380px", alt="").m-auto
    p.mb-5 Los beneficios del intercambio de conocimientos son:
    .row.justify-content-center
      .col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.bg-c11
          figure.mb-3
            img(src='@/assets/curso/tema4/img4.svg', style="width: 100px", alt='').m-auto
          .row.mb-3
            .col-12
              .p-3.bg-white
                p.text-center.mb-0 #[b Adaptación al cambio climático]
          p.text-center.mb-0 Combinación de conocimientosd prácticos y científicos para enfrentar desafíos climáticos.
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
    p Las sinergias son las interacciones entre dos o más componentes de un sistema con una función común que es la de producir un resultado.
    p En agroecosistemas, las sinergias son particularmente importantes porque:

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
