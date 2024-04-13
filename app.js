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

    new_btn.addEventListener("click" , function(){
        new_btn.className="";
        let remv_task = new_p.innerText.replace("Remove Task","");
        new_p.remove();
        new_btn.remove();
        new_li.remove();
        alert(`Removed ${remv_task} from To-Do-List !!`)
   } );
   alert(`Added ${new_task} into To-Do-List !!`);
});

