const getTime = (unixTime, sec = false) => {
  let res;
  const date = new Date(unixTime * 1000);
  const hours = date.getHours();
  const minites = date.getMinutes() < 9 ? `0${date.getMinutes()}` : date.getMinutes();
  const seconds = date.getSeconds() < 9 ? `0${date.getSeconds()}` : date.getSeconds();

  res = `${hours} : ${minites}` ;
  
  if(sec) {
    res = `${res} : ${seconds}`  
  }

  return res;
}

export default getTime;