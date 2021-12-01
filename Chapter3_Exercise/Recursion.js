// function isEven(N){
//   if (N==0){
//   return true;
//   }
//   else if (N==1) {
//     return false;
//
//   }
//   else {
//        return isEven(N-2);
//   }
// }
//
// console.log(isEven(75));
function reDraw (amt,acct_balance){

    if (amt%5==0 && amt < acct_balance){
        const charges=0.50;
        let  balance = acct_balance - amt;
        let finalbalance = balance - charges;
        //console.log(acct_balance - charges)
        console.log(finalbalance);
    }

    else
       if(amt%5!=0 || amt > acct_balance){
           console.log(acct_balance)

    }
}

reDraw(5000,2000.00)
