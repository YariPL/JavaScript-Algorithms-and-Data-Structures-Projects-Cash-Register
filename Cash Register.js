	function checkCashRegister(price, cash, cid) {
		let change = [];
	  	let totalCID = []; // array of all cash in drawer
	  	let totalvalueCID = 0;
	  	let exampleARRCID = [0.01, 0.05,0.10,0.25,1,5,10,20,100]; 
	  	let changeVal = cash - price;
	  	let resultArray = [];
	  	let changeCh = [];

		for (let i in cid){
	  		totalCID.push(cid[i][1]);
	  		totalvalueCID += cid[i][1];
	  	}	
	  		totalvalueCID = totalvalueCID.toFixed(2)
	   		
		if (changeVal == totalvalueCID) {
			return {status: "CLOSED", change: cid};
		} else if(cash > totalvalueCID || changeVal <= 0) {
			return {status: "INSUFFICIENT_FUNDS", change: []};
		} else if( cash < totalvalueCID) {
			console.log(changeVal);
			console.log(exampleARRCID);
			totalCID = totalCID.reverse();
			exampleARRCID = exampleARRCID.reverse();
			for(let i=0; i<totalCID.length; i++) {
				console.log('BIG LOOP');
					for(let j = 0; j<8; j++) {
						if(changeVal - exampleARRCID[i] >= 0) {
							totalCID[i] = totalCID[i] - exampleARRCID[i];
							if(totalCID[i] < 0 ) {

							}else {
								console.log(`MORE ${exampleARRCID[i]}`);
								changeVal -= exampleARRCID[i];
								changeVal = changeVal.toFixed(2);
								console.log(changeVal);
								console.log('changeVal');
							 	resultArray.push(exampleARRCID[i]);
							 	console.log(resultArray);
								console.log('resultArray');
							}
						}
					}
			}


			let PENNY = 0;
			let NICKEL = 0;
			let DIME = 0;
			let QUARTER = 0;
			let ONE = 0;
			let FIVE = 0;
			let TEN = 0;
			let TWENTY = 0;
			let ONEHUNDRED = 0;
			

			for(let i=0;i< resultArray.length;i++) {
				console.log(i);
				if(resultArray[i] == 100) {
					ONEHUNDRED += 100;
				} else if(resultArray[i] == 20) {
					TWENTY += 20;
				} else if(resultArray[i] == 10) {
					TEN += 10;
				} if(resultArray[i] == 5) {
					FIVE += 5;
				} else if(resultArray[i] == 1) {
					ONE += 1;
				} else if(resultArray[i] == 0.25) {
					QUARTER += 0.25;
				} else if(resultArray[i] == 0.1) {
					DIME += 0.1;
				} else if(resultArray[i] == 0.05) {
					NICKEL += 0.05;		
				} else if(resultArray[i] == 0.01) {
					PENNY += 0.01;
				} 

				if(PENNY) {
					change.unshift(['PENNY', PENNY]);
				} else if(NICKEL) {
					change.unshift(['NICKEL', NICKEL]);
				} else if(DIME) {
					change.unshift(['DIME', DIME]);
				} else if(QUARTER) {
					change.unshift(['QUARTER', QUARTER]);
				} else if(ONE) {
					change.unshift(['ONE', ONE]);
				} else if(FIVE) {
					change.unshift(['FIVE', FIVE]);
				} else if(TEN) {
					change.unshift(['TEN', TEN]);
				} else if(TWENTY) {
					change.unshift(['TWENTY', TWENTY]);
				} else if(ONEHUNDRED) {
					change.unshift(['ONEHUNDRED', ONEHUNDRED]);
				}					
			}

			let temporaryChange;
				for(let i=0; i< change.length; i++) {
					if(change[i][0] == temporaryChange) {					
					} else {
						changeCh.push(change[i]);
					}
					temporaryChange = change[i][0];
				}
					changeCh = changeCh.reverse();
				
			  return {status: "OPEN", change: changeCh};

		}

	}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])