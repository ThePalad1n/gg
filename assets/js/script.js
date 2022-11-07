// filter array 
let filterarray =[];

// gallery card array
let galleryarray = [
    {
        id:1,
        name : "bench press",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:2,
        name : "freebar squat",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:3,
        name : "deadlift",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:4,
        name : "dragonfly",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:5,
        name : "hammer curl",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:6,
        name : "conventional curl",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:7,
        name : "incline bench press",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:8,
        name : "lat pulldown",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:9,
        name : "lateral raise dumbbell",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:10,
        name : "high row machine",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:11,
        name : "low row machine",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:12,
        name : "high row cable",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:13,
        name : "low row cable",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:14,
        name : "bent over row",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },

   ];

showgallery(galleryarray);
// create function to show card
function showgallery(curarra){
   document.getElementById("card").innerText = "<p>hi<p>";
   for(var i=0;i<curarra.length;i++){
       document.getElementById("card").innerHTML += `
        <div class="col-md-4 mt-3" >
           <div class="card p-3 ps-5 pe-5">
               <h4 class="text-capitalize text-center">${curarra[i].name}</h4>

          <img src="${curarra[i].src}" width="100%" height="320px"/>
          <p class="mt-2">${curarra[i].desc}</p>
          <button class="btn btn-primary w-100 mx-auto">More</button>
       
          </div>
          </div>`
   }
}

// For Live Searching Product

document.getElementById("myinput").addEventListener("keyup",function(){
    let text = document.getElementById("myinput").value;

    filterarray= galleryarray.filter(function(a){
        if(a.name.includes(text)){
            return a.name;
           }
   });
   if(this.value==""){
       showgallery(galleryarray);
   }
   else{
       if(filterarray == ""){
           document.getElementById("para").style.display = 'block'
           document.getElementById("card").innerHTML = ""; 
       }
       else{
           showgallery(filterarray);
           document.getElementById("para").style.display = 'none'
       }
   }
});