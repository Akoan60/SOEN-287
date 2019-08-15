// ------------------------------------------------------------------------------
// Assignment #2
// Written by: Anaël Akouété-Akue 40010999
// For SOEN 287 Section S – Winter 2018
// -----------------------------------------------------------------------------

/*Function will check after press of a button if the value is numeric,
a message is displayed if not*/
document.getElementById("amount_id").addEventListener("keyup", validateAmount);

function validateAmount()
{
	var amount = Number(document.getElementById("amount_id").value);

	if (isNaN(amount)) 
	{
		alert("Please enter numeric value");
	}
}

