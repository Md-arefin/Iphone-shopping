// Quantity number changing.

function updateNumber (isIncrease, Id){
    const numberField = document.getElementById(Id);
    const numberFieldString = numberField.value;
    const number = parseInt(numberFieldString);
    let newNumber ;
    if (isIncrease === true){
        newNumber = number + 1;
    } else {
        newNumber = number - 1;
    }
     
    return numberField.value = newNumber ;
}

//  input value 

function getElementValueById(id){
    const elementField = document.getElementById(id);
    const elementString = elementField.value;
    const elementValue = parseInt(elementString);

    return elementValue;
}
//  input text value 

function getElementTextById(id){
    const elementField = document.getElementById(id);
    const elementString = elementField.innerText;
    const elementValue = parseInt(elementString);

    return elementValue;
}

// set inner text

function setTextById(elementId, value){
    const element = document.getElementById(elementId)
    return element.innerText = value;
}

//Phone Price added

function casePrice (id){
    const newNumber = id;
    const productPriceTotal  = newNumber * 59;
    
    setTextById("case-total", productPriceTotal);
}

//Case Price added

function phonePrice (id){
    const newNumber = id;
    const productPriceTotal  = newNumber * 1219;
    
    setTextById("phone-total", productPriceTotal);
}

//  Total price calculation

function totalPrice(){
    const phonePriceValue = getElementTextById("phone-total");
    const casePriceValue = getElementTextById("case-total");
    const subTotalPrice = phonePriceValue + casePriceValue;
    
    setTextById("sub-total", subTotalPrice);

    const taxAmount = (subTotalPrice * 0.1).toFixed(2) ;
    const tax = parseFloat(taxAmount)
    setTextById("tax-total", tax);

    const totalPriceValue = subTotalPrice + tax;
    setTextById("total-value", totalPriceValue);
}

document.getElementById("btn-check-out").addEventListener('click', function(){
    alert("Agee TAka manage kor")
})