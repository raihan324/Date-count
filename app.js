let sDate = document.getElementById('sDate')
let eDate = document.getElementById('eDate')
let names = document.getElementById('name')
console.log(sDate)
let show = document.getElementById('show')
sDate.addEventListener("input", function(val) {
    console.log(show)
    show.value = sDate.value
})

document.getElementById('form').addEventListener('submit', function(val){
    val.preventDefault()
    let startDate = sDate.value
    let endDate = eDate.value
    console.log(typeof(startDate))
    console.log(endDate)
})