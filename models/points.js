const mongoose = require('mongoose');


const registrationSchema = new mongoose.Schema({
  	name: {
    	type: String,
    	trim: true,
  	},
  	latitude: {
    	type: String,
    	trim: true,
  	},
    longitude:{
		type: Number,
		trim: true
	},
    parameter:[
		{
			name: {
				type: String,
				trim: true,
			},
			value:{
				type: Number,
				trim: true
			},
			collect_data:{
				type: Date,
				trim: true
			}
    	}
	]
});

module.exports = mongoose.model('Points', registrationSchema);