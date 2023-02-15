document.getElementById("btn-phone-plus").addEventListener("click", function(){
  const newNumber = updateNumber(true, "phone-number-field");
  phonePrice (newNumber);
  totalPrice();
})



document.getElementById("btn-phone-minus").addEventListener("click", function(){
    const newNumber = updateNumber(false, "phone-number-field");
    phonePrice (newNumber);
    totalPrice();
})