<template>
   <section class="franchise" id="franchise-page">
      <div class="border-waves-before">
         <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
            y="0px" viewBox="0 0 38 28" width="19px" height="14px">
            <defs>
               <pattern id="wavePattern" width="38" height="28" patternUnits="userSpaceOnUse" fill="none">
                  <path
                     d="M-8.8817842e-16,-0.000266139407 L-8.8817842e-16,28 C9,28 13,16 19,16 C25,16 29,28 38,28 L38,-0.000266139407 C29,8.67361738e-19 25,12 19,12 C13,12 9,0 -8.8817842e-16,-0.000266139407 Z"
                     id="Path-3" fill="currentColor"></path>
               </pattern>
            </defs>
            <rect x="-10000" class="rect-anchor-50-50" width="20000" height="28" style="fill: url(#wavePattern);">
            </rect>
         </svg>
      </div>
      <div class="inner">
         <section>
            <h2>Werden Sie Teil unserer Erfolgsgeschichte</h2>
            <p>Wir möchten expandieren und suchen Unternehmer mit Weitblick und die Interesse an einem bewährten
               Geschäftskonzept haben.
               Dann ist eine Franchise-Partnerschaft mit uns genau das Richtige für Sie!
            </p>
            <p>Als Ramen-Restaurant Kette sind wir stolz auf unsere erfolgreiche Marke und unser etabliertes
               Geschäftsmodell.
               Wir bieten Ihnen die einzigartige Möglichkeit, von unserem Know-how, unserer starken Marke und unserem
               umfangreichen Netzwerk zu profitieren und Ihr eigenes erfolgreiches Unternehmen aufzubauen.</p>

            <h3>Warum eine Franchise-Partnerschaft mit uns?</h3>
            <ul class="franchise__list">
               <li>Bewährtes Konzept: Profitieren Sie von einem bereits am Markt etablierten und erfolgreichen
                  Geschäftsmodell.
               </li>
               <li>Umfassende Unterstützung: Wir begleiten Sie von Anfang an mit individuellen Schulungen und stehen
                  Ihnen jederzeit mit Rat und Tat zur Seite.
               </li>
               <li>Starke Marke: Nutzen Sie die Bekanntheit unserer Marke und das Vertrauen unserer Kunden.</li>
               <li>Eigenständigkeit: Sie sind Ihr eigener Chef und gestalten Ihren Erfolg aktiv mit.</li>
            </ul>
            <h3>Werde jetzt Franchise-Partner</h3>
            <p>Kontaktieren Sie uns gerne! Wir freuen uns darauf, Ihnen alle Fragen rund um das Thema Franchising
               zu beantworten, damit so schnell wie möglich starten können!</p>
            <FranchiseForm></FranchiseForm>
         </section>
      </div>
   </section>
</template>

<script>
import FranchiseForm from "../../components/form/FranchiseForm.vue";

export default {
   components: {
      FranchiseForm,
   },
   data() {
      return {

      };
   },
};
</script>

<style lang="scss" scoped>
#franchise-page {
   position: relative;
}

.franchise {
   padding: 5rem 0;

   h2,
   h3 {
      margin-block: 3rem;
   }

   .franchise__list {
      padding-inline-start: 2rem;

      li {
         display: list-item;
         line-height: 1.5;
         list-style: disc;
      }
   }
}

a {
   color: $color-secondary;
}

p {
   margin-block: 0 1.5rem;
}

.border-waves-before {
   color: $color-white;
   height: 15px;
   left: 0;
   position: absolute;
   top: -6px;
   width: 100%;
   z-index: 10;

   svg {
      display: block;
      width: 100%;
   }
}
</style>