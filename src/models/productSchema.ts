import {Schema, model} from 'mongoose';
import mongoose from 'mongoose';

const productSchema = new Schema ({
name:{
    type: String,
    required: true,
    trim: true
},
price:{
    type: mongoose.Types.Decimal128,
    required: true
}
});

export default model('Product', productSchema);