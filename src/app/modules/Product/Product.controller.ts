import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { ProductServices } from "./Product.service";


const CreateProduct = catchAsync( async (req: Request, res: Response) => {
    console.log(req.body)
    const result = await ProductServices.CreateProductIntoDB(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Product created successfully",
        data: result
    })
})

const getAllProducts = catchAsync( async (req, res) => {

    const result = await ProductServices.getAllProductFromDB();
    
    if(result.length > 0){
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Products retrieved successfully",
            data: result
        })
    }
    else{
        sendResponse(res, {
            statusCode: httpStatus.NOT_FOUND,
            success: false,
            message: "No Data Found",
            data: result
        })
    }
})

const getSingleProduct = catchAsync( async (req, res) => {
    const {id} = req.params;

    const result = await ProductServices.getSingleProductFromDB(id);
    
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "A Product retrieved successfully",
        data: result
    })
})

const updateProduct = catchAsync(async (req, res) => {
    const { id } = req.params;
    const updatedItem = await ProductServices.updateProductIntoDB(id, req.body);
  
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Product updated successfully',
      data: updatedItem,
    });
  });

  const deleteProduct = catchAsync(async (req, res) => {
    const { id } = req.params;
    await ProductServices.deleteProductFromDB(id);
  
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Product deleted successfully',
      data: null,
    });
  });


export const ProductController = {
    CreateProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct
}