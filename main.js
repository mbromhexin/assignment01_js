

var qoutesList = [
    {
        qoute:"“Be yourself; everyone else is already taken.”",
        author:"― Oscar Wilde",
    },
    {
        qoute:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        author:"― Marilyn Monroe",
    },
    {
        qoute:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author:"― Albert Einstein",
    },
    {
        qoute:"“A room without books is like a body without a soul.”",
        author:"― Marcus Tullius Cicero",
    },
    {
        qoute:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        author:"― Bernard M. Baruch",
    },
    {
        qoute:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        author:"― Dr. Seuss",
    },
    {
        qoute:"“You only live once, but if you do it right, once is enough.”",
        author:"― Mae West",
    },
    {
        qoute:"“Be the change that you wish to see in the world.”",
        author:"― Mahatma Gandhi",
    },
    {
        qoute:"“In three words I can sum up everything I've learned about life: it goes on.”",
        author:"― Robert Frost",
    },
    {
        qoute:"“If you tell the truth, you don't have to remember anything.”",
        author:"― Mark Twain",
    },
]


var quoteOutput = document.getElementById("quoteOutput")
var authorOutput = document.getElementById("authorOutput")



var index = generateIndex();
var prevIndex;

function generateQuote(){
    while(index != prevIndex){
        quoteOutput.innerHTML = qoutesList[index].qoute
        authorOutput.innerHTML = qoutesList[index].author
        prevIndex = index
        console.log(index)
    }
    index = generateIndex();
}


function generateIndex(){
    var result = Math.floor(Math.random()*10)
    return result
}









