import Sequelize, { Model } from 'sequelize';



class Category extends Model {
    static init(sequelize){
        super.init({
            name: Sequelize.STRING,
            path: Sequelize.STRING,
            url: {
                type: Sequelize.VIRTUAL,
                get() {
                    const baseUrl = process.env.APP_URL;
                    const fileRoute = '/category-file';
                    const filename = this.path;
                    return `${baseUrl}${fileRoute}/${filename}`;
                },
            },
        },
        {
            sequelize,
            tableName: 'categories'
        }
        );
        return this;
    }   
}

export default Category;