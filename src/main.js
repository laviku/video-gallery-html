console.log('Vite and Tailwind CSS with Vanilla JavaScript!');
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './sass/main.scss';

new Swiper('.swiper-four-col', {
    loop: true,
    modules: [Navigation],
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        720: {
            slidesPerView: 4, 
            spaceBetween: 20
        }
    },
    navigation: {
        nextEl: '.swiper-custom-button-next',
        prevEl: '.swiper-custom-button-prev',
    },
});

new Swiper('.swiper-two-col', {
    loop: true,
    modules: [Navigation],
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        720: {
            slidesPerView: 2, 
            spaceBetween: 300,
        }
    },
    navigation: {
        nextEl: '.swiper-custom-button-next',
        prevEl: '.swiper-custom-button-prev',
    },
});

let modalInnerHTML = `
<div class="modal-video-overlay" aria-hidden="true"></div>
<div class="modal-video-wrapper">
    <div class="modal-video-container">
        <div class="modal-video-panel">
            <div class="modal-video-content">
                <iframe src="https://player.vimeo.com/video/__videoId__?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Nature"></iframe>
            </div>
            <button id="close-modal" type="button" class="video-close-modal underline">Close</button>
        </div>
    </div>
</div>
`;

addVideoModal();

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (event) => {
        if (event.target && event.target.id === 'close-modal') {
            document.getElementById('modal-video').classList.add('hidden');
            document.getElementById('modal-video').innerHTML = '';
        }
    });

    const buttons = document.querySelectorAll('.open-modal');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const videoId = button.getAttribute('data-video-id');
            const newInnerHTML = modalInnerHTML.replace('__videoId__', videoId);
            const modalEl = document.getElementById('modal-video');
            modalEl.innerHTML = newInnerHTML;
            modalEl.classList.remove('hidden');
        });
    });
});

function addVideoModal() {
    let modalEl = document.getElementById('modal-video');
    if(!modalEl) {
        modalEl = document.createElement('div');
        modalEl.classList.add('modal-video');
        modalEl.classList.add('hidden');
        modalEl.setAttribute('id', 'modal-video');
        modalEl.setAttribute("role", "dialog");
        modalEl.setAttribute("aria-modal", "true");
        document.body.appendChild(modalEl);
    }

}