<template>
  <v-container>
    <VCard variant="tonal" max-width="900" class="mx-auto">
      <VCardTitle tag="h1" class="text-h5 mb-6"> User profile </VCardTitle>
      <VCardSubtitle class="text-wrap text-body-1">
        Credits will be updated every Monday!
      </VCardSubtitle>
      <VCardText>
        <v-list>
          <v-list-item>Email: {{ userProfile?.email }}</v-list-item>
          <v-list-item>Credits left: {{ userProfile?.usage_limit }}</v-list-item>
        </v-list>
      </VCardText>
    </VCard>
  </v-container>
</template>

<script setup lang="ts">
import { config } from "@/composable/config";
import { userProfile } from "@/stores/store";
</script>
