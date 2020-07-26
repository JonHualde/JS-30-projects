const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const suggestions = document.querySelector(".suggestions");
const searchInput = document.querySelector(".search");

const cities = [];
const citiesFiltered = [];

fetch(endpoint)
  .then((data) => data.json())
  .then((result) => cities.push(...result));

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    // Figuring out if the city or state matches
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const highlightCityName = place.city.replace(
        regex,
        `<span class='hl'>${this.value}</span>`
      );
      const highlightStateName = place.city.replace(
        regex,
        `<span class='hl'>${this.value}</span>`
      );
      return `
        <li>
            <span class='name'>${highlightCityName}, ${highlightStateName}</span>
            <span class='population'>${numberWithCommas(place.population)}</span>
        </li>
        `;
    })
    .join("");
  suggestions.innerHTML = html;
}

searchInput.addEventListener("input", displayMatches);
