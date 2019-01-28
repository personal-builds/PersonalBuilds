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
      case 'img-three':
        buildImageThree(elements[i].options);
        break;
      case 'article-right':
        buildArticleRight(elements[i].options);
        break;
    }
  }
  buildEnd();
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
    <main>`;
}

// img-one options:
function buildImageOne(options) {
  html += `<img src="${options[0]}" class="img-one"
  `;
}

function buildImageThree(options) {
  html += `<ul class="img-three">
    <li><img src = "${options[0]}"></li>
    <li><img src = "${options[1]}"></li>
    <li><img src = "${options[2]}"></li>
    `
}

function buildArticleRight(options) {
  html += `<section id="article-right">
    <img src="${options[0]}" />
    <p>${options[2]}</p>
    `
}

function buildEnd() {
  html += `    </main>

      <footer>
        <p>Copyright info?</p>
      </footer>
    </body>
  </html>`
}