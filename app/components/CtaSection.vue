<template>
  <section id="cta-section" class="cta-section section-spacing text-white"
    :aria-label="'Contact us for locksmith services'">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" lg="8" class="text-center">
          <v-icon size="80" color="white" class="mb-6 floating-action">
            mdi-key-variant
          </v-icon>

          <h2 class="text-h3 font-weight-bold mb-4">
            Need a Locksmith? We're Here to Help!
          </h2>

          <p class="text-h6 font-weight-light mb-6" style="opacity: 0.9;">
            Don't let lock problems ruin your day. Our certified locksmiths in Makkah
            are ready to provide fast, reliable, and professional service 24 hours a day.
          </p>

          <v-row class="mb-8" justify="center">
            <v-col cols="auto" class="text-center">
              <div class="d-flex flex-column align-center">
                <v-icon size="40" class="mb-2">mdi-star</v-icon>
                <div class="text-h4 font-weight-bold">5.0</div>
                <div class="text-body-2">Rating</div>
              </div>
            </v-col>
            <v-col cols="auto" class="text-center">
              <div class="d-flex flex-column align-center">
                <v-icon size="40" class="mb-2">mdi-account-group</v-icon>
                <div class="text-h4 font-weight-bold">21</div>
                <div class="text-body-2">Reviews</div>
              </div>
            </v-col>
            <v-col cols="auto" class="text-center">
              <div class="d-flex flex-column align-center">
                <v-icon size="40" class="mb-2">mdi-clock-fast</v-icon>
                <div class="text-h4 font-weight-bold">15min</div>
                <div class="text-body-2">Response</div>
              </div>
            </v-col>
          </v-row>

          <div class="d-flex flex-column flex-sm-row justify-center ga-4 mb-8">
            <v-btn color="white" size="x-large" variant="flat" prepend-icon="mdi-phone"
              class="text-secondary font-weight-bold" :aria-label="'Call now for emergency locksmith service'"
              href="tel:+966501234567">
              Call Now: +966 53 401 8396
            </v-btn>
            <v-btn size="x-large" variant="outlined" prepend-icon="mdi-whatsapp" class="border-white text-white"
              :aria-label="'Contact us on WhatsApp'" href="https://wa.me/+966 53 401 8396" target="_blank">
              WhatsApp
            </v-btn>
          </div>

          <!-- Additional Info -->
          <v-row justify="center" class="text-body-1">
            <v-col cols="auto" class="d-flex align-center">
              <v-icon class="me-2">mdi-clock-outline</v-icon>
              Available 24/7
            </v-col>
            <v-divider vertical class="mx-4 d-none d-sm-block"></v-divider>
            <v-col cols="auto" class="d-flex align-center">
              <v-icon class="me-2">mdi-cash</v-icon>
              Free Quotes
            </v-col>
            <v-divider vertical class="mx-4 d-none d-sm-block"></v-divider>
            <v-col cols="auto" class="d-flex align-center">
              <v-icon class="me-2">mdi-shield-check</v-icon>
              Insured & Licensed
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
// Component logic can be added here if needed
</script>