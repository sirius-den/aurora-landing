<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-0">
    <!-- Overlay -->
    <div 
      class="absolute inset-0 bg-black/50 backdrop-blur-sm"
      @click="close"
    ></div>
    
    <!-- Modal Content -->
    <div 
      class="relative max-h-[95vh] h-[800px] max-w-6xl w-full bg-black/80 shadow-xl overflow-hidden flex flex-col z-10 modal-container"
      v-motion
      :initial="{ opacity: 0, scale: 0.9 }"
      :enter="{ opacity: 1, scale: 1, transition: { duration: 400 } }"
      :leave="{ opacity: 0, scale: 0.9, transition: { duration: 300 } }"
    >
      <!-- Modal Header -->
      <div class="flex justify-between items-center p-4 bg-gradient-to-r from-black/90 to-gray-900/80 border-b border-gray-800/80">
        <h2 class="text-4xl font-bold text-white modal-title">{{ title }}</h2>
        <button 
          @click="close"
          class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/50 hover:bg-red-900/70 transition-all duration-300 close-button"
        >
          <Icon name="ph:x-bold" size="24" />
        </button>
      </div>
      
      <!-- Modal Body -->
      <div class="overflow-y-auto p-6 md:p-8 text-white space-y-6 flex-grow policy-content">
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
            
            <h3 class="text-2xl font-bold mt-8 mb-4 text-gradient policy-heading">INTRODUCTION</h3>
            
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
            
            <h3 class="text-2xl font-bold mt-8 mb-4 text-gradient policy-heading">ACCEPTANCE OF TERMS</h3>
            
            <p class="text-gray-300">
              These Terms of Service ("Terms") govern your access to and use of Aurora Way Studios' games, websites, and services (collectively, the "Services"). 
              By accessing or using the Services, you agree to be bound by these Terms and to the collection and use of your information as set forth in our 
              Privacy Policy. If you do not agree to these Terms or the Privacy Policy, you may not access or use the Services.
            </p>
            
            <h3 class="text-2xl font-bold mt-8 mb-4 text-gradient policy-heading">USE OF SERVICES</h3>
            
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
import { useMotion } from '@vueuse/motion'

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
/* Enhanced modal styles */
.modal-container {
  border: 1px solid rgba(99, 102, 241, 0.2);
  box-shadow: 0 0 30px rgba(99, 102, 241, 0.15);
  border-radius: 4px;
  backdrop-filter: blur(8px);
  transform-origin: center;
}

.modal-title {
  position: relative;
  display: inline-block;
}

.modal-title::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 40px;
  height: 3px;
  background: linear-gradient(90deg, rgba(99,102,241,1) 0%, rgba(124,58,237,1) 100%);
}

.close-button {
  position: relative;
  overflow: hidden;
}

.close-button::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(239,68,68,0.4) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
  border-radius: inherit;
}

.close-button:hover::before {
  opacity: 1;
}

.policy-content {
  scrollbar-width: thin;
  scrollbar-color: rgba(99, 102, 241, 0.5) rgba(0, 0, 0, 0.2);
}

.policy-content::-webkit-scrollbar {
  width: 8px;
}

.policy-content::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

.policy-content::-webkit-scrollbar-thumb {
  background: rgba(99, 102, 241, 0.5);
  border-radius: 4px;
}

.policy-heading {
  background: linear-gradient(90deg, rgba(99,102,241,1) 0%, rgba(124,58,237,1) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

/* For privacy policy */
div[v-if="type === 'privacy'"] .policy-heading {
  background: linear-gradient(90deg, rgba(239,68,68,1) 0%, rgba(234,179,8,1) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style> 