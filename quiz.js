const quizForm = document.getElementById('quizForm');




function getSelectedOption(question) {
    const selectedOption = quizForm.elements[question].value;
    return selectedOption;
}


function calculateScore(ans1,ans2,ans3,ans4,ans5,ans6,ans7,ans8,ans9,ans10,ans11,ans12,ans13,ans14,ans15){
    score = 0
    if(ans1 == "c"){
        score += 1
    }
    if(ans2 == "b"){
        score += 1
    }
    if(ans3 == "a"){
        score += 1
    }
    if(ans4 == "c"){
        score += 1
    }
    if(ans5 == "b"){
        score += 1
    }


    return score
}

quizForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the selected options for each question
    
    const ans1 = getSelectedOption('q1');
    const ans2 = getSelectedOption('q2');
    const ans3 = getSelectedOption('q3');
    const ans4 = getSelectedOption('q4');
    const ans5 = getSelectedOption('q5');

    const ans6 = getSelectedOption('q6');
    const ans7 = getSelectedOption('q7');
    const ans8 = getSelectedOption('q8');
    const ans9 = getSelectedOption('q9');
    const ans10 = getSelectedOption('q10');
    const ans11 = getSelectedOption('q11');
    const ans12 = getSelectedOption('q12');
    const ans13 = getSelectedOption('q13');
    const ans14 = getSelectedOption('q14');
    const ans15 = getSelectedOption('q15');


    score = calculateScore(ans1,ans2,ans3,ans4,ans5,ans6,ans7,ans8,ans9,ans10,ans11,ans12,ans13,ans14,ans15)
    console.log(score)
}); 



