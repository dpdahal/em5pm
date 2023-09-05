import mongoose, {Schema, model } from 'mongoose';

const OrderSchema = new Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",       

    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",       

    },

    quantity:{
        type: Number,
        default: 1
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default model('Order', OrderSchema);