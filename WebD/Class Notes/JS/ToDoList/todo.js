var todoList = [];
window.onload = function() {

    let btn = document.getElementById('btn');
    let result = document.getElementById('result');
    let input = document.getElementById('inp');
    //let value = "";



    btn.onclick = function () {


        /* METHOD 1:
        value += '<li>' + input.value + '</li>';

          METHOD 2:
          value = `<li>${input.value}</li>`;
          result.innerHTML = value;
  */

        //METHOD 3
        //Fix this from sir's code

        //BY CREATING A NEW NODE
        var newL = document.createElement("li");
        var span = document.createElement('span');
        var updateInput = document.createElement('input');
        var updateButton = document.createElement("button");
        var removeButton = document.createElement("button");

        newL.appendChild(updateInput);
        newL.appendChild(span);
        newL.appendChild(updateButton);
        newL.appendChild(removeButton);


        var node = document.createTextNode(input.value);
        span.appendChild(node);

       /* var cross = document.createElement("img");
        cross.src="Cross.png";*/
        var cross = document.createTextNode("X");
        removeButton.appendChild(cross);

        var updateInside = document.createTextNode("Edit Task");
        updateButton.appendChild(updateInside);

        span.onclick = changeType;
        updateButton.onclick = update;
        //removeButton.onclick = delete(newL);
       // updateButton.id = todoList.length + 1;
        updateInput.type = "hidden";

        var element = document.getElementById("result");
        element.appendChild(newL);
     //   todoList.push(span);

        removeButton.onclick= function(){
            newL.remove();
        }






        //METHOD 4 : USING DOM NAVIGATION METHOD

        //FIX this method by updating the changed values in array as well.

        /*value = `<li>
                       <input type="hidden">
                        <span onclick ="changeType(this)">${input.value}</span> 
                        <button onclick="update(this)">Update</button>
                  </li>`;
        toDoList.push(value);
        display(toDoList);*/
    }
};


  /*  function display(toDoList){
        let value = "";
        toDoList.forEach(function(toDo){
            value += toDo;
        })

        result.innerHTML = value;
    }
};


function update(element){
    let eleParent = element.previousElementSibling;
    let val = eleParent.previousElementSibling.value;
    if(val){
        eleParent.textContent = val;
        eleParent.previousElementSibling.type = "hidden";
    }

}

function changeType(element){
         element.previousElementSibling.type = "text";
}*/

function changeType(){
    let element = this;
    element.previousElementSibling.type="text";
    element.previousElementSibling.value="";
}
//DELETE NODE


//UPDATE NODE
function update() {
    let element = this;
    // let val = document.getElementById('getValue').val;
    let eleParent =  element.previousElementSibling;
    let val = eleParent.previousElementSibling.value;

    if(val) {
        eleParent.textContent = val;
        //todoList[element.id - 1].textContent = val;
        eleParent.previousElementSibling.type="hidden";
    }

}