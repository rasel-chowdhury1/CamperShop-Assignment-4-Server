import { z } from "zod";

const CreateProductValidationSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  color: z.string().min(1, "Color is required"),
  price: z.number().min(0, "Price must be a non-negative number"),
  stockQuantity: z.number(),
  description: z.string().min(1, "Description is required"),
  brand: z.string().min(1, "Category is required"),
  imageUrl: z.string().url("Invalid image URL"),
  ratings: z.number().min(0).max(5).optional(),
  badge: z.boolean(),
});

export const ProductValidationsZod = {
    CreateProductValidationSchema
  };