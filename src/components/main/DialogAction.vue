<template>
  <v-dialog v-model="dialog" width="auto">
    <v-card
      append-icon="$close"
      class="mx-auto"
      elevation="16"
      max-width="500"
      title="Credit alert"
    >
      <template v-slot:append>
        <v-btn icon="$close" variant="text" color="text" @click="dialog = false"></v-btn>
      </template>

      <v-divider></v-divider>

      <div class="py-12 text-center">
        <v-icon
          class="mb-6"
          color="text"
          icon="mdi-alert-circle-outline"
          size="42"
        ></v-icon>

        <div class="text-h6 font-weight-bold px-6">
          You only have
          <span>
            {{ userProfile?.usage_limit }}
          </span>
          credits left for the next week.
          <br />
          You get 5 free credits every
          <b> Monday </b>.
          <br />
        </div>
      </div>

      <v-divider></v-divider>

      <div class="pa-4 text-end">
        <v-btn
          class="text-none"
          color="medium-emphasis"
          min-width="92"
          rounded
          variant="outlined"
          @click="dialog = false"
        >
          Cansel
        </v-btn>

        <v-btn
          class="text-none mx-2"
          color="success"
          min-width="92"
          rounded
          variant="tonal"
          @click="
            dialog = false;
            emit('submit');
          "
        >
          Continue & Submit
        </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { userProfile } from "@/stores/store";
import { computed } from "vue";

const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue", "submit"]);

const dialog = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>
