let bts = document.querySelectorAll(".gear-setting-back button")

let backOption = true; 
let randomize; 


///////////////////////////////////////////////////////



//gear options 

document.querySelector(".gear-setting i").onclick = function(){
    this.classList.toggle("fa-spin")
    document.querySelector(".gear-setting").classList.toggle("show")
}
//


//gear colors 


if(localStorage.color != null){
    document.documentElement.style.setProperty("--main-color" ,localStorage.color )

}



///////////////////////////////////////////////////


let colorsLi = document.querySelectorAll(".gear-setting-content ul li")

//first way 

colorsLi.forEach((item)=>{
    item.addEventListener("click" , function(e){
        document.documentElement.style.setProperty("--main-color" ,this.getAttribute("data-colors")  )
        
        // e.target.parentElement.querySelectorAll(".active").forEach((item)=>{
        //     item.classList.remove("active")
        // })
        // e.target.classList.add("active")
        handleActive(e)
        localStorage.setItem("color" , this.getAttribute("data-colors"))
    })
    

})





// seconde way 

// for(let i = 0 ; i < colorsLi.length ; i++)
// {
//     colorsLi[i].addEventListener("click" , ()=>{
//         document.documentElement.style.setProperty("--main-color" ,colorsLi[i].getAttribute("data-colors")  )
//         colorsLi[i].parentElement.querySelectorAll(".active").forEach((item)=>{
//             item.classList.remove("active")

//         })
//         colorsLi[i].classList.add("active")
//     })

// }


//

/////////////////////////////////////






////////////////////////////////////////

// possability of change background

bts.forEach((item)=>{
    item.onclick=function(e){
        // item.parentElement.querySelectorAll(".active").forEach((f)=>{
        //     f.classList.remove("active")
        // })
        // item.classList.add("active")
        handleActive(e)
        if(e.target.dataset.back === "yes"){
            backOption = true
            localStorage.setItem("backOption" , "yes")
            ss()
        }else{
            backOption = false
            localStorage.setItem("backOption" , "no")
            clearInterval(randomize)
        } 

    }

})




//  or another way 

// bts.forEach((item)=>{
//     item.addEventListener("click" , function(e){
        
//         e.target.parentElement.querySelectorAll(".active").forEach((item)=>{
//             item.classList.remove("active")
//         })
//         e.target.classList.add("active")
//     })
    

// })


//////////////////////////////////////////////











/////////////////////////////////////////

//  save option background in local storage 
// change active class on btns with local storage

if(localStorage.backOption != null ){
    bts.forEach((s)=>{
        s.classList.remove("active")
    })


    if(localStorage.backOption === "yes"){
        backOption = true
        document.querySelector(".yes").classList.add("active")

    }else{
        backOption = false
        document.querySelector(".no").classList.add("active")


    }
}

////////////////////////////



// header background

function ss(){
    
if( backOption == true ){
    let header = document.querySelector("body .header ")

let arr = [  " img/1657858.JPG" , "img/dpaHeX.PNG" , "img/astronaut_ring_neon_156673_1920x1080.JPG", "img/343619.jpg"] 
randomize = setInterval(() => {
    let x = Math.floor(Math.random() *  arr.length)
    header.style.backgroundImage = `url('${arr[x]}')`


}, 1000);
}
    
}
ss()

// let y = 0 ; 

// document.querySelector(".s").onclick=function(){
//                 ++y

//                 if( y == arr.length){
//                     y = 0 
//                 }
//             header.style.backgroundImage = `url('${arr[y]}')`
        

    
    
    
    
// }


//////////////////////////////




let skills =document.querySelector(".skills")
let spans =document.querySelectorAll(".skills span")
let y =skills.offsetTop
    window.onscroll=function(){
        spans.forEach((s)=>{
            if(window.scrollY >=  y - 800){
                s.style.width = s.dataset.wid

        }else{
            s.style.width = '0'

        }
        })
   

    }

///////




/////////////////////////////
let galleryImages = document.querySelectorAll("section.gallery .gallery-imgs img ")
galleryImages.forEach((img)=>{
    img.addEventListener("click" , ()=>{
        let overLay = document.createElement("div")
        overLay.classList= "overLay"
        document.body.appendChild(overLay)
        let boxImg =document.createElement("div")
        boxImg.classList = "boxImage"
        let Img = document.createElement("img")
        boxImg.appendChild(Img)
        overLay.appendChild(boxImg)
        Img.src= img.src
    
        let span = document.createElement("span")
        let spanContent =document.createTextNode("x")
        span.appendChild(spanContent)
        boxImg.appendChild(span)
        span.classList= "exit"
        

    })
})
document.addEventListener("click" , (e)=>{
    if(e.target.className === "exit"){
        document.querySelector(".overLay").remove()
    }
})
















/////////////













////////////////


let lists = document.querySelectorAll(".links .dotts li")
let links = document.querySelectorAll("nav ul li a ")


// lists.forEach((li)=>{
//     li.addEventListener("click" ,get)
// })


// links.forEach((li)=>{
//     li.addEventListener("click" ,get)
// })



function get(ele ){
ele.forEach((li)=>{
    li.addEventListener("click" ,(e)=>{
        e.preventDefault()
        let da = e.target.dataset.name;
        document.querySelector(`.${da}`).scrollIntoView({
            behavior: 'smooth'
        });
    })

})

}


get(lists)
get(links)

///////////////




function handleActive(e){
    e.target.parentElement.querySelectorAll(".active").forEach((item)=>{
                    item.classList.remove("active")
                })
    e.target.classList.add("active")
}









///////////////
//bullets settings


let m = document.querySelectorAll(".gear-setting-Bullets button")
m.forEach((item)=>{
item.addEventListener("click" , (e)=>{
    handleActive(e)
    
if(e.target.dataset.bullets === "yes"){
    localStorage.setItem("bulletAction" , "yes")
    document.querySelector(".links").style.display="block"

}else{
    localStorage.setItem("bulletAction" , "no")
    document.querySelector(".links").style.display="none"


} 
})

})
if(localStorage.bulletAction != null){
    m.forEach((i)=>{
        i.classList.remove("active")
    })
}
if(localStorage.bulletAction === 'no'){
    document.querySelector(".gear-setting-Bullets .no").classList.add("active")
    document.querySelector(".links").style.display="none"
}else {
    document.querySelector(".gear-setting-Bullets .yes").classList.add("active")
    document.querySelector(".links").style.display="block"


}



////////////////////////


document.querySelector(".reset button").onclick=function(){
    localStorage.clear()
    // localStorage.removeItem("backOption");
    // localStorage.removeItem("color");
    // localStorage.removeItem("bulletAction");
    window.location.reload()

}









///////////////


let nav = document.querySelector("header .nav-list")
let togle = document.querySelector("button.toggl-menue")

togle.onclick=function(e){
    e.stopPropagation()
    this.classList.toggle("menueActive")
    nav.classList.toggle("open")

}

document.documentElement.onclick=function(e){
if(e.target !== nav && e.target !== togle ){
    if(nav.classList.contains("open")){
        togle.classList.toggle("menueActive")
        nav.classList.toggle("open")
    }
}
}

nav.onclick=function(e){
    e.stopPropagation()
}