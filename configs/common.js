function display_words(){
    var iframe = document.getElementById("wordPage");
    if(iframe.style.visibility == 'hidden') iframe.style.visibility = 'visible';
    else iframe.style.visibility = "hidden";
}
function display_des(){  
    var $cnLines = document.getElementsByClassName("des");
    for (var i = 0; i < $cnLines.length; i++) {
        var line = $cnLines[i];
        if(line.title) { line.innerHTML = line.title; line.removeAttribute("title"); line.className="des off"; }
        else if(line.innerText!="") {line.title=line.innerHTML; line.innerHTML = ""; line.className="des on"; }
        line.style.color=font_default_color;
    }
}
function display_lines(){  
    var $cnLines = document.getElementsByClassName("src");
    for (var i = $cnLines.length - 1; i >= 0; i--) {
        if ($cnLines[i].className == "src line")
            $cnLines[i].className = "src para";
        else
            $cnLines[i].className = "src line";
    }
}
var handler = function(event) {
    line = event.target;
    switch (event.type){
        case "click":
            var txt = "";
            if (window.getSelection) { txt = window.getSelection().toString();}
            else if (window.document.getSelection) { txt = window.document.getSelection().toString();}
            else if (window.document.selection) { txt = window.document.selection.createRange().text;}
            if (txt != '')    break;
            if(line.title) { line.innerHTML = line.title; line.removeAttribute("title"); line.className="des off"; line.style.color=font_default_color }
            else {line.title=line.innerHTML;
                line.innerHTML = "";
                line.className="des on";
                line.style.color="red";}
            break;
        case "mouseover":
            if(line.title)    line.style.color="red";
            break;
        case "mouseout":
            if(line.title)    line.style.color=font_default_color
            break;
    }
}
