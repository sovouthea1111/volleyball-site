<script setup lang="ts">


const props = defineProps({
  cssWrapper: {
    type: String,
    default: "bg-black"
  }
});


</script>

<template>
    <div :class="props.cssWrapper">
      <slot>

      </slot>
    </div>
</template>

<style scoped>

</style>