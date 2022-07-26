const { Model, DataTypes } = require('sequelize');

class User extends Model{
  static init(sequelize){
    super.init({
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      createdAt:{
        field:'create_at',
        type: DataTypes.DATE
      },
      updatedAt:{
        field:'update_at',
        type:DataTypes.DATE
      }
    }, {
      sequelize
    })
  }
}

module.exports = User;