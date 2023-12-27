"use strict";
import axios from "axios";
import { errorHandler } from "../../libs/errorHandler";
import { fetchUserInfo } from "../../libs/userInfo";





































// //*********************************//
// //_________Show all shoes_________//
// //********************************//
// let sneaker = [];
// let totalSneaker = 0;
// const paginationButtons = document.getElementById("pagination-buttons");
// const sneakerList = document.querySelector(".sneaker-list");
// const allproduct = document.getElementById("all");

// document.addEventListener("DOMContentLoaded", () => {
//   allsneakers();
// });

// allproduct.addEventListener("click", () => {
//   allsneakers();
// });
// export async function allsneakers(page = 1) {
//   const token = window.sessionStorage.getItem("token");
//   console.log(token);
//   try {
//     const response = await axios({
//       method: "get",
//       url: `http://localhost:3000/sneaker?page=${page}&limit=10&brands=`,
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     console.log(response);
//     totalSneaker = response.data.total;
//     sneaker = response.data.data;
//     console.log(sneaker);
//     paginationButton(response.data.totalPages);
//     render(sneaker);
//   } catch (error) {
//     errorHandler(error);
//   }
// }



// function sneakercard(id = "", imageURL = "", name = "", price = "") {
//   return `
//   <div
  
//     id="productCard"
//     class="bg-transparent p-1 w-[182px] h-[244px]"
//     data-set="${id}"
//   >
  
//     <div class="flex items-center justify-center">
//       <img
//         id="productImage"
//         class="w-40 h-40 rounded-2xl"
//         src="${imageURL}"
//       />
//     </div>
//     <div class="card-text-wrapper">
//       <h3 id="productName" class="text-lg font-medium m-2 overflow-hidden truncate cursor-pointer hover:underline card-profile">${name}</h3>
//     </div>
//     <p id="productPrice" class="text-gray-700 mx-2">$${price}</p>
//   </div>
//   </div>
//   `;
// }

// function render(sneaker) {
//   let html = "";
//   for (const product of sneaker) {
//     html += sneakercard(
//       product.id,
//       product.imageURL,
//       product.name,
//       product.price
//     );
//   }
//   sneakerList.innerHTML = html;
// }

// //______________________________________//
// //_________Pagination all shoes_________//
// //______________________________________//
// function paginationButton(total) {
//   paginationButtons.innerHTML = "";
//   for (let j = 1; j <= total; j++) {
//     const btn = document.createElement("button");
//     btn.className =
//       "inline-flex items-center border-2 rounded-3xl border-gray-700 mb-4 p-1 pr-2 pl-2 text-sm font medium text-gray-600";
//     btn.textContent = j;
//     btn.addEventListener("click", () => allsneakers(j));
//     paginationButtons.append(btn);
//   }
// }





