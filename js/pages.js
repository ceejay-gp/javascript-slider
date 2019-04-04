/* jshint esversion: 6 */
// alert("javascript is working");


// when i click the next button
// show the next page
// each page should show a different background color, circle color & content

// when i click the previous button
// show the previous page

// when i click the random button
// show a random page

// when i press a key
// show the next or previous page



// step 1: add the content for our pages
// to create a list use square brackets []
// to create an object use curly brackets {}
// to create a list of objects use both [{}]
const pages = [{
    content: "is a clothes & web designer from & based in London",
    background: "linear-gradient(90deg, rgba(0, 0, 0, 1) 7%, rgba(37, 7, 71, 1) 66%, rgba(255, 255, 255, 1) 100%)",
    circle: "#D0BCD5"
  },
  {
    content: "also plays guitar & skateboards. aiming to become the illegitimate love child between jimi hendrix & tony hawks.",
    background: "linear-gradient(90deg, rgba(0,0,0,1) 7%, rgba(71,7,7,1) 63%, rgba(145,13,13,1) 100%)",
    circle: "#BB9457"
  },
  {
    content: "on most days is an anxious wreck",
    background: "linear-gradient(90deg, rgba(0,0,0,1) 7%, rgba(144, 45, 122, 1) 63%, rgba(226,186,202,1) 100%)",
    circle: "#361F27"
  },
  {
    content: "wants to become a pantheon of the creative arts",
    background: "linear-gradient(90deg, rgba(0,0,0,1) 7%, rgba(145, 199, 144, 1) 63%, rgba(232,241,242,1) 100%)",
    circle: "#31493C"
  }
];

// step 2: pick the tags we want to use in HTML & save them in constants
//  select each button individually using the fa classes. call the constants the following: nextTag, previousTag, randomTag
//  select the h2 and name the constant outputTag

const bodyTag = document.querySelector("body");
const circleTag = document.querySelector(".circle");
const previousTag = document.querySelector(".previous");
const randomTag = document.querySelector(".random");
const nextTag = document.querySelector(".next");
const h2Tag = document.querySelector("h2");

// step 3: we need to know which page we are on in order to change it - so we need  way of tracking this

let pageNumber = 0;

// step 4: create an action that increases the page number

const next = function() {
  pageNumber = pageNumber + 1;
  if (pageNumber > pages.length - 1) {
    pageNumber = 0;
  }
};

// step 5: create an action that decreases the page number

const previous = function() {
  pageNumber = pageNumber - 1;
  if (pageNumber < 0) {
    pageNumber = pages.length - 1;
  }
};

// step 7: create an action that generates a random number

const random = function() {
  pageNumber = Math.floor(Math.random() * pages.length);
};

// step 10: update the content on our page with the content from the pages list
const updatePage = function() {
  // update the content in our body
  h2Tag.innerHTML = pages[pageNumber].content;
  // update the circleTag
  circleTag.style.backgroundColor = pages[pageNumber].circle;
  bodyTag.style.background = pages[pageNumber].background;
};

// step 6: attach an addEventListener to the next button and call the next function. now the next button should increase the page number

// EVENTLISTENERS

nextTag.addEventListener("click", function() {
  next();
  console.log(pageNumber);
  updatePage();
});
previousTag.addEventListener("click", function() {
  previous();
  console.log(pageNumber);
  updatePage();
});
randomTag.addEventListener("click", function() {
  // create a random number using Math.random() - this creates a number between 0 & 1 that has deciaml places
  // we multiply it by the number of pages we have - pages.length in Math.floor
  random();
  console.log(pageNumber);
  updatePage();
});