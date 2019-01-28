var titleInput = document.getElementById('title');
var headerInput = document.getElementById('header');
var imageOne = document.getElementById('img1');
var imageTwo = document.getElementById('img2');
var imageThree = document.getElementById('img3');
var imageFour = document.getElementById('img4');
var imageFive = document.getElementById('img5');
var articleText = document.getElementById('article');


function Element(type, options) {
  this.type = type;
  this.options = options;
  Element.list.push(this);
}

// retrieve website data, if it exists
if(localStorage.getItem('website')){
  Element.list = JSON.parse(localStorage.getItem('website'));
} else {
  Element.list = [];
}

Element.store = function() {
  localStorage.setItem('website', JSON.stringify(Element.list));
}






function submitHandler(event) {
  event.preventDefault();
  
  // reset the storage
  Element.list = [];

  new Element('title', [titleInput.value]);
  new Element('header', [headerInput.value]);
  new Element('img-one', [imageOne.value]);
  new Element('img-three', [imageTwo.value, imageThree.value, imageFour.value])
  new Element('article-right', [imageFive.value, articleText.value])

  Element.store();
}

document.getElementsByTagName('form')[0].addEventListener("submit", submitHandler);
