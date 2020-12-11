module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        content: DataTypes.STRING
    });
    
    Post.associate = function(models) {
        Post.belongsTo(models.User);
    };

    return Post;
}