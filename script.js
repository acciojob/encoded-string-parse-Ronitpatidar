const parseCode = (str) => {
  const parts = str.split(/0+/); // split by one or more zeros
  return {
    firstName: parts[0],
    lastName: parts[1],
    id: parts[2]
  };
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
