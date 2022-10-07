const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!; //! The value won't be null

const numResults: Array<number> = []; //This is a generic type <type>
const textResults: string[] = [];

type NumOrString = number | string;
type result =  { val:number; timestamp: Date }; //Set the object type "union type"

interface ResultObj {
  val: number;
  timestamp: Date;
}

function add(num1: NumOrString, num2:number | string) {
  if(typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2;
  }
  else if (typeof num1 === 'string' && typeof num2 === 'string') {
    return num1 + ' ' + num2;
  }
  
  return +num1 + +num2; //Transform the string to number with +a
}

function printResult(resultObj: result) { 
  console.log(`object value-> ${resultObj.val}`);
}

buttonElement.addEventListener('click', () => {
  const num1= num1Element.value;
  const num2= num2Element.value;
  
  const result = add(+num1, +num2);
  numResults.push(+result);
  
  const stringResult = add(num1, num2);
  textResults.push(stringResult as string);
  
  printResult({val: result as number, timestamp: new Date()});

  console.log(numResults, textResults);  

});

const myPromise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve('It worked!');
  },1000);
});

myPromise.then((result) => {
  console.log(result.split(' '));
})