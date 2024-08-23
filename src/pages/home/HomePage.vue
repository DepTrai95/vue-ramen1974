<template>
   <div class="content">
      <Article :article="aboutUsText">
         <Gallery v-for="fileName in aboutUsImages" :key="fileName" :fileName="fileName"></Gallery>
      </Article>
      <SubHeader :subHeader="subHeaderContent"></SubHeader>
      <Article class="reverse" :article="menuText">
         <Gallery v-for="fileName in menuImages" :key="fileName" :fileName="fileName"></Gallery>
      </Article>
   </div>
</template>

<script>
import Article from '../../components/article/Article.vue';
import SubHeader from '../../components/header/SubHeader.vue';
import Gallery from '../../components/gallery/Gallery.vue';

export default {
   components: {
      Article,
      SubHeader,
      Gallery,
   },
   data() {
      return {
         aboutUsText: {
            id: 'about-us',
            heading: 'Our Story',
            headingDescription: 'Discover',
            content: [
               { id: '1', text: 'Ramen1974 ist ein japanische Ramen-Restaurant-Kette, welches im Dresden und Leipzig liegt.' },
               { id: '2', text: 'Hier werden sie der japanischen Küche näher gebracht mit köstlichsten Speisen wie Gyoza, Ramen und Poke-Bowls.' },
               { id: '3', text: 'Die japanische Küche ist bekannt für ihre unglaubliche Vielfalt, die sensationale Qualität und vor allem auch für die Schönheit des Essens.' },
            ]
         },
         aboutUsImages: [
            'ramen',
            'ramen-2',
         ],
         menuText: {
            id: 'menu',
            heading: 'Menu',
            headingDescription: 'Discover',
            content: [
               { id: '1', text: 'Bei uns könnt ihr die besten Ramen der Stadt genießen. Perfekt dazu unsere leckeren Vorspeisen sowie Desserts wie Mochi-Kuchen oder Matcha-Eis. Wir lieben gesundes leckeres Essen, Ihr vermutlich auch!' },
            ]
         },
         menuImages: [
            'gyoza',
            'ramen-3',
            'bowl',
         ],
         subHeaderContent: {
            id: 'tasty-recipes',
            heading: 'Recipes',
            headingDescription: 'Tasteful',
            imgSrc: '/img/tasty-recipes.webp',
         }
      }
   }
}
</script>

<style lang="scss" scoped></style>