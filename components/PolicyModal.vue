<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-0">
    <!-- Overlay -->
    <div 
      class="absolute inset-0 bg-black/50 backdrop-blur-sm"
      @click="close"
    ></div>
    
    <!-- Modal Content -->
    <div class="relative max-h-[95vh] h-[800px] max-w-6xl w-full bg-black/80 shadow-xl overflow-hidden flex flex-col z-10 scale-100 opacity-100 transform transition-all border border-gray-800">
      <!-- Modal Header -->
      <div class="flex justify-between items-center p-4 bg-black/70 border-b border-gray-800">
        <h2 class="text-4xl font-bold text-white">{{ title }}</h2>
        <button 
          @click="close"
          class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/50 hover:bg-gray-700 transition-colors"
        >
          <Icon name="ph:x-bold" size="24" />
        </button>
      </div>
      
      <!-- Modal Body -->
      <div class="overflow-y-auto p-6 md:p-8 text-white space-y-6 flex-grow">
        <div v-if="type === 'privacy'">
          <!-- Privacy Policy Content -->
          <div class="space-y-6">
            <p class="text-gray-300">Dear Sir/Madam,</p>
            
            <p class="text-gray-300">
              Thank you for visiting and reviewing our privacy policy, which we, Aurora Way Studios, a company organized and existing 
              pursuant to the laws of the Republic of Moldova, adopted as of April 1st, 2023 ("Policy"). The following Policy sets forth the manner in 
              which we collect, store, use, and disclose certain information you and other users ("Users") provide to us in the course of using our 
              various Products and Services. Please take a moment to review the information below. We hope you find this informative. Should you 
              have any questions, please do not hesitate to let us know.
            </p>
            
            <h3 class="text-2xl font-bold mt-8 mb-4">INTRODUCTION</h3>
            
            <p class="text-gray-300">
              Aurora Way Studios designs, develops, and publishes fun games for play on various computing devices including smartphones, 
              tablet PCs, and traditional desktop computers with internet access. To provide our players with the best possible experience, we also 
              offer certain related services such as providing forums, fan pages, and various promotions. For the purpose of this Policy, all of our 
              products and related services, including the services recited above in this paragraph are referred to as "Products and Services."
            </p>
            
            <p class="text-gray-300">
              We recognize that our Users value their privacy, and we thus view the safeguarding of your private information as a serious matter. We 
              encourage all of our users to carefully read this Policy before playing any of our games or using any other Products and Services. Please 
              note that by downloading or installing a game, or by registering with us using any of our available platforms (including mobile, social 
              media, or otherwise), or using any of our Products and Services, you consent to our collection, storage, use, or disclosure of your 
              information according to this Policy.
            </p>
            
            <!-- Add more privacy policy sections as needed -->
          </div>
        </div>
        
        <div v-else-if="type === 'terms'">
          <!-- Terms of Service Content -->
          <div class="space-y-6">
            <p class="text-gray-300">
              By accessing or using our games and services, you agree to be bound by these Terms of Service. Please read them carefully.
            </p>
            
            <h3 class="text-2xl font-bold mt-8 mb-4">ACCEPTANCE OF TERMS</h3>
            
            <p class="text-gray-300">
              These Terms of Service ("Terms") govern your access to and use of Aurora Way Studios' games, websites, and services (collectively, the "Services"). 
              By accessing or using the Services, you agree to be bound by these Terms and to the collection and use of your information as set forth in our 
              Privacy Policy. If you do not agree to these Terms or the Privacy Policy, you may not access or use the Services.
            </p>
            
            <h3 class="text-2xl font-bold mt-8 mb-4">USE OF SERVICES</h3>
            
            <p class="text-gray-300">
              You may use the Services only if you can form a binding contract with Aurora Way Studios and are not a person barred from receiving services 
              under the laws of applicable jurisdictions. Our Services are not intended for children under 13, and if you are under 13, you may not use the Services.
            </p>
            
            <p class="text-gray-300">
              You are responsible for your use of the Services, for any content you post, and for any consequences thereof. You agree to use the Services 
              only for lawful purposes and in accordance with these Terms.
            </p>
            
            <!-- Add more terms of service sections as needed -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'privacy',
    validator: (value) => ['privacy', 'terms'].includes(value)
  }
})

const emit = defineEmits(['close'])

const title = ref('Privacy Policy')

watch(() => props.type, (newType) => {
  title.value = newType === 'privacy' ? 'Privacy Policy' : 'Terms of Service'
}, { immediate: true })

function close() {
  emit('close')
}
</script>

<style scoped>
/* Optional additional styles */
</style> 