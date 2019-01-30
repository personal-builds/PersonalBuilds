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
var optionOneDiv = document.getElementById('option-one-div');
var optionTwoDiv = document.getElementById('option-two-div');
var optionThreeDiv = document.getElementById('option-three-div');




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
  displayList();
}

function buttonNumber(id){ 
  var output= id.slice(7, id.length);
  return parseInt(output);
}

function listCLickHandler(event){
  if (event.target.type !== 'submit'){
    return
  }
  if (event.target.className === 'xButton'){
    var index = buttonNumber(event.target.id);
    Element.list.splice(index, 1)
    displayList()
    return
  } 
  if(event.target.className === 'uButton') {
    
    var index = buttonNumber(event.target.id);
    var swap = Element.list[index] 
    Element.list[index] = Element.list[index - 1];
    Element.list[index- 1] = swap;
    displayList()
    return
  }
   if(event.target.className === 'dButton') {
    
    var index = buttonNumber(event.target.id);
    var swap = Element.list[index] 
    Element.list[index] = Element.list[index + 1];
    Element.list[index + 1] = swap;
    displayList()
    return
   }
}


document.getElementsByTagName('form')[0].addEventListener("submit", submitHandler);

function elementSelect(event){
  switch(event.target.value){
    case "img-one": 
      optionOneDiv.style.visibility = "visible"
      optionTwoDiv.style.visibility = "hidden"
      optionThreeDiv.style.visibility = "hidden"
      optionOne.type= 'url'
      break
    case "img-two":
     optionOneDiv.style.visibility = "visible"
     optionTwoDiv.style.visibility = "visible"
     optionThreeDiv.style.visibility = "hidden"
     optionTwo.type='url'
     optionOne.type='url'
     break
    case "img-three":
     optionOneDiv.style.visibility = "visible"
     optionTwoDiv.style.visibility = "visible"
     optionThreeDiv.style.visibility = "visible"
     optionOne.type='url'
     optionTwo.type='url'
     optionThree.type='url'
     break
    case "text":
    optionOneDiv.style.visibility = "visible"
    optionTwoDiv.style.visibility = "hidden"
    optionThreeDiv.style.visibility = "hidden"
    optionOne.type='text'
     break
    case "article-right":
    optionOneDiv.style.visibility = "visible"
    optionTwoDiv.style.visibility = "visible"
    optionThreeDiv.style.visibility = "hidden"
    optionOne.type='url'
    optionTwo.type='text'
     break
    case "article-left":
     optionOneDiv.style.visibility = "visible"
     optionTwoDiv.style.visibility = "visible"
     optionThreeDiv.style.visibility = "hidden"
     optionOne.type='text'
     optionTwo.type='url'
     break
    case '':
     optionOneDiv.style.visibility = "hidden"
     optionTwoDiv.style.visibility = "hidden"
     optionThreeDiv.style.visibility = "hidden"
     break
  }
}
document.getElementsByTagName('select')[0].addEventListener('click', elementSelect);


function displayList(){
table.innerHTML='';

  for(var i=0; i< Element.list.length; i++){
    var firstRow = document.createElement('tr');
    var tdEl = document.createElement('td');
    if(i> 2){
      var upButton = document.createElement('button');
      upButton.className= 'uButton'
      upButton.textContent = '\u25B2'
      upButton.id= `uButton${i}`
      tdEl.appendChild(upButton)
    }
    firstRow.appendChild(tdEl);
    tdEl= document.createElement('td')
    tdEl.textContent=Element.list[i].type
    tdEl.rowSpan='3'
    firstRow.appendChild(tdEl);
    tdEl= document.createElement('td')
    if (i < 2){
      var input = document.createElement('input');
      input.type = 'text';
      input.textContent= Element.list[i].options[0]
      tdEl.appendChild(input);
    }else{
    tdEl.textContent=Element.list[i].options[0];
    }
    firstRow.appendChild(tdEl);
    table.appendChild(firstRow);

    var twoRow = document.createElement('tr')
    var tdEl = document.createElement('td');
    if(i> 1){
      var xButton = document.createElement('button');
      xButton.className='xButton'
      xButton.textContent= 'X'
      xButton.id=`xButton${i}`
      tdEl.appendChild(xButton)
    }
    twoRow.appendChild(tdEl);
    tdEl = document.createElement('td')
    if (Element.list[i].options[1]){
      tdEl.textContent=Element.list[i].options[1];
    }
    twoRow.appendChild(tdEl);
    table.appendChild(twoRow);
  

    var thirdRow = document.createElement('tr')
    var tdEl =document.createElement('td');
    if(i> 1 && i< Element.list.length -1){
      var downButton = document.createElement('button');
      downButton.className = 'dButton'
      downButton.textContent= '\u25BC'
      downButton.id=`dButton${i}`
      tdEl.appendChild(downButton)
    }
    thirdRow.appendChild(tdEl);
    tdEl = document.createElement('td');
    if(Element.list[i].options[2]){
      tdEl.textContent=Element.list[i].options[2];
    }
    thirdRow.appendChild(tdEl);
    table.appendChild(thirdRow);

    
    
  }
    
    
}
if(localStorage.getItem('website')){
Element.list= JSON.parse(localStorage.getItem('website'))
} else{
  Element.list=[];
  new Element('title', [''])
  new Element('header', [''])
}
function themeHandler(event){
  localStorage.setItem('theme', event.target.value)
}

function previewButton(event){
  document.getElementById('preview-frame').src +='';
  // https://stackoverflow.com/questions/86428/what-s-the-best-way-to-reload-refresh-an-iframe
}
table.addEventListener('click', listCLickHandler);
optionTwoDiv.style.visibility = "hidden"
optionThreeDiv.style.visibility = "hidden"
displayList();
document.getElementsByTagName('select')[1].addEventListener('click', themeHandler);
document.getElementById('preview').addEventListener('click', previewButton);