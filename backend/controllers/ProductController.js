import Product from "../models/ProductModel.js";

export const getProducts = async(req, res)=> {
    try {
        const response = await Product.findAll();
    } catch (error) {
        
    }

}

export const getProductById = (req, res)=> {
    
}

export const saveProduct = (req, res)=> {
    
}

export const updateProduct = (req, res)=> {
    
}

export const deleteProduct = (req, res)=> {
    
}