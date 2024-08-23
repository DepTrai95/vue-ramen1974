<template>
   <div class="grid-item">
      <picture>
         <source type="image/webp"
            :srcset="`/img/${fileName}-small.webp 400w, /img/${fileName}-medium.webp 600w, /img/${fileName}-large.webp 1200w`"
            sizes="(max-width: 599px) 400px, (max-width: 899px) 600px, 1200px" />
         <img :src="`/img/${fileName}-large.webp`" width="600" loading="lazy" alt="" />
      </picture>
   </div>
</template>

<script>
export default {
   props: {
      fileName: {
         type: String,
         required: true
      },
   }
}
</script>

<style lang="scss" scoped></style>