<template>
  <v-container class="text-center">
    <div
      :style="isMobile ? 'height: calc(100vh - 230px)' : 'height: calc(100vh - 280px)'"
      class="d-flex flex-column flex-sm-row justify-sm-space-evenly align-center"
    >
      <div style="max-width: 500px" class="my-10 my-sm-0 text-start">
        <h1 class="text-sm-h4 text-h6 font-weight-bold">
          {{ $t("landing.title") }}
        </h1>
        <h2 class="text-sm-body-1 text-body-2 font-weight-light mt-4">
          {{ $t("landing.subtitle") }}
          <v-icon icon="mdi-head-snowflake" />
        </h2>
      </div>
      <div>
        <v-img
          :src="logo"
          :alt="$t('landing.logoAlt')"
          :title="$t('landing.logoTitle')"
          class="rounded-xl"
          min-width="300"
          width="100%"
        ></v-img>
      </div>
    </div>

    <v-row class="d-flex align-center justify-center my-16">
      <v-col cols="12">
        <v-btn
          class="text-none"
          color="primary"
          min-width="200"
          rel="noopener noreferrer"
          size="x-large"
          @click="auth"
        >
          <v-icon icon="mdi-play-circle-outline" start />
          {{ $t("landing.getStartButton") }}
        </v-btn>
      </v-col>
    </v-row>

    <v-card variant="flat" class="my-6 my-sm-12 pa-6 pa-sm-12 rounded-xl">
      <v-row>
        <v-col cols="12">
          <h3 class="text-h5">{{ $t("landing.benefitsTitle") }}</h3>
        </v-col>
      </v-row>

      <v-row justify="center" class="text-start">
        <v-col xl="1" md="6" lg="5" order="1">
          <v-hover v-slot="{ isHovering, props }">
            <VSheet
              v-bind="props"
              :elevation="isHovering ? 12 : 2"
              color="primary"
              height="280"
              width="auto"
              min-width="300"
              class="rounded-xl pa-10"
            >
              <v-sheet
                :color="benefits.b1.color"
                class="d-flex justify-center align-center mb-4"
                min-height="70"
                height="70"
                min-width="70"
                width="70"
                rounded="xl"
                elevation="4"
              >
                <v-icon :icon="benefits.b1.icon" color="contrast" />
              </v-sheet>
              <div class="d-flex flex-column mx-auto justify-space-evenly">
                <h4 class="text-h6" v-text="$t(benefits.b1.title)" />
                <h5 class="text-body-1 mt-4" v-text="$t(benefits.b1.text)" />
              </div>
            </VSheet>
          </v-hover>
        </v-col>
        <v-col xl="1" md="6" lg="5" order="2">
          <v-hover v-slot="{ isHovering, props }">
            <VSheet
              v-bind="props"
              :elevation="isHovering ? 12 : 2"
              color="primary"
              height="280"
              width="auto"
              min-width="300"
              class="rounded-xl"
            >
              <v-img
                :src="benefits.b1.img"
                :alt="benefits.b1.title"
                :title="benefits.b1.title"
                class="rounded-xl pa-10"
                min-width="200"
                width="100%"
                cover
              >
              </v-img>
            </VSheet>
          </v-hover>
        </v-col>

        <v-col xl="1" md="6" lg="5" order="4" order-md="3">
          <v-hover v-slot="{ isHovering, props }">
            <VSheet
              v-bind="props"
              :elevation="isHovering ? 12 : 2"
              color="primary"
              height="280"
              width="auto"
              min-width="300"
              class="rounded-xl"
            >
              <v-img
                :src="benefits.b2.img"
                :alt="benefits.b2.title"
                :title="benefits.b2.title"
                class="rounded-xl pa-10"
                min-width="200"
                width="100%"
                cover
              >
              </v-img>
            </VSheet>
          </v-hover>
        </v-col>
        <v-col xl="1" md="6" lg="5" order="3" order-md="4">
          <v-hover v-slot="{ isHovering, props }">
            <VSheet
              v-bind="props"
              :elevation="isHovering ? 12 : 2"
              color="primary"
              height="280"
              width="auto"
              min-width="300"
              class="rounded-xl pa-10"
            >
              <v-sheet
                :color="benefits.b2.color"
                class="d-flex justify-center align-center mb-4"
                min-height="70"
                height="70"
                min-width="70"
                width="70"
                rounded="xl"
                elevation="4"
              >
                <v-icon :icon="benefits.b2.icon" color="contrast" />
              </v-sheet>
              <div class="d-flex flex-column mx-auto justify-space-evenly">
                <h4 class="text-h6" v-text="$t(benefits.b2.title)" />
                <h5 class="text-body-1 mt-4" v-text="$t(benefits.b2.text)" />
              </div>
            </VSheet>
          </v-hover>
        </v-col>

        <v-col xl="1" md="6" lg="5" order="5">
          <v-hover v-slot="{ isHovering, props }">
            <VSheet
              v-bind="props"
              :elevation="isHovering ? 12 : 2"
              color="primary"
              height="280"
              width="auto"
              min-width="300"
              class="rounded-xl pa-10"
            >
              <v-sheet
                :color="benefits.b3.color"
                class="d-flex justify-center align-center mb-4"
                min-height="70"
                height="70"
                min-width="70"
                width="70"
                rounded="xl"
                elevation="4"
              >
                <v-icon :icon="benefits.b3.icon" color="contrast" />
              </v-sheet>
              <div class="d-flex flex-column mx-auto justify-space-evenly">
                <h4 class="text-h6" v-text="$t(benefits.b3.title)" />
                <h5 class="text-body-1 mt-4" v-text="$t(benefits.b3.text)" />
              </div>
            </VSheet>
          </v-hover>
        </v-col>
        <v-col xl="1" md="6" lg="5" order="6">
          <v-hover v-slot="{ isHovering, props }">
            <VSheet
              v-bind="props"
              :elevation="isHovering ? 12 : 2"
              color="primary"
              height="280"
              width="auto"
              min-width="300"
              class="rounded-xl"
            >
              <v-img
                :src="benefits.b3.img"
                :alt="benefits.b3.title"
                :title="benefits.b3.title"
                class="rounded-xl pa-10"
                min-width="200"
                width="100%"
                cover
              >
              </v-img>
            </VSheet>
          </v-hover>
        </v-col>

        <v-col xl="1" md="6" lg="5" order="8" order-md="7">
          <v-hover v-slot="{ isHovering, props }">
            <VSheet
              v-bind="props"
              :elevation="isHovering ? 12 : 2"
              color="primary"
              height="280"
              width="auto"
              min-width="300"
              class="rounded-xl"
            >
              <v-img
                :src="benefits.b4.img"
                :alt="benefits.b4.title"
                :title="benefits.b4.title"
                class="rounded-xl pa-10"
                min-width="200"
                width="100%"
                cover
              >
              </v-img>
            </VSheet>
          </v-hover>
        </v-col>
        <v-col xl="1" md="6" lg="5" order="7" order-md="8">
          <v-hover v-slot="{ isHovering, props }">
            <VSheet
              v-bind="props"
              :elevation="isHovering ? 12 : 2"
              color="primary"
              height="280"
              width="auto"
              min-width="300"
              class="rounded-xl pa-10"
            >
              <v-sheet
                :color="benefits.b4.color"
                class="d-flex justify-center align-center mb-4"
                min-height="70"
                height="70"
                min-width="70"
                width="70"
                rounded="xl"
                elevation="4"
              >
                <v-icon :icon="benefits.b4.icon" color="contrast" />
              </v-sheet>
              <div class="d-flex flex-column mx-auto justify-space-evenly">
                <h4 class="text-h6" v-text="$t(benefits.b4.title)" />
                <h5 class="text-body-1 mt-4" v-text="$t(benefits.b4.text)" />
              </div>
            </VSheet>
          </v-hover>
        </v-col>
      </v-row>
    </v-card>

    <v-row class="my-16">
      <v-col cols="12" class="text-center">
        <v-btn
          class="text-none"
          color="primary"
          min-width="200"
          rel="noopener noreferrer"
          size="x-large"
          @click="auth"
        >
          {{ $t("landing.startFreeCreditsButton") }}
        </v-btn>
      </v-col>
    </v-row>

    <!-- Testimonials Section -->

    <!-- Pricing Table -->

    <!-- FAQ Section -->
    <v-card variant="flat" class="my-6 my-sm-12 pa-6 pa-sm-12 rounded-xl">
      <h3 class="text-h5 mb-4">{{ $t("landing.faqTitle") }}</h3>
      <FAQ class="mb" />
    </v-card>

    <!-- Trust Badges Section -->
  </v-container>
</template>

<script lang="ts" setup>
import FAQ from "@/components/main/FAQ.vue";

import { reactive } from "vue";

import { userProfile } from "@/stores/store";
import { useRouter } from "vue-router";
const router = useRouter();

import logo from "@/assets/images/logo.jpg";
import someImg1 from "@/assets/images/1.jpg";
import someImg2 from "@/assets/images/2.jpg";
import someImg3 from "@/assets/images/3.jpg";
import someImg4 from "@/assets/images/4.jpg";
import someImg5 from "@/assets/images/5.jpg";

import useMobile from "@/composable/useMobile";
const { isMobile } = useMobile();

const auth = () => {
  // TODO: api + check user exist
  if (userProfile.value?.token) router.push({ name: "dashboard" });
  else router.push({ name: "sign-in" });
};

import { useI18n } from "vue-i18n";
const { t } = useI18n();
const benefits = reactive({
  b1: {
    title: "landing.benefits.b1.title",
    text: "landing.benefits.b1.text",
    img: someImg1,
    icon: "mdi-trophy-variant-outline",
    color: "accent1",
  },
  b2: {
    title: "landing.benefits.b2.title",
    text: "landing.benefits.b2.text",
    img: someImg4,
    icon: "mdi-school-outline",
    color: "accent2",
  },
  b3: {
    title: "landing.benefits.b3.title",
    text: "landing.benefits.b3.text",
    img: someImg3,
    icon: "mdi-currency-usd",
    color: "accent3",
  },
  b4: {
    title: "landing.benefits.b4.title",
    text: "landing.benefits.b4.text",
    img: someImg2,
    icon: "mdi-calendar-check",
    color: "accent4",
  },
});
</script>
