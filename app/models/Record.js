'use strict';
module.exports = (sequelize, DataTypes) => {
  const Record = sequelize.define('Record', {
    slug: DataTypes.STRING,
    piloto: DataTypes.STRING,
    tipo: DataTypes.STRING,
    circuito: DataTypes.STRING,
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    ano: DataTypes.INTEGER,
    tiempo: DataTypes.STRING,
    total: DataTypes.INTEGER,
    descripcion: DataTypes.TEXT,
    imagen: DataTypes.STRING,
    youtube: DataTypes.STRING
  }, {
    tableName: "records"
  });
  
  Record.associate = function(models) {
    Record.belongsTo(models.User, { as: "user", foreignKey: "user_id" })
  };

  return Record;
};