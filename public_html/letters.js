/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function prepareForText(number){
    var text = "";
    var i = 0;
    for(i = 0; i < number; i++){
        text = text + "<span id='" + i +"'></span>"
    }
    $("#text").html(text);
}

function reset(){
    $("#text").html(" ");
}

function writeWord(word){
    $("#text").html(word);
}

function writeText(text){
    var index = -1;
    index = text.indexOf(" ");
    if(index > 0){
        var toWriteNow = text.substring(0, index);
        var toWriteLater = text.substring(index + 1);
        writeWord(toWriteNow);
        setTimeout(function() {writeText(toWriteLater);}, 750);
    }else if(text.length > 0){
        writeWord(text);
        setTimeout(function() {reset();}, 750);
    }
    else{
        reset();
    }
    
}

$(document).ready(function() {
    var x = decodeURIComponent(location.hash);
    if(x === ""){
        x = "#SAMARITAN OUT OF ORDER!";
    }
    x = x.substring(1).toUpperCase();
    $("#text").html(x);
    writeText(x);
});
