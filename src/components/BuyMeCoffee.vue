<template>
  <div class="d-flex flex-column justify-end align-end buy-me-coffee mx-2 mb-2">
    <!-- <v-btn
      color="#40DCA5"
      class="rounded-xl rounded-btn text-none mr-md-0"
      href="https://hamibash.com/Goodrabi"
      target="_blank"
      data-name="bmc-button"
      data-slug="Goodrabi"
      data-color="#40DCA5"
      data-emoji=""
      data-font="Lato"
      data-text="Buy me a coffee"
      data-outline-color="#000000"
      data-font-color="#000000"
      data-coffee-color="#ffffff"
      height="42"
      min-width="25"
      @mouseover="expandButton2"
      @mouseleave="shrinkButton2"
      @touchstart="expandButton2"
      @touchend="shrinkButton2"
      :style="{ width: buttonWidth2 }"
    >
      <Coffee class="adjust-btn" />
      {{ $t('buyMeCoffee.textFa') }}
    </v-btn> -->

    <v-btn
      color="#FFDD00"
      class="rounded-xl text-none mt-2 rounded-btn"
      href="https://www.buymeacoffee.com/Goodrabi"
      target="_blank"
      data-name="bmc-button"
      data-slug="Goodrabi"
      data-color="#FFDD00"
      data-emoji=""
      data-font="Lato"
      data-text="Buy me a coffee"
      data-outline-color="#000000"
      data-font-color="#000000"
      data-coffee-color="#ffffff"
      height="42"
      min-width="25"
      @mouseover="expandButton1"
      @mouseleave="shrinkButton1"
      @touchstart="expandButton1"
      @touchend="shrinkButton1"
      :style="{ width: buttonWidth1 }"
    >
      <Coffee :class="`adjust-btn${isRtl ? '__rtl' : ''}`" />

      {{ $t("buyMeCoffee.textEn") }}
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import Coffee from "@/components/icons/Coffee.vue";
import { ref } from "vue";

import { useRtl } from "vuetify/lib/framework.mjs";
const { isRtl } = useRtl();

const buttonWidth1 = ref("42px");
const expandButton1 = () => (buttonWidth1.value = "190px");
const shrinkButton1 = () => (buttonWidth1.value = "42px");

const buttonWidth2 = ref("42px");
const expandButton2 = () => (buttonWidth2.value = "125px");
const shrinkButton2 = () => (buttonWidth2.value = "42px");
</script>

<style lang="scss">
.buy-me-coffee {
  position: sticky;
  letter-spacing: normal !important;
  font-family: system-ui !important;
  bottom: 8px;
}

@media (min-width: 767px) {
  .buy-me-coffee {
    position: fixed;
    bottom: 66px;
    right: 0;
  }
}

.rounded-btn {
  transition: width 0.5s ease-in-out;
  overflow: hidden;
  display: flex;
  justify-content: start;
  align-items: center;
}

.adjust-btn {
  margin-left: -5px;
  margin-right: 9px;
  &__rtl {
    margin-left: 9px;
    margin-right: -5px;
  }
}
</style>
