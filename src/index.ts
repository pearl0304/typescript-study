const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello ${name}, you are ${age}, you are a ${gender}`;
}

const result =sayHi("kylie", 29, "female");
console.log(result)
export {}