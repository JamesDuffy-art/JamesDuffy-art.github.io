$(document).ready(function(){

var word1 = [
	"most luscious mustache",
	"largest forehead",
	"best Dan Andrews impression",
	"lifetime achievement in tiktok",
	"best Joker performance",
	"most rock solid abs",
	"sweetest ride",
];

var randomWord1 = word1[Math.floor(Math.random()*word1.length)];

var word2 = [
  "Robert Downey Jr",
  "Joe Exotic",
  "Dan Andrews",
  "Gal Gadot",
  "Willem Dafoe",
  "Joaquin Phoenix",
  "Dwayne 'The Rock' Johnson",
];

var randomWord2 = word2[Math.floor(Math.random()*word2.length)];

var word3 = [
  "'Tiger King'",
  "'Avengers Endgame'",
  "'COVID 2: Electric Boogaloo'",
  "'Cancelled Sequel No.93'",
  "'Man Gets Hit With Football'",
  "'Another Awful Disney Remake'",
  "'Fast and Furious 13'",
];

var randomWord3 = word3[Math.floor(Math.random()*word3.length)];

$( ".word1" ).html(randomWord1);
$( ".word2" ).html(randomWord2);
$( ".word3" ).html(randomWord3);

});