



document.getElementById("font1").placeholder =
("Write notes here then save it as an Email" +"\n\n\n"+
"Font-Family" +"\n"+
"Changes the font family of certain words, sentences, paragraphs, etc." +"\n"+
"p { font-family:New Century Schoolbook, Times, serif; }" +"\n\n"+
"Font-Style" +"\n"+
"Changes text: normal, oblique, and italics." +"\n"+
"h1 { font-style: oblique; } or p { font-style: normal; }"   +"\n\n"+
"Font-Weight" +"\n"+
"Used to specify the weight of the font." +"\n"+
"h2 { font-weight: 800; } or h2 { font-weight: normal; }"   +"\n\n"+
"Font-Size" +"\n"+
"Used to modify the size of the displayed font." +"\n"+
"h3 { font-size: large; } or h3 { font-size: 12pt; } "
);

document.getElementById("text1").placeholder =
("Write notes here then save it as an Email" +"\n\n"+
"Text-Decoration" +"\n"+
"Allows text to be decorated through one of five properties:" +"\n"+
"underline, overline, line-through, blink, none." +"\n\n"+
"Text-Transform"  +"\n"+
"Allows for capitalizing the first letter of each word (capitalize)" +"\n"+
"capitalizing all letters of a word (uppercase)" +"\n"+
"h1 { text-transform: uppercase; }" +"\n"+
"h2 { text-transform: capitalize; }"
);

document.getElementById("box1").placeholder =
("Write notes here then save it as an Email" +"\n\n\n"+
"Margin" +"\n"+
"Sets eihter top, left, bottom, right margin of choosing"  +"\n\n"+
"Padding" +"\n"+
"Adds space between border and content"  +"\n\n"+
"Border" +"\n"+
"Can add border width height and even color"  +"\n\n"+
"Width" +"\n"+
"Can change the width of elements and more"  +"\n\n"+
"Height" +"\n"+
"Can change the height of elements of your choice"  +"\n\n"+
"Float" +"\n"+
"Alows text to wrap around an element"
);

document.getElementById("color1").placeholder =
("Write notes here then save it as an Email" +"\n\n\n"+
"Color"+"\n"+
"Changes color of text" +"\n\n"+
"Background-Color"+"\n"+
"Changes background color" +"\n\n"+
"Background-image"+"\n"+
"Can set an image background" +"\n\n"+
"Background-repeat"+"\n"+
"Make backgournd like no repeat"
);

// ----------------------btns--------------------------
document.getElementById("home").onclick = home;
function home() {
  window.open(" ");
}

document.getElementById("htmlLink").onclick = htmlLink;
function htmlLink() {
  window.open(" ");
}


document.getElementById("myBtn1").onclick = myBtn1;
function myBtn1() {
  window.open("https://codepen.io/NodNyLRB/embed/ExgNwXv");
}

document.getElementById("myBtn2").onclick = myBtn2;
function myBtn2() {
  window.open("https://codepen.io/NodNyLRB/embed/jOMVGzq");
}

document.getElementById("myBtn3").onclick = myBtn3;
function myBtn3() {
  window.open("https://codepen.io/NodNyLRB/embed/vYXyezP");
}

document.getElementById("myBtn4").onclick = myBtn4;
function myBtn4() {
  window.open("https://codepen.io/NodNyLRB/embed/LYRbzag");
}

document.getElementById("restart").onclick = restart;
function restart() {
  location.reload();
}
