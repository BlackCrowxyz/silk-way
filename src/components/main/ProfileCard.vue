<template>
  <v-card
    min-width="300"
    max-width="500"
    min-height="250"
    rounded="xl"
    class="d-flex flex-column mx-auto"
  >
    <template #title>
      <span class="mx-1">
        {{ title }}
      </span>
      <v-icon :icon="append" size="16"></v-icon>
    </template>
    <template #subtitle>
      <div>{{ subtitle }}</div>
      <div class="d-flex mt-1">
        <v-chip
          v-if="comments"
          rounded
          size="small"
          prepend-icon="mdi-message-reply-text"
          variant="outlined"
          class="mr-2"
        >
          {{ comments.length }}
        </v-chip>
        <v-rating
          :model-value="rating"
          color="amber"
          density="compact"
          half-increments
          readonly
          size="small"
        ></v-rating>
      </div>
    </template>
    <template #prepend>
      <v-avatar size="84">
        <v-img cover :src="prepend" :alt="title"></v-img>
      </v-avatar>
    </template>
    <template #append>
      <v-avatar :color="color" size="24" v-if="comments?.length">
        <!-- <v-icon :icon="append" size="16"></v-icon> -->
        <v-icon icon="mdi-professional-hexagon" size="32"></v-icon>
      </v-avatar>
    </template>
    <v-card-text>
      {{ text }}
    </v-card-text>
    <v-card-actions class="mt-auto">
      <v-spacer></v-spacer>
      <v-btn variant="flat" size="small" class="px-3" @click="dialog = true">
        More details
      </v-btn>
    </v-card-actions>
  </v-card>

  <v-dialog v-model="dialog" max-width="800">
    <v-card class="px-16 py-6">
      <template #title>
        <span class="mx-1">
          {{ title }}
        </span>
        <v-icon :icon="append" size="16"></v-icon>
      </template>
      <template #subtitle>
        <div>{{ subtitle }}</div>
        <div class="d-flex mt-1">
          <v-chip
            v-if="comments"
            rounded
            size="small"
            prepend-icon="mdi-message-reply-text"
            variant="outlined"
            class="mr-2"
          >
            {{ comments.length }}
          </v-chip>
          <v-rating
            :model-value="rating"
            color="amber"
            density="compact"
            half-increments
            readonly
            size="small"
          ></v-rating>
        </div>
      </template>
      <template #prepend>
        <v-avatar size="84">
          <v-img cover :src="prepend" :alt="title"></v-img>
        </v-avatar>
      </template>
      <template #append>
        <v-avatar :color="color" size="24" v-if="comments?.length">
          <!-- <v-icon :icon="append" size="16"></v-icon> -->
          <v-icon icon="mdi-professional-hexagon" size="32"></v-icon>
        </v-avatar>
      </template>

      <template v-if="background">
        <v-divider class="my-3"></v-divider>
        <v-card-subtitle> Experience </v-card-subtitle>
        <v-card-text class="py-0">
          <v-chip-group>
            <v-chip rounded v-for="tag in background" :key="tag">
              {{ tag }}
            </v-chip>
          </v-chip-group>
        </v-card-text>
      </template>

      <v-divider class="my-3"></v-divider>
      <v-card-subtitle> Background </v-card-subtitle>
      <v-card-text>
        {{ text }}
      </v-card-text>
      <template v-if="comments?.length">
        <v-divider class="my-3"></v-divider>
        <v-card-subtitle> Comments </v-card-subtitle>
        <v-card-text>
          <template v-for="c in comments" :key="c">
            <v-card variant="outlined" rounded="lg" class="mb-3">
              <v-card-text>
                {{ c }}
              </v-card-text>
            </v-card>
          </template>
        </v-card-text>
      </template>
      <v-card-actions class="mt-auto">
        <v-spacer></v-spacer>
        <v-btn variant="flat" text="Close Dialog" @click="dialog = false"></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";

const dialog = ref(false);

// **************************************************** /

import { defineProps, withDefaults } from "vue";

export type ProfileProps = {
  title: string;
  subtitle: string;
  text: string;
  comments?: Array<string>;
  maxWidth?: string | number;
  minHeight?: string | number;
  append?: string;
  prepend?: string;
  color?: string;
  background?: Array<string>;
};

withDefaults(defineProps<ProfileProps>(), {
  maxWidth: "400",
  minHeight: "200",
  append: "mdi-check",
  color: "blue-darken-2",
  prepend: "https://cdn.vuetifyjs.com/images/john.png",
});

// **************************************************** /

const rating = ref(getRandomRating());

function getRandomRating() {
  return Math.round(Math.random() * 5);
}

// const getColor = (rating: number) => {
//   if (rating < 2) return "red";
//   if (rating < 4) return "yellow";
//   return "green";
// };
</script>
