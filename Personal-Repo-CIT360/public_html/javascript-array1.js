/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function repo1 (){
//array repository for use in later functions. 
	document.getElementById('evens').innerHTML = countEvens([35, 81, 14, 42, 85]);
	}
function repo2 (){
	document.getElementById('product').innerHTML = multiply([5, 10, 15, 20, 25, 30], 5);
	}	
//------------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------//    

// Input: array passed from repo function. 
// Processing: number of even numbers in 'evens' array of repo function
// Output: displays results of findings. 
  
function countEvens (list) {
		var num =0; 
		for (var i=0; i<list.length; i++) {
			if (list[i]%2===0) {
				num += 1;}
		}
	return num;
	}
		
//------------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------//  		

// Input: array passed from repo function. 
// Processing: multiplies each number in list by 5 (multiplier). 
// Output: displays results of findings
function multiply(list, multiplier) {
	
	var productVal = "";
	for (var i=0; i<list.length; i++) {
		var number = (list[i] * multiplier);
		productVal += number + ', ';
	}
	
	return productVal;
}	