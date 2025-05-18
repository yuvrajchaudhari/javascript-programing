var day = function(dayNum){
switch (dayNum) {
    case 1:
        console.log(`${dayNum} - Monday`);
        break;
        case 2:
        console.log(`${dayNum} - Tuesday`);
        break;
        case 3:
        console.log(`${dayNum} - Wed`);
        break;
        case 4:
        console.log(`${dayNum} - Thursday`);
        break;        
        case 5:
        console.log(`${dayNum} - Friday`);
        break;        
        case 6:
        console.log(`${dayNum} - Saturday`);
        break;        
        case 7:
        console.log(`${dayNum} - Sunday`);
        break;

    default:
        console.log(`Invalid Data: ${dayNum}`)
        break;
}
}
day(2)
day(3)
day(4)
day(100)
day("MyLove")
console.log(`=============Switch case Month with named Function============`)
function monthOfYear(month) {
    switch(month) {
        case 1:
            console.log("January");
            break;
        case 2:
            console.log("February");
            break;
        case 3:
            console.log("March");
            break;
        case 4:
            console.log("April");
            break;
        case 5:
            console.log("May");
            break;
        case 6:
            console.log("June");
            break;
        case 7:
            console.log("July");
            break;
        case 8:
            console.log("August");
            break;
        case 9:
            console.log("September");
            break;
        case 10:
            console.log("October");
            break;
        case 11:
            console.log("November");
            break;
        case 12:
            console.log("December");
            break;
        default:
            console.log("Invalid month");
    }
}
monthOfYear(0 )
 monthOfYear( 2)
  monthOfYear( 5)
   monthOfYear(12 )
monthOfYear( 15 )
 monthOfYear( 100)