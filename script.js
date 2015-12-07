var epitaph = ["remembered by few<br>and missed by less","now she gets to lie down forever.<br>(it was what she'd always wanted)","no peeking! good luck.","gone, but scheduled to be forgotten,<br>in two hundred years.<br>thanks, acid rain.","in death, she finally <br> finished something she sta"];
var footnote = ["There are seven billion people on this planet. I know significantly less people than that.","Obviously I wanted more than that, but it doesn't matter. I'm dead. Deaaaaad.","1. I had a professor who'd print \"no peeking good luck\" between the cover page of tests and the actual test itself. I offered him a half eaten sandwich once. He didn't accept it.<br>2. In Legend of Zelda: Ocarina of Time, Adult Link pokes around a graveyard and finds cool stuff (music, a shield, money, and a hookshot.) If people dig up my grave, they won't find cool stuff (bones, gum wrappers, expired Chipotle coupons)","More or less, depending on environmental policy in the future.","\"Started.\" <a href=\"https://www.youtube.com/watch?v=R5SRqVSwv9E\">That's the joke.</a>"];

function generate(){
    var rand = Math.floor(Math.random() * epitaph.length);
    document.getElementById("epitaph").innerHTML = String(epitaph[rand]);
    document.getElementById("footnote").innerHTML = String(footnote[rand]);
}
