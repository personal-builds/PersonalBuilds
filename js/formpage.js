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
var table = document.getElementsByTagName('table')[0];
var optionOneDiv = document.getElementById('option-one-div');
var optionTwoDiv = document.getElementById('option-two-div');
var optionThreeDiv = document.getElementById('option-three-div');
var optionOneLabel = document.getElementById('option-one-label');
var optionTwoLabel = document.getElementById('option-two-label');
var optionThreeLabel = document.getElementById('option-three-label');
var optionOneSelect = document.getElementById('option-one-select');
var optionTwoSelect = document.getElementById('option-two-select');
var optionThreeSelect = document.getElementById('option-three-select');


// class for website sections, all current elements are stored in Element.list to reduce global clutter

function Element(type, options) {
  this.type = type;
  this.options = options;
  Element.list.push(this);
}

// stores contents of Element.list to local storage

Element.store = function () {
  localStorage.setItem('website', JSON.stringify(Element.list));
}





// takes input from the form and makes a new Element, which is automatically appended to the list of elements
function submitHandler(event) {
  event.preventDefault();
  switch (event.target.type.value) {
    case ('img-one'):
      new Element('img-one', [optionOne.value]);
      break;

    case ('img-two'):
      new Element('img-two', [optionOne.value, optionTwo.value]);
      break;

    case ('img-three'):
      new Element('img-three', [optionOne.value, optionTwo.value, optionThree.value]);
      break;

    case ('text'):
      new Element('text', [optionOne.value]);
      break;

    case ('article-left'):
      new Element('article-left', [optionOne.value, optionTwo.value]);
      break;

    case ('article-right'):
      new Element('article-right', [optionOne.value, optionTwo.value]);
      break;
  }
  Element.store();
  displayList();
}

// helper function for listClickHandler, takes the id of a button from the list of elements and gives the index from the end of it

function buttonNumber(id) {
  var output = id.slice(7, id.length);
  return parseInt(output);
}

// handles clicks on the list of elements, to delete or reorder elements

function listCLickHandler(event) {

  //if the click wasn't on a button, we're done here
  if (event.target.type !== 'submit') {
    return;
  }

  //if an X was clicked, delete the element at the appropriate index
  if (event.target.className === 'xButton') {
    var index = buttonNumber(event.target.id);
    Element.list.splice(index, 1);
    displayList();
    Element.store();
    return;
  }

  //if an up was clicked, swap the element with its previous neighbor
  if (event.target.className === 'uButton') {

    var index = buttonNumber(event.target.id);
    var swap = Element.list[index];
    Element.list[index] = Element.list[index - 1];
    Element.list[index - 1] = swap;
    displayList();
    Element.store();
    return;
  }

  //if a down was clicked, swap the element with its next neighbor
  if (event.target.className === 'dButton') {

    var index = buttonNumber(event.target.id);
    var swap = Element.list[index];
    Element.list[index] = Element.list[index + 1];
    Element.list[index + 1] = swap;
    displayList();
    Element.store();
    return;
  }
}


// sets which options are visible, based on what type of element is selected
// if the element needs an option, make that option's div visible
// change the text of the option's label to indicate what it needs
// if it's a URL, show the URL select and disable input box typing
// if it's not a URL, make sure the input box is enabled for typing

function elementSelect(event) {
  switch (event.target.value) {
    case "img-one":
      optionOneDiv.style.visibility = "visible";
      optionOneSelect.style.visibility = 'visible';
      optionOne.disabled = true;

      optionTwoDiv.style.visibility = "hidden";
      optionTwoSelect.style.visibility = 'hidden';

      optionThreeDiv.style.visibility = "hidden";
      optionThreeSelect.style.visibility = 'hidden';

      optionOne.type = 'url';

      optionOneLabel.textContent = 'Image URL';

      break;

    case "img-two":
      optionOneDiv.style.visibility = "visible";
      optionOneSelect.style.visibility = 'visible';
      optionOne.disabled = true;

      optionTwoDiv.style.visibility = "visible";
      optionTwoSelect.style.visibility = 'visible';
      optionTwo.disabled = true;

      optionThreeDiv.style.visibility = "hidden";
      optionThreeSelect.style.visibility = 'hidden';

      optionTwo.type = 'url';
      optionOne.type = 'url';

      optionOneLabel.textContent = 'Image URL:';
      optionTwoLabel.textContent = 'Image URL:';

      break;

    case "img-three":
      optionOneDiv.style.visibility = "visible";
      optionOneSelect.style.visibility = 'visible';
      optionOne.disabled = true;

      optionTwoDiv.style.visibility = "visible";
      optionTwoSelect.style.visibility = 'visible';
      optionTwo.disabled = true;

      optionThreeDiv.style.visibility = "visible";
      optionThreeSelect.style.visibility = 'visible';
      optionThree.disabled = true;

      optionOne.type = 'url';
      optionTwo.type = 'url';
      optionThree.type = 'url';

      optionOneLabel.textContent = 'Image URL:';
      optionTwoLabel.textContent = 'Image URL:';
      optionThreeLabel.textContent = 'Image URL:';

      break;

    case "text":
      optionOneDiv.style.visibility = "visible";
      optionOneSelect.style.visibility = 'hidden';
      optionOne.disabled = false;

      optionTwoDiv.style.visibility = "hidden";
      optionTwoSelect.style.visibility = 'hidden';

      optionThreeDiv.style.visibility = "hidden";
      optionThreeSelect.style.visibility = 'hidden';

      optionOne.type = 'text';

      optionOneLabel.textContent =  'Text Content:';

      break;

    case "article-right":
      optionOneDiv.style.visibility = "visible";
      optionOneSelect.style.visibility = 'visible';
      optionOne.disabled = true;

      optionTwoDiv.style.visibility = "visible";
      optionTwoSelect.style.visibility = 'hidden';
      optionTwo.disabled = false;
      
      optionThreeDiv.style.visibility = "hidden";
      optionThreeSelect.style.visibility = 'hidden';

      optionOne.type = 'url';
      optionTwo.type = 'text';

      optionOneLabel.textContent = 'Image URL:';

      optionTwoLabel.textContent = 'Article Text:';

      break;

    case "article-left":
      optionOneDiv.style.visibility = "visible";
      optionOneSelect.style.visibility = 'hidden';
      optionOne.disabled = false;
      
      optionTwoDiv.style.visibility = "visible";
      optionTwoSelect.style.visibility = 'visible';
      optionTwo.disabled = true;

      optionThreeDiv.style.visibility = "hidden";
      optionThreeSelect.style.visibility = 'hidden';

      optionOne.type = 'text';
      optionTwo.type = 'url';

      optionOneLabel.textContent = 'Article Text:';
      optionTwoLabel.textContent = 'Image URL:';

      break;

    case '':
      optionOneDiv.style.visibility = "hidden";
      optionTwoDiv.style.visibility = "hidden";
      optionThreeDiv.style.visibility = "hidden"; 
      break;
  }
}



// builds the table showing the elements currently in the site, and their values

function displayList() {
  table.innerHTML = '';

  for (var i = 0; i < Element.list.length; i++) {
    var firstRow = document.createElement('tr');
    var tdEl = document.createElement('td');
    if (i > 2) {
      var upButton = document.createElement('button');
      upButton.className = 'uButton'
      upButton.textContent = '\u25B2'
      upButton.id = `uButton${i}`
      tdEl.appendChild(upButton)
    }
    firstRow.appendChild(tdEl);
    tdEl = document.createElement('td')
    tdEl.textContent = Element.list[i].type
    tdEl.rowSpan = '3'
    firstRow.appendChild(tdEl);
    tdEl = document.createElement('td')
    if (i < 2) {
      if (i === 0) {
        tdEl.onchange = saveTitle
      }
      if (i === 1) {
        tdEl.onchange = saveHeader
      }
      var input = document.createElement('input');
      input.type = 'text';
      input.textContent = Element.list[i].options[0]
      tdEl.appendChild(input);
    } else {
      tdEl.textContent = Element.list[i].options[0];
    }
    firstRow.appendChild(tdEl);
    table.appendChild(firstRow);

    var twoRow = document.createElement('tr')
    var tdEl = document.createElement('td');
    if (i > 1) {
      var xButton = document.createElement('button');
      xButton.className = 'xButton'
      xButton.textContent = 'X'
      xButton.id = `xButton${i}`
      tdEl.appendChild(xButton)
    }
    twoRow.appendChild(tdEl);
    tdEl = document.createElement('td')
    if (Element.list[i].options[1]) {
      tdEl.textContent = Element.list[i].options[1];
    }
    twoRow.appendChild(tdEl);
    table.appendChild(twoRow);


    var thirdRow = document.createElement('tr')
    var tdEl = document.createElement('td');
    if (i > 1 && i < Element.list.length - 1) {
      var downButton = document.createElement('button');
      downButton.className = 'dButton'
      downButton.textContent = '\u25BC'
      downButton.id = `dButton${i}`
      tdEl.appendChild(downButton)
    }
    thirdRow.appendChild(tdEl);
    tdEl = document.createElement('td');
    if (Element.list[i].options[2]) {
      tdEl.textContent = Element.list[i].options[2];
    }
    thirdRow.appendChild(tdEl);
    table.appendChild(thirdRow);



  }


}

// handles the url dropdowns, putting the appropriate URL in the box, or enabling it to be edited, as appropriate

function urlOptionHandler(event) {
  // The name of the input field is the same as the select, minus '-select', this takes the extra off
  var inputName = event.target.id.slice(0, -7);
  var inputBox = document.getElementById(inputName);

  switch(event.target.value) {
    case 'placeholder':
      inputBox.disabled = true;
      inputBox.value = 'https://via.placeholder.com/300x300?text=+'
      break;
    case 'thing':
      inputBox.disabled = true;
      inputBox.value = 'img/stock-photo-funny-man-with-watermelon-helmet-and-googles-looks-like-a-parasitic-caterpillar-157354478.jpg';
      break;
    case 'manual':
      inputBox.disabled = false;
  }
}

// When the theme is added, it stores the new one from the dropdown's value
// The css file for the theme is css/preview<input>.css

function themeHandler(event) {
  localStorage.setItem('theme', event.target.value)
}

//forces a render of the preview iframe

function previewButton(event) {
  document.getElementById('preview-frame').src += '';
  // https://stackoverflow.com/questions/86428/what-s-the-best-way-to-reload-refresh-an-iframe
}

// saves the value of the page title when it is changed

function saveTitle(event) {
  Element.list[0].options[0] = event.target.value;
  Element.store();
}

// saves the value of the header text when it is changed

function saveHeader(event) {
  Element.list[1].options[0] = event.target.value;
  Element.store();
}

// Pulls built website from local storage if it exists, or initializes a new one if it doesn't

if (localStorage.getItem('website')) {
  Element.list = JSON.parse(localStorage.getItem('website'))
} else {
  Element.list = [];
  new Element('title', [''])
  new Element('header', [''])
}

table.addEventListener('click', listCLickHandler);
optionOneDiv.style.visibility = 'hidden'
optionTwoDiv.style.visibility = 'hidden'
optionThreeDiv.style.visibility = 'hidden'

document.getElementsByTagName('form')[0].addEventListener("submit", submitHandler);
document.getElementsByTagName('select')[0].addEventListener('click', elementSelect);
document.getElementById('preview-select').addEventListener('click', themeHandler);
document.getElementById('preview').addEventListener('click', previewButton);
document.getElementById('option-one-select').addEventListener('click', urlOptionHandler);
document.getElementById('option-two-select').addEventListener('click', urlOptionHandler);
document.getElementById('option-three-select').addEventListener('click', urlOptionHandler);

displayList();