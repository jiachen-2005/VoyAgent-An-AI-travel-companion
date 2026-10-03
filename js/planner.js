(() => {

  /* ========================================
     CHECK LOGIN
     ======================================== */

  if (
    localStorage.getItem("voyagent-demo-authenticated") !== "true"
  ) {
    location.replace("landing.html");
    return;
  }


  /* ========================================
     USER INFORMATION
     ======================================== */

  const user = JSON.parse(
    localStorage.getItem("voyagent-demo-user") || "{}"
  );

  const greeting =
    document.getElementById("user-greeting");

  if (greeting) {
    greeting.textContent =
      user.name ? `Hi, ${user.name}` : "";
  }


  /* ========================================
     LOGOUT
     ======================================== */

  document
    .getElementById("logout-btn")
    .addEventListener("click", () => {

      localStorage.removeItem(
        "voyagent-demo-authenticated"
      );

      localStorage.removeItem(
        "voyagent-demo-user"
      );

      location.href = "landing.html";

    });


  /* ========================================
     TRIP PLANNER FORM
     ======================================== */

  document
    .getElementById("trip-planner-form")
    .addEventListener("submit", event => {

      event.preventDefault();

      const trip = {

        destination:
          document
            .getElementById("destination")
            .value
            .trim(),

        startDate:
          document
            .getElementById("start-date")
            .value,

        endDate:
          document
            .getElementById("end-date")
            .value,

        travelStyle:
          document
            .getElementById("travel-style")
            .value,

        travellers:
          document
            .getElementById("travellers")
            .value,

        budget:
          document
            .getElementById("budget")
            .value,

        currency: "MYR",

        interests: [
          document
            .getElementById("interest")
            .value
        ]
      };


      trip.travelDates = [
        trip.startDate,
        trip.endDate
      ]
        .filter(Boolean)
        .join(" to ");


      localStorage.setItem(
        "voyagent-pending-trip",
        JSON.stringify(trip)
      );


      location.href = "index.html?newTrip=1";

    });



  /* ========================================
     POPULAR DESTINATIONS DATA
     ======================================== */

  const destinationGroups = [

    [
      {
        name: "Kuala Lumpur",
        type: "City & Culture",
        image: "assets/klcc.png",

        description:
          "Discover Malaysia's vibrant capital, where modern landmarks, cultural neighbourhoods and local food come together.",

        attractions: [
          "Petronas Twin Towers",
          "Batu Caves",
          "Merdeka Square"
        ],

        plannerDestination: "Kuala Lumpur"
      },


      {
        name: "Penang",
        type: "Food & Heritage",
        image: "assets/penang.png",

        description:
          "Explore colourful heritage streets, famous local food and the unique cultural character of Penang.",

        attractions: [
          "George Town",
          "Penang Hill",
          "Kek Lok Si Temple"
        ],

        plannerDestination: "Penang"
      },


      {
        name: "Langkawi",
        type: "Island Escape",
        image: "assets/Langkawi.png",

        description:
          "Enjoy tropical beaches, scenic viewpoints and beautiful island landscapes in one of Malaysia's most popular island destinations.",

        attractions: [
          "Langkawi Sky Bridge",
          "Eagle Square",
          "Pantai Cenang"
        ],

        plannerDestination: "Kedah"
      }
    ],


    [
      {
        name: "Malacca",
        type: "History & Heritage",
        image: "assets/Malacca.png",

        description:
          "Discover historic streets, colourful architecture and the multicultural heritage of one of Malaysia's most historic cities.",

        attractions: [
          "Jonker Street",
          "A Famosa",
          "Melaka River"
        ],

        plannerDestination: "Malacca"
      },


      {
        name: "Kota Kinabalu",
        type: "Nature & Adventure",
        image: "assets/KotaKinabalu.png",

        description:
          "Experience Sabah's coastal scenery, local culture and outdoor adventures surrounded by beautiful natural landscapes.",

        attractions: [
          "Tunku Abdul Rahman Marine Park",
          "Signal Hill",
          "Kota Kinabalu Waterfront"
        ],

        plannerDestination: "Sabah"
      },


      {
        name: "Kuching",
        type: "Culture & Nature",
        image: "assets/Kuching.png",

        description:
          "Explore Sarawak's riverside capital and discover local culture, food, heritage and nearby natural attractions.",

        attractions: [
          "Kuching Waterfront",
          "Sarawak Cultural Village",
          "Bako National Park"
        ],

        plannerDestination: "Sarawak"
      }
    ]

  ];



  /* ========================================
     DESTINATION ELEMENTS
     ======================================== */

  const grid =
    document.getElementById("destinations-grid");

  const prevButton =
    document.getElementById("destination-prev");

  const nextButton =
    document.getElementById("destination-next");

  const dotsContainer =
    document.getElementById("destination-dots");


  let currentGroup = 0;

  let slideTimer;



  /* ========================================
     DISPLAY DESTINATION CARDS
     ======================================== */

  function renderDestinations() {

    grid.innerHTML =
      destinationGroups[currentGroup]
        .map((destination, index) => `

          <article class="destination-photo-card">

            <img
              src="${destination.image}"
              alt="${destination.name}"
              class="destination-photo"
            >

            <div class="destination-overlay">

              <div class="destination-card-text">

                <span>
                  ${destination.type}
                </span>

                <h3>
                  ${destination.name}
                </h3>

                <button
                  class="destination-explore"
                  type="button"
                  data-index="${index}">
                  Explore →
                </button>

              </div>

            </div>

          </article>

        `)
        .join("");


    document
      .querySelectorAll(".destination-explore")
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            const index =
              Number(button.dataset.index);

            const destination =
              destinationGroups[currentGroup][index];

            openDestinationModal(
              destination
            );

          }
        );

      });


    renderDots();

  }



  /* ========================================
     SLIDER DOTS
     ======================================== */

  function renderDots() {

    dotsContainer.innerHTML =
      destinationGroups
        .map((_, index) => `

          <button
            class="destination-dot ${
              index === currentGroup
                ? "active"
                : ""
            }"
            data-index="${index}"
            type="button"
            aria-label="Show destination group ${index + 1}">
          </button>

        `)
        .join("");


    document
      .querySelectorAll(".destination-dot")
      .forEach(dot => {

        dot.addEventListener(
          "click",
          () => {

            currentGroup =
              Number(dot.dataset.index);

            renderDestinations();

            restartTimer();

          }
        );

      });

  }



  /* ========================================
     DESTINATION SLIDER
     ======================================== */

  function nextGroup() {

    currentGroup =
      (currentGroup + 1) %
      destinationGroups.length;

    renderDestinations();

  }


  function previousGroup() {

    currentGroup =
      (
        currentGroup -
        1 +
        destinationGroups.length
      ) %
      destinationGroups.length;

    renderDestinations();

  }


  function restartTimer() {

    clearInterval(slideTimer);

    slideTimer =
      setInterval(
        nextGroup,
        8000
      );

  }


  nextButton.addEventListener(
    "click",
    () => {

      nextGroup();

      restartTimer();

    }
  );


  prevButton.addEventListener(
    "click",
    () => {

      previousGroup();

      restartTimer();

    }
  );



  /* ========================================
     DESTINATION POPUP
     ======================================== */

  const modal =
    document.getElementById(
      "destination-modal"
    );

  const modalBackdrop =
    document.getElementById(
      "destination-modal-backdrop"
    );

  const modalClose =
    document.getElementById(
      "destination-modal-close"
    );

  const modalImage =
    document.getElementById(
      "modal-destination-image"
    );

  const modalType =
    document.getElementById(
      "modal-destination-type"
    );

  const modalName =
    document.getElementById(
      "modal-destination-name"
    );

  const modalDescription =
    document.getElementById(
      "modal-destination-description"
    );

  const modalAttractions =
    document.getElementById(
      "modal-destination-attractions"
    );

  const modalPlanButton =
    document.getElementById(
      "modal-plan-button"
    );


  let selectedDestination = null;



  /* ========================================
     OPEN POPUP
     ======================================== */

  function openDestinationModal(
    destination
  ) {

    selectedDestination =
      destination;


    modalImage.src =
      destination.image;

    modalImage.alt =
      destination.name;


    modalType.textContent =
      destination.type;

    modalName.textContent =
      destination.name;

    modalDescription.textContent =
      destination.description;


    modalAttractions.innerHTML =
      destination.attractions
        .map(
          attraction =>
            `<li>${attraction}</li>`
        )
        .join("");


    modal.classList.add(
      "active"
    );

    document.body.classList.add(
      "modal-open"
    );


    clearInterval(slideTimer);

  }



  /* ========================================
     CLOSE POPUP
     ======================================== */

  function closeDestinationModal() {

    modal.classList.remove(
      "active"
    );

    document.body.classList.remove(
      "modal-open"
    );

    selectedDestination = null;

    restartTimer();

  }


  modalClose.addEventListener(
    "click",
    closeDestinationModal
  );


  modalBackdrop.addEventListener(
    "click",
    closeDestinationModal
  );


  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape" &&
        modal.classList.contains("active")
      ) {

        closeDestinationModal();

      }

    }
  );



  /* ========================================
     PLAN THIS DESTINATION
     ======================================== */

  modalPlanButton.addEventListener(
    "click",
    () => {

      if (!selectedDestination) {
        return;
      }


      const destinationSelect =
        document.getElementById(
          "destination"
        );


      destinationSelect.value =
        selectedDestination
          .plannerDestination;


      closeDestinationModal();


      document
        .querySelector(
          ".planner-form-side"
        )
        .scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

    }
  );



  /* ========================================
     START DESTINATION SLIDER
     ======================================== */

  renderDestinations();

  restartTimer();

})();