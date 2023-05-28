function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if (input == "who is the founder of study point") {
        return "Prof.Poonam Singh";
    } else if (input == "who is the co-founder of study point") {
        return "Prof. Vishal Gada/Prof.Amisha Singh"; 
    } else if (input == "who invented you") {
        return "The web architects";
    } else if (input == "what is the name of the classes") {
        return "Study Point";
    } else if (input == "what is your name") {
        return "Study Point bot";
    } else if (input == "what is the fees of the classes") {
        return "please contact here- 9370993954/9028937998/8999525059";
    } else if (input == "what is the name of the owner") {
        return "Prof. Poonam Singh";
    } else if (input == "from which standard admissions are open") {
        return "1 to 12 Science&Commerce both";
    } else if (input == "from which language you are created") {
        return "Personal Data Is Not Sharable";
    } else {
        return "For more information : +91 93709 93954!";
    } 
    
}