import mongoose, {Schema, model } from 'mongoose';

const ProductGallery = new Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    image:{
        type: String,
        required: true
    }
    
   
});

export default model('ProductGallery', ProductGallery);