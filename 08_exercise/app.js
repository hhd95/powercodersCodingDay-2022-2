function revNumber(...rev) {
  rev = rev.toString();
  return `${rev.split("").reverse().join("")}`;
}

// console.log(revNumber(6585));

console.log(revNumber(443344556688));
