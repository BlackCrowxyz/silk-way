<template>
  <v-expansion-panels variant="accordion" color="accent7">
    <template v-for="i in 5" :key="i">
      <v-expansion-panel
        :title="$t(`faq[${i - 1}].question`)"
        :text="$t(`faq[${i - 1}].answer`)"
        bg-color="white"
      />
    </template>
  </v-expansion-panels>
</template>

<script setup lang="ts"></script>
