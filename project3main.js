// CineSocial - Main JavaScript Functionality
// Comprehensive social movie platform with AI-powered features

class CineSocial {
    constructor() {
        this.currentUser = {
            id: 'user_123',
            name: 'MovieLover2024',
            avatar: 'https://kimi-web-img.moonshot.cn/img/media.istockphoto.com/1302546568341e80659f03e703458cc59bed6d8b',
            likedPosts: new Set(),
            watchlist: new Set(),
            following: new Set(['cinema_scope', 'film_critic', 'indie_hub'])
        };
        
        this.posts = [
            {
                id: 'post_1',
                author: 'CinemaScope',
                avatar: 'https://kimi-web-img.moonshot.cn/img/framerusercontent.com/9de2765f1f1067e0d7d65954ba043e1c23e430ae.webp',
                timeAgo: '2 hours ago',
                image: 'https://kimi-web-img.moonshot.cn/img/static1.moviewebimages.com/527933cab29809ed4a40db591bc551fb24f96f43.jpeg',
                title: 'Extraction 2: A Masterclass in Action',
                content: 'Chris Hemsworth delivers another stellar performance in this heart-pounding sequel that redefines the action genre...',
                likes: 1200,
                comments: 89,
                shares: 156,
                isLiked: false,
                genre: 'Action Thriller',
                rating: 4.5
            },
            {
                id: 'post_2',
                author: 'FilmCritic',
                avatar: 'https://kimi-web-img.moonshot.cn/img/s.studiobinder.com/f866d663b4face09021599a10b1f3ada2fb5a8da.jpeg',
                timeAgo: '4 hours ago',
                image: 'https://kimi-web-img.moonshot.cn/img/images.squarespace-cdn.com/675f280331d4b084e65cabcd6351a43a7552e644.jpg',
                title: 'Hidden Indie Gem of the Month',
                content: 'This breathtaking independent film proves that great storytelling doesn\'t need a blockbuster budget...',
                likes: 856,
                comments: 42,
                shares: 78,
                isLiked: false,
                genre: 'Indie Drama',
                rating: 4.8
            },
            {
                id: 'post_3',
                author: 'IndieHub',
                avatar: 'https://kimi-web-img.moonshot.cn/img/images.squarespace-cdn.com/675f280331d4b084e65cabcd6351a43a7552e644.jpg',
                timeAgo: '6 hours ago',
                image: 'https://kimi-web-img.moonshot.cn/img/cdn.mos.cms.futurecdn.net/d5f5ff47b3a01a494fdf608d5a1ee8e373199a24.jpg',
                title: 'Top 5 Romance Movies of 2024',
                content: 'From heartwarming love stories to passionate dramas, these films will make you believe in love again...',
                likes: 2100,
                comments: 134,
                shares: 267,
                isLiked: false,
                genre: 'Romance Collection',
                rating: 4.3
            }
        ];
        
        this.movies = [
            {
                id: 'movie_1',
                title: 'Inception',
                poster: 'https://kimi-web-img.moonshot.cn/img/static1.moviewebimages.com/527933cab29809ed4a40db591bc551fb24f96f43.jpeg',
                genre: 'Sci-Fi Thriller',
                rating: 4.8,
                year: 2010,
                director: 'Christopher Nolan',
                duration: '148 min',
                description: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
                isTrending: true,
                isNew: false
            },
            {
                id: 'movie_2',
                title: 'The Dark Knight',
                poster: 'https://kimi-web-img.moonshot.cn/img/images.thedirect.com/1e29f38c685d107bfe0eb4cf40119237149cdc6d.jpg',
                genre: 'Action Crime',
                rating: 4.9,
                year: 2008,
                director: 'Christopher Nolan',
                duration: '152 min',
                description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.',
                isTrending: true,
                isNew: false
            },
            {
                id: 'movie_3',
                title: 'Parasite',
                poster: 'https://kimi-web-img.moonshot.cn/img/otakukart.com/3e7b85eed523ae372cd78d01f6459c17473a07bc.jpg',
                genre: 'Thriller Drama',
                rating: 4.7,
                year: 2019,
                director: 'Bong Joon-ho',
                duration: '132 min',
                description: 'A poor family schemes to become employed by a wealthy family and infiltrate their household by posing as unrelated, highly qualified individuals.',
                isTrending: false,
                isNew: true
            }
        ];
        
        this.aiRecommendations = [
            { genre: 'Psychological Thriller', confidence: 95, reason: 'Based on your love for mind-bending narratives' },
            { genre: 'Neo-Noir', confidence: 88, reason: 'Matches your preference for complex storytelling' },
            { genre: 'Heist Films', confidence: 82, reason: 'Similar to movies you\'ve highly rated' }
        ];
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.initializeAnimations();
        this.setupCarousel();
        this.createParticleEffect();
        this.loadUserPreferences();
        console.log('CineSocial initialized successfully');
    }
    
    setupEventListeners() {
        // Like functionality
        document.addEventListener('click', (e) => {
            if (e.target.closest('.like-button') || e.target.closest('[onclick*="toggleLike"]')) {
                e.preventDefault();
                const button = e.target.closest('button');
                this.toggleLike(button);
            }
        });
        
        // Comment functionality
        document.addEventListener('click', (e) => {
            if (e.target.closest('[onclick*="toggleComments"]')) {
                e.preventDefault();
                const button = e.target.closest('button');
                this.toggleComments(button);
            }
        });
        
        // Share functionality
        document.addEventListener('click', (e) => {
            if (e.target.closest('[onclick*="shareContent"]')) {
                e.preventDefault();
                const button = e.target.closest('button');
                this.shareContent(button);
            }
        });
        
        // Save to watchlist
        document.addEventListener('click', (e) => {
            if (e.target.closest('[onclick*="saveToWatchlist"]')) {
                e.preventDefault();
                const button = e.target.closest('button');
                this.saveToWatchlist(button);
            }
        });
        
        // Navigation handling
        document.addEventListener('click', (e) => {
            if (e.target.closest('a[href]')) {
                const link = e.target.closest('a');
                if (link.href.includes('.html')) {
                    this.handleNavigation(link);
                }
            }
        });
        
        // Voice search
        if ('webkitSpeechRecognition' in window) {
            this.setupVoiceSearch();
        }
        
        // Infinite scroll
        this.setupInfiniteScroll();
    }
    
    initializeAnimations() {
        // Animate hero elements on load
        anime({
            targets: '.hero-gradient h2',
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 1000,
            easing: 'easeOutQuart',
            delay: 300
        });
        
        anime({
            targets: '.hero-gradient p',
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 800,
            easing: 'easeOutQuart',
            delay: 500
        });
        
        anime({
            targets: '.hero-gradient button',
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 600,
            easing: 'easeOutQuart',
            delay: 700
        });
        
        // Stagger animation for feed posts
        anime({
            targets: '.movie-card',
            opacity: [0, 1],
            translateY: [50, 0],
            duration: 600,
            easing: 'easeOutQuart',
            delay: anime.stagger(200, {start: 1000})
        });
    }
    
    setupCarousel() {
        if (document.getElementById('featured-carousel')) {
            new Splide('#featured-carousel', {
                type: 'loop',
                perPage: 1,
                perMove: 1,
                gap: '1rem',
                autoplay: true,
                interval: 4000,
                pauseOnHover: true,
                arrows: false,
                pagination: true,
                breakpoints: {
                    768: {
                        perPage: 1,
                    }
                }
            }).mount();
        }
        
        if (document.getElementById('discover-carousel')) {
            new Splide('#discover-carousel', {
                type: 'loop',
                perPage: 2,
                perMove: 1,
                gap: '1rem',
                autoplay: false,
                arrows: true,
                pagination: false,
                breakpoints: {
                    768: {
                        perPage: 1,
                    }
                }
            }).mount();
        }
    }
    
    createParticleEffect() {
        const canvas = document.getElementById('particles');
        if (!canvas) return;
        
        // Simple particle system using CSS animations
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: rgba(244, 208, 63, 0.3);
                border-radius: 50%;
                animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
                animation-delay: ${Math.random() * 2}s;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
            `;
            canvas.appendChild(particle);
        }
        
        // Add CSS animation for floating particles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
                50% { transform: translateY(-20px) translateX(10px); opacity: 0.8; }
            }
        `;
        document.head.appendChild(style);
    }
    
    toggleLike(button) {
        const postElement = button.closest('article');
        const postId = postElement ? postElement.dataset.postId : 'post_1';
        const likeCount = button.querySelector('span');
        const heartIcon = button.querySelector('svg');
        
        let currentLikes = parseInt(likeCount.textContent.replace('k', '000').replace('.', ''));
        let isLiked = this.currentUser.likedPosts.has(postId);
        
        if (isLiked) {
            // Unlike
            this.currentUser.likedPosts.delete(postId);
            currentLikes--;
            button.classList.remove('text-red-500');
            button.classList.add('text-gray-400');
            heartIcon.setAttribute('fill', 'none');
        } else {
            // Like
            this.currentUser.likedPosts.add(postId);
            currentLikes++;
            button.classList.remove('text-gray-400');
            button.classList.add('text-red-500');
            heartIcon.setAttribute('fill', 'currentColor');
            
            // Heart animation
            button.classList.add('like-animation');
            setTimeout(() => button.classList.remove('like-animation'), 600);
            
            // Create floating heart effect
            this.createFloatingHeart(button);
        }
        
        likeCount.textContent = this.formatNumber(currentLikes);
        
        // Simulate API call
        this.updateLikeStatus(postId, !isLiked);
    }
    
    createFloatingHeart(button) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.cssText = `
            position: absolute;
            font-size: 20px;
            color: #ef4444;
            pointer-events: none;
            z-index: 1000;
            animation: floatUp 1s ease-out forwards;
        `;
        
        const rect = button.getBoundingClientRect();
        heart.style.left = rect.left + 'px';
        heart.style.top = rect.top + 'px';
        
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), 1000);
        
        // Add animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatUp {
                0% { transform: translateY(0) scale(1); opacity: 1; }
                100% { transform: translateY(-50px) scale(1.5); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    toggleComments(button) {
        const postElement = button.closest('article');
        const commentsSection = postElement.querySelector('.comment-thread');
        
        if (commentsSection) {
            commentsSection.classList.toggle('expanded');
            
            // Animate expansion
            if (commentsSection.classList.contains('expanded')) {
                anime({
                    targets: commentsSection,
                    maxHeight: [0, 300],
                    opacity: [0, 1],
                    duration: 300,
                    easing: 'easeOutQuart'
                });
            }
        }
    }
    
    shareContent(button) {
        const shareOptions = [
            { name: 'Copy Link', icon: '🔗', action: () => this.copyToClipboard() },
            { name: 'WhatsApp', icon: '💬', action: () => this.shareToWhatsApp() },
            { name: 'Twitter', icon: '🐦', action: () => this.shareToTwitter() },
            { name: 'Instagram', icon: '📷', action: () => this.shareToInstagram() }
        ];
        
        this.showShareModal(shareOptions);
        
        // Update share count
        const shareCount = button.querySelector('span');
        const currentShares = parseInt(shareCount.textContent);
        shareCount.textContent = currentShares + 1;
    }
    
    showShareModal(options) {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
        modal.innerHTML = `
            <div class="bg-gray-900 rounded-2xl p-6 w-full max-w-sm">
                <h3 class="text-white font-semibold mb-4 text-center">Share Movie</h3>
                <div class="grid grid-cols-2 gap-4">
                    ${options.map(option => `
                        <button onclick="${option.action.toString().replace('() => ', '')}" class="flex flex-col items-center p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
                            <span class="text-2xl mb-2">${option.icon}</span>
                            <span class="text-white text-sm">${option.name}</span>
                        </button>
                    `).join('')}
                </div>
                <button onclick="this.closest('.fixed').remove()" class="w-full mt-4 py-2 text-gray-400 hover:text-white">
                    Cancel
                </button>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Animate modal
        anime({
            targets: modal.querySelector('div'),
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 300,
            easing: 'easeOutQuart'
        });
    }
    
    saveToWatchlist(button) {
        const postElement = button.closest('article');
        const postId = postElement ? postElement.dataset.postId : 'movie_1';
        
        let isInWatchlist = this.currentUser.watchlist.has(postId);
        
        if (isInWatchlist) {
            this.currentUser.watchlist.delete(postId);
            button.classList.remove('text-yellow-400');
            button.classList.add('text-gray-400');
            this.showNotification('Removed from watchlist', 'warning');
        } else {
            this.currentUser.watchlist.add(postId);
            button.classList.remove('text-gray-400');
            button.classList.add('text-yellow-400');
            this.showNotification('Added to watchlist', 'success');
        }
        
        // Animate bookmark
        anime({
            targets: button,
            scale: [1, 1.2, 1],
            duration: 300,
            easing: 'easeOutQuart'
        });
    }
    
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-lg text-white font-semibold ${
            type === 'success' ? 'bg-green-500' : 
            type === 'warning' ? 'bg-orange-500' : 
            'bg-blue-500'
        }`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Animate in
        anime({
            targets: notification,
            translateX: [100, 0],
            opacity: [0, 1],
            duration: 300,
            easing: 'easeOutQuart'
        });
        
        // Remove after 3 seconds
        setTimeout(() => {
            anime({
                targets: notification,
                translateX: [0, 100],
                opacity: [1, 0],
                duration: 300,
                easing: 'easeOutQuart',
                complete: () => notification.remove()
            });
        }, 3000);
    }
    
    setupVoiceSearch() {
        const recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';
        
        recognition.onresult = (event) => {
            const query = event.results[0][0].transcript;
            this.performSearch(query);
        };
        
        recognition.onerror = (event) => {
            this.showNotification('Voice search failed. Please try again.', 'warning');
        };
        
        // Add voice search button to discover page
        const searchInput = document.querySelector('#search-input');
        if (searchInput) {
            const voiceButton = document.createElement('button');
            voiceButton.innerHTML = '🎤';
            voiceButton.className = 'absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white';
            voiceButton.onclick = () => recognition.start();
            searchInput.parentElement.style.position = 'relative';
            searchInput.parentElement.appendChild(voiceButton);
        }
    }
    
    performSearch(query) {
        // Simulate AI-powered search
        const results = this.movies.filter(movie => 
            movie.title.toLowerCase().includes(query.toLowerCase()) ||
            movie.genre.toLowerCase().includes(query.toLowerCase()) ||
            movie.director.toLowerCase().includes(query.toLowerCase())
        );
        
        this.displaySearchResults(results, query);
    }
    
    displaySearchResults(results, query) {
        const container = document.querySelector('#search-results');
        if (!container) return;
        
        container.innerHTML = `
            <div class="mb-6">
                <h3 class="text-white font-semibold mb-4">Search Results for "${query}"</h3>
                <div class="grid grid-cols-2 gap-4">
                    ${results.map(movie => `
                        <div class="bg-gray-800 rounded-xl overflow-hidden">
                            <img src="${movie.poster}" alt="${movie.title}" class="w-full aspect-[2/3] object-cover">
                            <div class="p-3">
                                <h4 class="text-white font-semibold text-sm mb-1">${movie.title}</h4>
                                <p class="text-gray-400 text-xs mb-2">${movie.genre}</p>
                                <div class="flex items-center justify-between">
                                    <span class="text-yellow-400 text-xs">⭐ ${movie.rating}</span>
                                    <button onclick="window.cineSocial.streamMovie('${movie.id}')" class="bg-blue-500 text-white text-xs px-2 py-1 rounded">
                                        Watch
                                    </button>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    setupInfiniteScroll() {
        let loading = false;
        
        window.addEventListener('scroll', () => {
            if (loading) return;
            
            const scrollTop = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;
            
            if (scrollTop + windowHeight >= docHeight - 1000) {
                loading = true;
                this.loadMoreContent().then(() => {
                    loading = false;
                });
            }
        });
    }
    
    async loadMoreContent() {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const newPosts = [
            {
                id: 'post_4',
                author: 'MovieBuff',
                avatar: 'https://kimi-web-img.moonshot.cn/img/media.filmnet.io/814c03ac42155c28d5e7d757a76ac510c2530a5c.jpg',
                timeAgo: '8 hours ago',
                image: 'https://kimi-web-img.moonshot.cn/img/originalvintagemovieposters.com/d2bcc8e74887cfbcac9b00cb635a8ca7a2999b85.jpg',
                title: 'Classic Cinema Revival',
                content: 'Discovering the timeless beauty of black and white cinematography in the digital age...',
                likes: 634,
                comments: 28,
                shares: 45,
                isLiked: false,
                genre: 'Classic Cinema',
                rating: 4.6
            }
        ];
        
        const feedContainer = document.getElementById('feed-container');
        if (feedContainer) {
            newPosts.forEach(post => {
                const postElement = this.createPostElement(post);
                feedContainer.appendChild(postElement);
            });
            
            // Animate new posts
            anime({
                targets: feedContainer.querySelectorAll('.movie-card').slice(-newPosts.length),
                opacity: [0, 1],
                translateY: [50, 0],
                duration: 600,
                easing: 'easeOutQuart',
                delay: anime.stagger(200)
            });
        }
    }
    
    createPostElement(post) {
        const article = document.createElement('article');
        article.className = 'movie-card rounded-2xl p-4 card-hover';
        article.dataset.postId = post.id;
        
        article.innerHTML = `
            <div class="flex items-center mb-4">
                <div class="story-highlight w-12 h-12 mr-3">
                    <img src="${post.avatar}" alt="${post.author}" class="w-full h-full object-cover">
                </div>
                <div class="flex-1">
                    <h4 class="font-semibold text-white">${post.author}</h4>
                    <p class="text-xs text-gray-400">${post.timeAgo}</p>
                </div>
                <button class="text-gray-400">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                    </svg>
                </button>
            </div>
            
            <div class="relative mb-4 rounded-xl overflow-hidden">
                <img src="${post.image}" alt="${post.title}" class="w-full aspect-video object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div class="absolute bottom-4 left-4 right-4">
                    <h3 class="font-display text-xl font-semibold mb-2">${post.title}</h3>
                    <p class="text-gray-300 text-sm line-clamp-2">${post.content}</p>
                </div>
            </div>
            
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-6">
                    <button class="engagement-button flex items-center space-x-2 text-gray-400" onclick="toggleLike(this)">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                        </svg>
                        <span class="text-sm">${this.formatNumber(post.likes)}</span>
                    </button>
                    <button class="engagement-button flex items-center space-x-2 text-gray-400" onclick="toggleComments(this)">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                        </svg>
                        <span class="text-sm">${post.comments}</span>
                    </button>
                    <button class="engagement-button flex items-center space-x-2 text-gray-400" onclick="shareContent(this)">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"/>
                        </svg>
                        <span class="text-sm">${post.shares}</span>
                    </button>
                </div>
                <button class="engagement-button text-gray-400" onclick="saveToWatchlist(this)">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                    </svg>
                </button>
            </div>
        `;
        
        return article;
    }
    
    formatNumber(num) {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'k';
        }
        return num.toString();
    }
    
    copyToClipboard() {
        navigator.clipboard.writeText(window.location.href);
        this.showNotification('Link copied to clipboard!', 'success');
    }
    
    shareToWhatsApp() {
        window.open(`https://wa.me/?text=${encodeURIComponent(window.location.href)}`);
    }
    
    shareToTwitter() {
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`);
    }
    
    shareToInstagram() {
        this.showNotification('Instagram sharing coming soon!', 'info');
    }
    
    streamMovie(movieId) {
        window.location.href = `project3stream.html?movie=${movieId}`;
    }
    
    updateLikeStatus(postId, isLiked) {
        // Simulate API call
        console.log(`Updated like status for ${postId}: ${isLiked}`);
    }
    
    loadUserPreferences() {
        // Load user data from localStorage
        const savedData = localStorage.getItem('cinesocial_user');
        if (savedData) {
            const userData = JSON.parse(savedData);
            this.currentUser = { ...this.currentUser, ...userData };
        }
    }
    
    saveUserPreferences() {
        localStorage.setItem('cinesocial_user', JSON.stringify(this.currentUser));
    }
    
    handleNavigation(link) {
        // Add page transition animation
        anime({
            targets: 'body',
            opacity: [1, 0.8],
            duration: 200,
            easing: 'easeOutQuart',
            complete: () => {
                window.location.href = link.href;
            }
        });
    }
}

// Global functions for HTML onclick handlers
function toggleLike(button) {
    if (window.cineSocial) {
        window.cineSocial.toggleLike(button);
    }
}

function toggleComments(button) {
    if (window.cineSocial) {
        window.cineSocial.toggleComments(button);
    }
}

function shareContent(button) {
    if (window.cineSocial) {
        window.cineSocial.shareContent(button);
    }
}

function saveToWatchlist(button) {
    if (window.cineSocial) {
        window.cineSocial.saveToWatchlist(button);
    }
}

function scrollToFeed() {
    const feed = document.getElementById('feed');
    if (feed) {
        feed.scrollIntoView({ behavior: 'smooth' });
    }
}

function loadMoreContent() {
    if (window.cineSocial) {
        window.cineSocial.loadMoreContent();
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    window.cineSocial = new CineSocial();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CineSocial;
}