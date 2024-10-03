# Product Management API

## Technology Stack

- **Backend**: TypeScript, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Validation**: Zod for type validation

## API Endpoints

### 1. Product Management
  - Create Product: `POST /api/products`
  - Update Product: `PUT /api/products/${productId}`
  - Delete Product: `DELETE /api/products/${productId}`

## Getting Started

To use this project, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/product-management-api.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd product-management-api
    ```

3. **Install the dependencies:**

    ```bash
    npm install
    ```

4. **Set up environment variables:**

    Create a `.env` file in the root directory with the following content:

    ```plaintext
    MONGODB_URI=mongodb://localhost:27017/product-management
    JWT_SECRET=your_jwt_secret
    PORT=3000
    ```

5. **Run the development server:**

    ```bash
    npm start
    ```

6. **Access the application:**

    Open your browser and go to `http://localhost:3000` (or the appropriate URL if deployed).

## Feedback

If you have any feedback or encounter any issues, please don't hesitate to inform us.

Thank you for using our Product Management API! ❤️
