import mongoose, {Schema, model } from 'mongoose';

const AttributeSchema = new Schema({
    name:{
        type: String,
        required: true
    },
   
   
});

export default model('Attribute', AttributeSchema);