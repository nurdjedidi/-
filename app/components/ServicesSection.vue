<template>
  <section id="services-section" class="section-spacing bg-grey-lighten-4" :aria-label="'Our locksmith services'">
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center mb-8">
          <h2 class="text-h3 font-weight-bold text-primary mb-4">Our Expert Services</h2>
          <p class="text-h6 text-secondary font-weight-light">
            Professional locksmith solutions for all your security needs
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col v-for="(service, index) in services" :key="index" cols="12" md="6" lg="4" class="d-flex">
          <v-card class="service-card flex-grow-1 pa-6" :elevation="2" :aria-label="'Service: ' + service.title"
            tabindex="0" @keydown.enter="focusCard($event)">
            <div class="text-center mb-4">
              <v-avatar size="80" color="primary" class="mb-4">
                <v-icon size="40" color="white">{{ service.icon }}</v-icon>
              </v-avatar>
              <h3 class="text-h5 font-weight-bold text-secondary mb-2">{{ service.title }}</h3>
            </div>
            <p class="text-body-1 text-grey-700 mb-4">{{ service.description }}</p>
            <v-chip color="accent" variant="tonal" size="small" class="font-weight-medium"
              :aria-label="'Service availability: ' + service.availability">
              {{ service.availability }}
            </v-chip>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="mt-8">
        <v-col cols="12" class="text-center">
          <v-btn color="secondary" size="large" variant="flat" prepend-icon="mdi-phone"
            :aria-label="'Get quote for services'" href="tel:+966501234567">
            Get Free Quote
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Emergency Lockout',
    description: 'Locked out of your home or car? Our rapid response team is available 24/7 to get you back inside quickly and safely.',
    icon: 'mdi-lock-alert',
    availability: '24/7 Available'
  },
  {
    title: 'Lock Installation',
    description: 'Professional installation of high-quality locks for residential and commercial properties. Enhanced security solutions.',
    icon: 'mdi-lock-plus',
    availability: 'Same Day Service'
  },
  {
    title: 'Key Cutting',
    description: 'Precision key cutting and duplication services. Standard and high-security keys crafted with expertise.',
    icon: 'mdi-key-variant',
    availability: 'While You Wait'
  },
  {
    title: 'Security Consultation',
    description: 'Comprehensive security assessment and recommendations to protect your property with the latest security technology.',
    icon: 'mdi-shield-check',
    availability: 'By Appointment'
  },
  {
    title: 'Commercial Services',
    description: 'Specialized locksmith services for businesses including master key systems, access control, and security upgrades.',
    icon: 'mdi-office-building',
    availability: 'Business Hours'
  },
  {
    title: 'Safe Services',
    description: 'Safe opening, repair, and installation services. Protect your valuables with professional safe solutions.',
    icon: 'mdi-safe',
    availability: 'Scheduled Service'
  }
]

const focusCard = (event) => {
  event.target.click()
}
</script>