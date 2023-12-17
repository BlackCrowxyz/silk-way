<template>
  <Page>
    <VCard variant="tonal" max-width="900" class="mx-auto">
      <VCardTitle tag="h1" class="text-h5 mb-6">Frequently Asked Questions</VCardTitle>
      <VCardText>
        <FAQ />
      </VCardText>
    </VCard>
  </Page>
</template>

<script lang="ts" setup>
import Page from "@/components/main/Page.vue";
import FAQ from "@/components/main/FAQ.vue";
</script>

<style scoped>
p {
  margin: 1rem 0;
}

li {
  margin: 0 1rem 0.5rem 1rem;
}
</style>
