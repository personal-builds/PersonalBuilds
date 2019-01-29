var titleInput = document.getElementById('title');
var headerInput = document.getElementById('header');
var imageOne = document.getElementById('img1');
var imageTwo = document.getElementById('img2');
var imageThree = document.getElementById('img3');
var imageFour = document.getElementById('img4');
var imageFive = document.getElementById('img5');
var articleText = document.getElementById('article');
var optionOne = document.getElementById('option-one');
var optionTwo = document.getElementById('option-two');
var optionThree = document.getElementById('option-three');
var table= document.getElementsByTagName('table')[0];

if(localStorage.getItem('website')){
Element.list= JSON.parse(localStorage.getItem('website'))
} else{
  Element.list=[];
  new Element('title', [''])
  new Element('header', [''])
}




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
  switch(event.target.type.value){
    case('img-one'):
    new Element('img-one', [optionOne.value])
   break
    case('img-two'):
    new Element('img-two', [optionOne.value, optionTwo.value])
   break
    case('img-three'):
    new Element('img-three', [optionOne.value, optionTwo.value, optionThree.value])
   break
   case('text'):
   new Element('text', [optionOne.value])
   break
   case('article-left'):
   new Element('article-left', [optionOne.value, optionTwo.value])
   break
   case('article-right'):
   new Element('article-right', [optionOne.value, optionTwo.value])
   break
  }
  
  // reset the storage
  // Element.list = [];

  // new Element('title', [titleInput.value]);
  // new Element('header', [headerInput.value]);
  // new Element('img-one', [imageOne.value]);
  // new Element('img-three', [imageTwo.value, imageThree.value, imageFour.value])
  // new Element('article-right', [imageFive.value, articleText.value])

  Element.store();
}

document.getElementsByTagName('form')[0].addEventListener("submit", submitHandler);

function elementSelect(event){
  switch(event.target.value){
    case "img-one": 
      optionOne.style.visibility = "visible"
      optionTwo.style.visibility = "hidden"
      optionThree.style.visibility = "hidden"
      optionOne.type= 'url'
      break
    case "img-two":
     optionOne.style.visibility = "visible"
     optionTwo.style.visibility = "visible"
     optionThree.style.visibility = "hidden"
     optionTwo.type='url'
     optionOne.type='url'
     break
    case "img-three":
     optionOne.style.visibility = "visible"
     optionTwo.style.visibility = "visible"
     optionThree.style.visibility = "visible"
     optionOne.type='url'
     optionTwo.type='url'
     optionThree.type='url'
     break
    case "text":
    optionOne.style.visibility = "visible"
    optionTwo.style.visibility = "hidden"
    optionThree.style.visibility = "hidden"
    optionOne.type='text'
     break
    case "article-right":
    optionOne.style.visibility = "visible"
    optionTwo.style.visibility = "visible"
    optionThree.style.visibility = "hidden"
    optionOne.type='url'
    optionTwo.type='text'
     break
    case "article-left":
     optionOne.style.visibility = "visible"
     optionTwo.style.visibility = "visible"
     optionThree.style.visibility = "hidden"
     optionOne.type='text'
     optionTwo.type='url'
     break
    case '':
     optionOne.style.visibility = "hidden"
     optionTwo.style.visibility = "hidden"
     optionThree.style.visibility = "hidden"
     break
  }
}
document.getElementsByTagName('select')[0].addEventListener('click', elementSelect);


function displayList(){
table.innerHTML='';

  for(var i=0; i< Element.list.length; i++){
    var firstRow = document.createElement('tr');
    var tdEl = document.createElement('td');
    
  }
    
    
}