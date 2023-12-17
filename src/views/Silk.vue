<template>
  <v-container class="pa-16">
    <!-- {{ user }} -->
    <v-stepper
      v-model="step"
      :items="[$t('silk.steps[0]'), $t('silk.steps[1]'), $t('silk.steps[2]')]"
    >
      <template v-slot:item.1>
        <v-card flat>
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

            <!-- isTranslator -->
            <v-radio-group
              :label="$t(questions[1].question)"
              v-model="questions[1].v"
              @change="user.isTranslator = questions[1].v == 3"
              density="comfortable"
            >
              <v-radio
                v-for="(option, index) in questions[1].options"
                :key="index"
                :label="$t(option.key)"
                :value="option.value"
              ></v-radio>
            </v-radio-group>
          </v-card-text>
        </v-card>
      </template>

      <!-- isCompany = True -->
      <template v-slot:item.2>
        <v-card flat>
          <!-- company + need tra -->
          <template v-if="user.isCompany && !user.isTranslator">
            <v-card-title>{{ $t("silk.title1") }}</v-card-title>
            <v-card-text>
              <!-- {
              // isTranslator = false, isCompany = true
              id: 10,
              v: null,
              question: "Please provide your company name, website, email, and contact methods.",
              input_type: "text",
              },
              {
                // isTranslator = false, isCompany = true
                id: 17,
                v: null,
                question: "Please provide your company website",
                input_type: "text",
              },
              {
                // isTranslator = false, isCompany = true
                id: 11,
                v: null,
                question:
                  "Have you already contacted the target company? If yes, what is their name, website, and contact methods? If no, do you want us to find and connect you to a company?",
                input_type: "text",
              },
              {
                // isTranslator = false, isCompany = true
                id: 14,
                v: null,
                question: "Provide any files or catalogues to describe your company's services.",
                input_type: "file",
              }, -->
              <v-textarea
                :label="$t(questions[9].question)"
                :type="questions[9].input_type"
                v-model="questions[9].v"
              >
              </v-textarea>

              <v-text-field
                :label="$t(questions[16].question)"
                :type="questions[16].input_type"
                v-model="questions[16].v"
              >
              </v-text-field>

              <v-textarea
                :label="$t(questions[10].question)"
                :type="questions[10].input_type"
                v-model="questions[10].v"
              >
              </v-textarea>

              <v-text-field
                :label="$t(questions[13].question)"
                :type="questions[13].input_type"
                v-model="questions[13].v"
              >
              </v-text-field>
            </v-card-text>
          </template>
          <!-- someone + is tra -->
          <template v-else-if="!user.isCompany && user.isTranslator">
            <v-card-title>
              {{ $t("silk.title2") }}
            </v-card-title>
            <v-card-text>
              <!-- {
                // isTranslator = true
                id: 15,
                v: null,
                question: "What is your gender",
                options: [
                  { key: "Male", value: 11 },
                  { key: "Female", value: 12 },
                  { key: "No Preference", value: 13 },
                ],
              },
              {
                // isTranslator = true
                id: 16,
                v: null,
                question: "Provide services you do,",
                input_type: "text",
              }, -->
              <v-radio-group
                :label="$t(questions[14].question)"
                v-model="questions[14].v"
                @change="
                  user.translator.gender =
                    questions[14].v == 11 ? 'M' : questions[14].v == 12 ? 'F' : '-'
                "
                density="comfortable"
              >
                <v-radio
                  v-for="(option, index) in questions[14].options"
                  :key="index"
                  :label="$t(option.key)"
                  :value="option.value"
                ></v-radio>
              </v-radio-group>

              <v-text-field
                :label="$t(questions[15].question)"
                :type="questions[15].input_type"
                v-model="questions[15].v"
              >
              </v-text-field>
            </v-card-text>
          </template>
          <!-- someone + need tra -->
          <template v-else-if="!user.isCompany && !user.isTranslator">
            <v-card-title> {{ $t("silk.comingSoon") }} </v-card-title>
            <v-card-text>(someone + need tra)</v-card-text>
          </template>
          <!-- company + is tra -->
          <template v-else>
            <v-card-title> {{ $t("silk.comingSoon") }} </v-card-title>
            <v-card-text>(company + is tra)</v-card-text>
          </template>
        </v-card>
      </template>

      <template v-slot:item.3>
        <v-card :title="$t('silk.title3')" flat>
          <v-card-text>
            <!-- {
              // isTranslator = false
              id: 3,
              v: null,
              question: "What type of translation services are needed?",
              options: [
                { key: "General (daily, friendly, tourism, events, celebrations)", value: 6 },
                {
                  key:
                    "Business (trade, import, export, exhibitions, business meetings, contracts)",
                  value: 7,
                },
              ],
            }, -->
            <v-radio-group
              :label="$t(questions[2].question)"
              v-model="questions[2].v"
              @change="user.isGeneralUse = questions[2].v == 6"
              density="comfortable"
            >
              <v-radio
                v-for="(option, index) in questions[2].options"
                :key="index"
                :label="$t(option.key)"
                :value="option.value"
              ></v-radio>
            </v-radio-group>

            <!-- {
              // isTranslator = false
              id: 4,
              v: null,
              question: "Preferred gender of the translator?",
              options: [
                { key: "Male", value: 8 },
                { key: "Female", value: 9 },
                { key: "No Preference", value: 10 },
              ],
            }, -->
            <v-radio-group
              :label="$t(questions[3].question)"
              v-model="questions[3].v"
              @change="
                user.isGeneralUse =
                  questions[3].v == 8 ? 'M' : questions[3].v == 9 ? 'F' : '-'
              "
              density="comfortable"
            >
              <v-radio
                v-for="(option, index) in questions[3].options"
                :key="index"
                :label="$t(option.key)"
                :value="option.value"
              ></v-radio>
            </v-radio-group>

            <!-- {
              // isTranslator = false
              id: 5,
              v: null,
              question: "Please provide more details about the required translation services.",
              input_type: "textarea",
            }, -->
            <v-textarea
              :label="$t(questions[4].question)"
              :type="questions[4].input_type"
              v-model="questions[4].v"
            >
            </v-textarea>
            <!-- {
              // isTranslator = false
              id: 6,
              v: null,
              question: "How many days are needed for the service?", // hours, days, weeks, year
              input_type: "number",
            }, -->
            <v-text-field
              :label="$t(questions[5].question)"
              :type="questions[5].input_type"
              v-model="questions[5].v"
            >
            </v-text-field>
            <!-- {
              // isTranslator = false
              id: 7,
              v: null,
              question: "What is the date and time for the service?",
              input_type: "datetime",
            }, -->
            <v-text-field
              :label="$t(questions[6].question)"
              :type="questions[6].input_type"
              v-model="questions[6].v"
            >
            </v-text-field>

            <!-- {
              // isTranslator = false
              id: 8,
              v: null,
              question: "Start time of the service?",
              input_type: "time",
            }, -->
            <v-text-field
              :label="$t(questions[7].question)"
              :type="questions[7].input_type"
              v-model="questions[7].v"
            >
            </v-text-field>
            <!--
            {
              // isTranslator = false
              id: 9,
              v: null,
              question: "End time of the service?",
              input_type: "time",
            }, -->
            <v-text-field
              :label="$t(questions[8].question)"
              :type="questions[8].input_type"
              v-model="questions[8].v"
            >
            </v-text-field>
          </v-card-text>
        </v-card>
      </template>

      <!-- <template v-slot:item.4>
        <v-card title="Step Three" flat>
          <v-card-title> Tell us more about the time and location of work </v-card-title>
          <v-card-text></v-card-text
        ></v-card>
      </template> -->

      <!-- <v-stepper-actions @click:next="nextStep(1)" @click:prev="nextStep(-1)">
      </v-stepper-actions> -->

      <template #next>
        <v-btn v-if="step != 3" @click="nextStep(1)">{{
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
  if (0 < step.value + s || step.value + s < 4) step.value += s;
};

type Option = { key: string; value: number };
type Item = {
  id: number;
  v: any;
  path: number[];
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

import { useI18n } from "vue-i18n";
const { t } = useI18n();

const questions: Ref<Array<Item>> = ref([
  {
    id: 1,
    v: null,
    question: "silk.questions[0].question",
    options: [
      { key: "silk.questions[0].options[0].key", value: 1 },
      { key: "silk.questions[0].options[1].key", value: 2 },
    ],
  },
  {
    id: 2,
    v: null,
    question: "silk.questions[1].question",
    options: [
      { key: "silk.questions[1].options[0].key", value: 3 },
      { key: "silk.questions[1].options[1].key", value: 4 },
    ],
  },
  {
    id: 3,
    v: null,
    question: "silk.questions[2].question",
    options: [
      { key: "silk.questions[2].options[0].key", value: 6 },
      {
        key: "silk.questions[2].options[1].key",
        value: 7,
      },
    ],
  },
  {
    id: 4,
    v: null,
    question: "silk.questions[3].question",
    options: [
      { key: "silk.questions[3].options[0].key", value: 8 },
      { key: "silk.questions[3].options[1].key", value: 9 },
      { key: "silk.questions[3].options[2].key", value: 10 },
    ],
  },
  {
    id: 5,
    v: null,
    question: "silk.questions[4].question",
    input_type: "textarea",
  },
  {
    id: 6,
    v: null,
    question: "silk.questions[5].question",
    input_type: "number",
  },
  {
    id: 7,
    v: null,
    question: "silk.questions[6].question",
    input_type: "datetime",
  },
  {
    id: 8,
    v: null,
    question: "silk.questions[7].question",
    input_type: "time",
  },
  {
    id: 9,
    v: null,
    question: "silk.questions[8].question",
    input_type: "time",
  },
  {
    id: 10,
    v: null,
    question: "silk.questions[9].question",
    input_type: "text",
  },
  {
    id: 11,
    v: null,
    question: "silk.questions[10].question",
    input_type: "textarea",
  },
  {
    id: 12,
    v: null,
    question: "silk.questions[11].question",
    input_type: "text",
  },
  {
    id: 13,
    v: null,
    question: "silk.questions[12].question",
    input_type: "number",
  },
  {
    id: 14,
    v: null,
    question: "silk.questions[13].question",
    input_type: "file",
  },
  {
    id: 15,
    v: null,
    question: "silk.questions[14].question",
    options: [
      { key: "silk.questions[14].options[0].key", value: 11 },
      { key: "silk.questions[14].options[1].key", value: 12 },
      { key: "silk.questions[14].options[2].key", value: 13 },
    ],
  },
  {
    id: 16,
    v: null,
    question: "silk.questions[15].question",
    input_type: "text",
  },
  {
    id: 17,
    v: null,
    question: "silk.questions[16].question",
    input_type: "text",
  },
]);

// const questions: Ref<Item[]> = ref([
//   {
//     id: 1,
//     v: null,
//     question: "Are you seeking services as an individual or a company?",
//     options: [
//       { key: "Individual", value: 1 },
//       { key: "Company", value: 2 },
//     ],
//   },
//   {
//     id: 2,
//     v: null,
//     question: "Are you looking for a translator or a business partner?",
//     options: [
//       { key: "I am a translator", value: 3 },
//       { key: "I want a translator", value: 4 },
//     ],
//   },
//   {
//     // isTranslator = false
//     id: 3,
//     v: null,
//     question: "What type of translation services are needed?",
//     options: [
//       { key: "General (daily, friendly, tourism, events, celebrations)", value: 6 },
//       {
//         key:
//           "Business (trade, import, export, exhibitions, business meetings, contracts)",
//         value: 7,
//       },
//     ],
//   },
//   {
//     // isTranslator = false
//     id: 4,
//     v: null,
//     question: "Preferred gender of the translator?",
//     options: [
//       { key: "Male", value: 8 },
//       { key: "Female", value: 9 },
//       { key: "No Preference", value: 10 },
//     ],
//   },
//   {
//     // isTranslator = false
//     id: 5,
//     v: null,
//     question: "Please provide more details about the required translation services.",
//     input_type: "textarea",
//   },
//   {
//     // isTranslator = false
//     id: 6,
//     v: null,
//     question: "How many days are needed for the service?", // hours, days, weeks, year
//     input_type: "number",
//   },
//   {
//     // isTranslator = false
//     id: 7,
//     v: null,
//     question: "What is the date and time for the service?",
//     input_type: "datetime",
//   },
//   {
//     // isTranslator = false
//     id: 8,
//     v: null,
//     question: "Start time of the service?",
//     input_type: "time",
//   },
//   {
//     // isTranslator = false
//     id: 9,
//     v: null,
//     question: "End time of the service?",
//     input_type: "time",
//   },
//   {
//     // isTranslator = false, isCompany = true
//     id: 10,
//     v: null,
//     question: "Please provide your company name.",
//     input_type: "text",
//   },
//   {
//     // isTranslator = false, isCompany = true
//     id: 11,
//     v: null,
//     question:
//       "Have you already contacted the target company? If yes, what is their name, website, and contact methods? If no, do you want us to find and connect you to a company?",
//     input_type: "textarea",
//   },
//   {
//     // isTranslator = false
//     id: 12,
//     v: null,
//     question: "Work Location?",
//     input_type: "text",
//   },
//   {
//     // isTranslator = false
//     id: 13,
//     v: null,
//     question: "Estimated budget range?",
//     input_type: "number",
//   },
//   {
//     // isTranslator = false, isCompany = true
//     id: 14,
//     v: null,
//     question: "Provide any files or catalogues to describe your company's services.",
//     input_type: "file",
//   },
//   {
//     // isTranslator = true
//     id: 15,
//     v: null,
//     question: "What is your gender",
//     options: [
//       { key: "Male", value: 11 },
//       { key: "Female", value: 12 },
//       { key: "No Preference", value: 13 },
//     ],
//   },
//   {
//     // isTranslator = true
//     id: 16,
//     v: null,
//     question: "Provide services you do,",
//     input_type: "text",
//   },
//   {
//     // isTranslator = false, isCompany = true
//     id: 17,
//     v: null,
//     question: "Please provide your company website",
//     input_type: "text",
//   },
// ]);

const submitForm = () => {
  // Form submission logic
};
</script>
