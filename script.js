// Github Repo List Request
let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        let myObj = JSON.parse(this.responseText);
        for (var i=0; i < myObj.length; i++) {
            addRepo(myObj[i].name);
        }
    }
};

newRequest.open("GET", "https://api.github.com/users/kuping/repos", true);
newRequest.send();

function addRepo(name) {
    var node = document.createElement("li");
    var textNode = document.createTextNode(name);
    node.appendChild(textNode);
    document.getElementById("repoList").appendChild(node);
}

// Jquery for Icons
$(document).ready(function(){
    $(".fab").hover(function(){
        $(this).css("font-size", "50px");
    }, function(){
        $(this).css("font-size", "28px");
    });
    // $(".icons").hover(function(){
    //     $(this).css("background-color", "lightblue");
    //     $(this).css("border-style", "ridge")
    // }, function(){
    //     $(this).css("background-color", "white");
    //     $(this).css("border-style", "none")
    // });
});
