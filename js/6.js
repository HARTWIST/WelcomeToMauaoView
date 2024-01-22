function login(){
    var question = prompt("Pls insert a command");
    var reponse = "move left";
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
        window.location.href = '7.html';
    }
    function parBis2(){
        window.location.href = '6photo.html';
    } 
    function parBis3(){
        window.location.href = '5.html';
    }     
}
function leave(){
    var question = alert("Berd!");
    window.location.href = '6.html';  
}