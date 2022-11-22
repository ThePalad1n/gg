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
    {
        id:15,
        name : "romainian deadlift barbell RDL",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:16,
        name : "ez bar curl",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:17,
        name : "pull up conventional grip",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:18,
        name : "pull up neutral grip",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:19,
        name : "rear dealt flys",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:20,
        name : "face pulls",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:21,
        name : "tricep extention rope",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:22,
        name : "tricep push down",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:23,
        name : "dips",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:24,
        name : "push up",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:25,
        name : "incline dumbbell press",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:26,
        name : "flat dumbbell press",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:27,
        name : "hack squat",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:28,
        name : "hack squat banded",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:29,
        name : "squat press",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:30,
        name : "zercher squat",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:31,
        name : "zercher deadlift",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:32,
        name : "romainian deadlift dumbbell RDL",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:33,
        name : "landmine press",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:34,
        name : "landmine row",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:35,
        name : "overhead press dumbbell",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:36,
        name : "overhead press barbell seated",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:37,
        name : "bulgarian split squats",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:38,
        name : "leg extension machine",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:39,
        name : "hamstring curl seated machine",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:40,
        name : "hamstring curl laying machine",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:41,
        name : "hamstring curl nordic",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:42,
        name : "rack pull",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:43,
        name : "shrugs machine",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:44,
        name : "shrugs dumbbell",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:45,
        name : "shrugs barbell",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:46,
        name : "pullover dumbbell",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:47,
        name : "pullover sword swings",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:48,
        name : "planche beginner",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:49,
        name : "planche intermediate",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:50,
        name : "planche advanced",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:51,
        name : "clean",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:52,
        name : "clean and press",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:53,
        name : "clean and jerk",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:54,
        name : "clean and snatch",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:55,
        name : "leg press",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:56,
        name : "anterior delt raise",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:57,
        name : "pec fly lower",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:58,
        name : "pec fly middle",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:59,
        name : "pec fly upper",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:60,
        name : "copenhagen plank novice",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:61,
        name : "copenhagen plank beginner",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:62,
        name : "copenhagen plank intermediate",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:63,
        name : "copenhagen plank advanced",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:64,
        name : "copenhagen plank advanced alt",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id:65,
        name : "bench press alt",
        src: "/gg/assets/images/ez.png",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
   ];


// create function to show card
function showgallery(curarra){
   document.getElementById("card").innerText = "";
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

showgallery(galleryarray);