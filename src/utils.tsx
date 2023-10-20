import { LocationData } from "./types";

export function selectItems(arr: LocationData[]) {
  const newArr = [arr[0]];
  const firstValue = arr[0].dt_txt.split(" ")[0];
  const hashObj = { [firstValue]: true };
  for (let i = 1; i < arr.length; i++) {
    const value = arr[i].dt_txt.split(" ")[0];
    if (hashObj[value]) {
      continue;
    }
    hashObj[arr[i].dt_txt.split(" ")[0]] = true;
    newArr.push(arr[i]);
  }
  return newArr;
}
export function removeEmptySpaces(word: string) {
  return word.replace(/\s+/g, " ").trim();
}
