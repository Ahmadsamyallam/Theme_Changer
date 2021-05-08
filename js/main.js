/*

new date()   دي الفانكشن اللي بتخليني اتعامل مع التواريخ و الوقت 
getDay() دي فانكشن جاهزة بتديني ال index بتاع اليوم 
بعد كده عملت (array) فيها الايام بتاعتي علشان getDay() بتدي ال index بس 
بعد كده هادخل جوة days و طبعا علشان معايا array فا هافتح [] احط فيها ال getday اللي بيديلى ال index 
هو هياخد ال index دا و هايعمله mapping مع array



var date= new Date();
var today= document.getElementById("today")
var days= [`sunday`,`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`satuday`]
today.innerHTML = `today is ${days[date.getDay()]}`


function test() {
   console.log("test")
}
var timer = setInterval(test,3000)

var stopBtn = document.getElementById("stop")
stopBtn.addEventListener("click",function (params) {

   clearInterval(timer)
})

var clock = document.getElementById("clock")

function getCurrentTime() {


   var date = new Date();
   clock.innerHTML=`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
   setTimeout(getCurrentTime,1000)
}

getCurrentTime()

console.log(Math.trunc(5.9)) 

$(".test").css("background-color","#09c")   // here we used it as a setter ...... we set a new value of background-color here

       $(".btn").click(function () {



      var inputval =   $("input").val()
      console.log(inputval)
                                  }
                     )
 




 
 $(".btn").click(function () {

var Width = $(".test").outerWidth()
console.log(Width)


})
*/

var bgColors =["orange","teal","red","blue"]
for (var i=0; i<bgColors.length;i++) 
{
   $(".color-option li").eq(i).css("background-color",bgColors[i])

}


$(".color-option li").click(function () {
   var currentBg = $(this).css("background-color")
   $(".change").css("color",currentBg)

})

$(".color-box i").click(function () {

if ($(".color-box").css("left")=="0px") {
   var optionWidth = $(".color-option").innerWidth();
$(".color-box").animate({"left":-optionWidth},2000)
}  
else {
   var optionWidth = $(".color-option").innerWidth();
   $(".color-box").animate({"left":"0px"},2000)
}

})

