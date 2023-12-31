"use strict";
import axios from "axios";
import { errorHandler } from "../../libs/errorHandler";
import { fetchUserInfo } from "../../libs/userInfo";

//****************************************//
//_________Show welcome username_________//
//***************************************//
const usernamePara = document.getElementById("tasksHeaderUsername");
async function main() {
  const user = await fetchUserInfo();
  if (!user) return;
  usernamePara.innerHTML = `<a href="/profile">${user.username}</a>`;
}
main();

//*******************************************//
//_________Change the brands button_________//
//*******************************************//
const button_container = document.querySelectorAll(".brands button");
let tag = "All";
button_container.forEach((buttonEvent) => {
  buttonEvent.addEventListener("click", change);
});
function change() {
  button_container.forEach((tag) => (tag.classList = ""));
  this.classList.add("clicked-now");
  tag = this.innerHTML;
}

//*********************************//
//_________Show all shoes_________//
//********************************//
let sneaker = [];
let totalSneaker = 0;
const paginationButtons = document.getElementById("pagination-buttons");
const allproduct = document.getElementById("all");

document.addEventListener("DOMContentLoaded", () => {
  allsneakers();
});

allproduct.addEventListener("click", () => {
  allsneakers();
});
export async function allsneakers(page = 1) {
  const token = window.sessionStorage.getItem("token");
  console.log(token);
  try {
    const response = await axios({
      method: "get",
      url: `http://localhost:3000/sneaker?page=${page}&limit=10&brands=`,
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
    
    totalSneaker = response.data.total;
    sneaker = response.data.data;
    console.log(sneaker);
    paginationButton(response.data.totalPages);
    render(sneaker);
  } catch (error) {
    errorHandler(error);
  }
}

const sneakerList = document.querySelector(".list");
function sneakercard(id = "", imageURL = "", name = "", price = "") {
  return `
  <div
    class="bg-transparent p-1 w-[182px] h-[244px] "
    data-set="${id}"
  >
    <div class="flex items-center justify-center">
      <img
        class="w-40 h-40 rounded-2xl"
        src="${imageURL}"
      />
    </div>
    <div class="card-text-wrapper font-medium">
      <p  class="sneakerIN text-lg m-2 overflow-hidden truncate cursor-pointer hover:font-bold">${name}</p>
    </div>
    <p  class="text-gray-900 mx-2">$${price}</p>
  </div>
  </div>
  `;
}

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
  sneakerList.innerHTML = html;
}

//______________________________________//
//_________Pagination all shoes_________//
//______________________________________//
function paginationButton(total) {
  paginationButtons.innerHTML = "";
  for (let j = 1; j <= total; j++) {
    const btn = document.createElement("button");
    btn.className =
      "inline-flex items-center border-2 hover:border-black hover:text-black font-bold rounded-full border-gray-800 mb-4 p-1 pr-2 pl-2 text-sm font medium text-gray-800";
    btn.textContent = j;
    btn.addEventListener("click", () => allsneakers(j));
    paginationButtons.append(btn);
  }
}

//***************************************//
//_________Show single page shoe_________//
//***************************************//
sneakerList.addEventListener("click", eHandler);

function eHandler(e) {
  if (e.target.classList.contains("sneakerIN")) {
    const idsneaker = e.target.parentElement.parentElement.dataset.set;
    console.log(idsneaker);

    clickCard(idsneaker);
  }
}
function clickCard(id) {
  const splittedPathname = window.location.pathname.split("/");
  window.location.href =
    splittedPathname.slice(0, splittedPathname.length - 1).join("/") +
    `/sneakers?id=${id}`;
}


//*****************************//
//_________Show Nikes_________//
//****************************//
const allnike = document.getElementById("nike");

allnike.addEventListener("click", () => {
  allnikes();
});
export async function allnikes(page = 1) {
  const token = window.sessionStorage.getItem("token");
  console.log(token);
  try {
    const response = await axios({
      method: "get",
      url: `http://localhost:3000/sneaker?page=${page}&limit=10&brands=NIKE`,
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
    totalSneaker = response.data.total;
    sneaker = response.data.data;
    console.log(sneaker);
    paginationButton1(response.data.totalPages);
    render(sneaker);
  } catch (error) {
    errorHandler(error);
  }
}

//__________________________________//
//_________Pagination Nikes_________//
//__________________________________//
function paginationButton1(total) {
  paginationButtons.innerHTML = "";
  for (let j = 1; j <= total; j++) {
    const btn = document.createElement("button");
    btn.className =
      "inline-flex items-center border-2 hover:border-black rounded-full border-gray-800 mb-4 p-1 pr-2 pl-2 text-sm font medium text-gray-800  hover:text-black font-bold";
    btn.textContent = j;
    btn.addEventListener("click", () => allnikes(j));
    paginationButtons.append(btn);
  }
}

//********************************//
//_________Show Adidases_________//
//*******************************//
const alladidas = document.getElementById("adidas");

alladidas.addEventListener("click", () => {
  alladidases();
});
export async function alladidases(page = 1) {
  const token = window.sessionStorage.getItem("token");
  console.log(token);
  try {
    const response = await axios({
      method: "get",
      url: `http://localhost:3000/sneaker?page=${page}&limit=10&brands=ADIDAS`,
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
    totalSneaker = response.data.total;
    sneaker = response.data.data;
    console.log(sneaker);
    paginationButton(response.data.totalPages);
    render(sneaker);
  } catch (error) {
    errorHandler(error);
  }
}

//********************************//
//_________Show Adidases_________//
//*******************************//
const allpuma = document.getElementById("puma");

allpuma.addEventListener("click", () => {
  allpumaes();
});
export async function allpumaes(page = 1) {
  const token = window.sessionStorage.getItem("token");
  console.log(token);
  try {
    const response = await axios({
      method: "get",
      url: `http://localhost:3000/sneaker?page=${page}&limit=10&brands=PUMA`,
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
    totalSneaker = response.data.total;
    sneaker = response.data.data;
    console.log(sneaker);
    paginationButton(response.data.totalPages);
    render(sneaker);
  } catch (error) {
    errorHandler(error);
  }
}

//********************************//
//_________Show Aasicses_________//
//*******************************//
const allasics = document.getElementById("asics");

allasics.addEventListener("click", () => {
  allasicses();
});
export async function allasicses(page = 1) {
  const token = window.sessionStorage.getItem("token");
  console.log(token);
  try {
    const response = await axios({
      method: "get",
      url: `http://localhost:3000/sneaker?page=${page}&limit=10&brands=ASICS`,
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
    totalSneaker = response.data.total;
    sneaker = response.data.data;
    console.log(sneaker);
    paginationButton(response.data.totalPages);
    render(sneaker);
  } catch (error) {
    errorHandler(error);
  }
}

//*************************************//
//_________Show Hushpuppieses_________//
//************************************//
const allhushpuppies = document.getElementById("hushpuppies");

allhushpuppies.addEventListener("click", () => {
  allhushpuppieses();
});
export async function allhushpuppieses(page = 1) {
  const token = window.sessionStorage.getItem("token");
  console.log(token);
  try {
    const response = await axios({
      method: "get",
      url: `http://localhost:3000/sneaker?page=${page}&limit=10&brands=HUSHPUPPIES`,
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
    totalSneaker = response.data.total;
    sneaker = response.data.data;
    console.log(sneaker);
    paginationButton(response.data.totalPages);
    render(sneaker);
  } catch (error) {
    errorHandler(error);
  }
}

//*********************************//
//_________Show Converses_________//
//********************************//
const allconverse = document.getElementById("converse");

allconverse.addEventListener("click", () => {
  allconverses();
});
export async function allconverses(page = 1) {
  const token = window.sessionStorage.getItem("token");
  console.log(token);
  try {
    const response = await axios({
      method: "get",
      url: `http://localhost:3000/sneaker?page=${page}&limit=10&brands=CONVERSE`,
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
    totalSneaker = response.data.total;
    sneaker = response.data.data;
    console.log(sneaker);
    paginationButton(response.data.totalPages);
    render(sneaker);
  } catch (error) {
    errorHandler(error);
  }
}

//*********************************//
//_________Show Newbalance_________//
//********************************//
const allnewbalance = document.getElementById("newbalance");

allnewbalance.addEventListener("click", () => {
  allnewbalances();
});
export async function allnewbalances(page = 1) {
  const token = window.sessionStorage.getItem("token");
  console.log(token);
  try {
    const response = await axios({
      method: "get",
      url: `http://localhost:3000/sneaker?page=${page}&limit=10&brands=NEW BALANCE`,
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
    totalSneaker = response.data.total;
    sneaker = response.data.data;
    console.log(sneaker);
    paginationButton(response.data.totalPages);
    render(sneaker);
  } catch (error) {
    errorHandler(error);
  }
}

//*********************************//
//_________Show Reeboks_________//
//********************************//
const allreebok = document.getElementById("reebok");

allreebok.addEventListener("click", () => {
  allreeboks();
});
export async function allreeboks(page = 1) {
  const token = window.sessionStorage.getItem("token");
  console.log(token);
  try {
    const response = await axios({
      method: "get",
      url: `http://localhost:3000/sneaker?page=${page}&limit=10&brands=REEBOK`,
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
    totalSneaker = response.data.total;
    sneaker = response.data.data;
    console.log(sneaker);
    paginationButton(response.data.totalPages);
    render(sneaker);
  } catch (error) {
    errorHandler(error);
  }
}

