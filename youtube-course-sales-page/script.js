// Countdown Timer
function startCountdown() {
  const countdownElement = document.getElementById("countdown")
  const hoursElement = document.getElementById("hours")
  const minutesElement = document.getElementById("minutes")
  const secondsElement = document.getElementById("seconds")

  // Set initial time (you can modify this)
  let totalSeconds = 24 * 3600 - 1 // 23:59:59

  function updateCountdown() {
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    hoursElement.textContent = hours.toString().padStart(2, "0")
    minutesElement.textContent = minutes.toString().padStart(2, "0")
    secondsElement.textContent = seconds.toString().padStart(2, "0")

    if (totalSeconds > 0) {
      totalSeconds--
    } else {
      totalSeconds = 24 * 3600 - 1 // Reset to 24 hours
    }
  }

  updateCountdown()
  setInterval(updateCountdown, 1000)
}

// Toggle Module Content
function toggleModule(element) {
  const content = element.nextElementSibling
  const icon = element.querySelector("i")

  content.classList.toggle("active")

  if (content.classList.contains("active")) {
    icon.style.transform = "rotate(180deg)"
  } else {
    icon.style.transform = "rotate(0deg)"
  }
}

// Toggle FAQ
function toggleFAQ(element) {
  const answer = element.nextElementSibling
  const icon = element.querySelector("i")

  // Close all other FAQs
  document.querySelectorAll(".faq-answer").forEach((item) => {
    if (item !== answer) {
      item.classList.remove("active")
    }
  })

  document.querySelectorAll(".faq-question i").forEach((item) => {
    if (item !== icon) {
      item.style.transform = "rotate(0deg)"
    }
  })

  answer.classList.toggle("active")

  if (answer.classList.contains("active")) {
    icon.style.transform = "rotate(180deg)"
  } else {
    icon.style.transform = "rotate(0deg)"
  }
}

// Scroll to Offer
function scrollToOffer() {
  document.getElementById("offer").scrollIntoView({
    behavior: "smooth",
  })
}

// Play Video (you can integrate with actual video player)
function playVideo() {
  alert("Aqui você integraria com seu player de vídeo (YouTube, Vimeo, etc.)")
  // Example: window.open('https://your-video-url.com', '_blank');
}

// Redirect to Checkout
function redirectToCheckout() {
  // Replace with your actual checkout URL
  alert("Redirecionando para o checkout...")
  // window.location.href = 'https://your-checkout-url.com';
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      })
    }
  })
})

// Initialize when page loads
document.addEventListener("DOMContentLoaded", () => {
  startCountdown()

  // Add scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe elements for scroll animations
  document.querySelectorAll(".feature-item, .module-item, .faq-item").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
})

// Add floating CTA button on scroll
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const rate = scrolled * -0.5

  // Parallax effect for hero background
  const heroBackground = document.querySelector(".hero-bg")
  if (heroBackground) {
    heroBackground.style.transform = `translateY(${rate}px)`
  }
})
