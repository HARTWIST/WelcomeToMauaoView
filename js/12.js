function login(){
    var question = prompt("Pls insert a command");
    var reponse = "move backwards";
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
        window.location.href = '11.html';
    }
    function parBis2(){
        window.location.href = '12photo.html';
    }    
}
function leave(){
    var question = alert("They look peaceful!");
    window.location.href = '12.html';  
}