<template>
  <v-app>
    <default-bar />
    <banner />
    <default-view />
    <!-- <default-footer /> -->
  </v-app>
</template>

<script lang="ts" setup>
import Banner from "@/components/main/Banner.vue";
import DefaultBar from "../default/AppBar.vue";
import DefaultView from "../default/View.vue";
// import DefaultFooter from '../default/AppFooter.vue'
</script>
