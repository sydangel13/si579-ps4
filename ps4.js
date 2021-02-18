

const box = document.getElementById("list1");
box.addEventListener("click", docUpdate);

function docUpdate(){
    if(box.getAttribute("id") === "list1"){
        box.setAttribute("id", "list2")
    }else{
        box.setAttribute("id", "list1");
    }
}

const info = document.getElementById("delete");
info.addEventListener("click", remInfo);
function remInfo(){
    document.getElementById("delete").remove();
}

// const new_info = document.createElement("h3");
// document.body.onload = addInfo
// function addInfo(){
//     const x = document.createTextNode("Classes I have taken:")
//     new_info.appendChild(x)
// }

const addInfo = document.getElementById("l4");
addInfo.addEventListener("mouseover", newInfo);
function newInfo(){
        document.getElementById("l4").innerHTML = "SI 504 has been dropped from this list"
}

addInfo.addEventListener("mouseout", delInfo);
function delInfo(){
    document.getElementById("l4").innerHTML = "SI 504: Servers and the Shell";
}

setInterval(colorChange, 1000);
document.body.onload = colorChange;
const newcolor = document.getElementById("coloring");
function colorChange(){
    if (newcolor.getAttribute("id") === "coloring"){
        newcolor.setAttribute("id", "coloring2")
    }else{
        newcolor.setAttribute("id", "coloring")
    }
}

