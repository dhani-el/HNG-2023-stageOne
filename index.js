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
function SpamUTC(){
   setInterval(() => {
       const UTCinMiliSeconds = new Date().getUTCMilliseconds();
       document.querySelector('[data-testid="currentUTCTime"]').innerHTML = UTCinMiliSeconds;

   }, 1);
}
SpamUTC();
const dayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]').innerHTML = day;
