import mongoose, {Schema, model } from 'mongoose';

const AttributeSchema = new Schema({
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

export default model('Attribute', AttributeSchema);