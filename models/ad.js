const mongoose = require('mongoose');


const registrationSchema = new mongoose.Schema({
  	name: {
    		type: String,
    		trim: true,
  	},
  	client: {
    		type: String,
    		trim: true,
  	},
	start:{
		type: Date,
		trim: true
	},
	end:{
		type: Date,
		trim: true
	},
	investment:{
		type: Number,
		trim: true
	}
});
module.exports = mongoose.model('Ad', registrationSchema);
