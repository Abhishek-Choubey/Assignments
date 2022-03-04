import "./index.css";

var data = JSON.parse(localStorage.getItem("todoList")) || [];
DisplayTodo(data)

document.getElementById("save-btn").addEventListener("click", addTodo)
function addTodo() {
  data.push({
    task: document.getElementById("task").value,
    time: document.getElementById("time").value,
  });
  localStorage.setItem("todoList", JSON.stringify(data));
  DisplayTodo(data)
}

function DisplayTodo(data) {
  document.getElementById("tBody").innerHTML=null
  data.map((elem, index)=>{
    let tr = document.createElement("tr");
    tr.className = "tr-todo"

    let task = document.createElement("td");
    task.textContent = elem.task;

    let time = document.createElement("td");
    time.textContent = elem.time;

    let doneBtn = document.createElement('td');
    doneBtn.textContent = "✔";
    doneBtn.className = "done"
    doneBtn.addEventListener("click", ()=>{
        tr.style.textDecoration = "line-through"
    })

    let dltBtn = document.createElement('td');
    dltBtn.textContent = "X";
    dltBtn.addEventListener("click", ()=>{
        data.splice(index,1)
        localStorage.setItem("todoList", JSON.stringify(data));
        DisplayTodo(data)
    })
    dltBtn.className = "dlt"



    tr.append(task, time, doneBtn, dltBtn);

    document.getElementById("tBody").append(tr);
  })
}
