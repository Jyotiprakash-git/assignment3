const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
    box.addEventListener("click", () => {
        const color = box.getAttribute("data-color");
        box.style.backgroundColor = color;
    });
});
function greetings() {
     let name = document.getElementById("input").value;
     document.getElementById("username").innerText = " "+ name;
}