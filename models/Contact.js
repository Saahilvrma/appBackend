const mongoose = require('mongoose');

const myModelSchema = new mongoose.Schema({
    ProfileImage: {
        type: String,
        
    },
    FirstName: {
        type: String,
        
    },
    MiddleName: {
        type: String,
        
    },
    LastName: {
        type: String,
        
    },
    Title: {
        type: String,
        
    },
    Company: {
        type: String,
        
    },
    emailType: {
        type: String,
        
    },
    Email: {
        type: String,
        
    },
    phoneType: {
        type: String,
        
    },
    PhoneNumber: {
        type: Number,
        
    },
    websites: {
        type: String,
        
    },
    webType: {
        type: String,
        
    },
    BirthDateDay: {
        type: Number,
        
    },
    BirthDateMonth: {
        type: Number,
        
    },
    BirthDateYear: {
        type: Number,
        
    },
    DeathDateDay: {
        type: String,
        
    },
    DeathDateMonth: {
        type: Number,
        
    },
    DeathDateYear: {
        type: Number,
        
    },
    addressType: {
        type: String,
        
    },
    StreetAddress1: {
        type: String,
        
    },
    StreetAddress2: {
        type: String,
        
    },
    City: {
        type: String,
        
    },
    State: {
        type: String,
        
    },
    Zip: {
        type: Number,
        
    },
    Tags: {
        type: String,
        
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Contact = mongoose.model('contact', myModelSchema);

module.exports = Contact;
