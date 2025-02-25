// hamburger menu
const navbar = document.querySelector('.menu');

function menuToggle() {
    navbar.classList.toggle('active');
};

// menutup hamburger menu ketika klik diluar elemen
const hamburgerMenuClose = document.querySelector('.menu-toggle');

document.addEventListener('click', function(e) {
    if(!hamburgerMenuClose.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove('active');
    };
});



// dark mode
document.addEventListener('DOMContentLoaded', function() {
    const btnTheme = document.getElementById('theme');
    const iconTheme = btnTheme.querySelector('i');
    const bodyHtml = document.body;

    // set theme based on local storage
    const currentTheme = localStorage.getItem('theme');

    if(currentTheme) {
        bodyHtml.classList.add(currentTheme);

        if(currentTheme === 'dark-mode') {
            iconTheme.classList.replace('fa-moon', 'fa-sun');
        };
    };

    btnTheme.addEventListener('click', function() {
        bodyHtml.classList.toggle('dark-mode');

        if(bodyHtml.classList.contains('dark-mode')) {
            iconTheme.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            iconTheme.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light-mode');
        };
    });
});


// menghetikan effect refresh saat dropdown a di klik
document.querySelector('.dropdown-toggle').addEventListener('click', function(e) {
    e.preventDefault(); //mencegah tindakan default seperti refresh halaman
    // const dropdown = this.parentElement;

    // dropdown.classList.toggle('active')
});

// carousel
const slides = document.querySelector('.carousel-slides');
if (slides) {
    const images = [
        "assets/images/carousel/1.jpg",
        "assets/images/carousel/2.jpg",
        "assets/images/carousel/3.jpg"
    ];
    const btnPrev = document.querySelector('.btn-prev');
    const btnNext = document.querySelector('.btn-next');
    const dotsContainer = document.querySelector('.carousel-dots');

    let currentIndex = 0;
    let autoPlayInterval;


    // preload gambar
    function preloadImages(imagesArray) {
        imagesArray.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    };


    // function to update background-image
    function updateBackgroundImage() {
        const img = new Image();
        img.src = images[currentIndex];
        img.onload = () => {
            slides.style.backgroundImage = `url("${images[currentIndex]}")`;
        };
        updateDots(); //new
    };


    function startAutoPlay() {
        stopAutoPlay();
        autoPlayInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            updateBackgroundImage();
        }, 3000);
    };

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    };


    function createDots() {
        images.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateBackgroundImage();
                startAutoPlay();
            });
            dotsContainer.appendChild(dot);
        });
    };

    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    };


    // btnPrev.addEventListener('click', () => {
    //     currentIndex = (currentIndex - 1 + images.length) % images.length;
    //     updateBackgroundImage();
    //     startAutoPlay();
    // });

    // btnNext.addEventListener('click', () => {
    //     currentIndex = (currentIndex + 1) % images.length;
    //     updateBackgroundImage();
    //     startAutoPlay();
    // });



    preloadImages(images);
    createDots();
    updateBackgroundImage();
    startAutoPlay();

};
    



// alert sementara
// alert('Website masih dalam tahap pengembangan mohon dimengerti');



// tahun prestasi
document.addEventListener("DOMContentLoaded", () => {
    const btnPrestasi = document.querySelectorAll(".tahun-prestasi button");
    const rows = document.querySelectorAll(".row");

    btnPrestasi.forEach(button => {
        button.addEventListener("click", () => {
            btnPrestasi.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const target = button.getAttribute("data-btnTahun");

            rows.forEach(row => {
                if (row.getAttribute("data-tahunPrestasi") === target) {
                    row.style.display = "flex";
                } else {
                    row.style.display = "none";
                }
            });
        });
    });
});



// modal box
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.modal-content button');
const prestasiItems = document.querySelectorAll('.item-prestasi');

// open modal
function openModal(item) {
    const modalImage = modal.querySelector('.wrap-left img');
    const modalTitle = modal.querySelector('.wrap-right h3');
    const modalDescription = modal.querySelector('.wrap-right p');

    // ambil data dari item yang diklik
    const imgSrc = item.querySelector('img').src;
    const titleText = item.querySelector('h3').textContent;
    const descriptionText = item.querySelector('p').innerHTML;

    // update isi modal dengan data dari item yang diklik
    modalImage.src = imgSrc;
    modalTitle.textContent = titleText;
    modalDescription.innerHTML = descriptionText;

    // tampilkan modal
    modal.style.display = 'block';
};

// tutup modal
function closeModal() {
    modal.style.display = 'none';
};

// event listener untuk setiap item prestasi
prestasiItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(item);
    });
});

// event listener untuk tombol tutup modal
if(btnCloseModal) {
    btnCloseModal.addEventListener('click', closeModal);
}


// event listener untuk menutup modal saat klik diluar konten modal
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    };
});



// dropdown toggle
const dropdownToggle = document.querySelectorAll('.dropdown-toggle');

dropdownToggle.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const dropdownMenu = this.nextElementSibling;
        
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            if(menu !== dropdownMenu) {
                menu.classList.remove('active');
            }
        });

        dropdownMenu.classList.toggle('active');
    });
});

document.addEventListener('click', function(e) {
    if(!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.classList.remove('active');
        });
    }
});