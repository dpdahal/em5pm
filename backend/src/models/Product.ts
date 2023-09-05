import mongoose, {Schema, model } from 'mongoose';

const CategorySchema = new Schema({
    name:{
        type: String,
        required: true
    },
    slug:{
        type: String,
        required: true,
        unique:true
    },
    categoryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",       

    },
    quantity:{
        type: Number,
        default: 1
    },

    price:{
        type: Number,
        default: 0
    },
    
    discountPrice:{
        type: Number,
    },
    description:{
        type: String,    
    },

    image:{
        type:String,
    },

   
});

export default model('Category', CategorySchema);