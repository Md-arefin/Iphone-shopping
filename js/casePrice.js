document.getElementById("btn-case-plus").addEventListener("click", function(){
    const newNumber = updateNumber(true, 'case-Number-field');
    casePrice (newNumber);
    totalPrice()
})



document.getElementById("btn-case-minus").addEventListener("click", function(){
    const newNumber = updateNumber(false, "case-Number-field");
    casePrice (newNumber);
    totalPrice()
})