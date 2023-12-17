<template>
  <Page class="d-flex align-center">
    <v-card
      max-width="450"
      width="100%"
      color="card"
      class="mx-auto pa-12 pb-8"
      rounded="lg"
    >
      <v-card-title class="px-0 mb-6"> {{ $t("auth.signIn") }}</v-card-title>
      <div class="text-subtitle-1">{{ $t("auth.email") }}</div>

      <v-text-field
        density="comfortable"
        v-model="user.email"
        :placeholder="$t('auth.emailAddr')"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
        :rules="[rules.required, rules.email]"
      ></v-text-field>

      <div class="text-subtitle-1 d-flex align-center justify-space-between">
        {{ $t("auth.password") }}

        <a
          class="text-caption text-decoration-none text-blue"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          {{ $t("auth.forgotPass") }}
        </a>
      </div>

      <v-text-field
        density="comfortable"
        v-model="user.password"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        :placeholder="$t('auth.enterPass')"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
        :rules="[rules.required, rules.min]"
      ></v-text-field>

      <v-btn
        block
        class="text-none my-8"
        color="primary"
        size="large"
        variant="elevated"
        @click="signIn"
        :loading="isLoading"
        :disabled="!isValid"
      >
        {{ $t("auth.signIn") }}
      </v-btn>
      <!-- TODO: error if login failed, https://vuetifyjs.com/en/components/alerts/#content -->

      <v-card-text class="text-center">
        <v-btn class="text-none" to="/auth/sign-up" variant="text" color="text">
          {{ $t("auth.signUpNow") }}
          <v-icon :icon="isRtl ? 'mdi-chevron-left' : 'mdi-chevron-right'"></v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </Page>
</template>

<script setup lang="ts">
import Page from "@/components/main/Page.vue";
import { rules } from "@/helpers/rules";
import { reactive, computed, watchEffect, ref } from "vue";
import { config } from "@/composable/config";
import { useAxios } from "@vueuse/integrations/useAxios";
import { userProfile } from "@/stores/store";
import { useRouter } from "vue-router";
import { banner } from "@/composable/useBanner";

import useLang from "@/composable/useLang";
const { isRtl } = useLang();

const router = useRouter();

const { data, isLoading, execute } = useAxios(
  `${config.BASE_API}/auth/signIn`,
  { method: "POST" },
  { immediate: false }
);

const visible = ref(false);
const user = reactive({
  email: "",
  password: "",
});

const signIn = async () => {
  try {
    let res = await execute({ data: user });
    if (res.data.value) {
      if (userProfile.value?.token) router.push({ name: "dashboard" });
      userProfile.value = res.data.value;
      router.push({ name: "dashboard" });
    }
  } catch (error) {
    banner.text = error?.response?.data?.error;
    banner.modal = true;
  }
};

const isValid = computed(() => {
  return (
    rules.required(user.email) === true &&
    rules.required(user.password) === true &&
    rules.min(user.password) === true &&
    rules.email(user.email) === true
  );
});
</script>
