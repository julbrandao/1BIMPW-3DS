module.exports = (sequelize, DataTypes) => {
    const Aluno = sequelize.define("Aluno", {
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        idade: { 
          type: DataTypes.INTEGER,
          allowNull: false, 
      },
    });

    
    return Aluno;

}; 