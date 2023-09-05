import mongoose, {Schema, model } from 'mongoose';

const AttributeValueSchema = new Schema({
    attributeId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Attribute",       

    },
    name:{
        type: String,
        required: true
    },

    slug:{
        type: String,
        required: true,
        unique:true
    },
   
   
});

export default model('AttributeValue', AttributeValueSchema);