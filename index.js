// const driver = {
//   key: 'value',
// }

const driver = {
  manType: 'hairy',
}


function updateDriverWithKeyAndValue(obj, key, value) {
  const newDriver = { ...obj };
  newDriver[key] = value;
  return newDriver;
}

// function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
//   driver[key] = value;
//   return driver;
// }

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromDriverByKey(obj,key) {
  const cloneDriver = { ...obj};
  delete cloneDriver[key];
  return cloneDriver;
}

function destructivelyDeleteFromDriverByKey(obj, key) {
  delete obj[key];
  return obj;
}
