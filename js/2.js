function login(){
    var question = prompt("Pls insert a command");
    var reponse = "move forward";
    var reponse2 = "take a photo";
    var reponse3 = "move backwards";
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
        window.location.href = '3.html';
    }
    function parBis2(){
        window.location.href = '2photo.html';
    } 
    function parBis3(){
        window.location.href = '1.html';
    }     
}
function leave(){
    var question = alert("Bird!");
    window.location.href = '2.html';  
}