function login(){
    var question = prompt("Pls insert a command");
    var reponse = "move forward";
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
        window.location.href = '16.html';
    }
    function parBis2(){
        window.location.href = '17photo.html';
    }    
}
function leave(){
    var question = alert("I think therefore I am");
    window.location.href = '17.html';  
}