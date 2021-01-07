var random= "";
var word1= "";
var btn = new Array();
var letter= new Array();
var answer = "";

function getWord(){
    
    clearit();
    word1= array[Math.floor(Math.random()*array.length)];
    random= shuffle(word1);
    //document.getElementById("random").innerHTML= random;

} 

function createbtn(){

    var i= 0;

    for(i=0;i<random.length;i++)
    {
      //letter[i]= document.createTextNode(random[i]);
      btn[i]= document.createElement("button");
      btn[i].innerText= random[i].valueOf();
      btn[i].classList.add("btn1");
      //btn[i].appendChild(letter[i]);
      document.body.appendChild(btn[i]);
    }
    btn[0].addEventListener('click', function(){ select(0); } );
    btn[1].addEventListener('click', function(){ select(1); } );
    btn[2].addEventListener('click', function(){ select(2); } );
    btn[3].addEventListener('click', function(){ select(3); } );
    btn[4].addEventListener('click', function(){ select(4); } );
    btn[5].addEventListener('click', function(){ select(5); } );
    btn[6].addEventListener('click', function(){ select(6); } );
    btn[7].addEventListener('click', function(){ select(7); } );
    btn[8].addEventListener('click', function(){ select(8); } );
    btn[9].addEventListener('click', function(){ select(9); } );
    btn[10].addEventListener('click', function(){ select(10); } );

}

function select(selected)
{ 
  letter.push(random[selected]);
  document.getElementById('selectword').innerHTML= letter;
  btn[selected].remove();
}


function result()
{

    var ans= word1.split("")
    if(JSON.stringify(letter) == JSON.stringify(ans))
      document.getElementById('selectword').innerHTML= "YES!! You are right";
    else if(letter.length==0)
      document.getElementById('selectword').innerHTML= "Wrong Attempt!! try again";
    else
      document.getElementById('selectword').innerHTML= "NO!! The correct answer is :" + word1;

    letter= [];
    answer= [];

}

function clearit(){
  document.getElementById('selectword').innerHTML= "";

  for(var i= 0;i<random.length;i++)
      btn[i].remove();

  letter= [];
  answer= [];
  return;
}

// function checkAnswer(){

//   var ans= document.getElementById("answer").value; 

//     if(ans==word1)
//        {
//           document.getElementById("result").innerHTML= "YES! The Answer is Correct: "+word1; 
//         }
//     else  
//         {
//           document.getElementById("result").innerHTML= "OHH NO! The actual word is: "+word1;
//         }

// }

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
  
  var array= ["abandon",
    "ability",
    "abortion",
    "above",
    "absence",
    "absolute",
    "absorb",
    "academic",
    "access",
    "accident",
    "accurate",
    "achievement",
    "acknowledge",
    "action",
    "active",
    "activity",
    "adjustment",
    "advance",
    "advantage",
    "adventure",
    "aggressive",
    "airport",
    "amazing",
    "apartment",
    "application",
    "architect",
    "argument",
    "artist",
    "athlete",
    "atmosphere",
    "barrel",
    "barrier",
    "basket",
    "battery",
    "beach",
    "beauty",
    "because",
    "before",
    "behavior",
    "behind",
    "belief",
    "biological",
    "blanket",
    "boundary",
    "breakfast",
    "brilliant",
    "bullet",
    "cabin",
    "calculate",
    "campaign",
    "cancer",
    "capable",
    "capacity",
    "capital",
    "captain",
    "carbon",
    "career",
    "catch",
    "celebrate",
    "ceremony",
    "challenge",
    "chamber",
    "champion",
    "chapter",
    "character",
    "chocolate",
    "climate",
    "collapse",
    "conclude",
    "corner",
    "creation",
    "danger",
    "dealer",
    "death",
    "debate",
    "decision",
    "declare",
    "decrease",
    "destruction",
    "disease",
    "double",
    "earth",
    "easy",
    "economic",
    "edge",
    "education",
    "effect",
    "effort",
    "element",
    "emphasis",
    "enhance",
    "enjoy",
    "enough",
    "equal",
    "evidence",
    "explain",
    "extreme",
    "factor",
    "factory",
    "faith",
    "family",
    "famous",
    "farmer",
    "fashion",
    "fighting",
    "finish",
    "follow",
    "flavour",
    "force",
    "garden",
    "garlic",
    "gender",
    "general",
    "generate",
    "gesture",
    "global",
    "golden",
    "governor",
    "graduate",
    "ground",
    "growth",
    "habit",
    "handle",
    "happen",
    "happy",
    "healthy",
    "heart",
    "heavy",
    "highway",
    "ideal",
    "identity",
    "ignore",
    "illness",
    "image",
    "imagine",
    "immediate",
    "impact",
    "implement",
    "important",
    "impossible",
    "impress",
    "improve",
    "incident",
    "initial",
    "innocent",
    "issue",
    "justice",
    "killer",
    "knock",
    "knowledge",
    "later",
    "laugh",
    "launch",
    "league",
    "lemon",
    "lesson",
    "letter",
    "level",
    "liberal",
    "library",
    "lunch",
    "machine",
    "maintain",
    "manner",
    "mask",
    "master",
    "match",
    "matter",
    "medical",
    "medium",
    "meeting",
    "member",
    "memory",
    "mental",
    "million",
    "mission",
    "mistake",
    "mutual",
    "narrow",
    "natural",
    "nature",
    "negative",
    "newspaper",
    "noise",
    "offense",
    "offer",
    "office",
    "often",
    "online",
    "origin",
    "paper",
    "passage",
    "perform",
    "picture",
    "peace",
    "plastic",
    "point",
    "prepare",
    "present",
    "protect",
    "quote",
    "race",
    "rapid",
    "reason",
    "record",
    "recover",
    "reduce",
    "reject",
    "religion",
    "require",
    "safety",
    "salad",
    "salary",
    "scandal",
    "scenario",
    "scope",
    "security",
    "sharp",
    "signal",
    "sleep",
    "solution",
    "sound",
    "square",
    "state",
    "strategy",
    "talent",
    "target",
    "teaspoon",
    "theater",
    "tonight",
    "tower",
    "treat",
    "truth",
    "ugly",
    "uniform",
    "union",
    "unique",
    "useful",
    "usual",
    "version",
    "vessel",
    "victim",
    "victory",
    "video",
    "violent",
    "virtue",
    "virus",
    "visible",
    "vision",
    "visit",
    "walk",
    "wander",
    "waste",
    "watch",
    "water",
    "wealth",
    "weapon",
    "weight",
    "welcome",
    "willing",
    "withdraw",
    "within",
    "without",
    "woman",
    "wonder",
    "wrong",
    "yellow",
    "yield",
    "young",
    "youth",
    "zone"]