import { addExpenses, expenses } from "./modules/expensesModule.js"
import { displayList } from "./modules/uiModule.js"

let expensesFormContainer = document.getElementById("expenses-form");
let expensesListContainer = document.getElementById("expenses-list");

fetch('./components/expenses-form.html').then((response) => response.text())
    .then((html) => {
        expensesFormContainer.innerHTML = html
        fetchForms()
    })

fetch('./components/expenses-list.html').then((response) => response.text())
    .then((html) => {
        expensesListContainer.innerHTML = html
    })

function fetchForms() {
    // Move the fetchForm() function outside of fetchForms()
    let form  = document.getElementById('click');
    form.addEventListener('click', fetchForm)
    function fetchForm(e) {
        try {
            e.preventDefault()
            let expenseNameInput = document.getElementById("expenseName");
            let expensePriceInput = document.getElementById("expensePrice");

            let expenseName = expenseNameInput.value;
            let expensePrice = expensePriceInput.value;

            if (expenseName && expensePrice) {
                addExpenses(expenseName, expensePrice);
                console.log("expenses", expenses);

                displayList();
            }
        } catch (error) {
            alert(`App Error: ${error.message}`);
        }
    }
}