<template>
   <section class="contact" id="contact-page">
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
         <section class="contact-us" id="contact-us">
            <div class="grid--default grid-2--tablet-landscape-up">
               <div class="grid-item">
                  <div class="reservation-info">
                     <h2>Telefonisch</h2><br>
                     <p>
                        Sie können uns telefonisch erreichen um eine Tischreservierung vorzunehmen oder aber auch um
                        Bestellungen aufzugeben, die Sie gerne abholen würden. Erreichbar sind wir von
                        <span>{{ lunchTime }}</span>
                        <span>{{ dinnerTime }}</span>
                     </p>
                     <h2>Unsere Lokale</h2><br>
                     <div class="form-group">
                        <label for="restaurant-information"> Bitte ein Lokal auswählen</label>
                        <select class="form-control" id="restaurant-information" name="select-restaurant"
                           v-model="selectedRestaurant" required>
                           <option value="Dresden Neustadt">Dresden Neustadt</option>
                           <option value="Dresden Altstadt">Dresden Altstadt</option>
                           <option value="Leipzig Karl-Liebknecht-Straße">Leipzig Karl-Liebknecht-Straße</option>
                           <option value="Leipzig Zentrum">Leipzig Zentrum</option>
                        </select>
                     </div>
                     <div v-for="restaurant in restaurants" :key="restaurant.id">
                        <p v-if="restaurant.name === selectedRestaurant">
                           {{ restaurant.address }}<br>
                           Tel.: <a :href="`tel:${restaurant.number}`">{{ restaurant.number }}</a><br>
                           E-Mail: <a :href="`mailto:${restaurant.mail}`">{{ restaurant.mail }}</a><br>
                           Instagram: <a :href="restaurant.instagram">{{ restaurant.instagram }}</a>
                        </p>
                     </div>
                     <p>
                        Wir freuen uns auf Ihre Kontaktaufnahme. Schreiben Sie uns und wir melden uns so schnell wie
                        möglich zurück. Vielen Dank!
                     </p>
                  </div>
               </div>
               <div class=" grid-item">
                  <contact-form></contact-form>
               </div>
            </div>
         </section>
      </div>
   </section>
</template>

<script>
import ContactForm from "../../components/form/ContactForm.vue";

export default {
   components: {
      ContactForm,
   },
   data() {
      return {
         selectedRestaurant: 'Dresden Neustadt', // Initial selected restaurant
         lunchTime: "11:30 - 14:30",
         dinnerTime: "17:00 - 22:00",
         restaurants: [
            {
               id: 1,
               name: 'Dresden Neustadt',
               address: 'Alaunstraße 23, 01099 Dresden',
               number: '0351 81075888',
               mail: 'info@ramen1974.de',
               instagram: 'https://www.instagram.com/ramen1974dresden/',
            },
            {
               id: 2,
               name: 'Dresden Altstadt',
               address: 'Prager Str. 7, 01069 Dresden',
               number: '0351 48488370',
               mail: 'info@ramen1974.de',
               instagram: 'https://www.instagram.com/ramen1974dresden/',
            },
            {
               id: 3,
               name: 'Leipzig Karl-Liebknecht-Straße',
               address: 'Karl-Liebknecht-Straße 97, 04275 Leipzig',
               number: '0341 30677090',
               mail: 'leipzig-karli@ramen1974.de',
               instagram: 'https://www.instagram.com/ramen1974leipzig/',
            },
            {
               id: 4,
               name: 'Leipzig Zentrum',
               address: 'Hainstraße 10, 04109 Leipzig',
               number: '0178 4918616',
               mail: 'leipzig-zentrum@ramen1974.de',
               instagram: 'https://www.instagram.com/ramen1974.zentrumleipzig/',
            },
         ],
      };
   },
   computed: {
      currentRestaurant() {
         return this.restaurants.find(restaurant => restaurant.name === this.selectedRestaurant);
      }
   }
};
</script>

<style lang="scss" scoped>
#contact-page {
   position: relative;
}

.contact-us {
   padding: 5rem 0;
}

.reservation-info {
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;

   span {
      display: block;
      margin-block: .5rem;
   }
}

a {
   color: $color-primary;
}

p {
   margin-block: 0 1.5rem;
}

.border-waves-before {
   color: $color-white;
   height: 15px;
   left: 0;
   position: absolute;
   top: -8px;
   width: 100%;
   z-index: 10;

   svg {
      display: block;
      width: 100%;
   }
}

.form-control {
   @include responsive-font-size(1.8rem, 1.9rem);
   border: 2px solid #51515137;
   border-radius: 4px;
   display: block;
   color: $color-body;
   font-family: inherit;
   line-height: 1.3;
   margin-block: 1rem;
   min-height: 3rem;
   outline: none;
   padding: 0.5rem 1rem;
   transition: border 0.3s;
   width: 100%;

   &:hover,
   &:focus,
   &:focus-visible {
      border: 2px solid $color-primary;
   }
}
</style>