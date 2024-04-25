# Amazon Clone Project

Welcome to the Amazon Clone project! This project aims to replicate the core features and functionalities of the Amazon e-commerce platform using ReactJS, ReactQuery, and various modern frontend technologies. In this README, we'll outline the ideation, planning, and execution process of building this project.

## Ideation and Planning

### Step 1: Gathering Requirements and Features
1. **Homepage**: Displays popular products, deals, and promotions.
2. **Product Listing**: Displays a list of products with filtering and sorting options.
3. **Product Details**: Detailed view of a single product with images, description, reviews, and related products.
4. **User Authentication**: Sign up, sign in, and sign out functionalities.
5. **Shopping Cart**: Add, remove, and update items in the cart.
6. **Checkout**: Enter shipping details, select payment method, and place orders.
7. **Order History**: View past orders and their status.



### Step 2 & 3: Feature Categories and Pages

#### Feature Categories

1. **Product**: A comprehensive collection of Amazon products organized into various categories.
2. **Cart**: A user interface for managing selected items for purchase.
3. **Order**: A record of order history categorized by product groups and pricing information.
4. **User**: User account management including login, logout, Stripe payment integration, and a single shipping address.

#### Pages

1. **Homepage**: `GET /homepage`
2. **Search**: `GET /s?k={keywords}`
3. **Product Detail**: `GET /{productID}`
4. **Cart**: `GET /cart`
5. **Payment**: `GET /payment`
6. **Order History**: `GET /order`
7. **Signup**: `GET /signup`
8. **Login**: `GET /login`
9. **Not Found (404)**: `GET /*`


### Step 3 & 4: State and Technology Decisions

#### State Management
1. **Homepage**: Managed by global remote state.
2. **Product**: Managed by global remote state.
3. **Cart**: Managed by global UI state.
4. **Order**: Managed by global remote state.
5. **User**: Managed by global remote state.

#### Technology Decisions
1. **Routers**: Utilizes React Router for navigation.
2. **Styling**: Tailwind CSS for styling components.
3. **Global Remote State**: Managed with React Query.
4. **Global UI State**: Managed with React Context combined with useReducer/useState hooks, and React Router.
5. **Backend**: Supabase for backend services, authentication, file storage, and more.

## Getting Started

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies: `npm install`.
4. Start the development server: `npm run dev`.

## Contribution Guidelines

If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/new-feature`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature/new-feature`.
5. Submit a pull request.

## Acknowledgements

This project is inspired by the Amazon e-commerce platform and built for educational purposes. Special thanks to Jonas Schmedtmann's Udemy courses for providing valuable insights into modern web development practices.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
