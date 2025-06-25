const list=document.querySelectorAll(".list");
const icons=document.querySelectorAll(".icon");
function activeLink(){
    list.forEach((item)=>
        item.classList.remove('active'));
        this.classList.add('active');   
}

list.forEach((item)=>{
    item.addEventListener("click",activeLink);
});

icons.forEach((icon) => {
    icon.addEventListener("mouseover", function () {
        this.style.fontSize = "xx-large"; 
        this.style.color = "red"; 
    });

    icon.addEventListener("mouseout", function () {
        this.style.fontSize = "";
        this.style.color = ""; 
    });
});

// icons.forEach((icon)=>{
//     icon.addEventListener("mouseover",(event)=>{
//         event.target.style.fontSize = "xx-large";
//         event.target.style.color="red";
//     });
//     icon.addEventListener("mouseout", (event)=> {
//          event.target.style.fontSize = ""; // Resets font size
//          event.target.style.color = ""; // Resets color
//      });
// });
