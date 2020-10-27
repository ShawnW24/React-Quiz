const mongoose = require('mongoose');

const database ="widgets";
mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(res => console.log ("You're in the Mainframe!!!"))
    .catch(err =>console.log(`No Connection For You!!!  ${err}`))