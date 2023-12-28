"use strict";
import axios from "axios";
import { errorHandler } from "../../libs/errorHandler";

let sneaker = [];
let totalSneaker = 0;

const resultSearch = document.getElementById("result-search");
const searchInput = document.querySelector("#search-input");
const noValueSearch = document.querySelector("#no-value-search");
const pageNumber = document.getElementById("pagination-buttons");
const textValueInput = document.getElementById("text-value-input");
const totalResultFound = document.getElementById("total-result-found");

function checker(data) {
  if (data !== 0) {
    noValueSearch.classList.add("hidden");
    noValueSearch.classList.remove("flex");
  } else {
    noValueSearch.classList.remove("hidden");
    noValueSearch.classList.add("flex");
  }
}

searchInput.addEventListener("input", () => {
  textValueInput.innerText = searchInput.value;
  searchQueryBrands(1, encodeURIComponent(searchInput.value));
});

function searchQueryBrands(page = 1, search = "") {
  const token = window.sessionStorage.getItem("token");
  const url = `http://localhost:3000/sneaker?page=${page}&limit=10&search=${search}`;

  async function myDebounce() {
    try {
      const response = await axios({
        method: "get",
        url,
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log(response);
      checker(response.data.total);

      totalSneaker = response.data.total;
      totalResultFound.innerText = totalSneaker;
      sneaker = response.data.data;
      console.log(sneaker);

      paginationButton(response.data.totalPages, searchInput.value);
      ListRenderer(sneaker);
    } catch (error) {
      errorHandler(error);
    }
  }
  const debounce = _.debounce(myDebounce, 4000);
  debounce();
}

//______________________________________//
//_________Pagination all shoes_________//
//______________________________________//
const paginationButtons = document.getElementById("pagination-buttons");

function paginationButton(total, search) {
  paginationButtons.innerHTML = "";
  for (let j = 1; j <= total; j++) {
    const btn = document.createElement("button");
    btn.className =
      "inline-flex items-center border-2 hover:border-black rounded-full border-gray-800 mb-4 p-1 pr-2 pl-2 text-sm font medium text-gray-800  hover:text-black font-bold";
    btn.textContent = j;
    btn.addEventListener("click", () => {
      searchQueryBrands(j, search);
    });

    pageNumber.append(btn);
  }
}

function sneakercard(id = "", imageURL = "", name = "", price = "") {
  return `
    <div
      id="productCard"
      class="bg-transparent p-1 w-[182px] h-[244px]"
      data-set="${id}"
    >
      <div class="flex items-center justify-center">
        <img
          id="productImage"
          class="w-40 h-40 rounded-2xl"
          src="${imageURL}"
        />
      </div>
      <div class="card-text-wrapper">
        <p id="productName" class="text-lg font-medium m-2 overflow-hidden truncate cursor-pointer hover:underline card-profile">${name}</p>
      </div>
      
      <p id="productPrice" class="text-gray-700 mx-2">$${price}</p>
    </div>
    </div>
    `;
}

function ListRenderer(sneaker) {
  let html = "";
  for (const product of sneaker) {
    html += sneakercard(
      product.id,
      product.imageURL,
      product.name,
      product.price
    );
  }
  resultSearch.innerHTML = html;
}

//*****************************************************//
//_________Show single page for searched shoe_________//
//****************************************************//
resultSearch.addEventListener("click", eventHandler);

function eventHandler(e) {
  if (e.target.classList.contains("card-profile")) {
    const idsneaker = e.target.parentElement.parentElement.dataset.set;
    console.log(idsneaker);
    onClickCard(idsneaker);
  }
}
function onClickCard(id) {
  const splittedPathname = window.location.pathname.split("/");
  window.location.href =
    splittedPathname.slice(0, splittedPathname.length - 1).join("/") +
    `/sneakers?id=${id}`;
}
