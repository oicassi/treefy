const getActualYear = () => {
  return new Date().getFullYear();
};

const isExpired = (value) => {
  console.log({date: new Date().valueOf(), value})
  return new Date().valueOf() > value
}

export { getActualYear, isExpired };
