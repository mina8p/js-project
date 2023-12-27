"use strict";
import axios from "axios";
import { errorHandler } from "../../libs/errorHandler";

const root = document.getElementById("root");
const urlParams = new URLSearchParams(window.location.search);
const sneakerId = urlParams.get("id");
console.log(urlParams);

export async function getSingleSneaker(id) {
  const token = window.sessionStorage.getItem("token");

  console.log(token);

  try {
    const response = await axios({
      method: "get",

      url: `http://localhost:3000/sneaker/item/${id}`,

      headers: { Authorization: `Bearer ${token}` },
    });

    console.log(response.data);

    render(response.data);
  } catch (error) {
    errorHandler(error);
  }
}

getSingleSneaker(sneakerId);

function sneakerInformation(sneaker) {
  const sizes = sneaker.sizes.split("|");

  const colors = sneaker.colors.split("|");

  const colorTag = colors

    .map((color) => {
      return `

    <div class="border-2 rounded-full ">
    <div class="rounded-full h-8 w-8 flex justify-center items-center cursor-pointer" style="background-color :${color};"></div>
    </div>`;
    })

    .join("");

  const sizeTag = sizes

    .map((size) => {
      return `
    
    <p class="rounded-full h-8 w-8 border border-black flex justify-center items-center cursor-pointer active:bg-black active:text-white" id"active-bottun" >${size}</p>`;
    })

    .join("");

  return `
    
  <div class="w-96">
  <div><img src="${sneaker.imageURL}" class="w-full " alt="..." /> </div>
  

  <div class=" grid gap-4 mt-4">
    <div class="flex justify-between items-start font-bold text-xl ml-3">
      <h1 class="">${sneaker.name}</h1>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 hover:text-red-600 cursor-pointer font-bold mr-3">
   <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
   </svg>

    </div>
    <div class="flex gap-3 justify-start items-center">
     <div
        class="bg-gray-200 flex gap-2 justify-center items-center rounded-lg p-1 ml-3"
      >
        <p class="text-xs">10.000 sold</p>
      </div>

      <div class="flex gap-1">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
      <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
    </svg>
        <p>5 (10.000 reviews)</p>
      </div>
    </div>

    <div w-96 h-1>
    <p class="text-gray-200 flex justify-center items-center">______________________________________________________</p>
    </div>

    <div class="ml-3">
      <h2 class="font-semibold text-base">Decription</h2>

      <p id="dic" class="text-[13px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. sed do eiusmod
        tempor incididunt ut labore et

        <span class="font-semibold">view more...</span>
      </p>
    </div>

    <div class="flex justify-start gap-16 ml-3">
      <div class="grid gap-2">
        <p class="font-semibold">Size</p>
        <div class="flex gap-2">${sizeTag}</div>
      </div>

      <div class="grid gap-2">
        <p class="font-semibold">Color</p>

        <div class="flex gap-2 ">${colorTag}</div>
      </div>
    </div>

    <div class="flex gap-6 font-semibold justify-start items-center">
      <p>Quantity</p>

      <div
        class="bg-gray-200 rounded-full px-4 py-2 flex justify-center items-center gap-5"
      >
        <button class="btn" id="low-off">-</button>

        <span id="qua">1</span>

        <button class="btn" id="Increase">+</button>
      </div>
    </div>

    <div w-96 h-1>
    <p class="text-gray-200 flex justify-center items-center">______________________________________________________</p>
    </div>

    <div class="flex justify-between items-center">
      <div class="grid gap-1">
        <p class="text-gray-500">Total price</p>

        <div class="flex font-semibold">
          <i class="bi bi-currency-dollar"></i>

          <span id="total">${sneaker.price}</span>.00
        </div>
      </div>

      <button
        id="subtoCart"
        class="rounded-full flex justify-center items-center text-white gap-2 bg-black py-4 px-16"
      >
        <i class="bi bi-bag-fill"></i>add to cart
      </button>
    </div>
  </div>
</div>
    `;
}
function render(sneaker) {
  root.innerHTML = sneakerInformation(sneaker);
}

// function sneakerInformation(sneaker) {
//   const sizes = sneaker.sizes.split("|");
//   const colors = sneaker.colors.split("|");

//   const colorTag = colors
//     .Map((color) => {
//       return `
//         <div class="rounded-full w-8 h-8 flex justify-center items-center cursor-pointer"style = "background-color:${color};"></div>`;
//     })
//     .join("");

//   const sizeTag = sizes
//     .Map((size) => {
//       return `
//         <p class="rounded-full w-8 h-8 border border-black flex justify-center cursor-pointer  active:bg-black active:text-white id"active-bottun">${size}</p>`;
//     })
//     .join("");

//   return `
// <div class="w-full">
//     <img src="${sneaker.imageURL}" class="w-full" alt="picture"/>
//     <div class=" p-4 grid gap-4"
//     <div class=" flex justify-between ">
//     <h1 class="">${sneaker.name}</h1>
//     <i class="bi bi-heart hover:text-red-700 cursor-pointer"></i>
//     </div>

//     <div class=" flex gap-10  justify-start items-center">
//     <div
//      class""
//     >
//     <span>
//     <p>
//     </div>
//     <div>

// </div>`;
// }

// function render(sneaker) {
//   root.innerHTML = sneakerInformation(sneaker);
// }

// const activebutton = document
//   .getElementById("active-bottun")
//   .addEventListener("click", () => {
//     activebutton.classList.add("my-active");
//   });

// export async function getSingleSneaker(id) {
//   const token = window.sessionStorage.getItem("token");
//   console.log(token);

//   try {
//     const response = await axios({
//       method: "get",
//       url: `http://localhist:3000/sneaker/item/${id}`,
//       headers: { Authorization: `Bearer ${token}` },
//     });
// console.log (response.data)

//     render(response.data);
//   } catch (error) {
//     errorHandler(error);
//   }
// }

// getSingleSneaker(sneakerId);
