<template>
  <header>
    <v-app-bar :elevation="2" color="white" height="80" fixed app>
      <v-container class="d-flex align-center">
        <div class="d-flex align-center">
          <v-icon color="primary" size="40" class="me-3">
            mdi-key-variant
          </v-icon>
          <div>
            <h2 class="text-primary font-weight-bold arabic-text" style="font-size: 1.5rem;">
              مفاتيح الشامل
            </h2>
          </div>
        </div>

        <v-spacer></v-spacer>

        <v-btn variant="outlined" color="secondary" prepend-icon="mdi-phone" class="me-3 d-none d-md-flex"
          :aria-label="'Call us at ' + contactInfo.phone" href="tel:+966501234567">
          {{ contactInfo.phone }}
        </v-btn>


        <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer"
          :aria-label="'Open navigation menu'"></v-app-bar-nav-icon>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary location="right" :aria-label="'Mobile navigation menu'">
      <v-list>
        <v-list-item prepend-icon="mdi-phone" :title="contactInfo.phone"
          :href="'tel:' + contactInfo.phone.replace(/\s/g, '')"></v-list-item>
        <v-list-item prepend-icon="mdi-map-marker" title="Location" subtitle="Makkah, Saudi Arabia"></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)

const contactInfo = {
  phone: '+966 53 401 8396'
}

const scrollToContact = () => {
  const ctaSection = document.querySelector('#cta-section')
  if (ctaSection) {
    ctaSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>