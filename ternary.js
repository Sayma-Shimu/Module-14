/** ternary ---> 3parts 
*?     :
* 
***   condition    ?  do something when true   :   do something when   false

*/


const age = 12;

// normal if-else----------
/*
if(age>=18){
    console.log('You can vote');
    
}
else{
    console.log(' ghumai thako');
    
}
    */


// simple ternary------------
// age >= 18 ? console.log('You can vote')  : console.log(' ghumai thako')


let price = 1500;
const isLeader = true;
/*
if(isLeader === true){
price = 0;

}
else{
    price = price + 100;
}

// console.log(price);
*/

// use ternary-----------
/* price =isLeader === true ? 0 : price + 100;
 console.log(price);
 */


//  ***optional: semi-advance ternary operator use-----

/*
if (isLeader === true) {
    if (price >= 1000) {
        price = price / 2;
    }
    else{
        price = 0
    }

}
else{
    price = price + 100 ;
}

console.log(price);
*/

// ----------nested ternary------------

// price = isLeader === true ? price >= 1000 ? price / 2 : 0 : price + 100 

// chaile eta vangeo likha jabe bujar shubirthe------------

price = isLeader === true ?
    price >= 1000 ?
        price / 2 : 0
    : price + 100;

    console.log(price);
    