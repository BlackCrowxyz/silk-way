<template>
  <v-footer
    app
    absolute
    color="primary"
    order="-1"
    class="d-flex flex-column pa-0"
    elevation="12"
  >
    <div class="d-flex flex-column flex-sm-row w-100 align-center px-4">
      <strong class="text-body-2 pb-2 pb-sm-0 order-1 order-sm-0">
        © {{ new Date().getFullYear() }} BluLexi Inc.
        <v-btn
          variant="text"
          size="s"
          :to="{ name: 'changelog' }"
          class="pa-1 text-secondary"
          :title="$t('footer.changelog')"
        >
          <small> v{{ config.appVersion }} </small>
        </v-btn>
      </strong>
      <v-spacer></v-spacer>
      <small class="d-block order-2 order-sm-0 py-3 py-sm-0" style="font-size: 10px">
        {{ $t("footer.note") }}
      </small>
      <v-spacer></v-spacer>
      <div class="d-flex py-3 py-sm-0">
        <template v-for="{ text, icon, to } in socials" :key="icon">
          <v-btn
            v-if="icon.includes('telegram')"
            :href="to"
            target="_blank"
            variant="text"
            size="small"
            color="white"
            icon
            :title="text"
          >
            <telegram />
          </v-btn>
          <v-btn
            v-else
            class="mx-1"
            :href="to"
            target="_blank"
            variant="text"
            size="small"
            color="white"
            :icon="icon"
            :title="text"
          >
          </v-btn>
        </template>
      </div>
    </div>
    <div class="w-100 px-4">
      <div
        class="d-flex flex-column flex-sm-row align-center justify-center py-3 py-sm-0 text-caption mb-2"
      >
        <v-btn
          class="mx-1 px-2 pa-1 text-none text-white"
          to="/tos"
          variant="text"
          :ripple="false"
          size="s"
          :title="$t('footer.tos')"
        >
          {{ $t("footer.tos") }}
        </v-btn>
        <v-btn
          class="mx-1 px-2 pa-1 text-none text-white"
          to="/pp"
          variant="text"
          :ripple="false"
          size="s"
          :title="$t('footer.pp')"
        >
          {{ $t("footer.pp") }}
        </v-btn>
        <v-btn
          class="mx-1 px-2 pa-1 text-none text-white"
          to="/faq"
          variant="text"
          :ripple="false"
          size="s"
          :title="$t('footer.faq')"
        >
          {{ $t("footer.pp") }}
        </v-btn>
      </div>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { config } from "@/composable/config";
import items from "@/statics/socials.json";
import Telegram from "@/components/icons/Telegram.vue";

const socials = reactive(items);
</script>

<style></style>
