<template>
  <v-container>
    <VCard variant="tonal" :loading="isLoading" max-width="900" class="mx-auto">
      <VCardTitle tag="h1" class="text-h5 mb-6">
        {{ $t("ieltsWriting.title") }}
      </VCardTitle>
      <VCardSubtitle class="text-wrap text-body-1">
        {{ $t("ieltsWriting.subtitle") }}
      </VCardSubtitle>
      <VCardText>
        <VTextarea
          clearable
          v-model="command.question"
          variant="outlined"
          :placeholder="$t('ieltsWriting.typeHere')"
          auto-grow
          rows="4"
          row-height="15"
          class="mb-3"
          :rules="[rules.required, rules.minCount(20)]"
        >
          <template #counter>
            <b>
              {{
                $t("ieltsWriting.wordCount", {
                  length: (command.question ?? "").split(" ").length,
                  max: 40,
                })
              }}
            </b>
          </template>
          <template #label>
            <span
              class="text-caption text-sm-body-1"
              v-html="$t('ieltsWriting.questionLabel')"
            >
            </span>
          </template>
        </VTextarea>

        <v-fade-transition>
          <v-list
            bg-color="purple"
            rounded="lg"
            class="mb-8"
            v-if="filteredQuestions.length"
            density="compact"
          >
            <v-list-subheader>
              {{ $t("ieltsWriting.suggestedQuestion") }}
            </v-list-subheader>
            <v-list-item
              v-for="(q, index) in filteredQuestions"
              :key="index"
              @click="selectSuggestion(q)"
              color="primary"
              border
            >
              <v-list-item-title>
                <small> {{ q.question }} </small>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-fade-transition>

        <VTextarea
          clearable
          v-model.lazy="command2.writing"
          variant="outlined"
          :placeholder="$t('ieltsWriting.typeHere')"
          auto-grow
          rows="10"
          row-height="15"
          persistent-counter
          :rules="[rules.required, rules.minCount(250)]"
        >
          <template #counter>
            <b>
              {{
                $t("ieltsWriting.wordCount", {
                  length: (command2.writing ?? "").split(" ").length,
                  max: 350,
                })
              }}
            </b>
            <span class="mx-2">
              {{ $t("ieltsWriting.writingLimit", { min: 250 }) }}
            </span>
          </template>
          <template #label>
            <span class="text-caption text-sm-body-1">
              {{ $t("ieltsWriting.answerWritingLabel") }}
            </span>
          </template>
        </VTextarea>
      </VCardText>
      <VCardActions>
        <v-btn
          variant="outlined"
          @click="dialog = true"
          :disabled="!isValid"
          color="text"
          class="text-none"
        >
          {{ $t("ieltsWriting.submit") }}
        </v-btn>
        <v-btn class="text-none" variant="flat" :to="{ name: 'Home' }" color="red">
          {{ $t("ieltsWriting.cancel") }}
        </v-btn>
      </VCardActions>
    </VCard>

    <VCard
      id="result"
      variant="tonal"
      v-if="isLoading"
      max-width="900"
      class="mt-12 mx-auto"
    >
      <VCardTitle tag="h1" class="text-h5">
        {{ $t("ieltsWriting.result.title") }}
      </VCardTitle>
      <v-card-text v-intersect="onIntersect" class="d-flex flex-column">
        <template v-if="isLoading">
          <v-progress-circular
            class="ma-auto"
            color="primary"
            indeterminate
            :size="75"
            :width="8"
          />
          <span class="mt-6">
            {{ $t("ieltsWriting.result.loadingText") }}
          </span>
        </template>
        <template v-else-if="!data?.result">
          <div class="ma-auto" v-html="$t('ieltsWriting.result.noResultHtml')"></div>
        </template>
        <template v-else>
          <div class="pre-wrap first-line-bold max-width" v-html="data?.result"></div>
        </template>
      </v-card-text>
      <VCardActions class="d-flex flex-column align-center mt-auto mx-auto pb-6">
        <div v-if="data?.result" class="d-flex justify-space-around mb-4">
          <v-fade-transition group>
            <div
              class="d-flex justify-space-around mr-2"
              v-if="feedback.like != true && feedback.dislike != true"
            >
              <v-tooltip location="top">
                <template #activator="{ props }">
                  <v-btn
                    variant="flat"
                    :color="feedback.like ? 'white' : 'primary'"
                    icon="mdi-thumb-up-outline"
                    @click="
                      feedback.like = !feedback.like;
                      feedback.dislike = false;
                    "
                    v-bind="props"
                    size="x-small"
                  ></v-btn>
                </template>
                {{ $t("ieltsWriting.result.feedback.likeTooltip") }}
              </v-tooltip>

              <v-tooltip location="top">
                <template #activator="{ props }">
                  <v-btn
                    variant="flat"
                    :color="feedback.dislike ? 'white' : 'primary'"
                    icon="mdi-thumb-down-outline"
                    @click="
                      feedback.dislike = !feedback.dislike;
                      feedback.like = false;
                    "
                    v-bind="props"
                    size="x-small"
                  ></v-btn>
                </template>
                {{ $t("ieltsWriting.result.feedback.dislikeTooltip") }}
              </v-tooltip>
            </div>
          </v-fade-transition>

          <v-tooltip location="top">
            <template #activator="{ props }">
              <v-btn
                variant="flat"
                :color="feedback.copied ? 'white' : 'primary'"
                icon="mdi-content-copy"
                @click="copyTextToClipboard(data?.result)"
                v-bind="props"
                size="x-small"
              ></v-btn>
            </template>
            {{ $t("ieltsWriting.result.feedback.copyToClipboard") }}
          </v-tooltip>
        </div>
      </VCardActions>
    </VCard>

    <DialogAction v-model="dialog" @submit="submit" />

    <v-dialog v-model="feedbackDialog">
      <v-card>
        <v-card-title>
          <VIcon size="25" class="mr-1">
            {{
              feedback.like === true
                ? "mdi-thumb-up"
                : feedback.dislike === true
                ? "mdi-thumb-down"
                : "mdi-comment-quote"
            }}
          </VIcon>
          {{ $t("ieltsWriting.result.feedback.submitAdditionalFeedback") }}
        </v-card-title>
        <VCardText>
          <VTextarea
            variant="outlined"
            v-model="feedback.detail"
            :label="$t('ieltsWriting.result.feedback.feedbackLabel')"
          ></VTextarea>
        </VCardText>
        <v-card-actions>
          <VBtn variant="elevated" color="primary" @click="submitFeedback">
            {{ $t("ieltsWriting.result.feedback.submitFeedback") }}
          </VBtn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>

  <v-fade-transition>
    <v-btn
      v-if="data?.result"
      v-show="!interSect"
      class="btn-down"
      @click="scrollTo"
      size="small"
      icon="mdi-arrow-down"
    ></v-btn>
  </v-fade-transition>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from "vue";
import { watchEffect } from "vue";

import { useAxios } from "@vueuse/integrations/useAxios";
import { config } from "@/composable/config";

import DialogAction from "./main/DialogAction.vue";
import { rules } from "@/helpers/rules";
import { userProfile } from "@/stores/store";

const dialog = ref(false);

const command = reactive({
  question: "",
});

const command2 = reactive({
  writing: "",
});

////////////////////////////////////////////////////////
import { watchDebounced } from "@vueuse/core";
import task2questions from "@/statics/task2questions.json";
const questions = reactive(task2questions);
const filteredQuestions = ref([]);

watchDebounced(
  command,
  () => {
    // Avoid suggesting when user hasn't input enough characters
    const size = command.question.split(" ").length;
    if (size < 4 || size > 12) {
      filteredQuestions.value = [];
    } else {
      const c = command.question.toLowerCase();
      filteredQuestions.value = questions.filter((q) => q.t.includes(c));
    }
  },
  { debounce: 1000, maxWait: 3000 }
);

const selectSuggestion = (q: { question: string }) => {
  command.question = q.question;
};

/////////////////////////////////////////////////////////

function scrollTo() {
  try {
    const element = document?.querySelector("#result");
    if (element) {
      const topPos = element?.getBoundingClientRect()?.top + window.scrollY - 60;
      window?.scrollTo({
        top: topPos,
        behavior: "smooth",
      });
    }
  } catch (error) {
    console.log(error);
  }
}

async function copyTextToClipboard(text: string) {
  try {
    if (navigator && navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      feedback.copied = !feedback.copied;
      console.log("Text copied to clipboard");
      // Handle the success (e.g., display a message to the user)
    }
  } catch (err) {
    console.error("Failed to copy text to clipboard", err);
    // Handle the error (e.g., display an error message to the user)
  }
}

// TODO: add vueuse axios to a composable module
const { data, isLoading, execute } = useAxios(
  `${config.BASE_API}/check-writing-task2`,
  { method: "POST", headers: { Authorization: userProfile.value?.token } },
  { immediate: false }
);

function submit(): void {
  const data = { ...command, ...command2 };
  execute({ data });
  scrollTo();
}

/* ************************************************************ */
const isValid = computed(() => {
  return (
    rules.required(command.question) === true &&
    rules.required(command2.writing) === true &&
    rules.minCount(20)(command2.writing) === true &&
    rules.minCount(20)(command2.writing) === true
  );
});
/* ************************************************************ */
const feedback = reactive({
  like: false,
  dislike: false,
  detail: null,
  copied: false,
});

const {
  data: dataFeedback,
  isLoading: isLoadingFeedback,
  execute: executeFeedback,
} = useAxios(
  `${config.BASE_API}/feedback`,
  { method: "POST", headers: { Authorization: userProfile.value?.token } },
  { immediate: false }
);

const feedbackDialog = ref(false);
watchEffect(() => {
  if (feedback.dislike === true || feedback.like === true) {
    feedbackDialog.value = true;
  }
  if (isLoadingFeedback) feedbackDialog.value = false;
});

function submitFeedback(): void {
  const fb = {
    like: feedback.like ? "+" : feedback.dislike ? "-" : "!",
    detail: feedback.detail,
  };
  executeFeedback({ data: fb });
}

const interSect = ref(false);
function onIntersect(isIntersecting: any, entries: any, observer: any) {
  // More information about these options
  // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  interSect.value = isIntersecting;
}
</script>

<style>
.pre-wrap {
  white-space: pre-wrap;
}

.max-width {
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;
}

.btn-down {
  position: fixed;
  bottom: 2%;
  left: calc(50% - 20px);
}
</style>
