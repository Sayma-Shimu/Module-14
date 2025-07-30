/*------restaurant.....multi level discount-------*/ 

const age = 80;
const foodPrice = 500;

if(age <= 10){
   console.log('You can eat for free');
      
}
else if(age >= 60 ){
     //50% discount
    const disPrice = foodPrice * 50 / 100;
    const payTaka = foodPrice - disPrice;
    console.log(payTaka);
}
else if(age >= 50 ){
     //15% discount
    const disPrice = foodPrice * 15 / 100;
    const payTaka = foodPrice - disPrice;
    console.log(payTaka);
}
else if(age >= 40 ){
     //10% discount
    const disPrice = foodPrice * 10 / 100;
    const payTaka = foodPrice - disPrice;
    console.log(payTaka);
}

else{
    console.log(foodPrice);
    
}
