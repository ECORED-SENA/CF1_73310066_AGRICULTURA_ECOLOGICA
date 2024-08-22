<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Certificaciones agrícolas ecológicas
    p.mb-5(data-aos="fade-right") La necesidad del consumidor de asegurar que el producto que adquiere con un sobreprecio efectivamente provenga de sistemas de producción ecológica hace que aparezcan los sellos de certificación como garantía de esta condición. Los sellos de certificación permiten:
    .row.justify-content-center.mb-5
      .col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.bg-c11
          figure.mb-3
            img(src='@/assets/curso/tema2/img1.svg', style="width: 100px", alt='').m-auto
          .row.mb-3
            .col-12
              .p-3.bg-white
                p.text-center.mb-0 #[b Trazabilidad del producto]
          p.text-center.mb-0 Los sellos que identifican a los productos certificados solo se pueden utilizar si se asegura una trazabilidad del producto que evidencie el manejo ecológico en su producción.
      .col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
        .p-4.bg-c11
          figure.mb-3
            img(src='@/assets/curso/tema2/img2.svg', style="width: 100px", alt='').m-auto
          .row.mb-3
            .col-12
              .p-3.bg-white
                p.text-center.mb-0 #[b Estándar de certificación]
          p.text-center.mb-0 El protocolo de producción ecológica se conoce como el estándar de certificado o norma.
      .col-md-8.col-lg-4(data-aos="fade-left")
        .p-4.bg-c11
          figure.mb-3
            img(src='@/assets/curso/tema2/img3.svg', style="width: 100px", alt='').m-auto
          .row.mb-3
            .col-12
              .p-3.bg-white
                p.text-center.mb-0 #[b Certificadoras]
          p.text-center.mb-0 Las empresas encargadas de verificar los requisitos para la asignación del sello del producto. Existen certificaciones diferenciadas por producto y otras por finca.
    .row.mb-5(data-aos="fade-right")
      .col-auto.bg-c6
        .row.align-items-end
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema1/img8.svg', style="width: 60px", alt='').m-auto
          .col
            h2.mb-1 Tipos de certificaciones
    p.mb-5(data-aos="fade-right") Existen numerosas certificaciones con énfasis en diversas áreas, como:
    .row.justify-content-center.mb-5
      .col-lg-10
        .row
          .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
            .p-4.bg-c3
              .row.align-items-center
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema2/img4.svg', style="width: 170px", alt='').m-auto
                .col
                  .row
                    .col-12.mb-3
                      .p-3.bg-c8
                        p.text-center.mb-0 #[b Producción limpia]
                    .col-12.mb-3
                      .p-3.bg-c8
                        p.text-center.mb-0 #[b Equidad social]
                    .col-12
                      .p-3.bg-c8
                        p.text-center.mb-0 #[b Buenas prácticas]
          .col-lg-5(data-aos="fade-left")
            figure
              img(src='@/assets/curso/tema2/img1.png', style="width: 430px", alt='').m-auto
    .row.mb-5(data-aos="fade-right")
      .col-auto.bg-c6
        .row.align-items-end
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema1/img8.svg', style="width: 60px", alt='').m-auto
          .col
            h2.mb-1 Reglamentaciones en Colombia
    p.mb-5(data-aos="fade-right") En el caso de los productos ecológicos, específicamente los sellos de producto orgánico, estos son reglamentados en Colombia por el Ministerio de Agricultura y Desarrollo Rural (MADR). Las reglamentaciones se encuentran en los siguientes documentos:
    .row.align-items-center.mb-5
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
        .row
          .col-12.bg-c2
            .p-3
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema2/img5.svg', style="width: 30px", alt='').m-auto
                .col
                  p.mb-0 #[b Resolución 0199 de 2016 MADR (1488)]
          .col-12.bg-c12
            .p-3
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema2/img5.svg', style="width: 30px", alt='').m-auto
                .col
                  p.mb-0 #[b Reglamento de la producción Agropecuaria Ecológica MADR (1134)]
          .col-12.bg-c2
            .p-3
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema2/img5.svg', style="width: 30px", alt='').m-auto
                .col
                  p.mb-0 #[b Resolución 148 de 2004:] Creación y Reglamentación Sello Alimento Ecológico MADR (993)
          .col-12.bg-c12
            .p-3
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema2/img5.svg', style="width: 30px", alt='').m-auto
                .col
                  p.mb-0 #[b Resolución 033 de 2007:] Modificación de la Resolución 148/04
          .col-12.bg-c2
            .p-3
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema2/img5.svg', style="width: 30px", alt='').m-auto
                .col
                  p.mb-0 #[b Resolución 0187 de 2016:] Periodo de conversión ecológica MADR (427)
      .col-lg-3(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img2.png', style="width: 330px", alt='').m-auto
    p.mb-5(data-aos="fade-right") Estas normativas aseguran que los productos etiquetados como ecológicos cumplan con los estándares necesarios para mantener su integridad y autenticidad.
    .row.bg-c13
      .col-13
        .px-5
          .row.mb-5(data-aos="fade-right")
            .col-auto.bg-c6
              .row.align-items-end
                .col-auto.pe-0
                  figure
                    img(src='@/assets/curso/tema1/img8.svg', style="width: 60px", alt='').m-auto
                .col
                  h2.mb-1 Certificación  a nivel mundial
          p.mb-5(data-aos="fade-right") A nivel mundial las certificaciones ecológicas más conocidas son:
          .row.align-items-center.mb-5
            .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
              .row
                .col-12
                  .p-3.bg-c14
                    .row.align-items-center
                      .col-md-auto.mb-4.mb-md-0
                        figure
                          img(src='@/assets/curso/tema2/img5.png', style="width: 130px", alt='').m-auto
                      .col
                        p.mb-0 #[b BCS]
                        p.mb-0 Certificación para ejecutar el Reglamento Europeo de producción orgánica, según la Comunidad Económica Europea (CEE). Alemania.
                    .hr1.my-3
                    .row.align-items-center
                      .col-md-auto.mb-4.mb-md-0
                        figure
                          img(src='@/assets/curso/tema2/img6.png', style="width: 130px", alt='').m-auto
                      .col
                        p.mb-0 #[b USDA ORGANIC]
                        p.mb-0 Certificación Orgánica del Departamento de Agricultura de los Estados Unidos de América para productos agrícolas, pecuarios y de recolección silvestre. Estados Unidos.
                    .hr1.my-3
                    .row.align-items-center
                      .col-md-auto.mb-4.mb-md-0
                        figure
                          img(src='@/assets/curso/tema2/img7.png', style="width: 130px", alt='').m-auto
                      .col
                        p.mb-0 #[b ECOCERT]
                        p.mb-0 Certificación Orgánica. Francia.
                    .hr1.my-3
                    .row.align-items-center
                      .col-md-auto.mb-4.mb-md-0
                        figure
                          img(src='@/assets/curso/tema2/img8.png', style="width: 130px", alt='').m-auto
                      .col
                        p.mb-0 #[b JAS]
                        p.mb-0 Certificación de producción agrícola orgánica, según el Ministerio Forestal, Pesquero y de Agricultura de Japón.
                    .hr1.my-3
                    .row.align-items-center
                      .col-md-auto.mb-4.mb-md-0
                        figure
                          img(src='@/assets/curso/tema2/img9.png', style="width: 130px", alt='').m-auto
                      .col
                        p.mb-0 #[b Certificación Comisión Europea]
                        p.mb-0 Certificación orgánica para productos agrícolas, pecuarios, de recolección silvestre, insumos para la agricultura orgánica y miel bajo las normas CEE834/2007 y CEE889/2008 para el mercado europeo.
            .col-lg-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img4.png', style="width: 370px", alt='').m-auto
          p.mb-5(data-aos="fade-right") Igualmente, existen certificaciones para productos de exportación, las cuales incluyen las buenas prácticas, pero no necesariamente todas son para certificación ecológica. Las más conocidas son:
          .row.justify-content-center(data-aos="fade-left")
            .col-md-6.col-lg-3.mb-4.mb-lg-0
              .p-4.bg-c11
                figure.mb-3
                  img(src='@/assets/curso/tema2/img10.png', style="width: 350px", alt='').m-auto
                .row.mb-3
                  .col-12
                    .p-3.bg-white
                      p.text-center.mb-0 #[b GLOBAL G.A.P.]
                p.text-center.mb-0 Global Good Agricultural Practice. Certificación para buenas prácticas de los productores agroalimentarios.
            .col-md-6.col-lg-3.mb-4.mb-lg-0
              .p-4.bg-c11
                figure.mb-3
                  img(src='@/assets/curso/tema2/img11.png', style="width: 350px", alt='').m-auto
                .row.mb-3
                  .col-12
                    .p-3.bg-white
                      p.text-center.mb-0 #[b Rainforest Alliance]
                p.text-center.mb-0 Certificación para la conservación de la biodiversidad y medios de vida sostenibles.
            .col-md-6.col-lg-3.mb-4.mb-lg-0
              .p-4.bg-c11
                figure.mb-3
                  img(src='@/assets/curso/tema2/img12.png', style="width: 350px", alt='').m-auto
                .row.mb-3
                  .col-12
                    .p-3.bg-white
                      p.text-center.mb-0 #[b UTZ]
                p.text-center.mb-0 Certificación de agricultura sostenible que en 2018 se unió a Rainforest Alliance.
            .col-md-6.col-lg-3.mb-4.mb-lg-0
              .p-4.bg-c11
                figure.mb-3
                  img(src='@/assets/curso/tema2/img13.png', style="width: 350px", alt='').m-auto
                .row.mb-3
                  .col-12
                    .p-3.bg-white
                      p.text-center.mb-0 #[b FAIRTRADE]
                p.text-center.mb-0 Certificación en comercio justo. Alemania.

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
