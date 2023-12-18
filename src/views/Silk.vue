<template>
  <v-container class="pa-16">
    <!-- {{ user }} -->
    <v-stepper
      alt-labels
      v-model="step"
      :items="[
        $t('silk.steps[0]'),
        $t('silk.steps[1]'),
        $t('silk.steps[2]'),
        $t('silk.steps[3]'),
      ]"
    >
      <template v-slot:item.1>
        <v-card flat>
          <v-card-title>{{ $t("silk.title0") }}</v-card-title>
          <v-card-text>
            <!-- isCompany -->
            <v-radio-group
              :label="$t(questions[0].question)"
              v-model="questions[0].v"
              @change="user.isCompany = questions[0].v == 2"
              density="comfortable"
            >
              <v-radio
                v-for="(option, index) in questions[0].options"
                :key="index"
                :label="$t(option.key)"
                :value="option.value"
              ></v-radio>
            </v-radio-group>
          </v-card-text>
        </v-card>
      </template>

      <!-- isCompany = False -->
      <template v-slot:item.2>
        <v-card flat>
          <template v-if="!user.isCompany">
            <v-card-title>{{ $t("silk.title1") }}</v-card-title>
            <v-card-text>
              <v-radio-group
                :label="$t(questions[1].question)"
                v-model="questions[1].v"
                density="comfortable"
              >
                <v-radio
                  v-for="(option, index) in questions[1].options"
                  :key="index"
                  :label="$t(option.key)"
                  :value="option.value"
                ></v-radio>
              </v-radio-group>

              <v-radio-group
                :label="$t(questions[2].question)"
                v-model="questions[2].v"
                density="comfortable"
              >
                <v-radio
                  v-for="(option, index) in questions[2].options"
                  :key="index"
                  :label="$t(option.key)"
                  :value="option.value"
                ></v-radio>
              </v-radio-group>
            </v-card-text>
          </template>
          <template v-else>
            <v-card-title>
              {{ $t("silk.title2") }}
            </v-card-title>
            <v-card-text>
              <v-radio-group
                :label="$t(questions[3].question)"
                v-model="questions[3].v"
                density="comfortable"
              >
                <v-radio
                  v-for="(option, index) in questions[3].options"
                  :key="index"
                  :label="$t(option.key)"
                  :value="option.value"
                ></v-radio>
              </v-radio-group>

              <v-radio-group
                :label="$t(questions[4].question)"
                v-model="questions[4].v"
                density="comfortable"
              >
                <v-radio
                  v-for="(option, index) in questions[4].options"
                  :key="index"
                  :label="$t(option.key)"
                  :value="option.value"
                ></v-radio>
              </v-radio-group>
            </v-card-text>
          </template>
        </v-card>
      </template>

      <template v-slot:item.3>
        <v-card :title="$t('silk.title3')" flat>
          <v-card-text>
            <template v-if="!user.isCompany">
              <v-text-field
                :label="$t(questions[5].question)"
                :type="$t(questions[5].input_type)"
                v-model="questions[5].v"
              >
              </v-text-field>
              <v-text-field
                :label="$t(questions[6].question)"
                :type="$t(questions[6].input_type)"
                v-model="questions[6].v"
              >
              </v-text-field>
              <v-text-field
                :label="$t(questions[7].question)"
                :type="$t(questions[7].input_type)"
                v-model="questions[7].v"
              >
              </v-text-field>
              <v-text-field
                :label="$t(questions[8].question)"
                :type="$t(questions[8].input_type)"
                v-model="questions[8].v"
              >
              </v-text-field>
            </template>
            <template v-else>
              <v-textarea
                :label="$t(questions[9].question)"
                :type="$t(questions[9].input_type)"
                v-model="questions[9].v"
              >
              </v-textarea>

              <v-checkbox
                :label="$t(questions[10].question)"
                :type="$t(questions[10].input_type)"
                v-model="questions[10].v"
              >
              </v-checkbox>
            </template>
          </v-card-text>
        </v-card>
      </template>

      <template v-slot:item.4>
        <v-card :title="$t('silk.title4')" flat>
          <v-card-text>
            <v-text-field
              :label="$t(questions[11].question)"
              :type="$t(questions[11].input_type)"
              v-model="questions[11].v"
            >
            </v-text-field>
            <v-text-field
              :label="$t(questions[12].question)"
              :type="$t(questions[12].input_type)"
              v-model="questions[12].v"
            >
            </v-text-field>
            <v-text-field
              :label="$t(questions[13].question)"
              :type="$t(questions[13].input_type)"
              v-model="questions[13].v"
            >
            </v-text-field>
            <v-text-field
              :label="$t(questions[14].question)"
              :type="$t(questions[14].input_type)"
              v-model="questions[14].v"
            >
            </v-text-field>
          </v-card-text>
        </v-card>
      </template>

      <!-- <v-stepper-actions @click:next="nextStep(1)" @click:prev="nextStep(-1)">
      </v-stepper-actions> -->

      <template #next>
        <v-btn v-if="step != 4" @click="nextStep(1)">{{
          $t("$vuetify.stepper.next")
        }}</v-btn>
        <v-btn v-else :disabled="false" @click="router.push({ name: 'profiles' })">{{
          $t("$vuetify.stepper.done")
        }}</v-btn>
      </template>
      <template #prev>
        <v-btn @click="nextStep(-1)">{{ $t("$vuetify.stepper.prev") }}</v-btn>
      </template>
    </v-stepper>
  </v-container>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { ref, reactive } from "vue";

import { useRouter } from "vue-router";
const router = useRouter();

const step = ref(0);

const nextStep = (s: number) => {
  if (0 < step.value + s || step.value + s < 5) step.value += s;
};

type Option = { key: string; value: number };
type Item = {
  id: number;
  v: any;
  question: string;
  options?: Option[];
  input_type?: string;
};

const user = reactive({
  isCompany: null,
  company: { name: null, email: null, site: null },
  isTranslator: null,
  translator: { gender: null },
  isGeneralUse: null,
});

const questions: Ref<Array<Item>> = ref([
  {
    id: 1,
    v: null,
    question: "silk.step1.questions[0].question",
    options: [
      { key: "silk.step1.questions[0].options[0].key", value: 1 },
      { key: "silk.step1.questions[0].options[1].key", value: 2 },
    ],
  },
  {
    id: 2,
    v: null,
    question: "silk.step2.questions[0].question",
    options: [
      { key: "silk.step2.questions[0].options[0].key", value: 6 },
      { key: "silk.step2.questions[0].options[1].key", value: 7 },
      { key: "silk.step2.questions[0].options[2].key", value: 8 },
      { key: "silk.step2.questions[0].options[3].key", value: 9 },
      { key: "silk.step2.questions[0].options[4].key", value: 10 },
      { key: "silk.step2.questions[0].options[5].key", value: 11 },
      { key: "silk.step2.questions[0].options[6].key", value: 12 },
      { key: "silk.step2.questions[0].options[7].key", value: 13 },
    ],
  },
  {
    id: 3,
    v: null,
    question: "silk.step2.questions[1].question",
    options: [
      { key: "silk.step2.questions[1].options[0].key", value: 14 },
      { key: "silk.step2.questions[1].options[1].key", value: 15 },
      { key: "silk.step2.questions[1].options[2].key", value: 16 },
      { key: "silk.step2.questions[1].options[3].key", value: 17 },
      { key: "silk.step2.questions[1].options[4].key", value: 18 },
      { key: "silk.step2.questions[1].options[5].key", value: 19 },
    ],
  },
  {
    id: 4,
    v: null,
    question: "silk.step2.questions[2].question",
    options: [
      { key: "silk.step2.questions[2].options[0].key", value: 20 },
      { key: "silk.step2.questions[2].options[1].key", value: 21 },
    ],
  },
  {
    id: 5,
    v: null,
    question: "silk.step2.questions[3].question",
    options: [
      { key: "silk.step2.questions[3].options[0].key", value: 20 },
      { key: "silk.step2.questions[3].options[1].key", value: 21 },
      { key: "silk.step2.questions[3].options[2].key", value: 22 },
      { key: "silk.step2.questions[3].options[3].key", value: 23 },
      { key: "silk.step2.questions[3].options[4].key", value: 24 },
      { key: "silk.step2.questions[3].options[5].key", value: 25 },
      { key: "silk.step2.questions[3].options[6].key", value: 26 },
    ],
  },
  {
    id: 6,
    v: null,
    question: "silk.step3.questions[0].question",
    input_type: "silk.step3.questions[0].input_type",
  },
  {
    id: 7,
    v: null,
    question: "silk.step3.questions[1].question",
    input_type: "silk.step3.questions[1].input_type",
  },
  {
    id: 8,
    v: null,
    question: "silk.step3.questions[2].question",
    input_type: "silk.step3.questions[2].input_type",
  },
  {
    id: 9,
    v: null,
    question: "silk.step3.questions[3].question",
    input_type: "silk.step3.questions[3].input_type",
  },
  {
    id: 10,
    v: null,
    question: "silk.step3.questions[4].question",
    input_type: "silk.step3.questions[4].input_type",
  },
  {
    id: 11,
    v: null,
    question: "silk.step3.questions[5].question",
    input_type: "silk.step3.questions[5].input_type",
  },
  //
  {
    id: 12,
    v: null,
    question: "silk.step4.questions[0].question",
    input_type: "silk.step4.questions[0].input_type",
  },
  {
    id: 13,
    v: null,
    question: "silk.step4.questions[1].question",
    input_type: "silk.step4.questions[1].input_type",
  },
  {
    id: 14,
    v: null,
    question: "silk.step4.questions[2].question",
    input_type: "silk.step4.questions[2].input_type",
  },
  {
    id: 15,
    v: null,
    question: "silk.step4.questions[3].question",
    input_type: "silk.step4.questions[3].input_type",
  },
]);
2;
const submitForm = () => {
  // Form submission logic
};
</script>
5
