// truncate("What I'd like to tall on this topic is:", 20); // What I'd like to te...
// truncate("Hi everyone!", 20); // Hi everyone!

function truncate(str, length) {
  if (str.length < length) {
    return str;
  } else {
    return str.slice(0, length-1) + "...";
  }
}

console.log(truncate("What I'd like to tall on this topic is:", 20)); // What I'd like to te...
console.log(truncate("Hi everyone!", 20)); // Hi everyone!