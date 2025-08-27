<template>
  <footer class="bg-grey-darken-4 text-white" :aria-label="'Website footer'">
    <v-container class="py-12">
      <v-row>
        <v-col cols="12" md="4" class="mb-8">
          <div class="d-flex align-center mb-4">
            <v-icon color="primary" size="40" class="me-3">
              mdi-key-variant
            </v-icon>
            <div>
              <h3 class="text-h5 font-weight-bold arabic-text text-primary">
                مفاتيح الشامل
              </h3>
              <p class="text-body-2 text-grey-300 ma-0">Professional Locksmith Services</p>
            </div>
          </div>
          <p class="text-body-2 text-grey-300 mb-4">
            Your trusted locksmith in Makkah, providing professional security solutions
            with 24/7 emergency service. Licensed, insured, and committed to your safety.
          </p>
          <div class="d-flex align-center">
            <v-rating v-model="rating" color="yellow-darken-3" background-color="grey-darken-1" readonly half-increments
              size="small" class="me-2" :aria-label="'5 star rating'"></v-rating>
            <span class="text-body-2 text-grey-300">5.0 • 21 Reviews</span>
          </div>
        </v-col>

        <v-col cols="12" md="4" class="mb-8">
          <h4 class="text-h6 font-weight-bold mb-4">Contact Information</h4>
          <div class="contact-info">
            <div class="d-flex align-center mb-3">
              <v-icon color="primary" class="me-3">mdi-phone</v-icon>
              <div>
                <p class="ma-0 text-body-2 text-grey-300">Emergency Hotline</p>
                <a href="tel:+966501234567" class="text-white text-decoration-none font-weight-medium"
                  :aria-label="'Call emergency hotline'">
                  +966 53 401 8396
                </a>
              </div>
            </div>

            <div class="d-flex align-center mb-3">
              <v-icon color="primary" class="me-3">mdi-map-marker</v-icon>
              <div>
                <p class="ma-0 text-body-2 text-grey-300">Location</p>
                <p class="ma-0 text-white">FWHR+6R Makkah, Saudi Arabia</p>
              </div>
            </div>

            <div class="d-flex align-center mb-3">
              <v-icon color="primary" class="me-3">mdi-clock-outline</v-icon>
              <div>
                <p class="ma-0 text-body-2 text-grey-300">Availability</p>
                <p class="ma-0 text-white font-weight-medium">8AM : 12PM • 7 Days a Week</p>
              </div>
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="4" class="mb-8">
          <h4 class="text-h6 font-weight-bold mb-4">Our Services</h4>
          <v-list class="bg-transparent" density="compact">
            <v-list-item v-for="service in services" :key="service" class="pa-0 mb-2">
              <template v-slot:prepend>
                <v-icon color="primary" size="small" class="me-2">mdi-chevron-right</v-icon>
              </template>
              <v-list-item-title class="text-grey-300 text-body-2">
                {{ service }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>

      <v-divider class="my-8 opacity-20"></v-divider>
      <v-row align="center">
        <v-col cols="12" md="6" class="text-center text-md-start">
          <p class="text-body-2 text-grey-400 ma-0">
            © 1447 مفاتيح الشامل. All rights reserved. Licensed locksmith services in Makkah, KSA.
          </p>
        </v-col>
        <v-col cols="12" md="6" class="text-center text-md-end">
          <div class="d-flex justify-center justify-md-end gap-4">
            <a href="https://wa.me/966501234567" target="_blank" class="text-grey-400 text-decoration-none"
              :aria-label="'Contact us on WhatsApp'">
              <v-icon color="grey-400" size="20">mdi-whatsapp</v-icon>
            </a>
            <a href="tel:+966501234567" class="text-grey-400 text-decoration-none" :aria-label="'Call us'">
              <v-icon color="grey-400" size="20">mdi-phone</v-icon>
            </a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const rating = ref(5)

const services = [
  'Emergency Lockout Service',
  'Lock Installation & Repair',
  'Key Cutting & Duplication',
  'Security Consultation',
  'Commercial Lock Services',
  'Safe Opening & Installation',
  'Master Key Systems',
  'Security Upgrades'
]
</script>