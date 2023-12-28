"use strict";
import axios from "axios";
import { errorHandler } from "../../libs/errorHandler";

let sneaker = [];
let totalSneaker = 0;

const input = document.querySelector("#search-input");
const resultsFor = document.getElementById("results-for");
const numberFound = document.getElementById("total-result-found");

//resultsFor//
input.addEventListener("input", () => {
  resultsFor.innerText = input.value;
  searchBrands(1, encodeURIComponent(input.value));
});

function searchBrands(page = 1, search = "") {
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
      check(response.data.total);

      totalSneaker = response.data.total;
      numberFound.innerText = totalSneaker;
      sneaker = response.data.data;
      console.log(sneaker);

      paginationButton(response.data.totalPages, input.value);
      render(sneaker);
    } catch (error) {
      errorHandler(error);
    }
  }
  const debounce = _.debounce(myDebounce, 1000);
  debounce();
}

//notFound//
const notFound = document.querySelector("#not-found");
function check(data) {
  if (data !== 0) {
    notFound.classList.add("hidden");
  } else {
    notFound.classList.remove("hidden");
  }
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
      searchBrands(j, search);
    });

    paginationButtons.append(btn);
  }
}

//*****************************************//
//_________Show all searched shoes_________//
//*****************************************//
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

const result = document.getElementById("result");
function render(sneaker) {
  let html = "";
  for (const product of sneaker) {
    html += sneakercard(
      product.id,
      product.imageURL,
      product.name,
      product.price
    );
  }
  result.innerHTML = html;
}

//*****************************************************//
//_________Show single page for searched shoe_________//
//****************************************************//
result.addEventListener("click", eventHandler);

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
