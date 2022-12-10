function keyDown(event)
{
    switch(event.keyCode)
    {
        case 68 :
            document.getElementById("d").src = "src/img/key1D.png";
        break;
        case 70 :
            document.getElementById("f").src = "src/img/key2D.png";
        break;
        case 74 :
            document.getElementById("j").src = "src/img/key2D.png";
        break;
        case 75 :
            document.getElementById("k").src = "src/img/key1D.png";
        break;
    }
}

function keyUp(event)
{
    switch(event.keyCode)
    {
        case 68 :
            document.getElementById("d").src = "src/img/key1.png";
        break;
        case 70 :
            document.getElementById("f").src = "src/img/key2.png";
        break;
        case 74 :
            document.getElementById("j").src = "src/img/key2.png";
        break;
        case 75 :
            document.getElementById("k").src = "src/img/key1.png";
        break;
    }
}

var notes = [
    {"key" : "d", "time" : "280"},
    {"key" : "f", "time" : "602"},
    {"key" : "j", "time" : "925"},
    {"key" : "d", "time" : "1247"},
    {"key" : "k", "time" : "1570"},
    {"key" : "j", "time" : "1892"},
    {"key" : "f", "time" : "2215"}
];

function note(id)
{
    this.id = id;
    this.key = notes[id].key;
    this.time = notes[id].time;
}

function generateNotes()
{
    document.getElementsByClassName("notebox").innerHTML = "<img src='src/img/note1.png'>"
}