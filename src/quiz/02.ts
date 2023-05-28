// Q: FuncType という型を定義して、エラーを解消してください。
type FuncType = (x: number) => number;

// ここのエラーを解消する
const addOne: FuncType = (x: number): number => x + 1;

// Q: SumFunc という型を定義して、エラーを解消してください。
type SumFunc = (numbers: (number | string)[]) => number;

const sumAll: SumFunc = (numbers) => {
  let sum = 0;
  for (const n of numbers) {
    if (typeof n === "number") {
      sum += n;
    }
  }
  return sum;
};
// ここがエラーにならないようにする
const total: number = sumAll([1, 2, 3, 4, 5]);
// ここはエラーになる
const totalError1: number = sumAll(["a", "b", "c"]);
const totalError2: number = sumAll([1]);

// Q: number が入る配列, Array1 を定義してください
type Array1 = (number | string)[];
const array1_1: Array1 = [1];
const array1_2: Array1 = [1, 2, 3, 4, 5];
const array1_3: Array1 = ["string", "is", "not", "allowed"];

// Q: number か string が入る配列、Array2 を定義してください
type Array2 = (number | string | boolean)[];
const array2_1: Array2 = [1, "string", 2, "is", 3, "allowed"];
const array2_2: Array2 = [true, false, true, false];

// Q: number と string のちょうど 2 要素だけが入るタプル、Tuple1 を定義してください
type Tuple1 = [number, string];
const tuple1_1: Tuple1 = [1, "string is here"];
/* 
const tuple1_2: Tuple1 = [1, "this is bad", 3, 4, 5];
const tuple1_3: Tuple1 = ["string", 1]; 
*/

const tuple1_3: Tuple1 = [1,"string"]; 
