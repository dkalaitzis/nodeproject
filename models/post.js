module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        user_id: DataTypes.INTEGER,
        content: DataTypes.STRING
    });
    return Post;
}