'use strict';

// Replacement script - start
const btn = document.querySelectorAll('.diary-tasks__more');

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', () => {
    alert("tutaj będzie JS");
  });
}
// Replacement script - end

//=================================//
/* Fill up a content of the footer */
//=================================//
const footer = document.querySelector('.footer');

const addFooter = function (name) {
  //create footer
  const footerLink = `<a class="footer__link" href = "http://criscode.pl">${name}</a>`;
  footer.innerHTML = `Copyright &copy 2019 - all rights reserved by ${footerLink} `;
}
addFooter('Krzysztof Grudzień');

//=================================//
/* Open and close navigation       */
//=================================//
const toogleIcon = document.querySelector('.header__nav-open-icon--js');
const navContainer = document.querySelector('.nav');

const displayMenu = () => {
  navContainer.classList.toggle('hidden');
}
toogleIcon.addEventListener('click', displayMenu, false);

//=====================================//
/* Display name and age of the author  */
//=====================================//
const authorName = document.querySelector('.author__header--js');

const showData = (name, lastName, yearOfBorn) => {
  authorName.innerHTML = `${name} <span class="bolder">${lastName}</span> <sup>${yearOfBorn}</sup>`;

}
showData('Krzysztof', 'Grudzień', '84\'');