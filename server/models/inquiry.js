'use strict';
module.exports = (sequelize, DataTypes) => {
  const Inquiry = sequelize.define('Inquiry', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('new', 'read', 'archived'),
      defaultValue: 'new'
    }
  });

  return Inquiry;
};