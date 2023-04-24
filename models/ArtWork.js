const mongoose = require('mongoose');

const myModelSchema = new mongoose.Schema({
    Title: {
        type: String,
        
    },
    Description: {
        type: String,
        
    },
    IncomeType: {
        type: String,
        
    },
    visiblity: {
        type: String,
        
    },
    salery: {
        type: String,
        
    },
    Type: {
        type: String,
        
    },
    acrylicAndOil: {
        type: String,
        
    },
    availability: {
        type: String,
        
    },
    creationDay: {
        type: Number,
        
    },
    creationMonth: {
        type: Number,
        
    },
    creationYear: {
        type: Number,
        
    },
    dimensionHeight: {
        type: Number,
        
    },
    dimensionWidth: {
        type: Number,
        
    },
    dimensionType: {
        type: String,
        
    },
    editionFrom: {
        type: Number,
        
    },
    editionTo: {
        type: Number,
        
    },
    editions: {
        type: String,
        
    },
    natureExpression: {
        type: String,
        
    },
    signature: {
        type: String,
        
    },
    image: {
        type: String,
        
    },
    tags: {
        type: String,
        
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const ArtWork = mongoose.model('artWork', myModelSchema);

module.exports = ArtWork;
