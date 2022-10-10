function dropdown(){
    var x = document.getElementById("menu")
    if (x.className === "menu_list"){
        x.className += "_responsive"
    }
    else{
        x.className = "menu_list"
    }
}

function closedropdown(){
    var x = document.getElementById("menu")
    if (x.className === "menu_list_responsive"){
        x.className = "menu_list"
    }
}

function openCart(){
    var x = document.getElementById("cart")
    var y = document.getElementById("cart1")
    if(count > 0){
        if (y.className === "shoppingCart1"){
            y.className += "_open"
            document.getElementById("num").innerHTML = count
            cost = document.getElementById("pay").innerHTML
            document.getElementById("final").innerHTML = cost * count
        }
        else{
            y.className = "shoppingCart1"
        }
    }
    else{
        if (x.className === "shoppingCart"){
            x.className += "_open"
        }
        else{
            x.className = "shoppingCart"
        }
    }
}

var j = 0;
let slide = document.getElementsByClassName('slide');
    
function previous(n){
    j += n;
    changeSlide();
}

function next(n){
    j += n;
    changeSlide();
}

function changeSlide(){
    if(j > 3){
        for(let i = 0;i < 4;i++){
            slide[i].style.display = "none";
        }
        j = 0
        slide[j].style.display = "block";
    }
    if(j < 0){
      j = 3;
    }
    for(let i = 0;i < 4;i++){
        slide[i].style.display = "none";
    }
    slide[j].style.display = "block";
}

var count = 0;
function reduce(){
    count--
    if (count < 1){
        count = 0
    }
    document.getElementById("count").innerHTML = count
}

function increase(){
    count++
    document.getElementById("count").innerHTML = count
}

function addItem(){
    if(count > 0){
        document.getElementById("cart_div").style.display = "block"
    }
    if(count == 0){
        document.getElementById("cart_div").style.display = "none"
    }
    document.getElementById("cart_count").innerHTML = count
}

function remove(){
    count = 0
    addItem()
    var y = document.getElementById("cart1")
    y.className = "shoppingCart1"
}

function pic(n){
    var k = document.getElementsByClassName('product1');
    document.getElementById("slidesh").style.display = "block"
    for(let i = 0;i < k.length;i++){
        k[i].style.display = "none"
    }
    k[n].style.display = "block"
    document.getElementById("body").style.backgroundColor = "black"
}

function closeSlide(){
    document.getElementById("slidesh").style.display = "none"
    document.getElementById("body").style.backgroundColor = "white"
}