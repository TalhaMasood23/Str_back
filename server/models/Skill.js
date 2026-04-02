module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define('Skill', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    level: {
      type: DataTypes.ENUM('Beginner', 'Intermediate', 'Advanced', 'Expert'),
      defaultValue: 'Intermediate'
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  return Skill;
};
