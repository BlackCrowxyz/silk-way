<template>
  <v-app-bar color="primary" scroll-behavior="elevate" elevation="12">
    <template #prepend>
      <v-app-bar-nav-icon v-if="isMobile" @click="drawer = !drawer"></v-app-bar-nav-icon>
    </template>

    <router-link :to="{ name: 'Home' }" class="px-4 text-text text-decoration-none">
      <v-app-bar-title class="text-white">
        <span> BluLexi </span>
        <small> ( {{ $t("navigation.beta") }} ) </small>
        <v-icon icon="mdi-alpha-b-box" class="pb-1" />
      </v-app-bar-title>
    </router-link>

    <v-btn
      :style="isMobile ? 'justify-items: end' : ''"
      size="small"
      prepend-icon="mdi-translate-variant"
      @click="toggle"
      class="mx-1"
    >
      {{ locale === "fa" ? "English" : "فارسی" }}
    </v-btn>

    <v-switch
      :style="isMobile ? 'justify-items: end' : ''"
      v-model="isDarkTheme"
      inset
      hide-details
      true-icon="mdi-brightness-3"
      false-icon="mdi-brightness-7"
    />

    <v-spacer />

    <template #append>
      <template v-if="!isMobile">
        <v-btn
          v-for="{ icon, title, to } in quickMenu"
          :key="title"
          :prepend-icon="icon"
          :title="$t(title)"
          :value="$t(title)"
          :to="to"
          class="ml-1 text-none"
          variant="text"
          size="small"
          exact
        >
          {{ $t(title) }}
        </v-btn>

        <v-menu open-on-hover>
          <template #activator="{ props }">
            <v-btn
              v-if="userProfile?.token"
              prepend-icon="mdi-account-circle"
              class="mx-1 text-none text-caption"
              variant="outlined"
              color="white"
              exact
              v-bind="props"
            >
              <!-- <small>
                {{ (userProfile?.email ?? "User@").split("@")[0] }}
              </small>
              |  -->
              {{ $t("navigation.credits") }}
              <b>{{ userProfile?.usage_limit }}</b>
            </v-btn>
          </template>

          <v-list nav density="compact" class="text-caption">
            <v-list-item
              variant="text"
              size="small"
              exact
              prepend-icon="mdi-account-box"
              :title="$t('navigation.userProfile')"
              to="/user-profile"
            />
            <v-list-item
              variant="text"
              size="small"
              exact
              prepend-icon="mdi-login"
              :title="$t('navigation.signOut')"
              @click="signOut"
            />
          </v-list>
        </v-menu>
      </template>
    </template>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary style="height: 100%; z-index: 2008">
    <v-list-item :prepend-avatar="logo" title="Blulexi" class="my-1 py-1"></v-list-item>

    <v-divider></v-divider>

    <v-list density="comfortable" nav>
      <v-list-item
        v-for="{ icon, title, to } in quickMenu"
        :key="title"
        :prepend-icon="icon"
        :title="$t(title)"
        :value="$t(title)"
        :to="to"
        class="ml-1 text-none"
        rounded="xl"
        variant="text"
        size="small"
        exact
      ></v-list-item>

      <v-list-item
        v-if="userProfile?.token"
        prepend-icon="mdi-account-circle"
        class="mt-12 text-none text-caption"
        variant="outlined"
        rounded="xl"
        color="white"
        exact
      >
        <small>
          {{ (userProfile?.email ?? "User@").split("@")[0] }}
        </small>
        | {{ $t("navigation.credits") }} <b>{{ userProfile?.usage_limit }}</b>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import logo from "@/assets/images/logo.jpg";
import { useTheme } from "vuetify";
import { computed } from "vue";

import useLang from "@/composable/useLang";
const { toggle, locale, isRtl } = useLang();

import useMobile from "@/composable/useMobile";
const { isMobile } = useMobile();

const theme = useTheme();
const isDarkTheme = computed({
  get: () => theme.global.current.value.dark,
  set: (value: boolean) => (theme.global.name.value = value ? "dark" : "light"),
});

import { ref } from "vue";

const quickMenu = ref([
  { title: "navigation.home", to: "/", icon: "mdi-home" },
  { title: "navigation.aboutUs", to: "/about-us", icon: "mdi-information-variant" },
  {
    title: "navigation.contactUs",
    to: "/contact-us",
    icon: "mdi-account-box-outline",
  },
]);

const drawer = ref(false);

import { userProfile } from "@/stores/store";
import router from "@/router";
const signOut = async () => {
  //TODO: Call api to lose token
  userProfile.value = { email: null, token: null, usage_limit: 0 };
  router.replace({ name: "Home" });
};
</script>
