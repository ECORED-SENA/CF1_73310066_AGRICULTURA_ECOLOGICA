<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Manejo de los residuos sólidos en la producción avícola.',
      titulo: 'Cuestionario',
      introduccion:
        'Lea cada enunciado y luego seleccione la respuesta correcta según corresponda.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es uno de los modelos de producción agrícola implementado desde la década de los 70s?',
          imagen: require('@/assets/curso/img1.svg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Revolución tecnológica.', esCorrecta: false },
            { id: 'b', texto: 'Revolución industrial.', esCorrecta: false },
            { id: 'c', texto: 'Revolución verde.', esCorrecta: true },
            { id: 'd', texto: 'Revolución biológica.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué principio de la agroecología se refiere a asegurar la calidad del suelo?',
          imagen: require('@/assets/curso/img2.svg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Minimización de salidas.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Propiciación de biodiversidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Uso de materia orgánica descompuesta.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Establecimiento de una agricultura de procesos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de las siguientes es una certificación agrícola ecológica en Estados Unidos?',
          imagen: require('@/assets/curso/img3.svg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'ECOCERT.', esCorrecta: false },
            { id: 'b', texto: 'USDA ORGANIC.', esCorrecta: true },
            { id: 'c', texto: 'BCS.', esCorrecta: false },
            { id: 'd', texto: 'JAS.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué práctica de la agricultura ecológica utiliza cultivos rastreros como protección del suelo?',
          imagen: require('@/assets/curso/img4.svg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Uso de biopreparados.', esCorrecta: false },
            { id: 'b', texto: 'Uso de coberturas vivas.', esCorrecta: true },
            { id: 'c', texto: 'Control biológico.', esCorrecta: false },
            { id: 'd', texto: 'Uso de coberturas muertas.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Qué certificación es conocida por la conservación de la biodiversidad y medios de vida sostenibles?',
          imagen: require('@/assets/curso/img1.svg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Certificación UTZ.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Certificación Rainforest Alliance.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Certificación GLOBAL G.A.P.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Certificación FAIRTRADE.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es un modelo alternativo de agricultura que excluye el uso de agroquímicos?',
          imagen: require('@/assets/curso/img2.svg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Agricultura biológica.', esCorrecta: false },
            { id: 'b', texto: 'Agricultura tecnológica.', esCorrecta: false },
            { id: 'c', texto: 'Agricultura ecológica.', esCorrecta: true },
            { id: 'd', texto: 'Agricultura industrial.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es un elemento clave de los agroecosistemas que implica la capacidad de un sistema de recuperarse de las alteraciones?',
          imagen: require('@/assets/curso/img3.svg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Eficiencia.', esCorrecta: false },
            { id: 'b', texto: 'Reciclaje.', esCorrecta: false },
            { id: 'c', texto: 'Resiliencia.', esCorrecta: true },
            { id: 'd', texto: 'Gobernanza responsable.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Qué práctica de la agricultura ecológica incluye el uso de organismos reguladores de plagas?',
          imagen: require('@/assets/curso/img4.svg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Uso de biopreparados.', esCorrecta: false },
            { id: 'b', texto: 'Control biológico.', esCorrecta: true },
            { id: 'c', texto: 'Uso de coberturas muertas.', esCorrecta: false },
            { id: 'd', texto: 'Agricultura biodinámica.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué principio de la agroecología busca minimizar las salidas del sistema como agua y materia orgánica?',
          imagen: require('@/assets/curso/img1.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Propiciación de biodiversidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumento de interacciones benéficas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Minimización de salidas del sistema.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Reciclaje de biomasa.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es un modelo de agricultura que promueve la recuperación del conocimiento ancestral? ',
          imagen: require('@/assets/curso/img2.svg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Agricultura natural.', esCorrecta: false },
            { id: 'b', texto: 'Permacultura.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Agricultura por tecnologías apropiadas.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Agricultura mesiánica.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Has completado el cuestionario exitosamente! Felicidades.',
      mensaje_final_reprobado:
        'No has alcanzado la puntuación mínima para aprobar. Te animamos a intentarlo de nuevo.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
