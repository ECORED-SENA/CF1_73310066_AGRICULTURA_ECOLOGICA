<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1
      .col-12
        .px-5.pb-5
          .row.mb-5
            .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
              p La agroecología se presenta como una alternativa esencial para enfrentar los desafíos medioambientales y sociales que surgen de los métodos agrícolas convencionales. Este enfoque integral estudia los componentes de los sistemas agrícolas y sus interrelaciones, promoviendo prácticas sostenibles que respetan el medio ambiente y mejoran la calidad de vida de las comunidades rurales. Al basarse en principios ecológicos y sociales, la agroecología busca optimizar la utilización de recursos naturales, minimizar el uso de insumos externos y fomentar la biodiversidad.
              .row
                .col-12
                  .p-4.bg-c2
                    .row.align-items-center
                      .col-md-auto.mb-4.mb-md-0
                        figure
                          img(src='@/assets/curso/intro/img1.svg', style="width: 80px", alt='').m-auto
                      .col
                        p.mb-0 En el marco de la agricultura ecológica, se destacan diversas prácticas innovadoras y certificaciones que aseguran la producción limpia y sostenible de alimentos.
            .col-lg-5(data-aos="fade-left")
              figure
                img(src='@/assets/curso/intro/img2.png', style="width: 500px", alt='').m-auto
          .row.justify-content-center.mb-5
            .col-md-8.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
              .p-4.bg-c3
                figure.mb-4
                  img(src='@/assets/curso/intro/img2.svg', style="width: 100px", alt='')
                p #[b Certifficaciones]
                ul.lista-ul
                  li.d-flex
                    i.fas.fa-check-circle
                    |
                    p.mb-0 #[b Autenticidad de los productos:] las certificaciones garantizan al consumidor la autenticidad de los productos ecológicos.
                  li.d-flex
                    i.fas.fa-check-circle
                    |
                    p.mb-0 #[b Apoyo a los agricultores:] ayudan a los agricultores en la adopción de métodos sostenibles.
            .col-md-8.col-lg-5(data-aos="fade-left")
              .p-4.bg-c3.h-100
                figure.mb-4
                  img(src='@/assets/curso/intro/img3.svg', style="width: 100px", alt='')
                p #[b Beneficios]
                ul.lista-ul
                  li.d-flex
                    i.fas.fa-check-circle
                    |
                    p.mb-0 #[b Salud del suelo:] preservan la salud del suelo.
                  li.d-flex
                    i.fas.fa-check-circle
                    |
                    p.mb-0 #[b Calidad del agua:] mantienen la calidad del agua.
                  li.d-flex
                    i.fas.fa-check-circle
                    |
                    p.mb-0 #[b Diversidad biológica:] Promueven la diversidad biológica.
          .row
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/intro/img3.png', style="width: 400px", alt='').m-auto
            .col-lg-8(data-aos="fade-left")
              p.mb-0 La implementación de la agroecología implica una transformación profunda de las prácticas agrícolas, basada en el conocimiento local y científico, y en la participación de las comunidades. Fomenta la autonomía de los agricultores, contribuye a la seguridad alimentaria y apoya el desarrollo sostenible a nivel global. Este enfoque no solo se centra en la producción de alimentos, sino también en la construcción de sistemas alimentarios justos y equitativos, que respeten tanto a las personas como al planeta.
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
