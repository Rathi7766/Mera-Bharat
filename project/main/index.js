
function scrollToPlaces() {
  document.querySelector('.places').scrollIntoView({ behavior: 'smooth' });
}


const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


const placeNames = ["Kashmir", "Haryana", "Kerala", "Rajasthan", "Assam", "Goa", "Gujarat", "Tamil Nadu", "Punjab"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById('typingText');

const places = [
  {
    name: "Kashmir",
    state: "Jammu & Kashmir",
    image: "https://etimg.etb2bimg.com/photo/106476310.cms"
  },
  {
    name: "Haryana",
    state: "The Epic Mahabharata",
    image: "https://mythologyvault.com/wp-content/uploads/2023/12/ancient_indian_mythological_epic.jpg"
  },
  {
    name: "Kerala",
    state: "God's Own Country",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/2-neendakara-port-kollam-kerala-city-hero?qlt=82&ts=1726672786492"
  },
  {
    name: "Rajasthan",
    state: "The Land of Kings",
    image: "https://www.andbeyond.com/wp-content/uploads/sites/5/rajasthan-thar-desert-jaiselmer.jpg"
  },
  {
    name: "Assam",
    state: "The Gateway to Northeast",
    image: "https://www.incredible-northeastindia.com/images/assam-head.jpg"
  },
  {
    name: "Goa",
    state: "Pearl of the Orient",
    image: "https://yu-hotel.com/new/wp-content/uploads/2023/03/best-luxury-hotels-in-north-goa-YU-Hotel.jpg"
  },
  {
    name: "Gujarat",
    state: "Land of Lions",
    image: "https://www.tourmyindia.com/blog//wp-content/uploads/2023/01/Kalika-Mata-Temple-Gujarat.jpg"
  },
  {
    name: "Tamil Nadu",
    state: "Land of Temples",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/1-adiyogi-shiva-statue-coimbatore-tamil-nadu-city-hero?qlt=82&ts=1726674592187"
  },
  {
    name: "Punjab",
    state: "Land of Five Rivers",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Golden_Temple%2C_Amritsar%2C_Punjab_UNAG.jpg"
  }
];

let current = 0;

function updatePlace() {
  const place = places[current];
  document.getElementById("place-name").textContent = place.name;
  document.getElementById("state-name").textContent = place.state;
  document.getElementById("hero").style.backgroundImage = `url('${place.image}')`;

  current = (current + 1) % places.length;
}

setInterval(updatePlace, 4000);
window.onload = updatePlace;




const carousel = document.getElementById("attractionCarousel");

const cloneCarousel = () => {
  const cards = Array.from(carousel.children);
  cards.forEach(card => {
    const clone = card.cloneNode(true);
    carousel.appendChild(clone);
  });
};

cloneCarousel();

const scrollStep = () => {
  const card = carousel.querySelector('.attraction-card');
  const cardWidth = card.offsetWidth + 20;
  carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });

  if (carousel.scrollLeft >= carousel.scrollWidth / 2) {

    carousel.scrollTo({ left: 0, behavior: 'auto' });
  }
};

setInterval(scrollStep, 2000);


let currentIndex = 0;
const cardWidth = 320;
const track = document.getElementById('carouselTrack');
const totalCards = document.querySelectorAll('.tour-card').length; // includes clone
const originalCards = totalCards - 1;

function scrollCarousel() {
  currentIndex++;

  track.style.transition = 'transform 0.5s ease';
  track.style.transform = `translateX(${-currentIndex * cardWidth}px)`;


  if (currentIndex === totalCards - 1) {
    setTimeout(() => {
      track.style.transition = 'none';
      track.style.transform = `translateX(0px)`;
      currentIndex = 0;
    }, 500);
  }
}

setInterval(scrollCarousel, 3000);