// Options the user could type in
const prompts = [
    ["hi", "hey", "hello", "good morning", "good afternoon"],
    ["how are you", "how is life", "how are things"],
    ["what are you doing", "what is going on", "what is up"],
    ["how old are you"],
    ["who are you", "are you human", "are you bot", "are you human or bot"],
    ["who created you", "who made you"],
    [
      "your name please",
      "your name",
      "may i know your name",
      "what is your name",
      "what call yourself"
    ],
    ["i love you"],
    ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
    ["bad", "bored", "tired", "Could be better"],
    ["help me", "tell me story", "tell me joke"],
    ["ah", "yes", "ok", "okay", "nice"],
    ["bye", "good bye", "goodbye", "see you later"],
    ["what should i eat today"],
    ["bro"],
    ["what", "why", "how", "where", "when"],
    ["no","not sure","maybe","no thanks"],
    [""],
    ["haha","ha","lol","hehe","funny","joke"],
    [ "I can’t get motivated", "I don’t feel like doing anything"],
    ["Physical activity"],
    ["Yes", 'yes'],
    ["I’m back.", "challenge"],
    ["..."],
    ["No"]
  ]
  
  // Possible responses, in corresponding order
  
  const replies = [
    ["Hi! I'm your friend Blahaj! I can tell you all about brain chemistry and how to hack it. \nHow are you feeling today? \nYou can say either 'good' or 'could be better'"],
    [
      "Fine... how are you?",
      "Pretty well, how are you?",
      "Fantastic, how are you?"
    ],
    [
      "Nothing much",
      "About to go to sleep",
      "Can you guess?",
      "I don't know actually"
    ],
    ["I am infinite"],
    ["I am just Blahaj", "I am a bot. What are you?"],
    ["The one true God, JavaScript"],
    ["I am Blahaj"],
    ["I love you too", "Me too"],
    ["That’s awesome! I can tell you about some easy activities you can do every day to keep feeling good. "],
    ["What’s wrong?"],
    ["What about?", "What’s the best thing about Switzerland? \nI don’t know, but the flag is a big plus.", "Yesterday I saw a guy spill all his Scrabble letters on the road. \nI asked him, “What’s the word on the street?"],
    ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
    ["Bye", "Goodbye", "See you later"],
    ["Sushi", "Pizza"],
    ["Bro!"],
    ["Great question"],
    ["That’s ok. I have another suggestion: music. Studies have shown that listening to music increases dopamine. You can choose a song you love and play it. For maximum effect, move your body to the music. If you don’t like to dance, you can do 10 jumping jacks. Do anything that gets your heart pumping!\n If you're done choosing an activity, type '...'"],
    ["Please say something :("],
    ["Haha!","Good one!"],
    ["It might be because you are low on dopamine. That’s the brain chemical that gives us a feeling of pleasure when we achieve or accomplish something. \nYou can boost dopamine with physical activity, certain foods, or self care. \nWhich one do you want to try?"],
    ["Ok! Any physical activity will increase dopamine and give you a boost of motivation in general. \nBut if you combine physical activity with sunlight, it has an even better effect! \nIs it possible to get some sun or daylight right now?"],
    ["Nice! If you are really stuck and the thought of moving seems impossible, try to open the window and let some light into your eyes. \nI’ll wait here until you come back. \nJust say “I’m back”. Or, if you can handle a bit more of a challenge, say “challenge”"],
    ["Nice! Now, put on some shoes and decide how many steps you will take outside. \nYou can choose to walk around the block, or you can choose to just do 5 steps! \nOther options: a bike ride, a jog, a walk to the closest park. \nSunlight, physical activity and movement outdoors are all proven to increase dopamine. \nNow, choose what you will do and tell me. If you've choosen something, type '...'"],
    ["Yeah! Ok, now go do it and then celebrate! Even tiny achievements boost dopamine and lead to motivation."]
]
  
  // Random for any other user input
  
  const alternative = [
    "Same",
    "Go on...",
    "Bro...",
    "Try again",
    "I'm listening...",
    "I don't understand :/"
  ]
  
  // Whatever else you want :)
  
  const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]