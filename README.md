# Calculator Microservice Development Process

## Step-by-Step Development

1. **Project Setup**

   - Created a new directory for the project
   - Initialized Node.js project using `npm init -y`
   - Installed Express.js with `npm install express`

2. **Microservice Development**

   - Created `server.js` as the main application file
   - Implemented four arithmetic operations:
     - Addition
     - Subtraction
     - Multiplication
     - Division

3. **Key Implementation Details**

   - Used Express.js to create routes
   - Implemented query parameter input
   - Added basic error handling
   - Handled input validation
   - Managed division by zero scenario

4. **Testing**
   - Manually tested each endpoint
   - Verified calculations
   - Checked error handling

## How to Run the Microservice

1. Install dependencies: `npm install`
2. Start the server: `npm start`
3. Access endpoints at `http://localhost:3000/`

## Endpoints

- `/add?num1=x&num2=y`
- `/subtract?num1=x&num2=y`
- `/multiply?num1=x&num2=y`
- `/divide?num1=x&num2=y`
