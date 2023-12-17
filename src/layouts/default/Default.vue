<template>
  <v-app>
    <default-bar />
    <banner />
    <!-- <side-menu> -->
    <default-view />
    <!-- </side-menu> -->
    <!-- <default-footer /> -->
  </v-app>
</template>

<script lang="ts" setup>
import Banner from "@/components/main/Banner.vue";
import DefaultBar from "./AppBar.vue";
// import DefaultFooter from './AppFooter.vue'
import DefaultView from "./View.vue";
// import SideMenu from './SideMenu.vue'
</script>
