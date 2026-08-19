document.addEventListener("DOMContentLoaded", function() {
    
    // Mobil Menü Fonksiyonu
    const hamburger = document.getElementById('hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburger.addEventListener('click', function() {
        mobileMenu.classList.toggle('show');
    });

    // Mobil menüdeki linklere tıklayınca menüyü kapat
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('show');
        });
    });

    
    // Not: Masaüstü menüdeki linkler için scroll-behavior: smooth CSS'de ayarlandı.
// ===== YENİ EKLENEN SLIDER KODU =====
    const slides = document.querySelectorAll('.slide');
    const nextButton = document.getElementById('next-slide');
    const prevButton = document.getElementById('prev-slide');
    let currentSlide = 0;

    function showSlide(index) {
        // Tüm slide'lardan 'active' class'ını kaldır
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Gelen index'teki slide'a 'active' class'ını ekle
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0; // Başa dön
        }
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1; // Sona git
        }
        showSlide(currentSlide);
    }

    // Butonlara tıklama olaylarını ekle
    if (nextButton && prevButton) {
        nextButton.addEventListener('click', nextSlide);
        prevButton.addEventListener('click', prevSlide);
    }

    // İlk slide'ı göster (sayfa yüklendiğinde)
    if(slides.length > 0) {
        showSlide(currentSlide);
    }
    // ===== SLIDER KODU SONU =====

    // ===== KLİNİK SLIDER KODU =====
    const clinicSlides = document.querySelectorAll('.clinic-slide');
    const clinicNextBtn = document.getElementById('clinic-next-slide');
    const clinicPrevBtn = document.getElementById('clinic-prev-slide');
    let currentClinicSlide = 0;

    function showClinicSlide(index) {
        clinicSlides.forEach(slide => slide.classList.remove('active'));
        if (clinicSlides[index]) {
            clinicSlides[index].classList.add('active');
        }
    }

    if (clinicNextBtn && clinicPrevBtn && clinicSlides.length > 0) {
        clinicNextBtn.addEventListener('click', () => {
            currentClinicSlide++;
            if (currentClinicSlide >= clinicSlides.length) currentClinicSlide = 0;
            showClinicSlide(currentClinicSlide);
        });

        clinicPrevBtn.addEventListener('click', () => {
            currentClinicSlide--;
            if (currentClinicSlide < 0) currentClinicSlide = clinicSlides.length - 1;
            showClinicSlide(currentClinicSlide);
        });

        showClinicSlide(currentClinicSlide);
        
        // Otomatik geçiş
        setInterval(() => {
            currentClinicSlide++;
            if (currentClinicSlide >= clinicSlides.length) currentClinicSlide = 0;
            showClinicSlide(currentClinicSlide);
        }, 5000);
    }
    // ===== KLİNİK SLIDER KODU SONU =====
});document.addEventListener("DOMContentLoaded", function() {
    
    // Mobil Menü Fonksiyonu
    const hamburger = document.getElementById('hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburger.addEventListener('click', function() {
        mobileMenu.classList.toggle('show');
    });

    // Mobil menüdeki linklere tıklayınca menüyü kapat
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('show');
        });
    });

    
    // Not: Masaüstü menüdeki linkler için scroll-behavior: smooth CSS'de ayarlandı.
// ===== YENİ EKLENEN SLIDER KODU =====
    const slides = document.querySelectorAll('.slide');
    const nextButton = document.getElementById('next-slide');
    const prevButton = document.getElementById('prev-slide');
    let currentSlide = 0;

    function showSlide(index) {
        // Tüm slide'lardan 'active' class'ını kaldır
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Gelen index'teki slide'a 'active' class'ını ekle
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0; // Başa dön
        }
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1; // Sona git
        }
        showSlide(currentSlide);
    }

    // Butonlara tıklama olaylarını ekle
    if (nextButton && prevButton) {
        nextButton.addEventListener('click', nextSlide);
        prevButton.addEventListener('click', prevSlide);
    }

    // İlk slide'ı göster (sayfa yüklendiğinde)
    if(slides.length > 0) {
        showSlide(currentSlide);
    }
    // ===== SLIDER KODU SONU =====

    // ===== KLİNİK SLIDER KODU =====
    const clinicSlides = document.querySelectorAll('.clinic-slide');
    const clinicNextBtn = document.getElementById('clinic-next-slide');
    const clinicPrevBtn = document.getElementById('clinic-prev-slide');
    let currentClinicSlide = 0;

    function showClinicSlide(index) {
        clinicSlides.forEach(slide => slide.classList.remove('active'));
        if (clinicSlides[index]) {
            clinicSlides[index].classList.add('active');
        }
    }

    if (clinicNextBtn && clinicPrevBtn && clinicSlides.length > 0) {
        clinicNextBtn.addEventListener('click', () => {
            currentClinicSlide++;
            if (currentClinicSlide >= clinicSlides.length) currentClinicSlide = 0;
            showClinicSlide(currentClinicSlide);
        });

        clinicPrevBtn.addEventListener('click', () => {
            currentClinicSlide--;
            if (currentClinicSlide < 0) currentClinicSlide = clinicSlides.length - 1;
            showClinicSlide(currentClinicSlide);
        });

        showClinicSlide(currentClinicSlide);
        
        // Otomatik geçiş
        setInterval(() => {
            currentClinicSlide++;
            if (currentClinicSlide >= clinicSlides.length) currentClinicSlide = 0;
            showClinicSlide(currentClinicSlide);
        }, 5000);
    }
    // ===== KLİNİK SLIDER KODU SONU =====
});
