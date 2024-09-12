let messEl = document.createElement("h1")
let mainContainerEl = document.getElementById("main-container")
function sumbitBtn(){

messEl.classList.add("message")
messEl.textContent = "welcome to svec"
mainContainerEl.appendChild(messEl)

}


function removeBtn(){
    messEl.classList.remove("message")
messEl.textContent = ""
mainContainerEl.appendChild(messEl)
}
