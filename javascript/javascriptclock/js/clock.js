let name = prompt("İsminizi giriniz:");
document.getElementById("myName").innerHTML = name;

showTime();
function showTime(){

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let day = days[today.getDay()];
    
    
    let time = hours + ":" + minutes + ":" + seconds + " " + day;

    document.getElementById("myClock").innerText = time; 
    let t = setTimeout(function(){ showTime() }, 1000);

}
