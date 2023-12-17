<template>
  <v-container>
    <VCard variant="tonal" max-width="900" class="mx-auto">
      <VCardTitle tag="h1" class="text-h5 mb-6">
        {{ $t("navigation.aboutUs") }}
      </VCardTitle>
      <VCardText v-html="$t('aboutUs.html')" />
    </VCard>
  </v-container>
</template>

<script lang="ts" setup></script>

<style>
p {
  margin: 1rem 0;
}

li {
  margin: 0 1rem 0.5rem 1rem;
}
</style>
