var elements = JSON.parse(localStorage.getItem('website'));
var htmlBody = document.getElementsByTagName('body')[0];

function renderTitle(options) {
  document.title = options[0];
}

function renderHeader(options) {
  var header = document.createElement('header');
  var headerText = document.createElement('h1');
  headerText.textContent = options[0];
  header.appendChild(headerText);
  htmlBody.appendChild(header);
}

function renderImgOne(options) {
  var image = document.createElement('img');
  image.className = 'img-one';
  image.src = options[0];
  htmlBody.appendChild(image);
}

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

function renderArticleLeft(options) {
  var article = document.createElement('section');
  article.className = 'article-left'; 
  var image = document.createElement('img');
  var text = document.createElement('p');
  img.src = options[0];
  text.textContent = options [1]
  article.appendChild(text);
  article.appendChild(image);
  htmlbody.appendChild(article);
}

function renderTextElement(options){
 
  var text = document.createElement('p')
  text.className= 'text'
  text.textContent = options[0];

  htmlBody.appendChild(text);
  
}






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

var csshref = `css/preview${localStorage.getItem('theme')}.css`
var head = document.getElementsByTagName('head')[0];
var link = document.createElement('link');
link.href = csshref
link.rel='stylesheet' 
link.type= 'text/css'
head.appendChild(link);