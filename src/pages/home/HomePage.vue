<template>
   <div class="content">
      <skip-links></skip-links>
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
import SkipLinks from '../../components/skiplinks/SkipLinks.vue';
import Article from '../../components/article/Article.vue';
import SubHeader from '../../components/header/SubHeader.vue';
import Gallery from '../../components/gallery/Gallery.vue';

export default {
   components: {
      SkipLinks,
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
               { id: '1', text: 'Ramen1974 ist eine Restaurant-Kette die sich auf Ramen spezialisiert hat, welches in Dresden und Leipzig ansässig ist.' },
               { id: '2', text: 'Hier werden sie der japanischen Küche näher gebracht mit köstlichsten Speisen wie Ramen, Gyoza und Poke-Bowls.' },
               { id: '3', text: 'Die japanische Küche ist bekannt für ihre unglaubliche Vielfalt, die sensationale Qualität, die Schönheit des Essens und vor allem für ihre Komplexität im Geschmack.' },
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
               { id: '1', text: 'Bei uns könnt ihr die besten Ramen der Stadt genießen. Perfekt dazu unsere leckeren Vorspeisen, sowie Desserts wie Mochi-Kuchen oder Matcha-Eis. Wir lieben gesundes leckeres Essen, Ihr vermutlich auch!' },
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