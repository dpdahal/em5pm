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
    parent_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        default:0

    },
    description:{
        type: String,    
    },

    image:{
        type:String,
    },

    order_number:{
        type: Number,
        default: 0
    }
   
});

export default model('Category', CategorySchema);