// Read Json file
const req = await fetch('../elements.json');
const Elements = await req.json();

// Finds if a string can be written with symbols
const convert = (s_input) => {
	let n = s_input.length;
	if(n == 0) return "";

	for (let i = 0; i < Elements.length; i++) {
		let element = Elements[i];
		let symbol = element.Symbol.toLowerCase();
		let m = symbol.length;
		if(symbol.length <= n){
			let str = s_input.substring(0, m);
			if(symbol === str){
				if(n === m){
					return element.Symbol;
				}else{
					let res = convert(s_input.substring(m));
					if(res !== ""){
						return element.Symbol + res;
					}
				}
			}
		} 
	}

	return "";
}