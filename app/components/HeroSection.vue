<template>
  <section class="hero-section d-flex align-center" :aria-label="'Welcome to Keys of Ash-Shamil'">
    <div class="hero-overlay position-absolute w-100 h-100"></div>
    <v-container class="position-relative text-center">
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">
          <div class="hero-content">
            <h1 class="display-1 font-weight-bold text-white mb-4 arabic-text">
              مفاتيح الشامل
            </h1>
            <h2 class="text-md-h2 text-h3 font-weight-bold text-white mb-6">
              Your Trusted Locksmith in Makkah
            </h2>
            <p class="text-h6 text-white mb-8 font-weight-light" style="opacity: 0.9;">
              Professional locksmith services available 24/7. From emergency lockouts to security installations,
              we're here to help keep you safe and secure.
            </p>
            <div class="d-flex flex-column flex-sm-row justify-center ga-4">
              <v-btn color="primary" size="x-large" variant="flat" prepend-icon="mdi-phone-in-talk"
                class="floating-action" :aria-label="'Call for emergency service'" href="tel:+966501234567">
                Emergency Call
              </v-btn>
              <v-btn color="white" size="x-large" variant="outlined" prepend-icon="mdi-wrench"
                :aria-label="'View our services'" @click="scrollToServices">
                Our Services
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-row class="mt-12" justify="center">
        <v-col v-for="indicator in trustIndicators" cols="auto">
          <div class="d-flex align-center">
            <v-icon color="white" class="me-2">{{ indicator.icon }}</v-icon>
            <span class="text-body-1 text-white">{{ indicator.text }}</span>
          </div>
        </v-col>

      </v-row>

    </v-container>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const rating = ref(5)

const scrollToServices = () => {
  const servicesSection = document.querySelector('#services-section')
  if (servicesSection) {
    servicesSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const trustIndicators = [
  { text: '5.0 • 21 Reviews', icon: '' },
  { text: '24/7 Available', icon: 'mdi-clock-check' },
  { text: 'Makkah, KSA', icon: 'mdi-map-marker' }
]
</script>