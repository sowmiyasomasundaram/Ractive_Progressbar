var progressBar = new Ractive({
	el: 'progressbarapp',
	template: '#main',

	// Set default values
	data: {
		pBarData: [ 
			 {name: "progress1", value: 30}, 
			 {name: "progress2", value: 50},
			 {name: "progress3", value: 75},
		], //[ '#progress1', '#progress2', '#progress3' ],
		pBarOptions: ['+10', '+25', '-25', '-10']
	},
	
	// Get Bar value
	getPBarValue: function(selIndex) {
		var barData = progressBar.get('pBarData');
		return barData[selIndex].value;
	},
	
	// Set Bar value
	setPBarValue: function(selIndex, selValue) {
		var key = "pBarData["+selIndex+"].value";
		var existingValue = this.getPBarValue(selIndex);		
	
		var finalValue = existingValue + Number(selValue);
		if(finalValue < 0){
		finalValue = 0;
		}
		var barData = progressBar.set(key,finalValue);
	}	
});

progressBar.on( 'updateProgress', function ( event ) {
	var currentObject = event;
	progressBar.setPBarValue(progressBar.get("selectedIndex"),event.context); 
});
