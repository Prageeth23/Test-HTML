console.log (new Date().getDay());

let day;
switch(new Date().getDay()){
    case 0:
        day = "Sunday";
        break;

    case 1:
        day = "Monday";
        break;

    case 2:
        day = "Thusday";
        break;        

    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break; 
    }

document.getElementById("today").innerHTML= "Today is " +day;