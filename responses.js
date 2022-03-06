
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
        return "Hey there,I am Blahaj your mental health friend. How can I help you today?";
    } 
    
    if (input == "goodbye") {
        return "Talk to you later!";
    }
    
    if (input == "What do you do?" )   {
        return  "Thanks for asking! I am your mental health friend! I've been trained to support you through any issues you are dealing with. Want to tell me what's wrong? I'm all ears! Technically, I'm a computer that's been trained by a human to assist you, so I don't have real ears... But I like to think of myself as human!";
    } 
   if (input=="Thanks" ){
        return "Happy to help!"
    } 
     if (input=="I think I have anxiety")
 {
        return"Anxiety is very common! A lot of people struggle with it. Anxiety can happen when our brain is low on the hormones dopamine, serotonin, \noxytocin, and endorphin. But don't worry! I can teach you how to boost them so you feel better! Which one do you want to start with?";
    }
    if (input=="joke"){
        return "Why did the hipster burn his mouth? He drank the coffee before it was cool."||
        "What did the buffalo say when his son left for college? Bison."
    }
    if ("I think I have depression"){
        return "Depression is something a lot of people experience. You are not alone! Depression can happen when our brain is low on the hormones dopamine, serotonin, oxytocin, and endorphin. But don't worry! I can teach you how to boost them so you feel better! Which one do you want to start with?";
    }
}
