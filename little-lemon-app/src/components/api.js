import jsonData from './available_timeslots.json'


function formatDateToYYYYMMDD(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

function dateIsValid(selectedDateObj){
  const today = new Date();
  today.setHours(0,0,0,0);
  selectedDateObj.setHours(0,0,0,0);
  return(
    selectedDateObj >= today
  )
}

function dateIsMorethanAWeekAway(selectedDateObj){
    const today = new Date();
    if(selectedDateObj.getMonth() === today.getMonth() && selectedDateObj.getFullYear() === today.getFullYear()){ //same mth and same year - check for day
      return(selectedDateObj.getDate() >= today.getDate()+7);
    }
    else{
      return true;
    }
}

function dayOfWeek(date){
  const today = new Date();
  return(
    (Number(date.getDate()) - Number(today.getDate())) % 7
  )
}

export const fetchAPI = (date) => {

  // let reformattedDate = formatDateToYYYYMMDD(date); //reformatted to "yyyy-mm-dd"
  let timeslotsArray = [];

  if(dateIsMorethanAWeekAway(date) && dateIsValid(date)){
    timeslotsArray = ['11:00','12:00','13:00','14:00','15:00','16:00', '17:00', "18:00", '19:00', '20:00', '21:00', '22:00', '23:00'];
  }
  else if(dateIsValid(date)){
    jsonData.forEach((dateData) => {
      if(dayOfWeek(date) === Number(dateData.date)){
        dateData.time.forEach((timeslot) => {
          timeslotsArray.push(timeslot);
        });
      }
    })
  }
  timeslotsArray.unshift("===Select an available timeslot===")
  return timeslotsArray;
};

export const submitAPI = formData => true;

const fakeAPI = {
fetchAPI: fetchAPI,
submitAPI: submitAPI,
}

export default fakeAPI;