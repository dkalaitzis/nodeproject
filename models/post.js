module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        content: DataTypes.STRING
    });
    
    return Post;
}