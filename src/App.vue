<script setup lang="ts">
const routes = useRoute()

</script>

<template>
  <RouterView v-slot="{ Component }"  v-if="routes.meta.keepAlive">
    <KeepAlive>
      <component :is="Component"></component>
    </KeepAlive>
  </RouterView>
  <RouterView v-else></RouterView>
</template>

<style>



</style>
