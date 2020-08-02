const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

const list = document.querySelector("#bands");

function strip(bandName) {
  return bandName.replace(/^(a |the |An )/i, "").trim();
}

const bandSorted = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

list.innerHTML = bandSorted
    .map(band => `<li>${band}</li>`)
    .join('')
