// task 1 
function  countOccurrences (arr)
{
    return arr.reduce((arr1, num) => ({ ...arr1, [num]: num}), {}) 
}
console.log(countOccurrences([1, 2, 2, 3, 3, 3 ]));





//task 2
function  findUniqueElements (arr) // устод кати кор кадм
{
  let uniq = [...new Set(arr.map(obj => obj.id))]

  return uniq.map(id => arr.find(obj => obj.id === id))
}
console.log(findUniqueElements([{ id: 1, name: 'John' }, { id: 2, name: 'Jane' },{ id: 1, name: 'Jim' }]));





// task 3 
function mergeArraysToObject (arr,values)
{
  return arr.reduce((obj,key,index) => {
    obj[key] = values[index]
    return obj
  }, {})
}
console.log(mergeArraysToObject(['name', 'age'], ['John', 25]));





// task 4 
function countWords (str)
{
  let words = str.split(/\s+/)
      
  let count = {};

   words.reduce((cnt, word) => {
    
    if (count[word])
    {
      count[word]++
    }
    else 
    {
      count[word] = 1;
    }
   }, {})

return count 
}
console.log(countWords('This is a test. This test is only a test.'));




// task 5
function filterObjectByValueType (obj,type)
{
  let res = {}

  Object.keys(obj).forEach(key => 
   {
   if (typeof obj[key] === type) 
   {
     return res[key] = obj[key];
   }
 });

  return res 
}
console.log(filterObjectByValueType({ a: 1, b: 'hello', c: true, d: 5 }, 'number')
);





//task 6 

function averagePropertyValue(arr,vl)
{
  const sum = arr.reduce((acc, obj) => acc + obj[vl], 0)
 
  return sum / arr.length;
}
console.log(averagePropertyValue([{ a: 1, b: 2 }, { a: 3, b: 4 }, { a: 5, b: 6 }],'a'));
