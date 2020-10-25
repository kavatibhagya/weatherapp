const getDate = (unixTime, year = false) => {
  let res;
  const date = new Date(unixTime * 1000);
  const month = date.getMonth();
  const dat = date.getDate();
  const yr = date.getFullYear();

  res = `${month}/${dat}`;

  if(year) {
    res = `${res}/${yr}`;
  }

  return res;
}

const getTime = (unixTime, sec = false) => {
  let res;
  const date = new Date(unixTime * 1000);
  const hours = date.getHours();
  const minites = date.getMinutes() < 9 ? `0${date.getMinutes()}` : date.getMinutes();
  const seconds = date.getSeconds() < 9 ? `0${date.getSeconds()}` : date.getSeconds();
  const mer = hours < 12 ? 'AM' : 'PM';
  const hrs = hours > 12 ? hours - 12 : hours;

  res = `${hrs}:${minites}` ;
  
  if(sec) {
    res = `${res}:${seconds}`  
  }

  res = `${res} ${mer}`;

  return res;
}

const dateTime = {
  getDate,
  getTime,
}

export default dateTime;