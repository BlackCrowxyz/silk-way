<template>
  <v-container>
    <v-responsive class="align-center fill-height">
    <!-- 
      <VCardSubtitle v-if="isLoading">Please wait for your result ... be patient ... don't close the page</VCardSubtitle>
      <VCard variant="tonal" :loading="isLoading" max-width="900" class="mx-auto">
        <VCardTitle>Paper work</VCardTitle>
        <VCardText>
          <v-row v-for="(w, i) in paper.words" :key="i" class="d-flex align-center justify-space-between">
            <v-col cols="6">
              <v-text-field dense label="Your word here" variant="outlined" v-model="w.word" base-color="primary"
                color="primary" />
            </v-col>
            <v-col cols="6">
              <v-select dense v-model="w.partOfSpeech" label="Select part of speech" base-color="primary" color="primary"
                :items="['Noun', 'Adjective', 'Verb', 'Pronoun', 'Adverb']" variant="outlined" center-affix />
            </v-col>
          </v-row>
        </VCardText>

        <VCardText>
          output:
          <v-row>
            <v-col cols="12">
              first sentence
            </v-col>
            <v-col cols="12">
              first sentence
            </v-col>
            <v-col cols="12">
              first sentence
            </v-col>
            <v-col cols="12">
              first sentence
            </v-col>
            <v-col cols="12">
              first sentence
            </v-col>
          </v-row>
        </VCardText>


        <VCardText>
          examples:
          <v-row>
            <v-col cols="12" v-for="ex, i in paper.inputExamples" :key="i">
              <v-text-field v-model="ex.value" label="Write your example sentence here" />
            </v-col>
          </v-row>
        </VCardText>

        <VCardText>
          paragraph:
          <v-row>
            <v-col cols="12">
              <v-textarea v-model="paper.paragraph" label="Write your example paragraph here" />
            </v-col>
          </v-row>
        </VCardText>

        <VCardActions>
          <VBtn variant="outlined" @click="submit" :disabled="isDisabled" color="primary">
            Submit</VBtn>
          <VBtn variant="flat" :to="{ name: 'Home' }" color="red">Cancel</VBtn>
          <v-btn v-if="data?.result" variant="elevated" text="Show result" color="yellow"
            @click="showResult = true"></v-btn>
        </VCardActions>
      </VCard> -->


    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, watchEffect } from 'vue'

const paper = reactive({
  words: [
    { partOfSpeech: null, word: null },
    { partOfSpeech: null, word: null },
    { partOfSpeech: null, word: null },
    { partOfSpeech: null, word: null },
    { partOfSpeech: null, word: null },
  ],
  inputExamples: [
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
  ],
  paragraph: null
})

</script>

<style></style>