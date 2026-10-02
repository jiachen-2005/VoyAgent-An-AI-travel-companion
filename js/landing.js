const destinationGroups = [
  [
    {
      name: "Kuala Lumpur",
      type: "City & Culture",
      image: "assets/klcc.png"
    },
    {
      name: "Penang",
      type: "Food & Heritage",
      image: "assets/penang.png"
    },
    {
      name: "Langkawi",
      type: "Island Escape",
      image: "assets/Langkawi.png"
    }
  ],

  [
    {
      name: "Malacca",
      type: "History & Heritage",
      image: "assets/Malacca.png"
    },
    {
      name: "Kota Kinabalu",
      type: "Nature & Adventure",
      image: "assets/KotaKinabalu.png"
    },
    {
      name: "Kuching",
      type: "Culture & Nature",
      image: "assets/Kuching.png"
    }
  ]
];

const grid = document.getElementById("destinations-grid");
const prevButton = document.getElementById("destination-prev");
const nextButton = document.getElementById("destination-next");
const dotsContainer = document.getElementById("destination-dots");

let currentGroup = 0;
let slideTimer;

function renderDestinations() {
  grid.innerHTML = destinationGroups[currentGroup]
    .map(destination => `
      <article class="destination-photo-card">

        <img
          src="${destination.image}"
          alt="${destination.name}"
          class="destination-photo"
        >

        <div class="destination-overlay">
          <div class="destination-card-text">

            <span>${destination.type}</span>
            <h3>${destination.name}</h3>

            <button
              class="destination-explore"
              type="button">
              Explore →
            </button>

          </div>
        </div>

      </article>
    `)
    .join("");

  renderDots();
}

function renderDots() {
  dotsContainer.innerHTML = destinationGroups
    .map((_, index) => `
      <button
        class="destination-dot ${index === currentGroup ? "active" : ""}"
        data-index="${index}"
        type="button"
        aria-label="Show destination group ${index + 1}">
      </button>
    `)
    .join("");

  document.querySelectorAll(".destination-dot").forEach(dot => {
    dot.addEventListener("click", () => {
      currentGroup = Number(dot.dataset.index);
      renderDestinations();
      restartTimer();
    });
  });
}

function nextGroup() {
  currentGroup =
    (currentGroup + 1) % destinationGroups.length;

  renderDestinations();
}

function previousGroup() {
  currentGroup =
    (currentGroup - 1 + destinationGroups.length)
    % destinationGroups.length;

  renderDestinations();
}

function restartTimer() {
  clearInterval(slideTimer);
  slideTimer = setInterval(nextGroup, 8000);
}

nextButton.addEventListener("click", () => {
  nextGroup();
  restartTimer();
});

prevButton.addEventListener("click", () => {
  previousGroup();
  restartTimer();
});

renderDestinations();
restartTimer();