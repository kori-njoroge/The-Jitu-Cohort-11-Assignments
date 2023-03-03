
const products = [];


module.exports = {
    allProducts: (req, res) => {
        res.json(products)
    },
    specificProd: (req, res) => {
        const { id } = req.params;
        let singleProduct = products && products.map(product => product.id === id);
        res.json(singleProduct)
    },
    specificCategory: (req, res) => {
        const { category } = req.body;
        let productsInCategory = products && products.map(product => product.category === category);
    },
    updateProduct:(req,res) =>{
        const {id,description, price} = req.body
        products = products.map(product =>{
            if(product.id === id){
                product.description = description
                product.price = price
            }else{
                product
            }
        })
    },
    deleteProduct:(req, res) =>{
        const{id} = req.params;
        res.json(products?.filter(product => product.id !== id));
    }
}