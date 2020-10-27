const mongoose = require("mongoose");

const WidgetSchema = new mongoose.Schema({
    title:{
        type: String,
        required:[true, "You Need A Title"],
        minlength:[5, "You Need At Least 5 Characters"]
    }


}, {timestamps:true})

const Widget = mongoose.model("Widget", WidgetSchema);

module.exports = Widget;