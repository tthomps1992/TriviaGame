

function submitAnswers() {
    let total = 5;
    let score = 0;

    //User input 
    let q1 = document.forms["triviaForm"]["q1"].value;
    let q2 = document.forms["triviaForm"]["q2"].value;
    let q3 = document.forms["triviaForm"]["q3"].value;
    let q4 = document.forms["triviaForm"]["q4"].value;
    let q5 = document.forms["triviaForm"]["q5"].value; 



//validation

for (i = 1; i <= total; i++) {
    if (eval('q' + i) == null || eval('q' + i) == ' ') {
        alert('You missed question '+ i );
        return false;
    }
}
// set correct answers 
let answers = ["b", "a", "d", "c", "b"];

// check answers 
for (i = 1; i < total; i++) {
    if (eval('q' + i) == answers[i - 1]){
        score++; 
    }
}

// Display answers 
let results = document.getElementById('results');

results.innerHTML = '<h3>You Scored <span>' + score + '</span>out of' + total + '</span></h3>';

alert('You scored + ' + score+ ' out of ' + total);

return false;


}



