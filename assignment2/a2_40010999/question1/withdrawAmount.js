// ------------------------------------------------------------------------------
// Assignment #2
// Written by: Anaël Akouété-Akue 40010999
// For SOEN 287 Section S – Winter 2018
// -----------------------------------------------------------------------------

//When button is pressed, execute withrdrawAmount function to check for valid entry
document.getElementById("btn").addEventListener("click", withdrawAmount);

function withdrawAmount()
{
	var amount = parseInt(document.getElementById("amount_id").value);
	if ((amount%20) != 0)
	{
		alert("Incorrect withdrawal amount");
	}
	else if (amount>499.5)
	{
		alert("Insufficient fund");
	}
	else
		alert("Successful transaction!");
}
