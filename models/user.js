module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        password2: DataTypes.STRING
    });
    return User;
}