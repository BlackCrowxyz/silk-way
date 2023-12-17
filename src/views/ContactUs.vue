<template>
  <Page>
    <VCard variant="tonal" max-width="900" class="mx-auto">
      <VCardTitle tag="h1" class="text-h5 mb-6">
        {{ $t("navigation.contactUs") }}
      </VCardTitle>
      <VCardText>
        <div v-html="$t('contactUs.html')" />
        <v-sheet color="surface" class="pa-3 d-flex flex-wrap rounded-xl">
          <template v-for="{ icon, to, text } in socials" :key="icon">
            <v-btn
              v-if="icon.includes('telegram')"
              class="text-none pa-2 mx-auto"
              color="primary"
            >
              <Telegram />
              <a
                :title="text"
                :href="to"
                target="_blank"
                class="mx-2 text-decoration-none text-white"
              >
                {{ text }}
              </a>
            </v-btn>
            <v-btn v-else class="text-none pa-2 mx-auto" color="primary">
              <v-icon color="white">{{ icon }}</v-icon>
              <a
                :title="text"
                :href="to"
                target="_blank"
                class="mx-2 text-decoration-none text-white"
              >
                {{ text }}
              </a>
            </v-btn>
          </template>
        </v-sheet>
      </VCardText>
    </VCard>
  </Page>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import Page from "@/components/main/Page.vue";
import links from "@/statics/socials.json";
import Telegram from "@/components/icons/Telegram.vue";

const socials = reactive(links);
</script>

<style>
p {
  margin: 1rem 0;
}

li {
  margin: 0 1rem 0.5rem 1rem;
}
</style>
