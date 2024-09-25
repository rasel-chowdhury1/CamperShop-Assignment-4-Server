import { TProduct } from "./Product.interface";
import { ProductModel } from "./Product.model";


const CreateProductIntoDB = async (payLoad: TProduct) => {
    const result = await ProductModel.create(payLoad);
    return result
}

const getAllProductFromDB = async () => {
    const result = await ProductModel.find();
    return result;
}

const getSingleProductFromDB = async (id: string) => {
    const result  = await ProductModel.findById(id);
    return result
}

const updateProductIntoDB = async (itemId: string, payload: Partial<TProduct>) => {
    const result = await ProductModel.findByIdAndUpdate(itemId, payload, { new: true });
    
    return result;
  };
  
  const deleteProductFromDB = async (itemId: string) => {
    const result = await ProductModel.findByIdAndDelete(itemId);
   
    return result;
  };

export const ProductServices = {
    CreateProductIntoDB,
    getAllProductFromDB,
    getSingleProductFromDB,
    updateProductIntoDB,
    deleteProductFromDB
}

