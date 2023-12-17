<template>
  <v-container>
    <div class="pa-16">
      <v-row>
        <v-col cols="12">
          <h1 class="text-h4 font-weight-bold">Change log</h1>

          <div class="text-body-1 font-weight-light mt-6">
            <h2 class="text-h6 mt-4">
              Update: 15th Dec 2023, v{{ config.appVersion }} (current)
            </h2>
            <ul>
              <li>Implemented Dark/Light mode toggle</li>
              <li>Added word counters for both writing and questions</li>
              <li>
                Introduced user feedback collection with clipboard copy functionality
              </li>
              <li>Enabled question selection from a predefined list for writing tasks</li>
              <li>Redesigned the landing and mobile interface</li>
              <li>Updated social media links for increased connectivity</li>
              <li>Introduced user profile pages and logout capability</li>
              <li>Deployed an error banner for authentication and feedback processes</li>
              <li>Integrated Hotjar and Google Tag Manager for analytics</li>
              <li>Enhanced the site's search engine optimization with SEO meta tags</li>
              <li>Optimized page load speed for a smoother user experience</li>
              <li>Enriched site content with the addition of an FAQ section</li>
              <li>Improved performance with image compression</li>
              <li>Added Persian language(i18n)</li>
              <li>Supports RTL</li>
              <!-- TODO: change font for farsi -->
              <li>Added Dana font for persian characters</li>
              <li>Update dependencies</li>
              <li>Add Persian/English translation to all pages</li>
              <li>Add title and meta for every pages</li>
              <!-- TODO: handle errors better -->
              <!-- Check performance and lighthouse again -->
              <!-- TODO: add tag to questions -->
            </ul>

            <h2 class="text-h6 mt-4">Update: Dec 2023, v0.0.3</h2>
            <ul>
              <li>Changed Design</li>
              <li>Changed color palette</li>
              <li>Added Authentication (Sign up, Sign in)</li>
              <li>Added Change Log</li>
              <li>Added Terms of service</li>
              <li>Added Privacy and Policy</li>
              <li>Added Contact us</li>
              <li>Added "Buy me a coffee"</li>
              <li>Fix minor bugs</li>
              <li>Better mobile UX</li>
            </ul>

            <h2 class="text-h6 mt-4">Update: Nov 2023, v0.0.2</h2>
            <ul>
              <li>Added Header</li>
              <li>Added Footer</li>
              <li>Added Logo</li>
              <li>Added About us</li>
              <li>Added Contacts us</li>
              <li>Updated Favicon</li>
            </ul>

            <h2 class="text-h6 mt-4">Update: Nov 2023, v0.0.1</h2>
            <ul>
              <li>Goodrabi.com lunch</li>
              <li>Accurate Ai based, IELTS Writing band score assessment</li>
            </ul>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
import { config } from "@/composable/config";
</script>
