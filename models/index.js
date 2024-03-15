// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
})
// Categories have many Products
Category.hasMany(Product)

// Products belongToMany Tags (through ProductTag)
ProductTag.belongsToMany(Tag, {
  foreignKey: 'tag_id'
})
// Tags belongToMany Products (through ProductTag)
ProductTag.belongsToMany(Product, {
  foreignKey: 'product_id'
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
