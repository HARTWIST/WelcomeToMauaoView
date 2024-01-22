function login(){
    var question = prompt("Pls insert a command");
    var reponse = "move forward";
    var reponse2 = "inspect";
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
        window.location.href = '17.html';
    }
    function parBis2(){
        window.open("https://store.steampowered.com/app/1223500/Umurangi_Generation/", "_blank");
    } 
    function parBis3(){
        window.location.href = '13.html';
    }     
}
function leave(){
    var question = alert("A penguin! what's it doing here?");
    window.location.href = '14.html';  
}