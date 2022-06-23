function add(arg1) {
	return arg1 + 5
}
///cache arg1 and arg2
//if arg1 and arg2 same ---> return older value 
const memorizedAdd = ()=> {
let cache = {};
return (n1, n2)=> {
    console.log(cache, "------Cache")
	if(`${n1}+${n2}` in cache) {
  	console.log("Fetched from old");
    return cache[`${n1}+${n2}`];
  } else {
  	console.log("Recalculating");
    const result =  n1 + n2;
    cache[`${n1}+${n2}`] = result;
    return result;
  }
}
};
const mAdd = memorizedAdd();
mAdd(9,10);
mAdd(10,20);
mAdd(9,10);
mAdd(10,9);
