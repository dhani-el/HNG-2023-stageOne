function ParseDayToString(dayInNumber){
    switch(dayInNumber){
        case 0: return 'SUNDAY';
        case 1: return 'MONDAY';
        case 2: return 'TUESDAY';
        case 3: return 'WEDNESDAY';
        case 4: return 'THURSDAY';
        case 5: return 'FRIDAY';
        case 6: return 'SATURDAY';
        default: return "how did this open sensei"
    }
}
const day = ParseDayToString( new Date().getDay());
const UTCinMiliSeconds = new Date().getUTCMilliseconds();
const dayElement = document.getElementById("day").innerHTML = day;
document.getElementById("UTC").innerHTML = UTCinMiliSeconds;