CountersFunction = () => {
  const counters = document.querySelectorAll(".counter");
  const speed = 50;

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;

      const inc = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 100);
      } else {
        count.innerText = target;
      }
    };
    updateCount();
  });
};

CountersFunction();

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 42.3381, lng: -71.0476 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
