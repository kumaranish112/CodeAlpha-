// #1. Get functions for form, expense list and total amount elements  
const expenseForm =
	document.getElementById("expense-form");
const expenseList =
	document.getElementById("expense-list");
const totalAmountElement =
	document.getElementById("total-amount");

// #2. Initializes expenses array from localStorage  
let expenses =
	JSON.parse(localStorage.getItem("expenses")) || [];

// #3. Renders expenses in tabular form
function renderExpenses() {

	// #3.1 Clear expense list
	expenseList.innerHTML = "";

	// #3.2 Initialize total amount
	let totalAmount = 0;

	// #3.3 Loop through expenses array and create table rows
	for (let i = 0; i < expenses.length; i++) {
		const expense = expenses[i];
		const expenseRow = document.createElement("tr");
		expenseRow.innerHTML = `
      <td>${expense.name}</td>
      <td>Rs${expense.amount}</td>
      <td class="delete-btn" data-id="${i}">Delete</td>
    `;
		expenseList.appendChild(expenseRow);

		// #3.4 Update total amount
		totalAmount += expense.amount;
	}

	// #3.5 Update total amount display
	totalAmountElement.textContent =
		totalAmount.toFixed(2);

	// #3.6 Save expenses to localStorage
	localStorage.setItem("expenses",
		JSON.stringify(expenses));
}

// #4. Add expense function
function addExpense(event) {
	event.preventDefault();

	// #4.1 Get: expense name & amount (from form)
	const expenseNameInput =
		document.getElementById("expense-name");
	const expenseAmountInput =
		document.getElementById("expense-amount");
	const expenseName =
		expenseNameInput.value;
	const expenseAmount =
		parseFloat(expenseAmountInput.value);

	// #4.2 Resets form input
	expenseNameInput.value = "";
	expenseAmountInput.value = "";

	// #4.3 Validates inputs
	if (expenseName === "" || isNaN(expenseAmount)) {
		alert("Please enter valid expense details.");
		return;
	}

	// #4.4 Creates new expense object
	const expense = {
		name: expenseName,
		amount: expenseAmount,
	};

	// #4.5 Adds expense to expenses array
	expenses.push(expense);

	// #4.6 Renders expenses
	renderExpenses();
}

// #5. Delete expense function
function deleteExpense(event) {
	if (event.target.classList.contains("delete-btn")) {

		// #5.1 Get: expense index (from data-id attribute)
		const expenseIndex =
			parseInt(event.target.getAttribute("data-id"));

		// #5.2 Removes expense item from expenses array
		expenses.splice(expenseIndex, 1);

		// #5.3 Renders expenses
		renderExpenses();
	}
}

// #6. Event listeners
expenseForm.addEventListener("submit", addExpense);
expenseList.addEventListener("click", deleteExpense);

// #7. Reset render: initial expenses on page load
renderExpenses();
