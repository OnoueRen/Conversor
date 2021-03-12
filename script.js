var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue,resultTypeValue;

// now add listener
input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

// taking initial value
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;


function myResult(){


// inputTypeValue and resultTypeValue updata

	inputTypeValue = inputType.value;
	resultTypeValue = resultType.value;


// compare the input and resultType value and add formula

	// BTU/h

    if(inputTypeValue === "btuh" && resultTypeValue==="btuh"){

        //this is btuh to btuh formula 
        result.value = input.value;
    
    }else if(inputTypeValue === "btuh" && resultTypeValue==="btus"){

		//this is btuh to btus formula 
		result.value = Number(input.value) * 0.00027778;

	}else if(inputTypeValue === "btuh" && resultTypeValue==="mw"){

		//this is btuh to mw formula 
		result.value = Number(input.value) * 0.00000029307107044088317;

	}else if(inputTypeValue === "btuh" && resultTypeValue==="kw"){

		//this is btuh to kw formula 
		result.value = Number(input.value) * 0.00029307;
	
    }else if(inputTypeValue === "btuh" && resultTypeValue==="w"){

		//this is btuh to w formula 
		result.value = Number(input.value) * 0.293071;

    }else if(inputTypeValue === "btuh" && resultTypeValue==="tr"){

		//this is btuh to tr formula 
		result.value = Number(input.value) * 0.0000833333;
        
	}

	// BTU/s

    if(inputTypeValue === "btus" && resultTypeValue==="btuh"){

        //this is btus to btuh formula 
        result.value = Number(input.value) * 3600;
    
    }else if(inputTypeValue === "btus" && resultTypeValue==="btus"){

		//this is btus to btus formula 
		result.value = input.value;

	}else if(inputTypeValue === "btus" && resultTypeValue==="mw"){

		//this is btus to mw formula 
		result.value = Number(input.value) * 0.00105506;

	}else if(inputTypeValue === "btus" && resultTypeValue==="kw"){

		//this is btus to kw formula 
		result.value = Number(input.value) * 1.0551;
	
    }else if(inputTypeValue === "btus" && resultTypeValue==="w"){

		//this is btus to w formula 
		result.value = Number(input.value) * 1055.06;

    }else if(inputTypeValue === "btus" && resultTypeValue==="tr"){

		//this is btus to tr formula 
		result.value = Number(input.value) * 0.3
       
	}

	// MW

	if(inputTypeValue === "mw" && resultTypeValue==="btuh"){

        //this is mw to btuh formula 
        result.value = Number(input.value) * 3412141.63;
    
    }else if(inputTypeValue === "mw" && resultTypeValue==="btus"){

		//this is mw to btus formula 
		result.value = Number(input.value) * 947.82;
		
	}else if(inputTypeValue === "mw" && resultTypeValue==="mw"){
		
		//this is mw to mw formula 
		result.value = input.value;

	}else if(inputTypeValue === "mw" && resultTypeValue==="kw"){

		//this is mw to kw formula 
		result.value = Number(input.value) * 1000;
	
    }else if(inputTypeValue === "mw" && resultTypeValue==="w"){

		//this is mw to w formula 
		result.value = Number(input.value) * 1000000;

    }else if(inputTypeValue === "mw" && resultTypeValue==="tr"){

		//this is mw to tr formula 
		result.value = Number(input.value) * 284.35
       
	}
	
	// KW

	if(inputTypeValue === "kw" && resultTypeValue==="btuh"){

		//this is kw to btuh formula 
		result.value = Number(input.value) * 3412.14;
	
	}else if(inputTypeValue === "kw" && resultTypeValue==="btus"){

		//this is kw to btus formula 
		result.value = Number(input.value) * 0.947817;
		
	}else if(inputTypeValue === "kw" && resultTypeValue==="mw"){
		
		//this is kw to mw formula 
		result.value = Number(input.value) * 0.001;
		
	}else if(inputTypeValue === "kw" && resultTypeValue==="kw"){
		
		//this is kw to kw formula 
		result.value = input.value;
	
	}else if(inputTypeValue === "kw" && resultTypeValue==="w"){

		//this is kw to w formula 
		result.value = Number(input.value) * 1000;

	}else if(inputTypeValue === "kw" && resultTypeValue==="tr"){

		//this is kw to tr formula 
		result.value = Number(input.value) * 0.284345
		
	}	
	
	// W

	if(inputTypeValue === "w" && resultTypeValue==="btuh"){

		//this is w to btuh formula 
		result.value = Number(input.value) * 3.4121;
	
	}else if(inputTypeValue === "w" && resultTypeValue==="btus"){

		//this is w to btus formula 
		result.value = Number(input.value) * 0.00094782;
		
	}else if(inputTypeValue === "w" && resultTypeValue==="mw"){
		
		//this is w to mw formula 
		result.value = Number(input.value) * 0.000001;
		
	}else if(inputTypeValue === "w" && resultTypeValue==="kw"){
		
		//this is w to kw formula 
		result.value = Number(input.value) * 0.001;
		
	}else if(inputTypeValue === "w" && resultTypeValue==="w"){
		
		//this is w to w formula 
		result.value = input.value;

	}else if(inputTypeValue === "w" && resultTypeValue==="tr"){

		//this is w to tr formula 
		result.value = Number(input.value) * 0.00028435
		
	} 	
	
	// T.R.

	if(inputTypeValue === "tr" && resultTypeValue==="btuh"){

		//this is tr to btuh formula 
		result.value = Number(input.value) * 12000;
	
	}else if(inputTypeValue === "tr" && resultTypeValue==="btus"){

		//this is tr to btus formula 
		result.value = Number(input.value) * 3.3333;
		
	}else if(inputTypeValue === "wtr" && resultTypeValue==="mw"){
		
		//this is tr to mw formula 
		result.value = Number(input.value) * 0.00351685;
		
	}else if(inputTypeValue === "tr" && resultTypeValue==="kw"){
		
		//this is tr to kw formula 
		result.value = Number(input.value) * 3.5169;
		
	}else if(inputTypeValue === "tr" && resultTypeValue==="w"){
		
		//this is tr to w formula 
		result.value = Number(input.value) * 3516.85
		
	}else if(inputTypeValue === "tr" && resultTypeValue==="tr"){
		
		//this is tr to tr formula 
		result.value = input.value;
		
	}





}
