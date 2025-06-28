// File: js/script.js

document.addEventListener('DOMContentLoaded', () => {

    // === Efek Mengetik (Typing Effect) ===
    const typingText = document.getElementById('typing-text');
    const texts = ["Programmer Junior", "Mahasiswa Sistem Informasi" ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];
        if (isDeleting) {
            // Hapus karakter
            charIndex--;
            typingText.textContent = currentText.substring(0, charIndex);
            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }
        } else {
            // Tambah karakter
            charIndex++;
            typingText.textContent = currentText.substring(0, charIndex);
            if (charIndex === currentText.length) {
                isDeleting = true;
                // Jeda sebelum mulai menghapus
                setTimeout(type, 2000); 
                return;
            }
        }
        // Kecepatan mengetik
        setTimeout(type, isDeleting ? 100 : 150);
    }
    
    // Panggil fungsi hanya jika elemennya ada
    if (typingText) {
        type();
    }

    // === Animasi Fade-in saat Scroll ===
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animasi hanya sekali
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // === Mobile Menu Toggle ===
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Tutup menu saat link di-klik (untuk navigasi di halaman yang sama)
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

});