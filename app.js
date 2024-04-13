let ipObj = document.querySelector("input");
let add_btn = document.querySelector("#add_btn");
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

//     new_btn.addEventListener("click" , function(){
//         new_btn.className="";
//         let remv_task = new_p.innerText.replace("Remove Task","");
//         new_p.remove();
//         new_btn.remove();
//         new_li.remove();
//         alert(`Removed ${remv_task} from To-Do-List !!`)
//    } );

   ipObj.value = "";
   alert(`Added ${new_task} into To-Do-List !!`);
});


ulObj.addEventListener("click", function(event){ // using concept of Event Bubbling=> adding event listener to 'ul' Block
    let clkObj = event.target; // event.target specifies the element that has been clicked in the event listener block('ul' Block )
    if( clkObj.nodeName=='BUTTON' ){ // nodeName Specifies the target Object that has been clicked in the event listener block('ul' Block )
        let parentObj = clkObj.parentElement;  //Accessing the 'li' element on which the remove button was clicked( li=> parent, clkObj=remove button=child)
        let pObj = parentObj.querySelector("p");
        let remv_task = pObj.innerText;
        parentObj.remove(); // Removing the respective 'li' element
        alert(`Removed ${remv_task} from To-Do-List !!`)
    }
});
