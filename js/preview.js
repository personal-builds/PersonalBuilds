// This file renders the website the user has built


// pulls website from storage
var elements = JSON.parse(localStorage.getItem('website'));

// gets the body tag, to add elements to it
var htmlBody = document.getElementsByTagName('body')[0];

// Adds the tab title
// title options:
// 0: title text

function renderTitle(options) {
  document.title = options[0];
}

// Adds the website title in an h1
// Header options:
// 0: h1 text

function renderHeader(options) {
  var header = document.createElement('header');
  var headerText = document.createElement('h1');
  headerText.textContent = options[0];
  header.appendChild(headerText);
  htmlBody.appendChild(header);
}

// An element that consists of a single, full-width image
// img-one options:
// 0: image URL

function renderImgOne(options) {
  var image = document.createElement('img');
  image.className = 'img-one';
  image.src = options[0];
  htmlBody.appendChild(image);
}

// An element consisting of two images side-by-side
// img-two options:
// 0: left image URL
// 1: right image URL

function renderImgTwo(options) {
  var imageUl = document.createElement('ul');
  imageUl.className = 'img-two';

  var imgOneLi = document.createElement('li');
  var imgOne = document.createElement('img');
  imgOne.src = options[0];

  var imgTwoLi = document.createElement('li');
  var imgTwo = document.createElement('img');
  imgTwo.src = options[1];
  
  imgOneLi.appendChild(imgOne);
  imgTwoLi.appendChild(imgTwo);


  imageUl.appendChild(imgOneLi);
  imageUl.appendChild(imgTwoLi);
  

  htmlBody.appendChild(imageUl);
}

// An element consisting of three images side-by-side
// img-three options:
// 0: left image URL
// 1: center image URL
// 2: right image URL

function renderImgThree(options) {
  var imageUl = document.createElement('ul');
  imageUl.className = 'img-three';

  var imgOneLi = document.createElement('li');
  var imgOne = document.createElement('img');
  imgOne.src = options[0];

  var imgTwoLi = document.createElement('li');
  var imgTwo = document.createElement('img');
  imgTwo.src = options[1];

  var imgThreeLi = document.createElement('li');
  var imgThree = document.createElement('img');
  imgThree.src = options[2];

  imgOneLi.appendChild(imgOne);
  imgTwoLi.appendChild(imgTwo);
  imgThreeLi.appendChild(imgThree);

  imageUl.appendChild(imgOneLi);
  imageUl.appendChild(imgTwoLi);
  imageUl.appendChild(imgThreeLi);

  htmlBody.appendChild(imageUl);
}

// An element consisting of an image on the left and an article with a scrollbar on the right
// article-right options:
// 0: image URL
// 1: article text

function renderArticleRight(options) {
  var article = document.createElement('section');
  article.className = 'article-right';
  var image = document.createElement('img');
  var text = document.createElement('p');
  image.src = options[0];
  text.textContent = options[1];
  article.appendChild(image);
  article.appendChild(text);
  htmlBody.appendChild(article);
}

// An element consisting of an article with a srollbar on the left, and an image on the right
// article-left options:
// 0: article text
// 1: image URL

function renderArticleLeft(options) {
  var article = document.createElement('section');
  article.className = 'article-left'; 
  var image = document.createElement('img');
  var text = document.createElement('p');
  image.src = options[1];
  text.textContent = options [0]
  article.appendChild(text);
  article.appendChild(image);
  htmlBody.appendChild(article);
}

// An element consisting of a paragraph of text
// text options:
// 0: paragraph text

function renderTextElement(options){
 
  var text = document.createElement('p')
  text.className= 'text'
  text.textContent = options[0];

  htmlBody.appendChild(text);
  
}




// iterates throught the elements, passing each element's options to the appropriate function

for(var i=0; i<elements.length; i++) {
  switch(elements[i].type) {
    case 'title':
      renderTitle(elements[i].options);
      break;
    case 'header':
      renderHeader(elements[i].options);
      break;
    case 'img-one':
      renderImgOne(elements[i].options);
      break;
    case 'img-two':
      renderImgTwo(elements[i].options);
      break;
    case 'img-three':
      renderImgThree(elements[i].options);
      break;
    case 'article-right':
      renderArticleRight(elements[i].options);
        break;
    case 'article-left':
      renderArticleLeft(elements[i].options);
        break;
    case 'text':
      renderTextElement(elements[i].options);
        break;
  }
}

// creates a link object and appends it to the document head, to add 
// a stylesheet as chosen by the user

var csshref = `css/preview${localStorage.getItem('theme')}.css`
var head = document.getElementsByTagName('head')[0];
var link = document.createElement('link');
link.href = csshref
link.rel='stylesheet' 
link.type= 'text/css'
head.appendChild(link);