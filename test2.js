let products=[
   {"name":"Product A","price":100,"stock":5},
   {"name":"Product B","price":200,"stock":3} ,
   {"name":"Product C","price":50,"stock":10}
]

let sort_key="name";
let ascending=false;

products.sort(function(a,b){
   if(sort_key=="name"){
      if(ascending==true){
         return a[sort_key].localeCompare(b[sort_key]);
      }
      else{
         return b[sort_key].localeCompare(a[sort_key]);
      }
      
   }
   else{
      if(ascending==true){
         return a[sort_key]-b[sort_key];
      }
      else{
         return b[sort_key]-a[sort_key];
      }
   }
})
console.log("SORT LIST",products);
