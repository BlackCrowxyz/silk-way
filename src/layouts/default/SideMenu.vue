<template>
    <!-- image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg" -->
    <v-navigation-drawer color="primary" permanent width="220">
        <v-list nav>
            <template v-for="{ icon, title, to } in sideMenu" :key="title">
                <v-list-item :prepend-icon="icon" :title="title" :value="title" :to="to" exact></v-list-item>
            </template>
        </v-list>
    </v-navigation-drawer>
    <slot></slot>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const sideMenu = ref([
    { title: "Home", to: "/", icon: "mdi-home" },
    { title: "Assess writing", to: "/writing", icon: "mdi-alphabet-latin" },
    { title: "About", to: "/about-us", icon: "mdi-information-variant" },
])
</script>