var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listSchema = new Schema({
    cost: Number,
    rent: Number,
    sqft: Number,
    city: String
});

// listings as the collection
var building = mongoose.model('Listings', listSchema);

module.exports = building;