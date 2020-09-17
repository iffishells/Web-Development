 num01 = window.prompt("Enter the Number");
 var num02 = window.prompt("Enter Second Number:");
 var operation = window.prompt("Enter operation do you want to apply on the Nums :");
 var return_value = calculator(num01, num02);
 window.alert(return_value);

 function calculator(num01, num02) {

     if (operation == "+") {
         ret = num01 + num02
         return ret
     }
     if (operation == "-") {
         ret = num01 + num02
         return ret
     }
     if (operation == "*") {
         ret = num01 + num02
         return ret
     }
     if (operation == "/") {
         ret = num01 + num02
         return ret
     } else {
         return "look something is back something is missing!!"
     }
 }
