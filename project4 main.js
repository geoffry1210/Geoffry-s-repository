/**
 * Science Adventure Quiz - Main JavaScript Module
 * Handles quiz logic, animations, sound effects, and user progress
 */

class ScienceQuizApp {
    constructor() {
        this.currentQuiz = {
            category: '',
            ageGroup: '',
            questions: [],
            currentQuestionIndex: 0,
            score: 0,
            answers: [],
            startTime: null,
            timer: null,
            timeRemaining: 30
        };
        
        this.userProgress = this.loadUserProgress();
        this.soundEnabled = localStorage.getItem('soundEnabled') !== 'false';
        this.audioContext = null;
        this.sounds = {};
        
        this.init();
    }
    
    init() {
        this.initAudioContext();
        this.preloadSounds();
        this.setupGlobalEventListeners();
    }
    
    // Audio Management
    initAudioContext() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.warn('Web Audio API not supported');
        }
    }
    
    preloadSounds() {
        // Generate audio tones for different events
        this.sounds = {
            correct: this.createTone(800, 200, 'sine'),
            incorrect: this.createTone(300, 400, 'square'),
            success: this.createTone(1000, 300, 'sine'),
            click: this.createTone(600, 100, 'sine'),
            timer: this.createTone(440, 50, 'sine')
        };
    }
    
    createTone(frequency, duration, type = 'sine') {
        return () => {
            if (!this.audioContext || !this.soundEnabled) return;
            
            try {
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(this.audioContext.destination);
                
                oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
                oscillator.type = type;
                
                gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration / 1000);
                
                oscillator.start(this.audioContext.currentTime);
                oscillator.stop(this.audioContext.currentTime + duration / 1000);
            } catch (e) {
                console.warn('Error playing sound:', e);
            }
        };
    }
    
    playSound(soundName) {
        if (this.sounds[soundName]) {
            this.sounds[soundName]();
        }
    }
    
    toggleSound() {
        this.soundEnabled = !this.soundEnabled;
        localStorage.setItem('soundEnabled', this.soundEnabled);
        
        // Resume audio context if needed
        if (this.soundEnabled && this.audioContext && this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }
        
        return this.soundEnabled;
    }
    
    // Quiz Management
    initializeQuiz(category, ageGroup) {
        this.currentQuiz = {
            category: category,
            ageGroup: ageGroup,
            questions: this.loadQuestions(category, ageGroup),
            currentQuestionIndex: 0,
            score: 0,
            answers: [],
            startTime: Date.now(),
            timer: null,
            timeRemaining: 30
        };
        
        return this.currentQuiz;
    }
    
    loadQuestions(category, ageGroup) {
        let questions = [];
        
        if (category === 'mixed') {
            // Load questions from all categories
            Object.keys(quizData).forEach(cat => {
                if (quizData[cat][ageGroup]) {
                    questions = questions.concat(quizData[cat][ageGroup]);
                }
            });
        } else if (quizData[category] && quizData[category][ageGroup]) {
            questions = [...quizData[category][ageGroup]];
        }
        
        // Shuffle questions
        for (let i = questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [questions[i], questions[j]] = [questions[j], questions[i]];
        }
        
        // Determine number of questions based on age group
        const questionCount = ageGroup === '5-7' ? 5 : 
                             ageGroup === '8-11' ? 7 : 10;
        
        return questions.slice(0, questionCount);
    }
    
    getCurrentQuestion() {
        return this.currentQuiz.questions[this.currentQuiz.currentQuestionIndex];
    }
    
    checkAnswer(selectedIndex) {
        const question = this.getCurrentQuestion();
        const isCorrect = selectedIndex === question.correct;
        
        // Store answer
        this.currentQuiz.answers.push({
            questionIndex: this.currentQuiz.currentQuestionIndex,
            selectedAnswer: selectedIndex,
            correctAnswer: question.correct,
            isCorrect: isCorrect,
            timeSpent: 30 - this.currentQuiz.timeRemaining
        });
        
        // Update score
        if (isCorrect) {
            this.currentQuiz.score++;
        }
        
        return {
            isCorrect: isCorrect,
            correctAnswer: question.correct,
            explanation: question.explanation
        };
    }
    
    nextQuestion() {
        this.currentQuiz.currentQuestionIndex++;
        this.currentQuiz.timeRemaining = 30;
        
        return this.currentQuiz.currentQuestionIndex < this.currentQuiz.questions.length;
    }
    
    getQuizResults() {
        const totalTime = Date.now() - this.currentQuiz.startTime;
        const percentage = Math.round((this.currentQuiz.score / this.currentQuiz.questions.length) * 100);
        
        return {
            category: this.currentQuiz.category,
            ageGroup: this.currentQuiz.ageGroup,
            score: this.currentQuiz.score,
            totalQuestions: this.currentQuiz.questions.length,
            percentage: percentage,
            answers: this.currentQuiz.answers,
            timeSpent: totalTime,
            timestamp: Date.now()
        };
    }
    
    // Timer Management
    startTimer(callback) {
        if (this.currentQuiz.timer) {
            clearInterval(this.currentQuiz.timer);
        }
        
        this.currentQuiz.timer = setInterval(() => {
            this.currentQuiz.timeRemaining--;
            
            if (callback) {
                callback(this.currentQuiz.timeRemaining);
            }
            
            if (this.currentQuiz.timeRemaining <= 0) {
                this.timeUp();
            }
        }, 1000);
    }
    
    stopTimer() {
        if (this.currentQuiz.timer) {
            clearInterval(this.currentQuiz.timer);
            this.currentQuiz.timer = null;
        }
    }
    
    resetTimer() {
        this.stopTimer();
        this.currentQuiz.timeRemaining = 30;
    }
    
    timeUp() {
        this.stopTimer();
        this.playSound('timer');
        
        // Store as incorrect answer
        const question = this.getCurrentQuestion();
        this.currentQuiz.answers.push({
            questionIndex: this.currentQuiz.currentQuestionIndex,
            selectedAnswer: -1,
            correctAnswer: question.correct,
            isCorrect: false,
            timeUp: true
        });
        
        return {
            isCorrect: false,
            correctAnswer: question.correct,
            explanation: question.explanation,
            timeUp: true
        };
    }
    
    // Animation System
    createRippleEffect(element, x, y) {
        const ripple = document.createElement('div');
        ripple.className = 'ripple-effect';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
    
    createConfetti(container = document.body) {
        const colors = ['#F5D76E', '#2ECC71', '#E74C3C', '#9B59B6', '#1ABC9C'];
        
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.borderRadius = '50%';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '1000';
            
            container.appendChild(confetti);
            
            // Animate confetti
            if (typeof anime !== 'undefined') {
                anime({
                    targets: confetti,
                    translateY: window.innerHeight + 100,
                    translateX: (Math.random() - 0.5) * 200,
                    rotate: Math.random() * 360,
                    duration: Math.random() * 2000 + 1000,
                    easing: 'easeInQuad',
                    complete: () => confetti.remove()
                });
            } else {
                // Fallback animation
                setTimeout(() => confetti.remove(), 3000);
            }
        }
    }
    
    animateScore(element, finalScore, duration = 1000) {
        const startScore = 0;
        const startTime = Date.now();
        
        const updateScore = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const currentScore = Math.floor(startScore + (finalScore - startScore) * progress);
            
            element.textContent = currentScore;
            
            if (progress < 1) {
                requestAnimationFrame(updateScore);
            }
        };
        
        updateScore();
    }
    
    animateProgressBar(element, percentage, duration = 1000) {
        if (typeof anime !== 'undefined') {
            anime({
                targets: element,
                width: percentage + '%',
                duration: duration,
                easing: 'easeOutCubic'
            });
        } else {
            element.style.width = percentage + '%';
        }
    }
    
    // User Progress Management
    loadUserProgress() {
        const saved = localStorage.getItem('userProgress');
        if (saved) {
            return JSON.parse(saved);
        }
        
        return {
            totalQuizzes: 0,
            averageScore: 0,
            favoriteCategory: '',
            achievements: [],
            categoryProgress: {},
            quizHistory: []
        };
    }
    
    saveUserProgress() {
        localStorage.setItem('userProgress', JSON.stringify(this.userProgress));
    }
    
    updateProgress(quizResults) {
        this.userProgress.totalQuizzes++;
        this.userProgress.quizHistory.push(quizResults);
        
        // Update category progress
        if (!this.userProgress.categoryProgress[quizResults.category]) {
            this.userProgress.categoryProgress[quizResults.category] = {
                attempts: 0,
                bestScore: 0,
                averageScore: 0,
                totalScore: 0
            };
        }
        
        const categoryData = this.userProgress.categoryProgress[quizResults.category];
        categoryData.attempts++;
        categoryData.totalScore += quizResults.score;
        categoryData.bestScore = Math.max(categoryData.bestScore, quizResults.score);
        categoryData.averageScore = categoryData.totalScore / categoryData.attempts;
        
        // Update overall average
        const totalScores = this.userProgress.quizHistory.reduce((sum, quiz) => sum + quiz.score, 0);
        this.userProgress.averageScore = totalScores / this.userProgress.quizHistory.length;
        
        // Determine favorite category
        let maxScore = 0;
        let favoriteCategory = '';
        Object.entries(this.userProgress.categoryProgress).forEach(([category, data]) => {
            if (data.bestScore > maxScore) {
                maxScore = data.bestScore;
                favoriteCategory = category;
            }
        });
        this.userProgress.favoriteCategory = favoriteCategory;
        
        this.saveUserProgress();
    }
    
    // Achievement System
    checkAchievements(quizResults) {
        const newAchievements = [];
        
        // Perfect score achievement
        if (quizResults.percentage === 100 && !this.userProgress.achievements.includes('perfect-score')) {
            newAchievements.push('perfect-score');
        }
        
        // Category-specific achievements
        const categoryAchievements = {
            'space': 'space-explorer',
            'animals': 'animal-expert',
            'human-body': 'body-brain',
            'earth-science': 'earth-guardian',
            'physics': 'physics-wizard'
        };
        
        if (categoryAchievements[quizResults.category]) {
            const achievement = categoryAchievements[quizResults.category];
            if (!this.userProgress.achievements.includes(achievement)) {
                newAchievements.push(achievement);
            }
        }
        
        // Quiz master achievement (10 quizzes)
        if (this.userProgress.totalQuizzes >= 10 && !this.userProgress.achievements.includes('quiz-master')) {
            newAchievements.push('quiz-master');
        }
        
        // First quiz achievement
        if (this.userProgress.totalQuizzes === 1 && !this.userProgress.achievements.includes('first-quiz')) {
            newAchievements.push('first-quiz');
        }
        
        // Add new achievements
        this.userProgress.achievements.push(...newAchievements);
        this.saveUserProgress();
        
        return newAchievements;
    }
    
    getAchievementDetails(achievementKey) {
        return achievements[achievementKey] || null;
    }
    
    // Utility Functions
    formatCategoryName(category) {
        const names = {
            'space': 'Space Exploration',
            'animals': 'Amazing Animals',
            'human-body': 'Human Body',
            'earth-science': 'Earth Science',
            'physics': 'Physics Fun',
            'mixed': 'Science Mix'
        };
        return names[category] || category;
    }
    
    formatTime(milliseconds) {
        const minutes = Math.floor(milliseconds / 60000);
        const seconds = Math.floor((milliseconds % 60000) / 1000);
        return minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;
    }
    
    getPerformanceMessage(percentage) {
        if (percentage >= 90) {
            return {
                emoji: '🏆',
                title: 'Outstanding!',
                message: 'You\'re a true Science Master!'
            };
        } else if (percentage >= 80) {
            return {
                emoji: '🌟',
                title: 'Excellent Work!',
                message: 'You have a fantastic understanding!'
            };
        } else if (percentage >= 70) {
            return {
                emoji: '👍',
                title: 'Great Job!',
                message: 'You have a solid understanding!'
            };
        } else if (percentage >= 60) {
            return {
                emoji: '👏',
                title: 'Good Effort!',
                message: 'You\'re learning and improving!'
            };
        } else {
            return {
                emoji: '💪',
                title: 'Good Try!',
                message: 'Keep learning and you\'ll improve!'
            };
        }
    }
    
    // Global Event Listeners
    setupGlobalEventListeners() {
        // Handle page visibility changes
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.stopTimer();
            }
        });
        
        // Handle keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Global sound toggle (Ctrl+M)
            if (e.ctrlKey && e.key === 'm') {
                e.preventDefault();
                this.toggleSound();
            }
            
            // Global pause/resume (Spacebar)
            if (e.key === ' ' && e.target.tagName !== 'INPUT') {
                e.preventDefault();
                // Could implement pause functionality here
            }
        });
        
        // Handle window resize for responsive animations
        window.addEventListener('resize', () => {
            // Debounce resize events
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(() => {
                // Trigger any necessary recalculations
                this.handleResize();
            }, 250);
        });
    }
    
    handleResize() {
        // Recalculate any size-dependent animations or layouts
        if (typeof echarts !== 'undefined' && this.charts) {
            Object.values(this.charts).forEach(chart => {
                if (chart && chart.resize) {
                    chart.resize();
                }
            });
        }
    }
    
    // Export functionality for use in other scripts
    export() {
        return {
            initializeQuiz: this.initializeQuiz.bind(this),
            getCurrentQuestion: this.getCurrentQuestion.bind(this),
            checkAnswer: this.checkAnswer.bind(this),
            nextQuestion: this.nextQuestion.bind(this),
            getQuizResults: this.getQuizResults.bind(this),
            startTimer: this.startTimer.bind(this),
            stopTimer: this.stopTimer.bind(this),
            playSound: this.playSound.bind(this),
            toggleSound: this.toggleSound.bind(this),
            createConfetti: this.createConfetti.bind(this),
            animateScore: this.animateScore.bind(this),
            checkAchievements: this.checkAchievements.bind(this),
            updateProgress: this.updateProgress.bind(this),
            getAchievementDetails: this.getAchievementDetails.bind(this),
            formatCategoryName: this.formatCategoryName.bind(this),
            formatTime: this.formatTime.bind(this),
            getPerformanceMessage: this.getPerformanceMessage.bind(this)
        };
    }
}

// Initialize the app when DOM is loaded
let scienceQuizApp;

document.addEventListener('DOMContentLoaded', function() {
    scienceQuizApp = new ScienceQuizApp();
    
    // Make app instance globally available for debugging
    window.scienceQuizApp = scienceQuizApp;
    
    // Initialize page-specific functionality
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    switch(currentPage) {
        case 'index.html':
        case '':
            initHomePage();
            break;
        case 'quiz.html':
            initQuizPage();
            break;
        case 'results.html':
            initResultsPage();
            break;
    }
});

// Page-specific initialization functions
function initHomePage() {
    // Home page specific initialization
    console.log('Initializing home page...');
}

function initQuizPage() {
    // Quiz page specific initialization
    console.log('Initializing quiz page...');
}

function initResultsPage() {
    // Results page specific initialization
    console.log('Initializing results page...');
}

// Service Worker Registration (for offline support)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}

// Error Handling
window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);
    // Could implement error reporting here
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    // Could implement error reporting here
});

// Accessibility Enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Add skip links for keyboard navigation
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-white p-2 z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content landmark
    const main = document.querySelector('main') || document.querySelector('.container');
    if (main) {
        main.id = 'main-content';
    }
});

// Performance Monitoring
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }, 0);
    });
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ScienceQuizApp;
}