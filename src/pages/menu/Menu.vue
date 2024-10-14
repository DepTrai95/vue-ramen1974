<template>
   <section class="page__content">
      <div class="menu inner">
         <div :key="menuItems.categories" class="grid--default grid-2--tablet-landscape-up">
            <div v-for="category in menuItems.categories" :key="category.id"
               class="menu-item__item-category grid-item fade-animation">
               <h2>{{ category.name }}</h2>
               <p v-if="category.description">{{ category.description }}</p>
               <p v-if="category.description_second_line">{{ category.description_second_line }}</p>
               <hr class="separator">
               <ul>
                  <menu-item v-for="menuItem in category.items" :key="menuItem.id" :menu-item="menuItem"
                     class="menu-list__item"></menu-item>
               </ul>
            </div>
         </div>
         <p>Alle Speisen und Preise Stand 15.06.2024</p>
      </div>
   </section>
</template>

<script>
import menuItems from './menu.json';
import MenuItem from '@/components/menu-item/MenuItem.vue';

export default {
   components: {
      MenuItem,
   },
   data() {
      return {
         menuItems
      }
   },
   methods: {
      observeElement(entries, targetName, observerInstance) {
         entries.forEach(entry => {
            if (entry.isIntersecting) {
               if (targetName === 'menu') {
                  entry.target.classList.add("fade-in");
               }

               observerInstance.unobserve(entry.target);
            }
         });
      },
      initIntersectionObserver() {
         const observerMenu = new IntersectionObserver(
            (entries) => this.observeElement(entries, 'menu', observerMenu),
            {
               threshold: [0.1],
            }
         );

         const targetMenuItem = document.querySelectorAll('.menu-item__item-category');

         targetMenuItem.forEach(element => {
            observerMenu.observe(element);
         });
      },
   },
   mounted() {
      this.initIntersectionObserver();
   },
}
</script>

<style lang="scss" scoped>
.page__content {
   padding: 3rem 1rem;

   @include for-tablet-portrait-up {
      padding: 5rem 3rem;
   }
}

.menu {
   hr.separator {
      border: 0;
      border-bottom: 2px solid #d8d8d8;
      margin: 4rem 0;
   }
}

h2 {
   @include responsive-font-size(3rem, 4rem);
   margin-bottom: 1em;
   text-transform: uppercase;
}

.grid-2--tablet-landscape-up {
   flex-wrap: wrap;

   @include for-tablet-landscape-up {
      >.grid-item {

         &:nth-child(odd) {
            padding-inline: 30px 0;
         }

         &:nth-child(even) {
            padding-inline: 30px;
         }
      }
   }
}

.menu-item__item-category {
   ul {
      margin: 0;
      padding: 0;
   }
}

.menu-list__item {
   display: list-item;
   list-style: none;
   margin-bottom: 3rem;
   padding-inline: 0;
   position: relative;
}
</style>

<style lang="scss">
.menu-list__item {
   @include responsive-font-size(1.8rem, 1.9rem);

   &-title {
      margin: 0 0 0.25em 0;
      position: relative;
      width: 100%;

      &--title {
         background-color: $color-white;
         font-weight: 500;
         letter-spacing: 1.5px;
         ;
         position: relative;
         text-transform: uppercase;
         z-index: 5;
      }
   }

   .dots {
      background-image: radial-gradient(circle closest-side,
            currentColor 99%,
            transparent 1%);
      background-position: bottom;
      background-repeat: repeat-x;
      background-size: 6px 3px;
      bottom: 0;
      display: block;
      height: 3px;
      left: 0;
      margin: 0;
      position: absolute;
      right: 0;
      top: 14px;
      z-index: 1;

      @include for-tablet-landscape-up {
         top: 15px;
      }
   }

   &-description {
      @include responsive-font-size(1.7rem, 1.8rem);
      font-family: 'Cabin', 'Calibri', Helvetica, Arial, sans-serif;
      margin: 0;
      margin-inline-end: 1em;
   }

   &-price {
      background-color: $color-white;
      font-weight: 700;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 5;
   }
}
</style>