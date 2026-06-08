import mongoose from 'mongoose';
import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database.cjs';
import User from '../app/models/User.js';
import Product from '../app/models/Product.js';
import Category from '../app/models/Category.js';



const models = [User, Product, Category];

class Database {
    constructor() {
        this.init();
        this.mongo();
    }

    init(){
        this.connection = new Sequelize(databaseConfig)
        models
        .map((model) => model.init(this.connection))
        .map(model => model.associate && model.associate(this.connection.models),
        );
    }

    mongo() {
        const host = process.env.DB_HOST ?? 'localhost';
        const port = process.env.DB_PORT_MONGODB ?? '27017';
        const uri = `mongodb://${host}:${port}/fastburguer`;
        this.mongooseConnection = mongoose.connect(uri);
    }
}

export default new Database();
