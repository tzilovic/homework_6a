function update(){

var base= document.getElementById("glazing-option-id").value;
var amt= document.getElementById("quantity-option-id").value;

var total=base*amt
document.getElementById("price").innerHTML = "$" + total.toFixed(2);
}

function itemalert(){

var amt= document.getElementById("quantity-option-id").value;
let flavor=document.getElementById("flavor").innerHTML;


alert(amt + 'x ' + flavor + ' added to cart');



}


var cartamount = 0;

function cartamt(){

var pinkCircle=document.getElementById("cartpop");
pinkCircle.style.display="block";

var amtincart= document.getElementById("cartpop").innerHTML;


var amt= document.getElementById("quantity-option-id").value;
 
cartamount = Number(cartamount) + Number(amt);




document.getElementById("cartpop").innerHTML = amtincart.replace(amtincart, cartamount);

}