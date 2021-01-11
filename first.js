var random= "";// for shuffling word
var word1= "hello";// the correct answer would in word1
var btn = new Array();// to create the button in an array
var letter= new Array();// for collecting letters from button press
var answer = "";// answer varable
var score = 0; // score count
var lives= 3;// no. of lives
var count= 0;// to increase level
var attempt= 1;// for atleast one attempt with given word
var removeh=0;
var h1;
var h2;
var h3;

function getWord(){

  if(attempt==0) //This is a condition so that getword wont work without an attempt
      return;
  else
  {
    clearit();
    if(count.valueOf()<2)
      {
        word1 = level1[Math.floor(Math.random()*level1.length)];
        document.getElementById('levels').innerHTML= "Level 1"
      }
    else if(count.valueOf()<4)
    {
        word1 = level2[Math.floor(Math.random()*level2.length)];
        document.getElementById('levels').innerHTML= "Level 2"
    }
    else if(count.valueOf()<6)
    {
        word1 = level3[Math.floor(Math.random()*level3.length)];
        document.getElementById('levels').innerHTML= "Level 3"
    }
    else if(count.valueOf()<8)
    {
        word1 = level4[Math.floor(Math.random()*level4.length)];
        document.getElementById('levels').innerHTML= "Level 4"
    }
    else 
    {
        word1 = level5[Math.floor(Math.random()*level5.length)];
        document.getElementById('levels').innerHTML= "Level 5"
    }

    //console.log(word1);
    random= shuffle(word1);
    document.getElementById("points").innerHTML = score.valueOf();
    //document.getElementById("lifeline").innerHTML = lives.valueOf();
    attempt= 0;
    createbtn();
  }

} 

function createbtn(){

    var i= 0;

    for(i=0;i<random.length;i++)
    {
      btn[i]= document.createElement("button");
      btn[i].innerText= random[i].valueOf();
      btn[i].classList.add("game-button","orange");
      document.body.appendChild(btn[i]);
    }

    if(count.valueOf()<2)
    {
      btn[0].addEventListener('click', function(){ select(0); } );
      btn[1].addEventListener('click', function(){ select(1); } );
      btn[2].addEventListener('click', function(){ select(2); } );
    }
    else if(count.valueOf()<4)
    {
      btn[0].addEventListener('click', function(){ select(0); } );
      btn[1].addEventListener('click', function(){ select(1); } );
      btn[2].addEventListener('click', function(){ select(2); } );
      btn[3].addEventListener('click', function(){ select(3); } );
     
    }
    else if(count.valueOf()<6)
    {
      btn[0].addEventListener('click', function(){ select(0); } );
      btn[1].addEventListener('click', function(){ select(1); } );
      btn[2].addEventListener('click', function(){ select(2); } );
      btn[3].addEventListener('click', function(){ select(3); } );
      btn[4].addEventListener('click', function(){ select(4); } );
    }
    else if(count.valueOf()<8)
    {
      btn[0].addEventListener('click', function(){ select(0); } );
      btn[1].addEventListener('click', function(){ select(1); } );
      btn[2].addEventListener('click', function(){ select(2); } );
      btn[3].addEventListener('click', function(){ select(3); } );
      btn[4].addEventListener('click', function(){ select(4); } );
      btn[5].addEventListener('click', function(){ select(5); } );  
    }
    else 
    {
      btn[0].addEventListener('click', function(){ select(0); } );
      btn[1].addEventListener('click', function(){ select(1); } );
      btn[2].addEventListener('click', function(){ select(2); } );
      btn[3].addEventListener('click', function(){ select(3); } );
      btn[4].addEventListener('click', function(){ select(4); } );
      btn[5].addEventListener('click', function(){ select(5); } );
      btn[6].addEventListener('click', function(){ select(6); } );
    }

}

function select(selected)
{ 
  letter.push(random[selected]);
  document.getElementById('selectword').innerHTML= letter;
  btn[selected].remove();
}


function result()
{
    // var heart= document.getElementById("heart");

    var ans= word1.split("")
    if(JSON.stringify(letter) == JSON.stringify(ans))
    {
       attempt= 1;
       score += 200;
       count += 1;
       document.getElementById("points").innerHTML = score.valueOf();
       tellanswer(1);
       clearit();
    }
    else if(letter.length==0)
    {
      document.getElementById('selectword').innerHTML= "Wrong Attempt!! try again";
    }
    else
     {

        attempt= 1;
        lives -= 1;
        //document.getElementById("lifeline").innerHTML = lives.valueOf();
        clearit();
        tellanswer(0);
        if(removeh.valueOf()==0)
        {
          h1= document.getElementById('heart1');
          h1.remove();
          removeh += 1;
        }
        else if(removeh.valueOf()==1)
        {
          h2= document.getElementById("heart2");
          h2.remove();
          removeh += 1;
        }
        else
        {
          h3= document.getElementById("heart3");
          h3.remove();
          removeh += 1;
        }
     }

    if(removeh.valueOf()==3)
    {
      clearit();
      score= 0;
      document.getElementById("points").innerHTML = score.valueOf();
      lives= 3;
      gameOver();
      count= 0;
      //document.getElementById("lifeline").innerHTML = lives.valueOf();
    }
    // letter= [];
    // answer= [];

}

function clearit(){
  document.getElementById('selectword').innerHTML= "_";

  for(var i= 0;i<random.length;i++)
      btn[i].remove();

  letter= [];
  answer= [];
  return;
}

function tellanswer(x)
{

var tell = document.getElementById("tellans");

tell.style.display = "block";

if(x==1)
  document.getElementById("correctword").innerHTML= "Yes the answer is: " + word1;
else
  document.getElementById("correctword").innerHTML= "No! the correct answer is: " + word1;

  window.onclick = function(event) {
       if (event.target == tell) {
         tell.style.display = "none";
       }
     }
}

function gameOver()
{
  // Get the gover
var g_over = document.getElementById("myModal");

// Get the button that opens the gover
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the gover
//var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the gover 
  g_over.style.display = "block";


// When the user clicks on <span> (x), close the gover
var restart = document.getElementById("restart");
restart.onclick = function(){
  location.reload()
  }

}

function shuffle(s) {
    var arr = s.split('');           // Convert String to array
    var n = arr.length;              // Length of the array
    
    for(var i=0 ; i<n-1 ; ++i) {
      var j = Math.floor(Math.random() * n);     // Get random of [0, n-1]
      var temp = arr[i];             // Swap arr[i] and arr[j]
      arr[i] = arr[j];
      arr[j] = temp;
    }
    
    s = arr.join('');                // Convert Array to string
    return s;                        // Return shuffled string
  }

  var level1= ["all","and","any","are", "bad", "bet", "big", "box", "boy", "bye","can", "car", "cat", "cup", "cut", "day", "did", "dog", "dry", "eat", "eve", "fly", "for", "get", "her", "hot", "huh", "man", "mom", "new", "not", "off", "old", "one", "our", "out", "pet", "put", "red", "run", "say",] 
  var level2= ['mass',	'bang',	'near',	'bear',	'beam','game',	'mars',	'tame',	'mate',	'free','date',	'Fred',	'grit',	'tied','hide',	'hear',	'here','hope',	'read',	'echo',	'cool',	'hole','cold',	'cafe',	'fire',	'quit',	'exit','from',	'move',	'rice',	'teen',	'four','zero',	'five','nine',	'come',	'came',	'live','life',	'good',	'stay',	'goes',	'frog','huge',	'hell',	'have',	'home',	'door','deer',	'need',	'feed',	'roof',	'fame','lame',	'kill',	'keep',	'leek',	'quit','tree',	'race',	'face',	'maze',	'lace']
  var level3= [ 'seven', 'world', 'about', 'again', 'heart', 'pizza', 'water', 'happy', 'sixty', 'board', 'month', 'death', 'green', 'music', 'fifty', 'three', 'party', 'piano', 'mouth', 'woman', 'sugar', 'amber', 'dream', 'apple', 'laugh', 'tiger', 'faith', 'earth', 'river', 'money', 'peace', 'forty', 'words', 'smile', 'abate', 'house', 'alone', 'watch', 'lemon', 'south', 'erica', 'anime', 'after', 'santa', 'women', 'admin','china']
  var level4= [ 'purple', 'orange', 'family', 'people', 'animal', 'father', 'yellow', 'circle', 'school', 'spring', 'monkey', 'mother' ,'winter', 'indian', 'strong', 'cookie', 'turkey', 'better', 'number', 'little', 'health', 'summer', 'donkey', 'things', 'flower', 'easter', 'pretty', 'island', 'church', 'before', 'garden', 'always', 'please', 'rocket', 'golden', 'rabbit', 'kitten', 'coming', 'spider', 'crayon', 'answer', 'making', 'farmer', 'indigo', 'almost', 'icicle', 'sticky', 'zipper', 'freely','raptor']
  var level5= [ 'perfect', 'tuesday', 'country', 'pumpkin', 'special', 'america', 'freedom', 'picture', 'husband', 'monster', 'seventy', 'nothing', 'sixteen', 'morning', 'journey', 'history', 'georgia', 'fifteen', 'amazing', 'rihanna', 'january', 'dolphin', 'teacher', 'forever', 'kitchen', 'holiday', 'welcome', 'jupiter', 'justice', 'diamond', 'courage', 'hundred', 'silence', 'someone', 'science', 'revenge', 'harmony', 'problem', 'awesome', 'penguin', 'youtube', 'blanket', 'england', 'dancing', 'musical']

  