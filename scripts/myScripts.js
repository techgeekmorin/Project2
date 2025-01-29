const billAmount = document.getElementById("billAmountTxt");
const tipPercentage = document.getElementById("tipPercentageTxt");
const numOfPeople = document.getElementById("numOfPeopleTxt");
const calculateButton = document.getElementById("calculateBtn");
const tipAmountList = document.getElementById("tipAmount");

calculateButton.addEventListener("click", calculateFunc);
function calculateFunc(){ 
    if(billAmount.value !=""){
        if(tipPercentage.value !=""){
            if(numOfPeople.value !=""){
                tipAmountList.innerHTML = "";
                const bill = parseFloat(billAmount.value)
                const tipPercent = parseFloat(tipPercentage.value)
                const peopleNum = parseInt(numOfPeople.value)
                const tipPerPerson = (bill*(tipPercent/100))/peopleNum
                
                const addItem = document.createElement("li")
                addItem.innerHTML = '<strong>Bill Amount: </strong>$' + bill.toFixed(2) +'<br/><strong>Tip Percentage: </strong>' + tipPercent.toFixed(2) + '%<br/><strong>Total Number of People: </strong>' + peopleNum + '<br/><strong>Tip Amount per Person: $</strong>' + tipPerPerson.toFixed(2);
                tipAmountList.appendChild(addItem)
                numOfPeople.value = ""
                tipPercentage.value = ""
                billAmount.value = ""
            }
            else {
                alert("Minimum number of people is 1!")
            }
        }
        else {
            alert("Please enter a Tip Percentage")
        }
    }
    else {
        alert("Please enter a bill amount!")
    }
}