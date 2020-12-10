module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        user_id: DataTypes.INTEGER,
        content: DataTypes.STRING
    });
    Post.associate = function(models) {
        Post.hasOne(models.User, {
            onDelete: "cascade"
        });
    };
    return Post;
}