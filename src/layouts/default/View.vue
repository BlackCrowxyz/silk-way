<template>
  <v-main>
    <router-view />
    <buy-me-coffee />
    <app-footer />
  </v-main>
</template>

<script lang="ts" setup>
import BuyMeCoffee from "@/components/BuyMeCoffee.vue";
import AppFooter from "./AppFooter.vue";
</script>

<style></style>
