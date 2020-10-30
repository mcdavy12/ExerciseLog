module.exports=(sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        userName: {
            type:DataTypes.STRING,
            allowNull: false
        },
        password: {
            type:DataTypes.STRING,
            allowNull:true
        }
    })
    return User
}npm 