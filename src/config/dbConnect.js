import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://mikaela:123@cluster0.ann03es.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;