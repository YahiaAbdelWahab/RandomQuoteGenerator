/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended: 
    - Add at least one `year` and/or `citation` property to at least one 
      quote object.
***/

var quotes = [
  {
    quote: 'Make it so!',
    source: 'Captain Jean Luc Picard',
    citation: 'Star Trek: The Next Generation'
  },
  {
    quote: 'Optimism is the faith that leads to achievement.',
    source: 'Helen Keller'    
  },
  {
    quote: 'You have your moments. Not many of them, but you do have them.',
    source: 'Princess Leia',
    citation: 'The Empire Strikes Back',
    year: '1980'
  },
  {
    quote: 'Humility is no substitute for good personality.',
    source: 'Fran Leibowtiz',
    citation: 'Metropolitan Life',
    year: '1978'
  },
  {
    quote: 'Art, freedom and crativity will change society faster than politics.',
    source: 'Victor Pinchuk'
  }
]



/***
  Create the `getRandomQuote` function to:
   - generate a random number 
   - use the random number to `return` a random quote object from the 
     `quotes` array.
***/
function getRandomQuote() {
  var randomIndex = Math.floor(Math.random() * 5);
  return quotes[randomIndex]
}



/***
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote() {
  var html = '';
  var randomQuote = getRandomQuote();
  var quoteBox = document.getElementById('quote-box');

  html += '<p class="quote">' + randomQuote.quote + '</p>'
          + '<p class="source">' + randomQuote.source;

  if(randomQuote.hasOwnProperty('citation')) {
    html += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if (randomQuote.hasOwnProperty('year')) {
    html += '<span class="year">' + randomQuote.year + '</span>';
  }
  html += "</p>";
  
  quoteBox.innerHTML = html;
}


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.