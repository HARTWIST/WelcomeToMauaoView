function login(){
    var question = prompt("Pls insert a command");
    var reponse = "move right";
    var reponse2 = "take a photo";
    var reponse3 = "move left";
    if(question.toLowerCase() === reponse){
            parBis();
        }else{
            if(question.toLowerCase() === reponse2){
                parBis2();
            }else{
                if(question.toLowerCase() === reponse3){
                    parBis3();
                }else{
                    alert("Wrong Input... Try again");
                }
            }
        }
    function parBis(){
        window.location.href = '15.html';
    }
    function parBis2(){
        window.location.href = '14photo.html';
    } 
    function parBis3(){
        window.location.href = '13.html';
    }     
}
function leave(){
    var question = alert("A penguin! what's it doing here?");
    window.location.href = '14.html';  
}