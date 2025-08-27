<template>
  <section class="section-spacing" :aria-label="'Customer testimonials'">
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center mb-8">
          <h2 class="text-h3 font-weight-bold text-secondary mb-4">What Our Customers Say</h2>
          <div class="d-flex justify-center align-center mb-4">
            <v-rating v-model="overallRating" color="yellow-darken-3" background-color="grey-darken-1" readonly
              half-increments size="large" class="me-3" :aria-label="'Overall rating: 5 stars'"></v-rating>
            <div class="text-h6 font-weight-bold text-primary">5.0</div>
          </div>
          <p class="text-body-1 text-grey-700">Based on 21 verified reviews</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col v-for="(testimonial, index) in testimonials" :key="index" cols="12" md="6" lg="4" class="d-flex">
          <v-card class="testimonial-card flex-grow-1 pa-6" :elevation="3"
            :aria-label="'Testimonial from ' + testimonial.name">
            <div class="d-flex justify-space-between align-start mb-4">
              <div>
                <v-rating v-model="testimonial.rating" color="yellow-darken-3" background-color="grey-darken-1" readonly
                  size="small" class="mb-2" :aria-label="testimonial.rating + ' star rating'"></v-rating>
                <h4 class="text-h6 font-weight-bold text-secondary">{{ testimonial.name }}</h4>
                <p class="text-caption text-grey-600">{{ testimonial.location }}</p>
              </div>
              <v-icon color="primary" size="30" class="opacity-50">
                mdi-format-quote-close
              </v-icon>
            </div>

            <blockquote class="text-body-1 text-grey-800 mb-4" style="font-style: italic;">
              "{{ testimonial.review }}"
            </blockquote>

            <v-chip color="secondary" variant="tonal" size="small" prepend-icon="mdi-check-circle"
              class="font-weight-medium">
              Verified Customer
            </v-chip>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const overallRating = ref(5)

const testimonials = [
  {
    name: 'عمر العتيبي',
    location: '',
    rating: 5,
    review: 'تعاملت مع أبو حور، وكان شخص محترم وتعاملُه راقٍ. شغله طيب وسعره معقول، وما قصر، سوى لي خصم بسيط مشكور عليه. الله يوفقه ويبارك له.'
  },
  {
    name: 'كيرا',
    location: '',
    rating: 5,
    review: 'ما شاء الله متوفر فيها كل شيء والأسعار مناسب  والموظف محترم الله يعطيه العافية'
  },
  {
    name: 'Thamr Al_jabri',
    location: '',
    rating: 5,
    review: 'تعامل محترم والعامل الي يفصل المفاتيح مبدع وفنان ما شاء الله علية فصلت عنده مفتاح للدباب سوزوكي  عجزت احصل ناس تفصل زي الوكاله . كل انواع المفاتيح عندهم  لو في اكثر من خمس نجمات عطيتكم تستاهلون والله'
  }
]
</script>