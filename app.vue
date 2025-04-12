<template>
  <div class="overflow-hidden bg-black text-white relative">
    <!-- Centered background with fixed width -->
    <div class="fixed inset-0 z-0 flex justify-center">
      <div class="relative max-w-6xl w-full h-full">
        <div class="parallax-layer" data-depth="0.05">
          <div class="absolute inset-0 bg-cover bg-center opacity-50" style="background-image: url('/images/stars-bg.jpg');"></div>
        </div>
      </div>
    </div>
    
    <!-- Site Header -->
    <header class="fixed top-0 left-0 right-0 z-40 py-4 bg-black/80 backdrop-blur-sm">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="flex justify-between items-center">
          <nav class="flex items-center gap-10">
            <a href="#" class="text-white hover:text-white font-medium">HOME</a>
            <a href="#" class="text-red-500 hover:text-red-400 font-medium">GAMES</a>
            <a href="#" class="text-white hover:text-white/80 font-medium">CAREERS</a>
            <a href="#" class="text-white hover:text-white/80 font-medium">ABOUT US</a>
          </nav>
          <div class="flex items-center gap-3">
            <a href="#" class="w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-gray-700 transition-colors">
              <Icon name="mdi:steam" size="20" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-gray-700 transition-colors">
              <Icon name="mdi:youtube" size="20" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-gray-700 transition-colors">
              <Icon name="mdi:instagram" size="20" />
            </a>
          </div>
        </div>
      </div>
    </header>
    
    <!-- Animated stars flying across the site - slim straight line with sequenced timing -->
    <div class="stars-container fixed inset-0 z-30 pointer-events-none overflow-hidden">
      <div class="shooting-star star-1" :style="`--top: ${Math.random() * 100}%;`"></div>
      <div class="shooting-star star-2" :style="`--top: ${Math.random() * 100}%;`"></div>
    </div>
    
    <!-- Hero Section with Parallax -->
    <section class="relative h-screen overflow-hidden">
      <!-- Content -->
      <div class="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <div v-motion :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }">
          <h1 class="text-6xl md:text-8xl font-bold mb-4 tracking-tighter">AURORA WAY STUDIOS</h1>
          <div class="w-24 h-1 bg-indigo-600 mx-auto mb-8"></div>
          <p class="text-xl md:text-2xl max-w-xl mx-auto mb-12 text-gray-300">Crafting immersive gaming experiences that transport players to new worlds</p>
          <a href="#game" class="px-8 py-4 bg-indigo-700 hover:bg-indigo-600 rounded-sm transition-all duration-300 text-lg font-medium uppercase tracking-widest">
            Discover Our Game
          </a>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
    
    <!-- Featured Game Section -->
    <section id="game" class="py-20 relative overflow-hidden mt-16">
      <div class="relative z-20 container mx-auto px-4 max-w-4xl">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-3">THE GODS OF THE RED PLANET</h2>
          <div class="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p class="text-xl mb-8 text-gray-300">Uncover the secrets of Mars and shape the future of humanity's second home.</p>
        </div>
        
        <div class="flex flex-col md:flex-row gap-12 mb-12">
          <!-- Game Cover Image -->
          <div class="w-full md:w-1/2" v-motion :initial="{ opacity: 0, x: -50 }" :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }">
            <div class="relative rounded-sm overflow-hidden shadow-2xl">
              <img src="public/images/game-cover.png" alt="Game Cover" class="w-full h-auto" />
            </div>
          </div>
          
          <!-- Game Description -->
          <div class="w-full md:w-1/2 text-left" v-motion :initial="{ opacity: 0, x: 50 }" :visible="{ opacity: 1, x: 0, transition: { duration: 800, delay: 200 } }">
            <p class="mb-8 text-gray-400">
              Your team must uncover the secrets of the Terraforming Center on Mars and face an overwhelming battle for the future of the Red Planet. But remember: every choice you make will shape the outcome of this fight.
            </p>
            <div class="flex flex-wrap gap-4 mb-8">
              <span class="px-4 py-2 border border-gray-700 text-sm">Sci-Fi</span>
              <span class="px-4 py-2 border border-gray-700 text-sm">Adventure</span>
              <span class="px-4 py-2 border border-gray-700 text-sm">Mars</span>
              <span class="px-4 py-2 border border-gray-700 text-sm">Narrative</span>
            </div>
            <div class="flex flex-wrap gap-4">
              <button class="bg-indigo-700 hover:bg-indigo-600 px-8 py-3 rounded-sm uppercase tracking-widest transition-all duration-300">
                Learn More
              </button>
              <button class="bg-transparent border border-white hover:bg-indigo-900 px-6 py-3 rounded-sm transition-all duration-300 flex items-center gap-2">
                <Icon name="ph:play-fill" size="24" />
                Watch Trailer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Quote Section with Parallax -->
    <section class="py-24 relative overflow-hidden">
      <div class="relative z-20 container mx-auto px-4 text-center max-w-4xl" v-motion :initial="{ opacity: 0, scale: 0.9 }" :visible="{ opacity: 1, scale: 1, transition: { duration: 800 } }">
        <div>
          <h2 class="text-3xl md:text-5xl font-serif italic mb-8">"The future of humanity lies in the red dust. What will you uncover beneath the surface?"</h2>
          <div class="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p class="text-xl text-gray-300">From The Gods of the Red Planet</p>
        </div>
      </div>
    </section>
    
    <!-- Contact/Newsletter Section -->
    <section class="py-20 relative">
      <div class="relative z-20 container mx-auto px-4 max-w-4xl">
        <div class="text-center" v-motion :initial="{ opacity: 0, y: 50 }" :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }">
          <h2 class="text-3xl font-bold mb-3">JOIN THE MISSION</h2>
          <div class="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p class="text-xl mb-8 text-gray-300">Subscribe to our newsletter for the latest updates, behind-the-scenes content, and exclusive offers</p>
          
          <form class="flex flex-col sm:flex-row gap-4 mb-8 max-w-md mx-auto">
            <input type="email" placeholder="Your email address" class="bg-gray-900/60 border border-gray-800 px-4 py-3 flex-1 rounded-sm focus:outline-none focus:border-indigo-600" />
            <button class="bg-indigo-700 hover:bg-indigo-600 px-6 py-3 rounded-sm uppercase tracking-wider transition-colors duration-300">
              Subscribe
            </button>
          </form>
          
          <div class="flex justify-center gap-6">
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">
              <Icon name="mdi:twitter" size="24" />
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">
              <Icon name="mdi:instagram" size="24" />
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">
              <Icon name="mdi:steam" size="24" />
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">
              <Icon name="mdi:youtube" size="24" />
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">
              <Icon name="mdi:discord" size="24" />
            </a>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Footer -->
    <footer class="py-8 border-t border-gray-800 relative z-20">
      <div class="container mx-auto px-4 max-w-4xl">
        <div class="flex justify-center items-center text-sm text-gray-500">
          <a href="#" class="hover:text-gray-300 transition-colors duration-300 mx-3" @click.prevent="openModal('terms')">Terms of Service</a>
          <span class="mx-2">|</span>
          <a href="#" class="hover:text-gray-300 transition-colors duration-300 mx-3" @click.prevent="openModal('privacy')">Privacy Policy</a>
          <span class="mx-2">|</span>
          <div>© 2024 Aurora Way Studios. All rights reserved.</div>
        </div>
      </div>
    </footer>
    
    <!-- Policy Modal -->
    <PolicyModal :is-open="modalOpen" :type="modalType" @close="closeModal" />
  </div>
</template>

<script setup>
// Import the motion plugin
import { useMotion } from '@vueuse/motion'
import { ref } from 'vue'
import PolicyModal from './components/PolicyModal.vue'

// Modal state
const modalOpen = ref(false)
const modalType = ref('privacy')

// Modal functions
function openModal(type) {
  modalType.value = type
  modalOpen.value = true
  document.body.classList.add('overflow-hidden')
}

function closeModal() {
  modalOpen.value = false
  document.body.classList.remove('overflow-hidden')
}

// SEO configuration
useHead({
  title: 'Aurora Game Studios - Immersive Gaming Experiences',
  meta: [
    { name: 'description', content: 'Aurora Game Studios creates immersive narrative gaming experiences across multiple platforms. Explore our collection of sci-fi, fantasy, and adventure games.' },
    { name: 'keywords', content: 'game studio, indie games, narrative games, sci-fi games, interactive fiction' },
    { property: 'og:title', content: 'Aurora Game Studios - Immersive Gaming Experiences' },
    { property: 'og:description', content: 'Discover immersive narrative gaming experiences crafted by Aurora Game Studios.' },
    { property: 'og:type', content: 'website' }
  ]
})

// Parallax effect and star animations
onMounted(() => {
  // Parallax handler
  const handleParallax = () => {
    const scrollY = window.scrollY
    document.querySelectorAll('.parallax-layer').forEach(layer => {
      const depth = layer.getAttribute('data-depth')
      const movement = -(scrollY * depth)
      layer.style.transform = `translate3d(0, ${movement}px, 0)`
    })
  }

  window.addEventListener('scroll', handleParallax)
  
  // Shooting stars sequence
  const animateStar = (starSelector, delay = 0) => {
    const star = document.querySelector(starSelector)
    if (!star) return
    
    // Reset star position
    star.style.animation = 'none'
    star.offsetHeight // Trigger reflow
    
    // Set random top position
    star.style.top = `${Math.random() * 100}%`
    
    // Start animation
    star.style.animation = `shootingStar 1s linear ${delay}s forwards`
    
    // When animation ends, schedule the next star
    star.addEventListener('animationend', () => {
      // Random delay between 5-10 seconds before next star
      const nextDelay = Math.random() * 5 + 5
      
      // If this was star 1, schedule star 2
      if (starSelector === '.star-1') {
        setTimeout(() => {
          animateStar('.star-2', 0)
        }, nextDelay * 1000)
      } else {
        // If this was star 2, schedule star 1
        setTimeout(() => {
          animateStar('.star-1', 0)
        }, nextDelay * 1000)
      }
    }, { once: true })
  }
  
  // Start the sequence with star 1
  animateStar('.star-1')
  
  // Clean up event listener on component unmount
  onUnmounted(() => {
    window.removeEventListener('scroll', handleParallax)
  })
})
</script>

<style>
/* Custom styles for parallax and animations */
.parallax-layer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  will-change: transform;
}

/* Add smooth scrolling to the entire page */
html {
  scroll-behavior: smooth;
}

/* Stars animation - adjusted for a slim straight line with sequenced timing */
.stars-container {
  opacity: 0.9;
  pointer-events: none;
}

.shooting-star {
  position: absolute;
  width: 2px;
  height: 1px;
  background: white;  
  left: -10px;
  box-shadow: 0 0 4px 2px rgba(255, 255, 255, 0.7);
  opacity: 0;
  z-index: 50;
}

.shooting-star::before {
  content: '';
  position: absolute;
  width: 200px;
  height: 1px;
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
  transform: translateX(-200px);
}

@keyframes shootingStar {
  0% {
    transform: translateX(-10px);
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateX(calc(100vw + 300px));
    opacity: 0;
  }
}
</style>
