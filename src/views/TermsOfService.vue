<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
  <Page>
    <VCard variant="tonal" max-width="900" class="mx-auto">
      <VCardTitle tag="h1" class="text-h5 mb-6">{{ $t("footer.tos") }}</VCardTitle>
      <VCardText v-html="$t('tos.html')" />
    </VCard>
  </Page>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import Page from "@/components/main/Page.vue";
import links from "@/statics/socials.json";

const socials = reactive(links);
</script>

<style>
p {
  margin: 1rem 0.5rem;
}

li {
  margin: 1rem;
}

li::marker {
  font-weight: bold;
}
</style>
