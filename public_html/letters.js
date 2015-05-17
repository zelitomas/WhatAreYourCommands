/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function() {
    var x = location.hash;
    if(x === ""){
        x = "#SAMARITAN OUT OF ORDER!";
    }
    x = x.substring(1).toUpperCase();
    $("#text").html(x);
});
