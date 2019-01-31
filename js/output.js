"use strict";

// this file builds the HTML to show on the output page
// The HTML is for the user to copy to make their website

// pull the list of elements from storage

var elements = JSON.parse(localStorage.getItem('website'));
// global variable that hold the html as it is built
var html;

// iterates through the list of elements, feeding the options of each element to the appropriate function

function buildHTML() {
  //initialize html
  html = "";

  for(var i=0; i<elements.length; i++) {
    switch(elements[i].type) {
      case 'title':
        buildTitle(elements[i].options);
        break;
      case 'header':
        buildHeader(elements[i].options);
        break;
      case 'img-one':
        buildImageOne(elements[i].options);
        break;
      case 'img-two':
        buildImageTwo(elements[i].options);
        break;
      case 'img-three':
        buildImageThree(elements[i].options);
        break;
      case 'article-right':
        buildArticleRight(elements[i].options);
        break;
      case 'article-left':
        buildArticleLeft(elements[i].options);
        break;
      case 'text' :
        buildText(elements[i].options);
        break;
      
    }
  }
  buildEnd();

  document.getElementById('HTML').innerText = `${html}`;
}


// Builds title and document head
// Title options:
// 0: title text

function buildTitle(options) {
  html += `<!DOCTYPE html>

  <head>
    <title>"${options[0]}"</title>
    <link rel="stylesheet" src="css/reset.css" type="text/css" />
    <link rel="stylesheet" src="css/style.css" type="text/css" />

  </head>

  <html>
    <body>
    `;
}

// Header options:
// 0: h1 text

function buildHeader(options) {
  html += `    <header>
          <h1>"${options[0]}"</h1>
        </header>
    
    <main>
      `;
}

// An element that consists of a single, full-width image
// img-one options:
// 0: image URL

function buildImageOne(options) {
  html += `<img src="${options[0]}" class="img-one"
  `;
}

// An element consisting of two images side-by-side
// img-two options:
// 0: left image URL
// 1: right image URL

function buildImageTwo(options) {
  html += `<ul class="img-two">
      <li><img src = "${options[0]}"></li>
      <li><img src = "${options[1]}"></li>
      </ul>
      `
      }

// An element consisting of three images side-by-side
// img-three options:
// 0: left image URL
// 1: center image URL
// 2: right image URL

function buildImageThree(options) {
  html += `<ul class="img-three">
      <li><img src = "${options[0]}"></li>
      <li><img src = "${options[1]}"></li>
      <li><img src = "${options[2]}"></li>
    </ul>
    `
}

// An element consisting of an image on the left and an article with a scrollbar on the right
// article-right options:
// 0: image URL
// 1: article text

function buildArticleRight(options) {
  html += `<section id="article-right">
      <img src="${options[0]}" />
      <p>${options[2]}</p>
    </section>
    `}

// An element consisting of an article with a srollbar on the left, and an image on the right
// article-left options:
// 0: article text
// 1: image URL

function buildArticleLeft(options) {
  html += `<section id="article-left">
      <p>${options[2]}</p>
      <img src="${options[0]}" />
      
    </section>
    `}

// An element consisting of a paragraph of text
// text options:
// 0: paragraph text

function buildText(options) {
  html += `<p class ="text">${options[0]}</p>`
}

// builds the HTML for the end of the HTML file

function buildEnd(options) {
  html += `</main>

      <footer>
        <p>Copyright info?</p>
      </footer>
    </body>
  </html>`
}

buildHTML();