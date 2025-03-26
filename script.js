var form = document.querySelector(".container")
var input = document.getElementById("todo")
var mainContainer = document.querySelector(".main-container")
var icons = document.querySelector(".icons")
var light = document.getElementById("light")
var dark = document.getElementById("dark")
var arr = JSON.parse(localStorage.getItem("todo")) || []

light.addEventListener("click", () => {
    document.body.style.background = "linear-gradient(to right, rgb(218, 255, 252), rgb(176, 246, 255))"
    document.body.style.color = "#000";
    h1.style.color = "#000"
    light.style.border = "2px solid black"
});

dark.addEventListener("click", () => {
    document.body.style.background = "#232526";
    document.body.style.color = "#f2e2da";
    h1.style.color = "#f2e2da"
});

function showtodo() {
    mainContainer.innerHTML = ""

    for (let i = 0; i < arr.length; i++) {
        var main = document.createElement("div")
        main.classList.add("main")

        var span = document.createElement("span")
        span.innerText = arr[i]
        span.classList.add("span")

        var checkIcon = document.createElement("button")
        checkIcon.innerHTML = `<i id="check" style="font-size: 25.5px;" class="fa-solid fa-check"></i>`
        checkIcon.classList.add("check")

        var trashIcon = document.createElement("button")
        trashIcon.innerHTML = `<i id="check" style="font-size: 21.5px;" class="fa-solid fa-trash"></i>`
        trashIcon.classList.add("trash")

        trashIcon.addEventListener("click", () => {
            arr.splice(i, 1);
            localStorage.setItem('todo', JSON.stringify(arr))
            showtodo()
        })

        checkIcon.addEventListener("click", (event) => {
            var div = event.target.closest(".main");
            var secondSpan = div.querySelector("span");
            var btn = div.querySelectorAll("button");

            if (secondSpan.style.textDecoration === "line-through") {
                for (let i = 0; i < btn.length; i++) {
                    btn[i].style.opacity = 1;
                }

                secondSpan.style.opacity = 1;
                div.style.backgroundColor = "#1a1c1b";
                secondSpan.style.textDecoration = "none";
            } else {
                for (let i = 0; i < btn.length; i++) {
                    btn[i].style.opacity = 0.4;
                }

                div.style.backgroundColor = "#424242";
                secondSpan.style.textDecoration = "line-through";
                secondSpan.style.opacity = 0.4;
            }
        });


        main.appendChild(span)
        main.appendChild(trashIcon)
        main.appendChild(checkIcon)
        mainContainer.appendChild(main)
        console.log(checkIcon);
    }

}

form.addEventListener("submit", (event) => {
    event.preventDefault()
    arr.push(input.value)
    localStorage.setItem("todo", JSON.stringify(arr))
    input.value = ""

    showtodo()
})

showtodo()