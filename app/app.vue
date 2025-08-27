<template>
  <v-app>
    <AppHeader />

    <v-main>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <CtaSection />
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script setup>
useHead({
  title: 'مفاتيح الشامل - Professional Locksmith Services in Makkah',
  meta: [
    { name: 'description', content: 'Professional locksmith services in Makkah, Saudi Arabia. 24/7 emergency services, residential and commercial locks, key cutting, and security solutions.' },
    { name: 'keywords', content: 'locksmith, Makkah, Saudi Arabia, keys, locks, security, emergency locksmith, مفاتيح الشامل' },
    { property: 'og:title', content: 'مفاتيح الشامل - Professional Locksmith Services in Makkah' },
    { property: 'og:description', content: 'Professional locksmith services in Makkah, Saudi Arabia. 24/7 emergency services with 5-star rated service.' }
  ]
})
</script>