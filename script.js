// ==========================================
// GRADUATION CELEBRATION WEBSITE
// JavaScript - Main functionality
// ==========================================

// ==========================================
// 1. STUDENT DATA
// ==========================================

const students = [
    {
        id: 1,
        name: "Emma Johnson",
        role: "Valedictorian",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        quote: "Life is about creating yourself.",
        message: "Four years of memories, friendships that will last forever. Thank you for the journey!",
        achievements: ["Dean's List", "Leadership Award"]
    },
    {
        id: 2,
        name: "Liam Chen",
        role: "Class President",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        quote: "Success is not final, failure is not fatal.",
        message: "It's been an honor leading this amazing class. Let's stay connected!",
        achievements: ["Student Leader", "Excellence in Sports"]
    },
    {
        id: 3,
        name: "Sophia Williams",
        role: "Class Secretary",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
        quote: "Dream big and work hard.",
        message: "From freshman year chaos to today, we did it! Cheers to new adventures!",
        achievements: ["Honors Graduate", "Community Service"]
    },
    {
        id: 4,
        name: "James Rodriguez",
        role: "Sports Captain",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        quote: "Champions keep playing until they get it right.",
        message: "Thanks for the best four years. Go team!",
        achievements: ["Athlete of the Year", "Team MVP"]
    },
    {
        id: 5,
        name: "Olivia Martinez",
        role: "Arts Representative",
        image: "https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=400&h=400&fit=crop",
        quote: "Creativity takes courage.",
        message: "Creating art with amazing people. This class is the masterpiece.",
        achievements: ["Artist of Merit", "Exhibition Winner"]
    },
    {
        id: 6,
        name: "Noah Anderson",
        role: "Debate Captain",
        image: "https://images.unsplash.com/photo-1516214104703-3e591127c1b7?w=400&h=400&fit=crop",
        quote: "Words have power. Use them wisely.",
        message: "Debated our way through four years! Time to conquer the world.",
        achievements: ["Debate Champion", "Public Speaker"]
    },
    {
        id: 7,
        name: "Ava Taylor",
        role: "Science Lead",
        image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=400&fit=crop",
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        message: "Lab coats, late nights, and legendary moments. What a ride!",
        achievements: ["Science Excellence", "Research Award"]
    },
    {
        id: 8,
        name: "Benjamin Lee",
        role: "Tech Pioneer",
        image: "https://images.unsplash.com/photo-1507539332386-fbb35f7f8895?w=400&h=400&fit=crop",
        quote: "Technology is best when it brings people together.",
        message: "Code, coffee, and camaraderie. Excited for what's next!",
        achievements: ["Tech Innovator", "Hackathon Winner"]
    }
];

// ==========================================
// 2. MESSAGES DATA
// ==========================================

const messages = [
    {
        text: "The best time of my life. Thank you all for making it unforgettable.",
        author: "Class of 2026"
    },
    {
        text: "Four years flew by, but the memories will last forever.",
        author: "Forever Grateful"
    },
    {
        text: "We didn't just graduate, we grew together.",
        author: "Wisdom Speaker"
    },
    {
        text: "To new beginnings and old friends who will forever be family.",
        author: "Sentimental Wanderer"
    },
    {
        text: "Goodbye school, hello world. We're ready for this!",
        author: "Adventure Seeker"
    },
    {
        text: "This class made me believe in friendship again.",
        author: "Heart Holder"
    }
];

// ==========================================
// 3. TEAM/LEADERS DATA
// ==========================================

const team = [
    {
        name: "Professor Sarah Mitchell",
        role: "Class Advisor",
        bio: "Mentored us with wisdom and support throughout our journey.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    },
    {
        name: "Principal David Chen",
        role: "School Principal",
        bio: "Led our school with vision and dedication to excellence.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
        name: "Ms. Jennifer Park",
        role: "Counselor",
        bio: "Always there to support, guide, and believe in us.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
        name: "Coach Marcus Thompson",
        role: "Sports Director",
        bio: "Inspired us to be our best selves both on and off the field.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
    {
        name: "Dr. Emily Brooks",
        role: "Dean of Students",
        bio: "Made our campus feel like home with her warmth and dedication.",
        image: "https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=400&h=400&fit=crop"
    }
];

// ==========================================
// 4. DOM ELEMENTS
// ==========================================

const galleryGrid = document.getElementById('galleryGrid');
const searchInput = document.getElementById('searchInput');
const resultsCount = document.getElementById('resultsCount');
const noResults = document.getElementById('noResults');
const studentModal = document.getElementById('studentModal');
const modalClose = document.getElementById('modalClose');
const messagesGrid = document.getElementById('messagesGrid');
const memoriesWall = document.getElementById('memoriesWall');
const memoryInput = document.getElementById('memoryInput');
const submitMemory = document.getElementById('submitMemory');
const charCount = document.getElementById('charCount');
const celebrateBtn = document.getElementById('celebrateBtn');
const scrollBtn = document.getElementById('scrollBtn');
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
const teamGrid = document.getElementById('teamGrid');
const loadingScreen = document.getElementById('loadingScreen');
const menuToggle = document.getElementById('menuToggle');

// ==========================================
// 5. INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all sections
    renderGallery();
    renderMessages();
    renderTeam();
    loadMemories();
    startCountdown();
    createParticles();
    
    // Set up event listeners
    searchInput.addEventListener('input', handleSearch);
    submitMemory.addEventListener('click', addMemory);
    memoryInput.addEventListener('input', updateCharCount);
    celebrateBtn.addEventListener('click', celebrate);
    scrollBtn.addEventListener('click', () => {
        document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
    });
    musicToggle.addEventListener('click', toggleMusic);
    modalClose.addEventListener('click', closeModal);
    studentModal.addEventListener('click', (e) => {
        if (e.target === studentModal) closeModal();
    });
});

// ==========================================
// 6. GALLERY FUNCTIONS
// ==========================================

function renderGallery(filteredStudents = students) {
    galleryGrid.innerHTML = '';
    
    filteredStudents.forEach((student, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${student.image}" alt="${student.name}" class="gallery-image" loading="lazy">
            <div class="gallery-overlay">
                <div class="gallery-name">${student.name}</div>
                <div class="gallery-role">${student.role}</div>
            </div>
        `;
        
        galleryItem.addEventListener('click', () => openModal(student));
        galleryGrid.appendChild(galleryItem);
    });
}

function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    
    if (searchTerm === '') {
        renderGallery();
        resultsCount.textContent = `Showing ${students.length} students`;
        noResults.style.display = 'none';
        return;
    }
    
    const filtered = students.filter(student =>
        student.name.toLowerCase().includes(searchTerm)
    );
    
    if (filtered.length === 0) {
        galleryGrid.innerHTML = '';
        noResults.style.display = 'block';
        resultsCount.textContent = '0 results';
    } else {
        renderGallery(filtered);
        noResults.style.display = 'none';
        resultsCount.textContent = `Found ${filtered.length} ${filtered.length === 1 ? 'student' : 'students'}`;
    }
}

// ==========================================
// 7. MODAL FUNCTIONS
// ==========================================

function openModal(student) {
    document.getElementById('modalImage').src = student.image;
    document.getElementById('modalName').textContent = student.name;
    document.getElementById('modalRole').textContent = student.role;
    document.getElementById('modalQuote').textContent = `"${student.quote}"`;
    document.getElementById('modalMessage').textContent = student.message;
    
    const achievementsContainer = document.getElementById('modalAchievements');
    achievementsContainer.innerHTML = student.achievements
        .map(achievement => `<span class="achievement-tag">${achievement}</span>`)
        .join('');
    
    studentModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    studentModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ==========================================
// 8. MESSAGES FUNCTIONS
// ==========================================

function renderMessages() {
    messagesGrid.innerHTML = messages.map((msg, index) => `
        <div class="message-card">
            <div class="message-quote">✦</div>
            <p class="message-text">${msg.text}</p>
            <p class="message-author">— ${msg.author}</p>
        </div>
    `).join('');
}

// ==========================================
// 9. MEMORY WALL FUNCTIONS
// ==========================================

function loadMemories() {
    const memories = JSON.parse(localStorage.getItem('memories')) || [];
    displayMemories(memories);
}

function displayMemories(memories) {
    memoriesWall.innerHTML = memories.map((memory, index) => `
        <div class="memory-item">
            <p class="memory-text">${escapeHtml(memory.text)}</p>
            <p class="memory-time">${memory.timestamp}</p>
        </div>
    `).join('');
}

function addMemory() {
    const text = memoryInput.value.trim();
    
    if (text === '') {
        alert('Please write something before posting!');
        return;
    }
    
    const memories = JSON.parse(localStorage.getItem('memories')) || [];
    const now = new Date();
    const timestamp = `${now.getMonth() + 1}/${now.getDate()} ${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
    
    memories.unshift({
        text: text,
        timestamp: timestamp
    });
    
    // Keep only last 50 memories
    if (memories.length > 50) {
        memories.pop();
    }
    
    localStorage.setItem('memories', JSON.stringify(memories));
    
    memoryInput.value = '';
    updateCharCount();
    displayMemories(memories);
    
    // Show success feedback
    submitMemory.textContent = '✓ Posted!';
    submitMemory.style.background = 'var(--success)';
    setTimeout(() => {
        submitMemory.innerHTML = '<i class="fas fa-paper-plane"></i> Post Memory';
        submitMemory.style.background = '';
    }, 2000);
}

function updateCharCount() {
    charCount.textContent = memoryInput.value.length;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ==========================================
// 10. TEAM FUNCTIONS
// ==========================================

function renderTeam() {
    teamGrid.innerHTML = team.map(member => `
        <div class="team-card">
            <div class="team-image-wrapper">
                <img src="${member.image}" alt="${member.name}" class="team-image" loading="lazy">
                <div class="team-image-border"></div>
            </div>
            <div class="team-info">
                <h3>${member.name}</h3>
                <p class="team-role">${member.role}</p>
                <p class="team-bio">${member.bio}</p>
                <div class="team-social">
                    <a href="#" title="Twitter"><i class="fab fa-twitter"></i></a>
                    <a href="#" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    `).join('');
}

// ==========================================
// 11. COUNTDOWN TIMER
// ==========================================

function startCountdown() {
    // Set graduation date to June 15, 2026
    const graduationDate = new Date('2026-06-15').getTime();
    
    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = graduationDate - now;
        
        if (distance < 0) {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    };
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ==========================================
// 12. CELEBRATION EFFECTS
// ==========================================

function celebrate() {
    createConfetti();
    playSound();
    
    // Shake effect
    document.body.style.animation = 'shake 0.5s';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 500);
}

function createConfetti() {
    const confettiContainer = document.getElementById('confettiContainer');
    const colors = ['var(--primary)', 'var(--secondary)', 'var(--accent)'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue(colors[Math.floor(Math.random() * colors.length)]).trim();
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.animationDuration = (2 + Math.random() * 1) + 's';
        confettiContainer.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
    }
}

function playSound() {
    // Create a simple beep sound using Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
    20%, 40%, 60%, 80% { transform: translateX(10px); }
}

// ==========================================
// 13. PARTICLE ANIMATION
// ==========================================

function createParticles() {
    const container = document.getElementById('particlesContainer');
    const particleCount = window.innerWidth > 1024 ? 30 : 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        particle.style.animationDuration = (Math.random() * 20 + 20) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        container.appendChild(particle);
    }
}

// ==========================================
// 14. MUSIC TOGGLE
// ==========================================

function toggleMusic() {
    if (bgMusic.paused) {
        bgMusic.play().catch(() => {
            console.log('Autoplay prevented. User interaction required.');
        });
        musicToggle.classList.add('active');
    } else {
        bgMusic.pause();
        musicToggle.classList.remove('active');
    }
}

// ==========================================
// 15. NAVIGATION MENU (Mobile)
// ==========================================

menuToggle.addEventListener('click', () => {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Close menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-menu').style.display = 'none';
    });
});

// ==========================================
// 16. SCROLL ANIMATIONS
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.section-header, .gallery-item, .message-card, .team-card, .memory-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// ==========================================
// 17. SMOOTH SCROLL FOR NAVIGATION
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==========================================
// 18. UTILITY FUNCTIONS
// ==========================================

// Prevent spam submissions
let lastMemoryTime = 0;
const originalAddMemory = addMemory;
addMemory = function() {
    const now = Date.now();
    if (now - lastMemoryTime < 1000) return;
    lastMemoryTime = now;
    originalAddMemory.call(this);
};

// Log initialization
console.log('🎓 Graduation Celebration Website Loaded!');
console.log(`Total Students: ${students.length}`);
console.log(`Messages: ${messages.length}`);
console.log(`Team Leaders: ${team.length}`);
