import Sequelize, { Model } from 'sequelize';



class Product extends Model {
    static init(sequelize){
        super.init({
                name: Sequelize.STRING,
                price: Sequelize.INTEGER,
                category: Sequelize.STRING,
                path: Sequelize.STRING,
                url: {
                    type: Sequelize.VIRTUAL,
                    get() {
                        const baseUrl = process.env.APP_URL;     
                        const fileRoute = '/product-file';         
                        const filename = this.path;                
                    
                        return `${baseUrl}${fileRoute}/${filename}`;
                    }
                }
            },
            {
                sequelize,
                tableName: 'products'
            }
        );
    }   
}

export default Product;