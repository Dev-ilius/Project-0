

window.onload=function(){
    var counter = document.getElementById("Counter1")

    counter.innerHTML= localStorage.getItem("counts");
   

    document.getElementById("Buttonn").addEventListener('click', function(){
        a++;
        localStorage.setItem("counts", a)
        counter.innerHTML= localStorage.getItem("counts");
    });
    var a= localStorage.getItem("counts") || 0;
}

