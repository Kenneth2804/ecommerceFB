const{DataTypes} = require('sequelize');

module.exports = (sequelize) =>{
 sequelize.define('user',{

        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        picture:{
            type: DataTypes.TEXT,
            allowNull: true,
            DefaultValue:'https://cdn-icons-png.flaticon.com/512/1946/1946429.png'
        },
                
    })
}