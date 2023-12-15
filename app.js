let sDate = document.getElementById('sDate')
let eDate = document.getElementById('eDate')
let name = document.getElementById('name')
console.log(sDate)
let show = document.getElementById('show')
name.addEventListener("input", function(val) {
    console.log(show)
    show.value = name.value
})

document.getElementById('form').addEventListener('submit', function(val){
    val.preventDefault()
})