function login(){
    var question = prompt("Pls insert a command");
    var reponse = "move forward";
    var reponse2 = "take a photo";
    var reponse3 = "move backwards";
    var reponse4 = "move right";
    if(question.toLowerCase() === reponse){
            parBis();
        }else{
            if(question.toLowerCase() === reponse2){
                parBis2();
            }else{
                if(question.toLowerCase() === reponse3){
                    parBis3();
                }else{
                    if(question.toLowerCase() === reponse4){
                        parBis4();
                    }else{
                        alert("Wrong Input... Try again");
                    }
                }
            }
        }
    function parBis(){
        window.location.href = '14.html';
    }
    function parBis2(){
        window.location.href = '13photo.html';
    } 
    function parBis3(){
        window.location.href = '7.html';
    }
    function parBis4(){
        window.location.href = '16.html';
    }       
}
function leave(){
    var question = alert("They look cute!");
    window.location.href = '13.html';  
}