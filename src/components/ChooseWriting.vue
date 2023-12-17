<template>
  <v-container>
    <VCard elevation="0" max-width="900" class="mx-auto text-center align-center">
      <VCardTitle tag="h1" class="text-h5 mb-6">{{ $t("choose.path") }}</VCardTitle>
      <VCardText class="mt-sm-16">
        <v-row justify="center">
          <v-col>
            <v-btn
              color="primary"
              to="/writing"
              height="200"
              width="200"
              variant="flat"
              class="text-h5 font-weight-bold rounded-xl"
            >
              {{ $t("choose.IELTS") }}
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              disabled
              color="primary"
              to="/writing"
              height="200"
              width="200"
              variant="flat"
              class="rounded-xl"
            >
              <div class="d-flex flex-column">
                <div class="text-h5 font-weight-bold">{{ $t("choose.TOFEL") }}</div>
                <div class="text-none">{{ $t("choose.comingSoon") }}</div>
              </div>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              disabled
              color="primary"
              to="/writing"
              height="200"
              width="200"
              variant="flat"
              class="rounded-xl"
            >
              <div class="d-flex flex-column">
                <div class="text-h5 font-weight-bold">{{ $t("choose.GRE") }}</div>
                <div class="text-none">{{ $t("choose.comingSoon") }}</div>
              </div>
            </v-btn>
          </v-col>
        </v-row>
      </VCardText>
    </VCard>
  </v-container>
</template>

<script lang="ts" setup></script>

<style scoped>
p {
  margin: 1rem 0;
}

li {
  margin: 0 1rem 0.5rem 1rem;
}
</style>
