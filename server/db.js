const mongoose = require('mongoose');

const db = process.env.MONGO_DB_URI || 'localhost';
const port = process.env.MONGO_DB_PORT || '27017';

mongoose.connect(`mongodb://${db}:${port}/buddysystem`);

module.exports = mongoose;