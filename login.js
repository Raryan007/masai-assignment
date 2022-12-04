let a = "raj"
let bag = '';

for(let i=a.length-1; i<=0; i--){
    bag = bag+a[i];
}
if(bag==a){
  console.log("it's a palindrome");
}else{
  console.log("it's not a palindrome");
}