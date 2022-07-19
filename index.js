

let div
let render =(id) => {
        return `
        <div class="card border-primary mb-3">
            <div class="card-header counter-text">Counter</div>
        <div class="card-body text-primary"> 
        <div class="counter-btn counter-total counter-total-${id}" id="${id}">0</div>
        </div>
        </div>`
}

function renderer(){
    for(let i=0;i<18;i++){
        divv = document.createElement("div")
        divv.className = "col-12 col-md-6 col-lg-4 col-xlg-3";
        let inner = render(i);
        divv.innerHTML = inner;
        let main= document.getElementById("jojo").appendChild(divv)
    }
}

let parent= document.getElementById("jojo")
parent.addEventListener("click", (e) => counter(e))

function counter(e){
    if(e.target.id){
    let count= document.getElementById(`${e.target.id}`)
    let a0 = localStorage.getItem(`${e.target.id}`) || 0;
    count.innerHTML = localStorage.getItem(`${e.target.id}`) || a0;
    a0++;
    localStorage.setItem(`${e.target.id}`, a0)
    }
}

document.addEventListener("DOMContentLoaded", (e) => {renderer()
loaaad(e)});

function loaaad(e){
    for(let i=0;i<18;i++){
        let count= document.getElementById(`${i}`)
        count.innerHTML= localStorage.getItem(i) || 0;
    }
}




    







