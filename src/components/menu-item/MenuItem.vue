<template>
   <li>
      <h4 class="menu-list__item-title">
         <span class="menu-list__item-title--title">{{ menuItem.name }}</span>
         <span class="dots"></span>
      </h4>
      <p class="menu-list__item-description">{{ menuItem.description }}</p>
      <span class="menu-list__item-price">{{ menuItem.price }}€</span>
   </li>
</template>

<script>
export default {
   props: {
      menuItem: Object,
   },
}
</script>

<style lang="scss"></style>