module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        password2: DataTypes.STRING
    });
    return User;
}