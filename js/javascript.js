
//Global varibales, the total price of the pizzas, the subtotal of the pizzas and if the discount been applied or not
var total = 0;
var subTotal1 = 0;
var discountUsed = false;

// This is a function checking if the password is equal to 7 characters exactly in length
// function checkLengthPassword(password){
//     if(password.length != 7){
//         return false;
//     }
// }

// As part of the specification explicitly stating - password must be 7 characters in length
function checkPasswordLength(password) {
    if(password.length < 7) {
        return false;
    }
}

// function to check if textbox is empty
function checkIsEmpty(field){
    if(field == null || field == ""){
        return true;
    }
}

// form validations, checking if the username or the password is empty, checking if the password is less than 7 characters, checking is an order is made
function validateForm(){
    var name = document.forms["myForm"]["fname"].value;
    var password = document.forms["myForm"]["password"].value;

    if(checkIsEmpty(name) && checkIsEmpty(password)){
        alert ("Username and Password must be entered");
        return false;
    } else if(checkIsEmpty(name)){
        alert ("Username must be entered");
        return false;
    }else if (checkPasswordLength(password) == false){
        alert ("Password must be 7 characters or more in length");
        return false;
    }else if(total == 0){
        alert ("Please make a valid order");
    }else {
        alert ( name + " has made an order totalling: €" + total.toFixed(2));
        this.form.reset();
    }
}

//Jamies stipulation in ------ alert based warning method in JS
// function myConfirm() {
//     var text;
//     var x = document.getElementById("dropdown").value;
//     if(x == "supersize"){
//        if(confirm("For Health and Saftey Reasons we are Required by law to give you a Warning. You have Selected SUPERSIZE! Jamies Pizza holds no responsibility for the consequences of mass amounts of Pizza consumtion. The comsumer is fully aware of their actions and gives up all rights to press charges in a court of law.") == true){
//            console.log("hello");
//         }
//     }
// }


// Jamies stipulation in Jquery----- Warning message box ----- JQuery function taken from https://github.com/craftpip/jquery-confirm
$(function(){
    $("#dropdown").change(function(){
       var var1 = $("#dropdown option:selected").text();
       if(var1 == "SUPERSIZE"){
        $.confirm({
            title: "!!WARNING!!",
            content: "For Health and Saftey Reasons we are Required by law to give you a Warning. You have Selected SUPERSIZE! Jamies Pizza holds no responsibility for the consequences of mass amounts of Pizza consumtion. The comsumer is fully aware of their actions and gives up all rights to press charges in a court of law.",
            type: 'red',
            buttons: {   
                ok: {
                    text: "Proceed",
                    btnClass: 'btn-primary',
                    keys: ['enter'],
                    action: function(){
                         console.log('the user clicked confirm');
                        }
                    },
                }
            })
        }   
    })
})

// function to calculate the subtotal for the pizzas
function subTotal(noOfPizzas){
    
    var pizzaSize = document.getElementById("dropdown").value;    
    
    if(pizzaSize == "large"){
        subTotal1 = noOfPizzas * 5;
    }
    else if (pizzaSize == "extra-large"){
        subTotal1 = noOfPizzas *  7;
    }else if (pizzaSize == "supersize"){
        subTotal1 = noOfPizzas *  17;
    }
    if (discountUsed){
        subTotal1 = subTotal1 - (subTotal1*0.1);
    }

    total = total+ subTotal1;
   
    var output = "<style> #demo5 { color: red; }</style>"+ total.toFixed(2);
    document.getElementById("demo5").innerHTML = output;
}

// function to check if the inputted number for pizzas is numberic
function isNumeric(){
    
    var noOfPizzas = document.getElementById("no_of_pizzas").value;
    if (isNaN(noOfPizzas)){
        alert("Please enter a valid value");
    }else if (checkIsEmpty(noOfPizzas)){
        alert("Please enter the number of pizzas you would like to order");
    }
    else if(noOfPizzas > 0){
        subTotal(noOfPizzas);
    }
}

// checks if the discount code is applied, the discount can only be applied once
function discountCode(){
    var discountWord = document.getElementById("discount_code").value;
    
    if(discountWord == "extracheese" && discountUsed == false){
        discountUsed = true;
        total = total - (total*0.1);

        if(total != 0){
            var output = "<style> #demo5 { color: red; }</style>"+ total.toFixed(2) + "&nbsp;";
            document.getElementById("demo5").innerHTML = output;
            output = "<style> #demo4 { color: green; }</style>"+ "&nbsp;(coupon added)";
            document.getElementById("demo4").innerHTML = output;
        }             
    }
}

// Clears the total cost of the pizzas back to 0
function resetTotal(){
    total = 0;
    var output = "<style> #demo5 { color: red; }</style>"+ total.toFixed(2);
    document.getElementById("demo5").innerHTML = output;
}




