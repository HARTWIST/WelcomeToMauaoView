function login(){
    var question = prompt("Pls insert a command");
    var reponse = "move forward";
    var reponse2 = "move backwards";
    if(question.toLowerCase() === reponse){
            parBis();
        }else{
            if(question.toLowerCase() === reponse2){
                parBis2();
            }else{
                alert("Wrong Input... Try again");
            }
        }
    function parBis(){
        window.location.href = '6.html';
    }
    function parBis2(){
        window.location.href = '4.html';
    }    
}
function leave(){
    var question = alert("Bird!");
    window.location.href = '1.html';  
}