"use strict";

var elements = JSON.parse(localStorage.getItem('website'));
var html;

function buildHTML() {
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

// img-one options:
function buildImageOne(options) {
  html += `<img src="${options[0]}" class="img-one"
  `;
}
function buildImageTwo(options) {
  html += `<ul class="img-two">
      <li><img src = "${options[0]}"></li>
      <li><img src = "${options[1]}"></li>
      </ul>
      `
      }

function buildImageThree(options) {
  html += `<ul class="img-three">
      <li><img src = "${options[0]}"></li>
      <li><img src = "${options[1]}"></li>
      <li><img src = "${options[2]}"></li>
    </ul>
    `
}

function buildArticleRight(options) {
  html += `<section id="article-right">
      <img src="${options[0]}" />
      <p>${options[2]}</p>
    </section>
    `
}
function buildArticleLeft(options) {
  html += `<section id="article-left">
      <p>${options[2]}</p>
      <img src="${options[0]}" />
      
    </section>
    `
}
function buildText(options) {
  html += `<p class ="text">${options[0]}</p>`
}

function buildEnd(options) {
  html += `</main>

      <footer>
        <p>Copyright info?</p>
      </footer>
    </body>
  </html>`
}

buildHTML();