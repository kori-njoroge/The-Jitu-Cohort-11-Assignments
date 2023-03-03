
let products = [
    {
        id: 1,
        title: 'Product 1',
        description: 'Description for product 1',
        price: 10.99,
        category: 'shoes'
    },
    {
        id: 2,
        title: 'Product 2',
        description: 'Description for product 2',
        price: 19.99,
        category: 'shirts'
    },
    {
        id: 3,
        title: 'Product 3',
        description: 'Description for product 3',
        price: 7.99,
        category: 'trousers'
    },
    {
        id: 4,
        title: 'Product 4',
        description: 'Description for product 4',
        price: 14.99,
        category: 'sweater'
    },
    {
        id: 5,
        title: 'Product 5',
        description: 'Description for product 5',
        price: 22.99,
        category: 'shoes'
    },
    {
        id: 6,
        title: 'Product 6',
        description: 'Description for product 6',
        price: 12.99,
        category: 'shirts'
    },
    {
        id: 7,
        title: 'Product 7',
        description: 'Description for product 7',
        price: 9.99,
        category: 'trousers'
    },
    {
        id: 8,
        title: 'Product 8',
        description: 'Description for product 8',
        price: 29.99,
        category: 'sweater'
    },
    {
        id: 9,
        title: 'Product 9',
        description: 'Description for product 9',
        price: 15.99,
        category: 'shoes'
    },
    {
        id: 10,
        title: 'Product 10',
        description: 'Description for product 10',
        price: 17.99,
        category: 'shirts'
    },
];


module.exports = {
    allProducts: (req, res) => {
        res.json(products)
    },
    specificProd: (req, res) => {
        const { id } = req.params;
        console.log(id)
        let singleProduct = products.find(product => product.id === Number(id)/*(product.id === id)*/);
        console.log(singleProduct)
        res.json(singleProduct)
    },
    specificCategory: (req, res) => {
        const { category } = req.params;
        let productsInCategory = products && products.filter(product => product.category === category);
        res.json(productsInCategory)
    },
    updateProduct: (req, res) => {
        const { id, description, price } = req.body
        products = products.map(product => {
            if (product.id === id) {
                product.description = description
                product.price = price
            } else {
                product
            }
        })
        res.json(products)
    },
    deleteProduct: (req, res) => {
        const { id } = req.params;
        console.log(id)
        res.json(products?.filter(product => product.id !== Number(id)));
    }
}