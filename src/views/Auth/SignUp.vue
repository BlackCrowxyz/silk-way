<template>
  <Page class="d-flex align-center">
    <v-card max-width="450" width="100%" class="mx-auto pa-12 pb-8" rounded="lg">
      <v-card-title class="px-0 mb-6"> {{ $t("auth.signUp") }} </v-card-title>
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

      <v-checkbox v-model="user.terms" color="secondary" :rules="[rules.required]">
        <template #label>
          <div>
            {{ $t("auth.agreeTo1") }}
            <v-tooltip location="bottom">
              <template #activator="{ props }">
                <a
                  target="_blank"
                  href="/tos"
                  class="text-secondary text-decoration-none"
                  v-bind="props"
                  @click.stop
                >
                  {{ $t("auth.agreeTo2") }}
                </a>
              </template>
              {{ $t("auth.opensInNewTab") }}
            </v-tooltip>
          </div>
        </template>
      </v-checkbox>

      <v-btn
        block
        class="text-none my-8"
        color="primary"
        size="large"
        variant="elevated"
        @click="signUp"
        :loading="isLoading"
        :disabled="!isValid"
      >
        {{ $t("auth.signUp") }}
      </v-btn>

      <v-card-text class="text-center">
        {{ $t("auth.alreadyHaveAccount") }}
        <v-btn to="/auth/sign-in" variant="text" class="text-none" color="text">
          {{ $t("auth.signInNow") }}
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
import { userProfile } from "@/stores/store";
import { useAxios } from "@vueuse/integrations/useAxios";
import { useRouter } from "vue-router";

import useLang from "@/composable/useLang";
const { isRtl } = useLang();

const router = useRouter();

const { data, isLoading, execute } = useAxios(
  `${config.BASE_API}/auth/signUp`,
  { method: "POST" },
  { immediate: false }
);

const visible = ref(false);
const user = reactive({
  email: "",
  password: "",
  terms: false,
});

const signUp = async () => {
  execute({ data: user });
};

watchEffect(() => {
  if (data.value) {
    userProfile.value = data.value;
    router.push({ name: "dashboard" });
  } else {
    // TODO: component global + Show error if necessary
  }
});

const isValid = computed(() => {
  return (
    rules.required(user.email) === true &&
    rules.required(user.password) === true &&
    rules.min(user.password) === true &&
    rules.email(user.email) === true &&
    user.terms === true
  );
});
</script>
