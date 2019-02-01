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

function outputCss() {
  var theme = localStorage.getItem('theme');
  var cssSheet = "";
  switch(theme) {
    case "blue":
      cssSheet = `body {
        width: 960px;
         margin: 0 auto;
         background-color: #bdeded;
         color: black;
       }
       header{
         border: 3px solid black;
         background-color: #a49ef396;
         
       }
       h1 {
         text-align: center;
         font-size: 7rem;
         font-weight: bold;
         color: black;
       }
       
       .img-one {
         width: 960px;
         height: 450px;
         margin-bottom: 20px;
       }
    
       .img-three {
         width: 100%;
         height: 375px;
         margin: 0px 0px 20px;
       }
       
       .img-three li {
         display: inline-block;
         width: 300px;
         margin-right: 20px;
       }
       
       .img-three li:nth-of-type(3) {
         margin: 0px;
       }
       
       .img-three img {
         width: 300px;
         height: 375px;
         margin-left: 10px;
       }
       
       .article-right {
         height: 400px;
         width: 100%;
         margin-right: 20px;
       }
       
       .article-right img {
         width: 480px;
         height: 400px;
         display: inline-block;
       }
       
       .article-right p {
        display: inline-block;
        width: 446px;
        height: 366px;
        overflow-y: scroll;
        padding: 20px 10px 10px 20px;
        overflow-y: scroll;
        border: 2px solid #7f68d9;
      }
       .article-left {
        height: 400px;
        width: 100%;
        margin-bottom: 20px;
       }
       .article-left img{
        width: 480px;
         height: 400px;
         display: inline-block;
       }
       .article-left p{
        display: inline-block;
        width: 446px;
        height: 366px;
        overflow-y: scroll;
        padding: 20px 10px 10px 20px;
        border: 2px solid #7f68d9;
    
       }
       .img-two img {
        width: 460px;
        height: 350px;
        
      }
     .img-two {
       width: 100%;
       height: 350px;
       margin-bottom: 20px;
     }
     .img-two li {
      display: inline-block;
      margin-right: 20px;
      width: 460px;
      height: 350px;
      }
        p{
            
            overflow-wrap: break-word;
            background-color: #6f58c9;
            color:white;
            text-indent: 30px;
            padding: 5px;
            font-size: 1.3em;
        }
    
        body > p {
          margin: 10px 0px 20px 0;
          border: 2px solid #7f68d9;
        }`
        break;
    case 'colorful':
      cssSheet = `body {
          width: 960px;
           margin: 0 auto;
           background-color: rgba(47, 179, 14, 0.712);
           color: white;
         }
         header{
           border: 3px solid black;
           background-color: #F86624;
           
         }
         h1 {
           text-align: center;
           font-size: 7rem;
           font-weight: bold;
           color: black;
         }
         
         .img-one {
           width: 960px;
           height: 450px;
           margin-bottom: 20px;
         }
         
         .img-three {
           width: 100%;
           height: 375px;
           margin: 0px 0px 20px;
         }
         
         .img-three li {
           display: inline-block;
           width: 300px;
           margin-right: 20px;
         }
         
         .img-three li:nth-of-type(3) {
           margin: 0px;
         }
         
         .img-three img {
           width: 300px;
           height: 375px;
           margin-left: 10px;
         }
         
         .article-right {
           height: 400px;
           width: 100%;
           margin-bottom: 20px;
         }
         
         .article-right img {
           width: 480px;
           height: 400px;
           display: inline-block;
         }
         
         .article-right p {
          display: inline-block;
          width: 446px;
          height: 366px;
          overflow-y: scroll;
          padding: 20px 10px 10px 20px;
          overflow-y: scroll;
          border: 2px solid #662E9B;
        }
         .article-left {
          height: 400px;
          width: 100%;
          margin-bottom: 20px;
         }
         .article-left img{
          width: 480px;
           height: 400px;
           display: inline-block;
         }
         .article-left p{
          display: inline-block;
          width: 446px;
          height: 366px;
          overflow-y: scroll;
          padding: 20px 10px 10px 20px;
          border: 2px solid #662E9B;
      
         }
         .img-two img {
          width: 460px;
          height: 350px;
          
        }
       .img-two {
         width: 100%;
         height: 350px;
         margin-bottom: 20px;
       }
       .img-two li {
        display: inline-block;
        margin-right: 20px;
        width: 460px;
        height: 350px;
        }
          p{
              
              overflow-wrap: break-word;
              background-color:#662E9B;
              color:white;
              text-indent: 30px;
              padding: 5px;
              font-size: 1.3em;
          }
          body > p {
            margin: 10px 0px 20px 0;
            border: 2px solid #864EAB;
          }`
          break;
    case 'dark':
      cssSheet = `body {
        width: 960px;
         margin: 0 auto;
         background-color: rgb(59, 59, 59);
         color: white;
       }
       header{
         border: 3px solid white;
         background-color: black;
       }
       h1 {
         text-align: center;
         font-size: 7rem;
         font-weight: bold;
         color: white;
       }
       
       .img-one {
         width: 960px;
         height: 450px;
         margin-bottom: 20px;
       }
       
       .img-three {
         width: 100%;
         height: 375px;
         margin: 0px 0px 20px;
       }
       
       .img-three li {
         display: inline-block;
         width: 300px;
         margin-right: 20px;
       }
       
       .img-three li:nth-of-type(3) {
         margin: 0px;
       }
       
       .img-three img {
         width: 300px;
         height: 375px;
         margin-left: 10px;
       }
       
       .article-right {
         height: 400px;
         width: 100%;
         margin-bottom: 20px;
       }
       
       .article-right img {
         width: 480px;
         height: 400px;
         display: inline-block;
       }
       
       .article-right p {
        display: inline-block;
        width: 446px;
        height: 366px;
        overflow-y: scroll;
        padding: 20px 10px 10px 20px;
        overflow-y: scroll;
        border: 2px solid rgb(79, 79, 79);;
      }
       .article-left {
        height: 400px;
        width: 100%;
        margin-bottom: 20px;
       }
       .article-left img{
        width: 480px;
         height: 400px;
         display: inline-block;
       }
       .article-left p{
        display: inline-block;
        width: 446px;
        height: 366px;
        overflow-y: scroll;
        padding: 20px 10px 10px 20px;
        border: 2px solid rgb(79, 79, 79);
    
       }
       .img-two img {
        width: 460px;
        height: 350px;
        
      }
     .img-two {
       width: 100%;
       height: 350px;
       margin-bottom: 20px;
     }
     .img-two li {
      display: inline-block;
      margin-right: 20px;
      width: 460px;
      height: 350px;
      }
    
        p{
            
            overflow-wrap: break-word;
            background-color:black;
            color:white;
            text-indent: 30px;
            padding: 5px;
            font-size: 1.3em;
        }
        body > p {
          margin: 10px 0px 20px 0;
          border: 2px solid rgb(79, 79, 79);
        }`
      break;
    case 'green':
      cssSheet = `body {
        width: 960px;
         margin: 0 auto;
         background-color: #293f14;
         color: white;
       }
       header{
         border: 3px solid white;
         background-color: #3eff8b;
         
       }
       h1 {
         text-align: center;
         font-size: 7rem;
         font-weight: bold;
         color: black;
       }
       
       .img-one {
         width: 960px;
         height: 450px;
         margin-bottom: 20px;
       }
       
       .img-three {
         width: 100%;
         height: 375px;
         margin: 0px 0px 20px;
       }
       
       .img-three li {
         display: inline-block;
         width: 300px;
         margin-right: 20px;
       }
       
       .img-three li:nth-of-type(3) {
         margin: 0px;
       }
       
       .img-three img {
         width: 300px;
         height: 375px;
         margin-left: 10px;
       }
       
       .article-right {
         height: 400px;
         width: 100%;
         margin-bottom: 20px;
       }
       
       .article-right img {
         width: 480px;
         height: 400px;
         display: inline-block;
       }
       
       .article-right p {
         display: inline-block;
         width: 446px;
         height: 366px;
         overflow-y: scroll;
         padding: 20px 10px 10px 20px;
         overflow-y: scroll;
         border: 2px solid #4fff9b;
       }
       .article-left {
        height: 400px;
        width: 100%;
        margin-bottom: 20px;
       }
       .article-left img{
        width: 480px;
         height: 400px;
         display: inline-block;
       }
       .article-left p{
        display: inline-block;
        width: 446px;
        height: 366px;
        overflow-y: scroll;
        padding: 20px 10px 10px 20px;
        border: 2px solid #4fff9b;
    
       }
       .img-two img {
        width: 460px;
        height: 350px;
        
      }
     .img-two {
       width: 100%;
       height: 350px;
       margin-bottom: 20px;
     }
     .img-two li {
      display: inline-block;
      margin-right: 20px;
      width: 460px;
      height: 350px;
      }
        p{
            
            overflow-wrap: break-word;
            background-color: #38a700;
            color: white;
            text-indent: 30px;
            padding: 5px;
            font-size: 1.3em;
    
        }
        body > p {
          margin: 10px 0px 20px 0;
          border: 2px solid #4fff9b;
        }`;
      break;
    case 'light':
      cssSheet = `body {
        width: 960px;
         margin: 0 auto;
         background-color: white;
       }
       header{
         border: 3px solid black;
         background-color: #666;
       }
       h1 {
         text-align: center;
         font-size: 7rem;
         font-weight: bold;
       }
       
       .img-one {
         width: 960px;
         height: 450px;
         margin-bottom: 20px;
       }
       
       .img-three {
         width: 100%;
         height: 375px;
         margin: 0px 0px 20px;
       }
       
       .img-three li {
         display: inline-block;
         width: 300px;
         margin-right: 20px;
       }
       
       .img-three li:nth-of-type(3) {
         margin: 0px;
       }
       
       .img-three img {
         width: 300px;
         height: 375px;
         margin-left: 10px;
       }
       
       .article-right {
         height: 400px;
         width: 100%;
         margin-bottom: 20px;
       }
       
       .article-right img {
         width: 480px;
         height: 400px;
         display: inline-block;
       }
       
       .article-right p {
         display: inline-block;
         width: 446px;
         height: 366px;
         overflow-y: scroll;
         padding: 20px 10px 10px 20px;
         overflow-y: scroll;
         border: 2px solid lightgray;
       }
       .article-left {
         height: 400px;
         width: 100%;
         margin-bottom: 20px;
        }
        .article-left img{
         width: 480px;
          height: 400px;
          display: inline-block;
        }
        .article-left p{
         display: inline-block;
         width: 446px;
         height: 366px;
         overflow-y: scroll;
         padding: 20px 10px 10px 20px;
         border: 2px solid lightgray;
     
       
          }
          .img-two img {
           width: 460px;
           height: 350px;
           
         }
        .img-two {
          width: 100%;
          height: 350px;
          margin-bottom: 20px;
        }
        .img-two li {
         display: inline-block;
         margin-right: 20px;
         width: 460px;
         height: 350px;
         }
     
        
        .img-two img {
         width: 460px;
         height: 350px;
         
       }
      .img-two {
        width: 100%;
        height: 350px;
        margin-bottom: 20px;
      }
      .img-two li {
       display: inline-block;
       margin-right: 20px;
       width: 460px;
       height: 350px;
       }
         p{
           overflow-wrap: break-word;
         }
             p{
             
             overflow-wrap: break-word;
             /* background-color:#CD5D67;
             color:black; */
             text-indent: 30px;
             padding: 5px;
             font-size: 1.3em;
     
         }
         body > p {
           margin: 10px 0px 20px 0;
           /* border: 2px solid #DD6D77; */
         } `
      break;
    case 'plain':
      cssSheet = `body {
        width: 960px;
        margin: 0 auto;
        background-color: white;
      }
      
      h1 {
        text-align: center;
        font-size: 7rem;
        font-weight: bold;
      }
      
      .img-one {
        width: 960px;
        height: 450px;
        margin-bottom: 20px;
      }
      
      .img-three {
        width: 100%;
        height: 375px;
        margin: 0px 0px 20px;
      }
      
      .img-three li {
        display: inline-block;
        width: 300px;
        margin-right: 20px;
      }
      
      .img-three li:nth-of-type(3) {
        margin: 0px;
      }
      
      .img-three img {
        width: 300px;
        height: 375px;
        margin-left: 10px;
      }
      
      .article-right {
        width: 100%;
        margin-bottom: 20px;
      }
      
      .article-right img {
        width: 480px;
        height: 400px;
        display: inline-block;
      }
      
      .article-right p {
        display: inline-block;
        width: 446px;
        height: 366px;
        overflow-y: scroll;
        padding: 20px 10px 10px 20px;
        overflow-y: scroll;
        /* border: 2px solid #DD6D77; */
      }
      .article-left p{
        display: inline-block;
        width: 446px;
        height: 366px;
        overflow-y: scroll;
        padding: 20px 10px 10px 20px;
        /* border: 2px solid #DD6D77; */
    
       }
       .img-two img {
        width: 460px;
        height: 350px;
        
      }
     .img-two {
       width: 100%;
       height: 350px;
       margin-bottom: 20px;
     }
     .img-two li {
      display: inline-block;
      margin-right: 20px;
      width: 460px;
      height: 350px;
      }
      p{
            
        overflow-wrap: break-word;
        /* background-color:#CD5D67; */
        /* color:black; */
        text-indent: 30px;
        padding: 5px;
        font-size: 1.3em;
    
    }
    body > p {
      margin: 10px 0px 20px 0;
      /* border: 2px solid #DD6D77; */
    }`;
      break;
    case 'red':
      cssSheet = `body {
        width: 960px;
         margin: 0 auto;
         background-color: #410B13;
         color: white;
       }
       header{
         border: 3px solid rgb(226, 5, 5);
         background-color: black;
         
       }
       h1 {
         text-align: center;
         font-size: 7rem;
         font-weight: bold;
         color: #77323f;
       }
       
       .img-one {
         width: 960px;
         height: 450px;
         margin-bottom: 20px;
       }
       
       .img-three {
         width: 100%;
         height: 375px;
         margin: 0px 0px 20px;
       }
       
       .img-three li {
         display: inline-block;
         width: 300px;
         margin-right: 20px;
       }
       
       .img-three li:nth-of-type(3) {
         margin: 0px;
       }
       
       .img-three img {
         width: 300px;
         height: 375px;
         margin-left: 10px;
       }
       
       .article-right {
         height: 400px;
         width: 100%;
         margin-bottom: 20px;
       }
       
       .article-right img {
         width: 480px;
         height: 400px;
         display: inline-block;
       }
       
       .article-right p {
         display: inline-block;
         width: 446px;
         height: 366px;
         overflow-y: scroll;
         padding: 20px 10px 10px 20px;
         overflow-y: scroll;
         border: 2px solid #DD6D77;
       }
       .article-left {
        height: 400px;
        width: 100%;
        margin-bottom: 20px;
       }
       .article-left img{
        width: 480px;
         height: 400px;
         display: inline-block;
       }
       .article-left p{
        display: inline-block;
        width: 446px;
        height: 366px;
        overflow-y: scroll;
        padding: 20px 10px 10px 20px;
        border: 2px solid #DD6D77;
    
       }
       .img-two img {
        width: 460px;
        height: 350px;
        
      }
     .img-two {
       width: 100%;
       height: 350px;
       margin-bottom: 20px;
     }
     .img-two li {
      display: inline-block;
      margin-right: 20px;
      width: 460px;
      height: 350px;
      }
        p{
            
            overflow-wrap: break-word;
            background-color:#CD5D67;
            color:black;
            text-indent: 30px;
            padding: 5px;
            font-size: 1.3em;
    
        }
        body > p {
          margin: 10px 0px 20px 0;
          border: 2px solid #DD6D77;
        }`;
      break;
          
  }

  document.getElementById('CSS').innerText = cssSheet;
}

buildHTML();
outputCss();