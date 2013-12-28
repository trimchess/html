function f1()
{
	alert("This is f1");
}

function f2()
{
	alert("Ths is f2");
}

function f3 ()
{
	document.write("\'f3()\' wurde aufgerufen");
}

function f4(param1)
{
	document.write("f4 wurde mit folgendem Paramert aufgerufen: " + param1 + "<br />");
}

function f5(param1, param2)
{
	var comp;
	if (param1 > param2)
	{
		comp = "gr�sser";
	}
	else if (param1 < param2)
	{
		comp = "kleiner";
	}
	else if (param1 = param2)
	{
		comp = "gleich";
	}
	document.write("f5: param1=" + param1 + "; param2=" + param2 + " => param1 ist " + comp + " als param2 <br />");
}

function f6()
{
	var v1 = prompt("Geben Sie ihren Name ein: ", "");
	alert("f6: Herzlich willkommen, " + v1 + "!");
}

// Fakult�t rekursiv berechnen
function f7(n)
{
	if (n > 0)
	{
		n = n*f7(n-1);
	}
	else
	{
		n = 1;
	}
	return(n);
}


function funktionOne(data, callback)
{
	document.writeln("functionOne, parameter: " + data + "<br />");
	if((callback != undefined) && (typeof callback == 'function'))
	{
		document.writeln("type of parameter 2: " + typeof callback + "<br />");
		callback();
	}
	else
	{
		document.writeln("type of parameter 2 is not a function <br />");
	}
}

function funktionTwo()
{
	document.writeln("Name of callback function: functionTwo" + "<br />");
}

function checkInputField (fieldValue)
{
	if (fieldValue == "")
	{
		alert("Das Namensfeld muss einen Inhalt haben!");
		document.Test.firstName.focus();
		return false;
	}
	else
	{
		alert("Eingabe: " + fieldValue);
	}
}

function meanVal()
{

}

function sum(a,b)
{
	document.writeln("a + b = " + (a+b)+ "<br />");
}

var testscope = function()
{
	{
		a = "Ich bin sichtbar";
	}
	{
		document.writeln("Ich bin sichtbar <br />");
	}
}

var anonymefkt = function()
{
	document.writeln("anonyme Funktion" + "<br />");
	return("Anaonyme Funktion");
}

function oneToThousand()
{
	var sum = 0;
	for(i=1;i<=1000;i++)
	{
		sum +=i;
	}
	return sum;
}

function oneToThousandWithCallBack(callback)
{
	var sum = 0;
	for(i=1;i<=1000;i++)
	{
		sum +=i;
	}
	callback(sum);
}

function facultyWithCallBack(callback)
{
	var prod = 1;
	for(i=1;i<=100;i++)
	{
		prod *=i;
	}
	callback(prod);
}

var person = {
	"nachname" : "Wirz",
	"vorname" : "Martin",
	"company" : {
		"cname" : "Sitasys",
		"cdepartment" : "Development"
	}
}

