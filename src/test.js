function MostFreeTime(strArr) { 
  const mintsOfEachEvent = [];
  let longestEvent = 0;
  for(let i = 0 ; i < strArr.length; i ++){
    const period = strArr[i];
    const times = period.split("-");
    const time1 = getMinutesOfEvent(times[0])
    const time2 = getMinutesOfEvent(times[1])
    mintsOfEachEvent.push([time1,time2])
  }

  mintsOfEachEvent.sort((a,b)=>a[0]-b[0]);

  for(let i=0; i < mintsOfEachEvent.length - 1; i++){
    if(longestEvent < mintsOfEachEvent[i + 1][0] - mintsOfEachEvent[i][1])
      longestEvent = mintsOfEachEvent[i + 1][0] -mintsOfEachEvent[i][1]
  }
  let hours = 0;
  while(longestEvent >= 60){
    longestEvent -= 60;
    hours ++;
  }

  if(hours.toString().length === 1){
    hours = "0" + hours;
  }
  if(longestEvent.toString().length === 1){
    return hours + ":0" + longestEvent
  }else{
    return hours + ":" + longestEvent
  }
  // code goes here  
  return strArr; 

}

const getMinutesOfEvent = (time) =>{
  let totalMins = 0;
  const timeParts = time.split(":");
  const hours = Number(timeParts[0]);
  if(hours !== 12) totalMins += hours * 60
  const minutes = Number(timeParts[1].slice(0,2));
   totalMins += minutes
  const amOrPm = timeParts[1].slice(-2);
  if(amOrPm === "PM" )
    totalMins += (12 * 60)
  return totalMins
}
   
// keep this function call here 
console.log(MostFreeTime(readline()));
