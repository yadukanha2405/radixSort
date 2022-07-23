import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// looking for the digit

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// check the count of digit from element of the array

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// check the largest count of digit from element of the array

function mostDigit(num) {
  let maxdigist = 0;
  for (let i = 0; i < num.length; i++) {
    maxdigist = Math.max(maxdigist, digitCount(num[i]));
  }
  return maxdigist;
}

// finaly allying Radix Sort

function radixSort(num) {
  let maxDigitCount = mostDigit(num);
  // loop for reach the all digits of the elements
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    // nested loop for every element of the array
    for (let i = 0; i < num.length; i++) {
      let digit = getDigit(num[i], k);
      digitBuckets[digit].push(num[i]);
    }
    // reforming array
    num = [].concat(...digitBuckets);
  }
  return num;
}

let result = radixSort([4, 5, 88, 45, 74, 69]);
console.log(result);
