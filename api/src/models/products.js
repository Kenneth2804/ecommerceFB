const{DataTypes} = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('products',{

        id: {
            type: DataTypes.UUID,
            DefaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        type:{
            type: DataTypes.ENUM('shirt', 'shorts'),
            allowNull: false,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        size:{
            type: DataTypes.STRING,
            allowNull: false
        },
        color:{
            type: DataTypes.STRING,
            allowNull: false
        },
        image:{
            type: DataTypes.STRING,
            allowNull: false
        }
                
    })
}