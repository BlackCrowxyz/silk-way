<template>
  <v-fade-transition>
    <div class="banner" v-if="banner.modal">
      <div class="d-flex justify-space-between w-100">
        <span>
          {{ banner.text }}
        </span>
        <v-btn variant="flat" size="small" :color="banner.color" @click="banner.reset">
          Ok
        </v-btn>
      </div>
    </div>
  </v-fade-transition>
</template>

<script setup lang="ts">
import { banner } from "@/composable/useBanner";
</script>

<style style="scss">
.banner {
  position: fixed;
  top: 64px;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: purple;
  z-index: 3000;
  padding: 1rem 1.5rem;
  color: white;
}
</style>
