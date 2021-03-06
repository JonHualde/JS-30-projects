const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    text: text,
    done: false,
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], placesList) {
  placesList.innerHTML = plates
    .map((plate, index) => {
      return `
        <li>
            <input type='checkbox' data-index=${index} id='item${index}' 
            ${plate.done ? 'checked' : ""} />
            <label for="item${index}">${plate.text}</label>
        </li>
        `;
    })
    .join("");
}

function toggleDone(e) {
  if (!e.target.matches("input")) return; // skip unless it's an input
  const element = e.target;
  const index = element.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

populateList(items, itemsList);
