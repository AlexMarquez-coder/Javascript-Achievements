"use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset');

    myButton.addEventListener('click', function(){
        main();
    })

    myReset.addEventListener('click', function(){
        location.reload(); /* hier komt jouw code */
    })

    function main(){
         let dezeTextWordtHet = makeThisSentence();
         myText.innerHTML = dezeTextWordtHet;
         sayItLoud(dezeTextWordtHet); // say something nice say it loud
         selectThisImage(); // show a nice image
    }
    
    
    
    function randomizer(range = 1){ 
        // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
        return Math.floor((Math.random() * range));
    }
    
    
    function makeThisSentence(){
        let index = randomizer(arrayLength);
        let woord1 = onderwerp[index];
        let index2 = randomizer(arrayLength2);
        let woord2 = werkwoord[index2];
        let index3 = randomizer(arrayLength3);
        let woord3 = restwoord[index3];
        let outputString = woord1 + " " + woord2 + " " + woord3;
        return outputString;
    }
    
    function selectThisImage(){
        let index = randomizer(arrayLength);
        myImage.src = plaatjes[index]; 
    }
    
    function sayItLoud (textString) {
      let message = new SpeechSynthesisUtterance(textString);
      let voices = window.speechSynthesis.getVoices();
      message.voice = voices[1];
      message.pitch = 1; // range between 0 and 2
      message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
      window.speechSynthesis.speak(message);
    }
    
    
    
    const onderwerp = ["He", "Alex", "Daniel"];
    const werkwoord = ["walks", "learns", "drinks"];
    const restwoord = ["hard", "at school", "coffee"];
        
    let plaatjes = ["https://bilborecords.be/sites/default/files/styles/large/public/Daft%20Punk%20-%20Random%20Access%20Memories.jpg?itok=ovOkTEak", "https://images.squarespace-cdn.com/content/v1/51465ecde4b0b46e7e431b64/1385493925345-EUSXMZ1QE1DD18G50VPL/ke17ZwdGBToddI8pDm48kLxnK526YWAH1qleWz-y7AFZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVFUQAah1E2d0qOFNma4CJuw0VgyloEfPuSsyFRoaaKT76QvevUbj177dmcMs1F0H-0/domain.png?format=500w", "https://miro.medium.com/max/500/1*B8c1ED3QV_yaa6PAWqDgMw.png", "https://docs.juce.com/master/tutorial_random_screenshot1.png"]
    let arrayLength = onderwerp.length;
    let arrayLength2 = werkwoord.length;
    let arrayLength3 = restwoord.length;