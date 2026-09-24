const msg = document.getElememtById("msg");
document.getElementById("btn").addEventListener("click",
() = > {
    msg.textContent = "You clicked it!";
});

const box = document.getElementById("bix");
if (!box) {
    console.error("Element with id 'box' not found");
}
if (box) {
    document.getElementById("colorBtn").addEventListener("click",
    () = > {
        box.style.backgroundColor = "orange";
    });
}

