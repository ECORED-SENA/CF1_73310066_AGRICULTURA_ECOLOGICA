<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Principios de la agroecología
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La agroecología, además de promover el uso de prácticas alternativas y favorecer agroecosistemas con dependencia mínima de agroquímicos y uso eficiente de energía, impulsa las interacciones y sinergias entre los organismos vivos, para que los sistemas incrementen la fertilidad del suelo, la productividad y la protección de cultivos.
    p.mb-4(data-aos="fade-down") La agroecología como ciencia sigue sus propios principios, los cuales se resumen de la siguiente manera:
    .row.bg-c15
      .col-12
        .px-5.pb-5
          .row.align-items-center.mb-5
            .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema3/img3.png', style="width: 300px", alt='').m-auto
            .col-lg-9(data-aos="fade-left")
              SlyderF(columnas="col-md-6 col-xl-4")
                .tarjeta.color-acento-botones
                  .p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/tema3/img1.svg' alt='AvatarTop')
                    p.text-center.mb-0 Lograr que de manera óptima estén disponibles los nutrientes, a través del reciclaje de biomasa en el sistema.
                .tarjeta.color-acento-botones
                  .p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/tema3/img2.svg' alt='AvatarTop')
                    p.text-center.mb-0 Asegurar la calidad del suelo para los cultivos mediante prácticas como el uso de materia orgánica descompuesta y el favorecimiento de microorganismos benéfico en el suelo.
                .tarjeta.color-acento-botones
                  .p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/tema3/img3.svg' alt='AvatarTop')
                    p.text-center.mb-0 Minimizar las salidas del sistema, tales como: agua, materia orgánica, aire y energía solar.
                .tarjeta.color-acento-botones
                  .p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/tema3/img4.svg' alt='AvatarTop')
                    p.text-center.mb-0 Propiciar la biodiversidad del sistema.
                .tarjeta.color-acento-botones
                  .p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/tema3/img5.svg' alt='AvatarTop')
                    p.text-center.mb-0 Aumentar las interacciones benéficas entre los organismos vivos, pertenecientes del sistema. Sinergismos.
                .tarjeta.color-acento-botones
                  .p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/tema3/img6.svg' alt='AvatarTop')
                    p.text-center.mb-0 Establecer una agricultura de procesos.
          .row
            .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
              .p-4.bg-c10.h-100
                .row.align-items-center
                  .col-lg-4.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img12.svg', style="width: 300px", alt='').m-auto
                  .col-lg-8
                    p #[b Pódcast]
                    p Ahora Don Campos y Azusena explican los principios de agroecología, destacando la importancia de la sostenibilidad y la conservación de los recursos naturales.
                    TarjetaAudio.color-primario(
                      texto="Principios de la agroecología"
                      :audio="require('@/assets/curso/tema3/audio1.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema3/img4.png', style="width: 360px", alt='').m-auto

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
