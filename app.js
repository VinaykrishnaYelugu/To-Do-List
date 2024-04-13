let ipObj = document.querySelector("input");
let add_btn = document.querySelector("#add_btn");
let view_btn = document.querySelector("#view_btn");
let ulObj = document.querySelector("ul");

let new_task;

add_btn.addEventListener("click" , function(){
    new_task="";
    new_task = ipObj.value;
    let new_li = document.createElement("li");
    let new_p = document.createElement("p");
    let new_btn = document.createElement("button");
    new_btn.innerText = "Remove Task";
    new_btn.className = "remove_btn";
    new_p.innerText = new_task;
    ulObj.appendChild( new_li );
    new_li.append(new_p);
    new_li.append(new_btn);
    
    ipObj.value = "";
    alert(`Added '${new_task}' into To-Do-List !!`);
});

ulObj.addEventListener("click", function(event){ 
    let clkObj = event.target; 
    if( clkObj.nodeName=='BUTTON' ){ 
        let parentObj = clkObj.parentElement;  
        let pObj = parentObj.querySelector("p");
        let remv_task = pObj.innerText;
        parentObj.remove(); 
        alert(`Removed ${remv_task} from To-Do-List !!`)
    }
});

