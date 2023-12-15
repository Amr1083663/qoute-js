function generate() {

    var qoutes = {
        "- Walt Disney": '"The Way Get Started Is To Quit Talking And Begin Doing."',
        "- Winston Churchill": '"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty."',
        "- Will Rogers": '"Don`t Let Yesterday Take Up Too Much Of Today."',
        "- Martin lennon": '"You Learn More From Failure Than From Success. Don`t Let It Stop You. Failure Builds Character."',
        "- Vince Lombardi": '"It`s Not Whether You Get Knocked Down, It`s Whether You Get Up."',
        "- Mahatma Gandhi": '"Live as if you were to die tomorrow. Learn as if you were to live forever"',
        "- Martin Luther King Jr": '"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."',
        "- Albert Einstein": '"Strive not to be a success, but rather to be of value."',
        "- Earl Nightingale": '"We become what we think about."',
        "- Jesus": '"Ask and it will be given to you; search, and you will find; knock and the door will be opened for you."',
        "- Ralph Waldo Emerson": '"The only person you are destined to become is the person you decide to be."',
        "- Henry David Thoreau": '"Go confidently in the direction of your dreams.  Live the life you have imagined."',
        "- Erma Bombeck": '"When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me."',
        "- Booker T. Washington": '"Few things can help an individual more than to place responsibility on him, and to let him know that you trust him."'
    }


    var authors = Object.keys(qoutes);
    // console.log(authors);   test

    var author =  authors[Math.floor(Math.random() * authors.length)]


    var qoute  = qoutes[author];


    document.getElementById("author").innerHTML = author
    document.getElementById("qoute").innerHTML = qoute


    document.getElementById("h6").style.display = "none"
    document.getElementById("icon").style.display = "none"


  
}


window.onload = function(){
    // generate()





  }



 



//Fisher-Yates Shuffle Modern Algorithm  

  var arr = ["a","b","c","d","f","g" ]
  var i = arr.length , j , temp ;

  while (--i > 0) {

    j = Math.floor(Math.random() * (i+1));
    temp = arr[j];
     arr[j] =  arr[i];
     arr [i] = temp;
    
  }


console.log(arr);