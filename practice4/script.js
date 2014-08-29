
var button = document.getElementById("btn");

function myfunction(){

	var container = document.getElementById("cont");

	var myUlList = document.createElement("UL");
	container.appendChild(myUlList);

	var col = document.getElementById("colValue");
	var colV = col.value;

	var row = document.getElementById("rowValue");
	var rowV = row.value;
	rowV = rowV - 1;

	// var k = 0;


	// while(k < cellV){

	// 		var newList = document.createElement("LI");
	// 		myUlList.appendChild(newList);
	// 		var text = document.createTextNode("demo text");
	// 		newList.appendChild(text);

	// 			if (k%val == 0 ){
	// 				newList.style.clear = "both";
	// 			}

	// 	k ++;

	// };

	for (var i = 0; i < colV ; i++){

		var newList = document.createElement("LI");
		myUlList.appendChild(newList);
		var text = document.createTextNode("demo text");
		newList.appendChild(text);

			if (j%rowV == 0 ){
				newList.setAttribute("class","breake");
	 		};

				for (var j = 0; j <rowV ; j++){

					var newList = document.createElement("LI");
					myUlList.appendChild(newList);
					var text = document.createTextNode("inside text");
					newList.appendChild(text);

				};

	};

};

button.addEventListener("click", myfunction);
