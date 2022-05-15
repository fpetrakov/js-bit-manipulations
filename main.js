function getLowestBit(data) {
  return 1 & data;
}

function getHighestBit(data) {
  return data >>> 31;
}

function lowToHigh(data) {
  for (let i = 0; i < 32; i++) {
    let bit = getLowestBit(data);
    console.log(bit);
    data = data >>> 1;
  }
}

function lowToHighUntilZero(data) {
  while (data !== 0) {
    let bit = getLowestBit(data);
    console.log(bit);
    data = data >>> 1;
  }
}

function highToLow(data) {
  for (let i = 0; i < 32; i++) {
    let bit = getHighestBit(data);
    console.log(bit);
    data = data << 1;
  }
}

function higtToLowUntilZero(data) {
  while (data !== 0) {
    let bit = getHighestBit(data);
    console.log(bit);
    data = data << 1;
  }
}

function getBitByIndex(data, index) {
  return (data >>> index) & 1;
}

function inverseBitByIndex(data, index) {
  return (1 << index) ^ data;
}

function putOneByIndex(data, index) {
  return (1 << index) | data;
}

function putZeroByIndex(data, index) {
  return ~(1 << index) & data;
}

function nullLowBits(data, numberOfBits) {
  return (~0 << numberOfBits) & data;
}

function nullHighBits(data, numberOfBits) {
  return (~0 >>> numberOfBits) & data;
}

function checkIfContainsOne(data) {
  return data != 0 && ((data - 1) & data) == 0;
}
