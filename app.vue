<template>
  <div class="overflow-hidden bg-black text-white relative">
    <!-- Centered background with fixed width -->
    <div class="fixed inset-0 z-0 flex justify-center">
      <div class="relative max-w-6xl w-full h-full">
        <div class="parallax-layer" data-depth="0.05">
          <div class="absolute inset-0 bg-cover bg-center opacity-50" style="background-image: url('/images/stars-bg.png');"></div>
        </div>
      </div>
    </div>
    
    <!-- Animated space particles -->
    <div class="particles-container fixed inset-0 z-5 pointer-events-none">
      <div v-for="i in 50" :key="`particle-${i}`" 
           class="particle" 
           :style="`--size: ${Math.random() * 3 + 1}px; --x: ${Math.random() * 100}vw; --y: ${Math.random() * 100}vh; --duration: ${Math.random() * 50 + 20}s; --delay: -${Math.random() * 50}s`">
      </div>
    </div>
    
    <!-- Animated stars flying across the site - slim straight line with sequenced timing -->
    <div class="stars-container fixed inset-0 z-30 pointer-events-none overflow-hidden">
      <div class="shooting-star star-1" :style="`--top: ${Math.random() * 100}%;`"></div>
      <div class="shooting-star star-2" :style="`--top: ${Math.random() * 100}%;`"></div>
    </div>
    
    <!-- Site Header -->
    <header class="fixed top-0 left-0 right-0 z-40 py-4 bg-black/80 backdrop-blur-sm">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="flex justify-between items-center">
          <nav class="flex items-center gap-10">
            <a href="#" class="text-white hover:text-white font-medium nav-link">HOME</a>
            <a href="#" class="text-red-500 hover:text-red-400 font-medium nav-link">GAMES</a>
            <a href="#" class="text-white hover:text-white/80 font-medium nav-link">CAREERS</a>
            <a href="#" class="text-white hover:text-white/80 font-medium nav-link">ABOUT US</a>
          </nav>
          <div class="flex items-center gap-3">
            <a href="#" class="social-icon w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-indigo-800 transition-all duration-300">
              <Icon name="mdi:steam" size="20" />
            </a>
            <a href="#" class="social-icon w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-indigo-800 transition-all duration-300">
              <Icon name="mdi:youtube" size="20" />
            </a>
            <a href="#" class="social-icon w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-indigo-800 transition-all duration-300">
              <Icon name="mdi:instagram" size="20" />
            </a>
          </div>
        </div>
      </div>
    </header>
    
    <!-- Hero Section with Parallax -->
    <section class="relative h-screen overflow-hidden">
      <!-- Decorative planet elements -->
      <div class="absolute z-1 w-[300px] h-[300px] rounded-full bg-red-900/20 blur-3xl top-[20%] -left-[10%] animate-pulse-slow"></div>
      <div class="absolute z-1 w-[500px] h-[500px] rounded-full bg-indigo-800/10 blur-3xl bottom-[10%] -right-[20%] animate-pulse-slow animation-delay-2000"></div>
      
      <!-- Content -->
      <div class="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <div v-motion 
          :initial="{ opacity: 0, y: 100 }" 
          :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }">
          <div class="text-reveal-container overflow-hidden mb-4">
            <h1 class="text-6xl md:text-8xl font-bold tracking-tighter text-reveal">AURORA WAY STUDIOS</h1>
          </div>
          <div class="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mb-8"></div>
          <p class="text-xl md:text-2xl max-w-xl mx-auto mb-12 text-gray-300">Crafting immersive gaming experiences that transport players to new worlds</p>
          <a href="#game" class="glow-button px-8 py-4 bg-red-700 hover:bg-red-600 rounded-sm transition-all duration-300 text-lg font-medium uppercase tracking-widest relative overflow-hidden">
            <span class="relative z-10">Discover Our Game</span>
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
      <div class="absolute z-1 w-[400px] h-[400px] rounded-full bg-red-600/10 blur-3xl -left-[10%] top-[30%]"></div>
      
      <div class="relative z-20 container mx-auto px-4 max-w-4xl">
        <div class="text-center mb-16" v-motion :initial="{ opacity: 0, y: 50 }" :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }">
          <h2 class="text-4xl font-bold mb-3 glitch-text" data-text="THE GODS OF THE RED PLANET">THE GODS OF THE RED PLANET</h2>
          <div class="w-16 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mb-6"></div>
          <p class="text-xl mb-8 text-gray-300">Uncover the secrets of Mars and shape the future of humanity's second home.</p>
        </div>
        
        <div class="flex flex-col md:flex-row gap-12 mb-12">
          <!-- Game Cover Image -->
          <div class="w-full md:w-1/2" v-motion :initial="{ opacity: 0, x: -50 }" :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }">
            <div class="relative rounded-sm overflow-hidden shadow-2xl image-hover-effect">
              <img src="/images/game-cover.png" alt="Game Cover" class="w-full h-auto transform transition-all duration-700" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80"></div>
            </div>
          </div>
          
          <!-- Game Description -->
          <div class="w-full md:w-1/2 text-left" v-motion :initial="{ opacity: 0, x: 50 }" :visible="{ opacity: 1, x: 0, transition: { duration: 800, delay: 200 } }">
            <p class="mb-8 text-gray-400">
              Your team must uncover the secrets of the Terraforming Center on Mars and face an overwhelming battle for the future of the Red Planet. But remember: every choice you make will shape the outcome of this fight.
            </p>
            <div class="flex flex-wrap gap-4 mb-8">
              <span class="px-4 py-2 border border-red-800 text-sm hover:bg-red-900/30 transition-colors duration-300 tag-glow">Sci-Fi</span>
              <span class="px-4 py-2 border border-red-800 text-sm hover:bg-red-900/30 transition-colors duration-300 tag-glow">Adventure</span>
              <span class="px-4 py-2 border border-red-800 text-sm hover:bg-red-900/30 transition-colors duration-300 tag-glow">Mars</span>
              <span class="px-4 py-2 border border-red-800 text-sm hover:bg-red-900/30 transition-colors duration-300 tag-glow">Narrative</span>
            </div>
            <div class="flex flex-wrap gap-4">
              <button class="bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 px-8 py-3 rounded-sm uppercase tracking-widest transition-all duration-300 btn-hover-effect">
                Learn More
              </button>
              <button class="bg-transparent border border-white hover:border-red-500 hover:text-red-400 px-6 py-3 rounded-sm transition-all duration-300 flex items-center gap-2 group">
                <Icon name="ph:play-fill" size="24" class="text-red-500 group-hover:text-red-400 transition-colors" />
                Watch Trailer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Quote Section with Parallax -->
    <section class="py-24 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/10 to-transparent"></div>
      
      <div class="relative z-20 container mx-auto px-4 text-center max-w-4xl" v-motion :initial="{ opacity: 0, scale: 0.9 }" :visible="{ opacity: 1, scale: 1, transition: { duration: 800 } }">
        <div class="quote-container p-8">
          <h2 class="text-3xl md:text-5xl font-serif italic mb-8 text-gradient">"The future of humanity lies in the red dust. What will you uncover beneath the surface?"</h2>
          <div class="w-16 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mb-6"></div>
          <p class="text-xl text-gray-300">From The Gods of the Red Planet</p>
        </div>
      </div>
    </section>
    
    <!-- Contact/Newsletter Section -->
    <section class="py-20 relative">
      <div class="absolute z-1 w-[500px] h-[500px] rounded-full bg-red-600/10 blur-3xl -right-[10%] top-[20%]"></div>
      
      <div class="relative z-20 container mx-auto px-4 max-w-4xl">
        <div class="text-center" v-motion :initial="{ opacity: 0, y: 50 }" :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }">
          <h2 class="text-3xl font-bold mb-3">JOIN THE MISSION</h2>
          <div class="w-16 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mb-6"></div>
          <p class="text-xl mb-8 text-gray-300">Subscribe to our newsletter for the latest updates, behind-the-scenes content, and exclusive offers</p>
          
          <form class="flex flex-col sm:flex-row gap-4 mb-8 max-w-md mx-auto">
            <input type="email" placeholder="Your email address" class="bg-gray-900/60 border border-gray-800 px-4 py-3 flex-1 rounded-sm focus:outline-none focus:border-red-600 transition-all duration-300" />
            <button class="bg-red-700 hover:bg-red-600 px-6 py-3 rounded-sm uppercase tracking-wider transition-colors duration-300 hover:shadow-glow">
              Subscribe
            </button>
          </form>
          
          <div class="flex justify-center gap-6">
            <a href="#" class="social-icon-pulse text-gray-400 hover:text-white transition-colors duration-300">
              <Icon name="mdi:twitter" size="24" />
            </a>
            <a href="#" class="social-icon-pulse text-gray-400 hover:text-white transition-colors duration-300">
              <Icon name="mdi:instagram" size="24" />
            </a>
            <a href="#" class="social-icon-pulse text-gray-400 hover:text-white transition-colors duration-300">
              <Icon name="mdi:steam" size="24" />
            </a>
            <a href="#" class="social-icon-pulse text-gray-400 hover:text-white transition-colors duration-300">
              <Icon name="mdi:youtube" size="24" />
            </a>
            <a href="#" class="social-icon-pulse text-gray-400 hover:text-white transition-colors duration-300">
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
          <a href="#" class="hover:text-gray-300 transition-colors duration-300 mx-3 footer-link" @click.prevent="openModal('terms')">Terms of Service</a>
          <span class="mx-2">|</span>
          <a href="#" class="hover:text-gray-300 transition-colors duration-300 mx-3 footer-link" @click.prevent="openModal('privacy')">Privacy Policy</a>
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
  title: 'Aurora Way Studios - Immersive Gaming Experiences',
  meta: [
    { name: 'description', content: 'Aurora Way Studios creates immersive narrative gaming experiences across multiple platforms. Explore our collection of sci-fi, fantasy, and adventure games.' },
    { name: 'keywords', content: 'game studio, indie games, narrative games, sci-fi games, interactive fiction' },
    { property: 'og:title', content: 'Aurora Way Studios - Immersive Gaming Experiences' },
    { property: 'og:description', content: 'Discover immersive narrative gaming experiences crafted by Aurora Way Studios.' },
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

/* Space particle animation */
.particles-container {
  overflow: hidden;
}

.particle {
  position: absolute;
  width: var(--size);
  height: var(--size);
  background: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  left: var(--x);
  top: var(--y);
  animation: float var(--duration) linear var(--delay) infinite;
  opacity: 0.6;
}

@keyframes float {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 0.6;
  }
  90% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(calc(100vh + 10px)) translateX(calc(100vw * 0.1));
    opacity: 0;
  }
}

/* Navigation link hover effect */
.nav-link {
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background: linear-gradient(90deg, rgba(99,102,241,1) 0%, rgba(124,58,237,1) 100%);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* Glowing button effect */
.glow-button {
  position: relative;
  isolation: isolate;
}

.glow-button::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(239,68,68,0.4) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
  border-radius: inherit;
}

.glow-button:hover::before {
  opacity: 1;
}

/* Slow pulse animation */
@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 8s ease-in-out infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

/* Button hover effect */
.btn-hover-effect {
  position: relative;
  overflow: hidden;
}

.btn-hover-effect::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 0;
  background: rgba(255, 255, 255, 0.1);
  transform: translate(-50%, -50%);
  transition: height 0.5s ease;
  z-index: -1;
}

.btn-hover-effect:hover::after {
  height: 150%;
}

/* Image hover effect */
.image-hover-effect {
  overflow: hidden;
}

.image-hover-effect img {
  transition: transform 10s ease;
}

.image-hover-effect:hover img {
  transform: scale(1.05);
}

/* Text reveal animation */
.text-reveal-container {
  position: relative;
}

.text-reveal {
  animation: textReveal 1.5s cubic-bezier(0.77, 0, 0.175, 1);
}

@keyframes textReveal {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Glitch text effect */
.glitch-text {
  position: relative;
  color: white;
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
}

.glitch-text::before {
  animation: glitch-effect 3s infinite linear alternate-reverse;
  color: #ff5e00;
  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
  transform: translate(-2px, -2px);
}

.glitch-text::after {
  animation: glitch-effect 2s infinite linear alternate-reverse;
  color: #ff0000;
  clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
  transform: translate(2px, 2px);
}

@keyframes glitch-effect {
  0% {
    transform: translate(0);
  }
  10% {
    transform: translate(-2px, 2px);
  }
  20% {
    transform: translate(2px, -2px);
  }
  30% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(2px, -2px);
  }
  50% {
    transform: translate(-2px, 2px);
  }
  60% {
    transform: translate(2px, -2px);
  }
  70% {
    transform: translate(-2px, 2px);
  }
  80% {
    transform: translate(0);
  }
  100% {
    transform: translate(0);
  }
}

/* Tag glow effect */
.tag-glow {
  transition: all 0.3s ease;
}

.tag-glow:hover {
  box-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
}

/* Quote container styling */
.quote-container {
  position: relative;
  z-index: 1;
}

.quote-container::before {
  content: '"';
  font-family: serif;
  position: absolute;
  top: -40px;
  left: -20px;
  font-size: 150px;
  color: rgba(239, 68, 68, 0.1);
  z-index: -1;
}

.quote-container::after {
  content: '"';
  font-family: serif;
  position: absolute;
  bottom: -100px;
  right: -20px;
  font-size: 150px;
  color: rgba(239, 68, 68, 0.1);
  z-index: -1;
}

/* Gradient text */
.text-gradient {
  background: linear-gradient(90deg, #ff4d4d, #f9cb28);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

/* Social icon pulse */
.social-icon-pulse {
  position: relative;
}

.social-icon-pulse::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: rgba(99, 102, 241, 0.5);
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.3s, opacity 0.3s;
  opacity: 0;
  z-index: -1;
}

.social-icon-pulse:hover::after {
  transform: translate(-50%, -50%) scale(1.5);
  opacity: 0;
  animation: pulseOut 0.8s ease-out;
}

@keyframes pulseOut {
  0% {
    transform: translate(-50%, -50%) scale(0.5);
    opacity: 0.5;
  }
  100% {
    transform: translate(-50%, -50%) scale(2);
    opacity: 0;
  }
}

/* Social icon hover effect */
.social-icon {
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.social-icon:hover {
  transform: translateY(-3px);
}

/* Footer link hover effect */
.footer-link {
  position: relative;
}

.footer-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 1px;
  bottom: -2px;
  left: 0;
  background-color: rgba(255, 255, 255, 0.5);
  transition: width 0.3s ease;
}

.footer-link:hover::after {
  width: 100%;
}

/* Button shadow glow */
.hover\:shadow-glow:hover {
  box-shadow: 0 0 15px rgba(239, 68, 68, 0.6);
}
</style>
