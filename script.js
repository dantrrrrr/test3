const daysEl=document.getElementById("days");
const hoursEl=document.getElementById("hours");
const minsEl=document.getElementById("mins"); 
const secondsEl=document.getElementById("seconds");
var newYears ="4/5/2022";
$('#submit').on('click', function(){
    var namedate=$('#namedate-input').val();

    var date = new Date($('#date-input').val());
    // if(date==null){
    //     var date=$("#date-input").datepicker( "setDate" , "1/1/2023" );

    // }
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var fulldate=month+"/"+ day+"/"+year;
    //alert(fulldate);
    newYears=fulldate;
    $('h1').html(namedate);

  });


function countdown(){
    const newYearsDate= new Date(newYears);
    const currentDate= new Date();
    const totalSecond=(newYearsDate- currentDate)/1000;
    const dayx= Math.floor(totalSecond/3600/24);
    const hourx= Math.floor(totalSecond/3600)%24;
    const minx=Math.floor(totalSecond/60)%60;
    const secondx= Math.floor(totalSecond)%60;
  
    daysEl.innerHTML = dayx;
    hoursEl.innerHTML= hourx;
    minsEl.innerHTML= minx;
    secondsEl.innerHTML= secondx;
}
countdown();
setInterval(countdown,1000);