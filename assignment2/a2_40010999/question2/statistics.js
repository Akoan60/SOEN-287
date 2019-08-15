// ------------------------------------------------------------------------------
// Assignment #2
// Written by: Anaël Akouété-Akue 40010999
// For SOEN 287 Section S – Winter 2018
// -----------------------------------------------------------------------------
prompt('Whatever', 'test');

/*document.getElementById("statsOut").addEventListener("load", promptUser);*/

function promptUser()
{
	
	var userEntry = [];
	var i = 0;
	do
	{
		promptEntry.push(prompt('Enter a number:'));
	}while (promptEntry[i] != "-1");

	for (i = 0; i < userEntry.length; i++) {
		document.getElementById("demo").innerHTML = userEntry[i];
	}
}

function validateEntry()
{

}