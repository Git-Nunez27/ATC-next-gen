# Product Management API with JWT Authentication

## Overview
This is a RESTful API for product management with JWT (JSON Web Token) authentication. The system allows for complete CRUD operations on products while ensuring secure access through token-based authentication.

## Authentication Flow
1. Users must first login through `/api/login` endpoint
2. Upon successful login, a JWT token is generated and returned
3. This token must be included in subsequent requests in the Authorization header
4. Format: `Authorization: Bearer <token>`

## API Endpoints

### Authentication
```
POST /api/login
```
Request body:
```json
{
    "username": "admin",
    "password": "password123"
}
```

### Products

1. Create Product (POST /api/products)
```json
Request:
{
    "name": "Mechanical Keyboard",
    "price": 1590,
    "stock": 50
}
```

2. Get All Products (GET /api/products)
- Returns array of all products
- Requires authentication

3. Update Product (PUT /api/products/:id)
```json
Request:
{
    "name": "Updated Keyboard",
    "price": 1690,
    "stock": 45
}
```

4. Delete Product (DELETE /api/products/:id)
- Deletes product by ID
- Requires authentication

## Security
- All endpoints (except login) require JWT authentication
- Tokens expire after 24 hours
- Invalid or expired tokens will return 401 Unauthorized

## Error Handling
- 400: Bad Request - Invalid input data
- 401: Unauthorized - Missing or invalid token
- 404: Not Found - Product not found
- 500: Server Error

## Data Model
Product Schema:
```json
{
    "id": number,
    "name": string,
    "price": number,
    "stock": number,
    "createdAt": datetime,
    "updatedAt": datetime
}
```
