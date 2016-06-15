/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function reset(){
    $("#text").html(" ");
}

function updateLineWidth(){
    var width = $("#text").width();
    if(width == 0){
        $("#line").width(200);
    }else{
        $("#line").width(width);
    }
}

function randomChar(){
    var chars = "abcdefghijklmnopqrstuvwxyz";
    return chars.charAt(Math.floor(Math.random() * 26));
}

function changeLetters(){
    $("span[data-char]").each(function(){
        if(Math.floor(Math.random() * 5) == 0){
            $(this).html($(this).attr("data-char"));
            $(this).removeAttr("data-char");
        }else{
            $(this).html(randomChar());
        }
    });
}

function writeLetter(letter){
    var text = "<span data-char='" + letter + "'> " 
            + randomChar() + "</span>";
    $("#text").html($("#text").html() + text);
}

function writeLetters(word){
    for(var i = 0; i < word.length; i++){
        var letter = word.charAt(i);
        setTimeout(writeLetter, i*50, letter);
    }
}

function writeWord(word){
    var slowWrite = Math.floor(Math.random() * 2);
    if(slowWrite){
        $("#text").html(" ");
        writeLetters(word);
    }else{
        $("#text").html(word);
    }
}

function writeText(text){
    var index = -1;
    index = text.indexOf(" ");
    if(index > 0){
        var toWriteNow = text.substring(0, index);
        var toWriteLater = text.substring(index + 1);
        writeWord(toWriteNow);
        setTimeout(function() {writeText(toWriteLater);}, 1250);
    }else if(text.length > 0){
        writeWord(text);
        setTimeout(function() {reset();}, 1250);
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
    setInterval(changeLetters, 50);
    setInterval(updateLineWidth, 20);
});
