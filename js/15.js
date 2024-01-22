function login(){
    var question = prompt("Pls insert a command");
    var reponse = "move right";
    var reponse2 = "take a photo";
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
        window.location.href = '14.html';
    }
    function parBis2(){
        window.location.href = '15photo.html';
    }    
}
function leave(){
    var question = alert("It's doing it jail time :(");
    window.location.href = '15.html';  
}