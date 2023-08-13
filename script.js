const box = document.getElementById("input-box")
const listItem = document.getElementById("list")

function addTask() {
    let li = document.createElement("li")
    li.innerHTML = box.value
    listItem.appendChild(li)
    let span = document.createElement("span")
    span.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
    li.appendChild(span)
    box.value = "";
   

    li.addEventListener(
        "click",
        function () {
            this.classList.toggle("toggle")
           
        }
    )
    li.querySelector("i").addEventListener(
        "click",
        function () {
            li.remove();   
        }
    )
}
