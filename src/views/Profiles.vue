<template>
  <v-container class="pa-16">
    <v-row>
      <template v-for="(p, i) in profiles" :key="i">
        <v-col cols="12" sm="12" md="6" lg="4">
          <ProfileCard
            :title="p.title"
            :subtitle="p.subtitle"
            :text="p.text"
            :append="p.append"
            :prepend="p.prepend"
            :color="p.color"
            :comments="p.comments"
            :background="p.background"
          />
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import ProfileCard, { ProfileProps } from "@/components/main/ProfileCard.vue";
import { Ref, ref } from "vue";

import m1 from "@/assets/images/m1.jpg";
import m2 from "@/assets/images/m2.jpg";
import m3 from "@/assets/images/m3.jpg";
import m4 from "@/assets/images/m4.jpg";
import m5 from "@/assets/images/m5.jpg";
import f1 from "@/assets/images/f1.jpg";
import f2 from "@/assets/images/f2.jpg";
import f3 from "@/assets/images/f3.jpg";
import f4 from "@/assets/images/f4.jpg";
import f5 from "@/assets/images/f5.jpg";

const profiles: Ref<Array<ProfileProps>> = ref([
  {
    title: "Li Wei",
    subtitle: "Senior Chinese Translator",
    text:
      "Over 15 years of experience in translation, including 5 years in China working with technical documents.",
    append: "mdi-check-decagram",
    prepend: m1,
    comments: [
      "Very professional and humble!",
      "Cute and handsome man, gave him tip.",
      "آقا خدایی چینی که فارسی حرف بزنه اینجوری ندیده بودم :)",
    ],
    background: ["Chinese", "Persian", "Seminar", "Companies", "Tour guide"],
  },
  {
    title: "Wang Fang",
    subtitle: "Mid Chinese Translator",
    text:
      "Specializes in business translations with over a decade of experience, including 3 years in Chinese market analysis.",
    append: "mdi-check-decagram",
    prepend: m2,
    comments: [
      "Incredibly nuanced translations, true to the original tone.",
      "Delivers high-quality work even under tight deadlines.",
      "One of the finest translators for classical Chinese poetry.",
    ],
    background: ["Media", "Literature", "Mandarin", "Cantonese", "Poetry workshops"],
  },
  {
    title: "Zhang Lin",
    subtitle: "Beginner Chinese Translator",
    text:
      "Recently graduated with a degree in Chinese-English translation, completed an internship in Shanghai.",
    append: "mdi-check-decagram",
    color: "success",
    prepend: f1,
    comments: [
      "Absolutely masterful in cultural nuances!",
      "Made our film script authentic with his translations.",
      "Outstanding work! His insights into Persian idioms are impressive.",
    ],
    background: ["Film", "Television", "Theatre", "Cultural Consulting", "Documentary"],
  },
  {
    title: "Mina Sadati",
    subtitle: "Senior Persian Translator",
    text:
      "Expertise in literature and legal document translation, with extensive experience working in Tehran.",
    prepend: f2,
    comments: [
      "Very accurate technical terms translation.",
      "Great to have on site for interpreting complex machinery installations.",
      "She bridges the technical language gap effortlessly.",
    ],
    background: [
      "Engineering",
      "Patents",
      "Mandarin",
      "Technical Manuals",
      "Machine Installation",
    ],
  },
  {
    title: "Arash Nowruz",
    subtitle: "Mid Persian Translator",
    text:
      "Focused on medical document translation, with years of experience including work at international conferences in Iran.",
    prepend: m3,
  },
  {
    title: "Heng Su",
    subtitle: "Beginner Chinese Translator",
    text:
      "Graduated with honors in language studies, partook in a cultural exchange program in Beijing.",
    prepend: f3,
  },
  {
    title: "Leyla Golestani",
    subtitle: "Senior Persian Translator",
    text:
      "Over two decades of experience in translation and interpretation, notable tenure at the Tehran Language Institute.",
    prepend: f4,
  },
  {
    title: "Xiaofan Zhu",
    subtitle: "Mid Chinese Translator",
    text:
      "Translation specialist in tech and startups, with work experience in Shenzhen’s technology sector.",
    prepend: m4,
  },
  {
    title: "Soraya Mehr",
    subtitle: "Beginner Persian Translator",
    text:
      "Fresh from university with a modern approach to translation, experienced in online content creation.",
    prepend: f5,
  },
  {
    title: "Jingyi Tan",
    subtitle: "Senior Chinese Translator",
    text:
      "Renowned for translating business contracts, with significant projects completed in Guangzhou.",
    prepend: m5,
  },
  // {
  //   title: "Behnam Irani",
  //   subtitle: "Mid Persian Translator",
  //   text:
  //     "Experienced in translating historical texts and documents, with projects completed for museums in Isfahan.",
  // },
  // {
  //   title: "Shirin Vossoughi",
  //   subtitle: "Senior Persian Translator",
  //   text:
  //     "A wealth of experience in broadcasting translation, with work history at media outlets in Iran.",
  // },
  // {
  //   title: "Chen Wu",
  //   subtitle: "Beginner Chinese Translator",
  //   text:
  //     "Special interest in education and language teaching, with experience teaching Mandarin in Xi’an.",
  // },
]);
</script>
