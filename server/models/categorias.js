const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let categoriaSchema = new Schema({
    descripcion: { type: String, unique: true, required: [true, 'Descripcion es necesaria'] },
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true }
});




module.exports = mongoose.model('Categoria', categoriaSchema);