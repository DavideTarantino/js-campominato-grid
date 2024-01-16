const grigliaHtml = document.getElementById('griglia')
let startinput = document.getElementById( 'start')

startinput.addEventListener('click', function(){
    document.getElementById("tabella").style.display = "block";
})

for (let i = 1; i <= 100; i++) {

    let box = document.createElement("div")

    box.classList.add("box")

    box.innerText = i

    box.addEventListener('click', function () {
        this.classList.toggle("active")
        console.log(i)
    })

    grigliaHtml.append(box)
}