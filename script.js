var ParaArray = ['occas sorted eved feat the wer life and humblame that the lay with bennet anxiouse patibut eps scarospect you name charlour',
            "Books contribute to every ones' lives in one way or another. The impact left on us by books can begin from",
            "uplifting our mood to making us proficient in a certain field. The books are a medium through which writers",
            "There are many kinds of books based on their size, packaging, and genres. An individual can read any book",
            "to gain knowledge about that particular field. Reading is an activity that is not bound for any particular age",
            "But it is suggested that children should be encouraged to read more books for it later becomes a good practice",
            "For general knowledge about anything, we seek books like encyclopedias, atlas, and dictionaries",
            "there are also those books that guide us while we are dealing with certain tasks like cookbooks, travel",
            "It is no news that books are a great source of entertainment as there are many kinds of readers",
            "fan of books like novels, poetry books, short stories, magazines, comics, etc. Sometimes reading also",
            "becomes an addiction, but in my opinion, it is a good kind of addiction that will only be beneficial for an",
            "the first printing press published book was developed by Johannes Gutenberg in Germany",
            "incident set a different mark in the history of humankind's development. From then to now, there have been",
            "Among all the information acquired from books, we tend to remember those which are vital and real to us",
            "The most beautiful things in the world cannot be seen or touched, they are felt with the heart.",
            "Why, sometimes I've believed as many as six impossible things before breakfast",
            "Just remember that the things you put into your head are there forever, he said. You might want to think about that",
            "You can tell yourself that you would be willing to lose everything you have in order to get something you want",
            "The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time",
            "He allowed himself to be swayed by his conviction that human beings are not born once and for all on the day their mothers give birth to them",
            "There is an idea of a Patrick Bateman, some kind of abstraction, but there is no real me, only an entity, something illusory"];
var text = "";
var i = 0;
var active = false;
var t2 = document.getElementById("t2");
var innerHTML = t2.innerHTML;
var st_time = 0;
var curr_time = 0;
var errors = 0;
var score = 0;

function getCode(event) {
    var x = event.keyCode;
    check(x, text.charCodeAt(i))
}

function highlight(i) {
    innerHTML = text.substring(0, i) + "<span class='highlight'>" + text.charAt(i) + "</span>" + text.substring(i + 1, text.length);
    t2.innerHTML = innerHTML;
}
var dupli = false;
function check(x, letter) {
    if (x == letter) {
        if (i == 0) {
            st_time = Math.floor(Date.now() / 1000);
        } 
        else if (i == text.length - 1) {
            curr_time = Math.floor(Date.now() / 1000);
            setWPM();
            getword();
            //reset cursor 
            i = -1;
        }
        i++;
        t2.innerHTML = text;
        highlight(i);
        dupli = false;
    } else if (dupli == false) {
        errors++;
        dupli = true;
    }
}

function setfocus() {
    active = true;
    document.getElementById('myInput').focus();
    highlight(i)
}

function checkfocus() {
    if (active) {
        active = false;
    } else {
        t2.innerHTML = text;
        active = true;
    }
}

function getword() {
    var index = Math.floor(Math.random() * ParaArray.length);
    text = ParaArray[index]
    t2.innerHTML = text;
}

function setWPM(secs) {
    var sec = curr_time - st_time;
    var min = sec / 60;
    var words = text.split(' ').length;
    var wpa = Math.round(words / min);
    var wp = document.getElementById('wpa');
    wp.innerHTML = wpa;


    //ERRORS
    var errorsObj = document.getElementById('errors');
    errorsObj.innerHTML = errors;

    var scoreObj = document.getElementById('score');
    scoreObj.innerHTML = wpa * words - (1.5 * errors);
}

// function blink(){
//     highlight(i);
//     var myvar =  setInterval(function(){ blink();}, 3000);  
//     t2.innerHTML = text;
// }   
// blink()
