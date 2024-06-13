# Storefront

This is the repository for the User-Store of the e-commerce platform. It features a seamless UI/UX, including filters and product recommendations, an operational shopping cart, and checkout functionality.

## Features

- User-friendly interface with filters and product recommendations
- Shopping cart and checkout functionality
- Integration with Stripe for payment processing

## Tech Stack

- **Next.js**: Framework for building server-rendered React applications
- **PrismaDB**: ORM for database management
- **MySQL (AWS RDS)**: Relational database service
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn/UI**: Component library for building user interfaces
- **Stripe**: Payment processing platform

## Getting Started

### Admin Dashboard link:
- Repo: https://github.com/Deval1807/E-commerce-admin
- Hosted frontend: https://e-commerce-admin-jade-psi.vercel.app/

### Prerequisites

- Node.js
- MySQL database (preferably AWS RDS)
- Stripe configuration

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Deval1807/E-commerce-store
    cd storefront
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Configure environment variables:
    - Create a `.env` file in the root directory.
    - Add your backend (Admin Dashboard configuration)
    - If you have created a new store in the dashboard, please go to the 'Setting'
    - You will be able the find the NEXT_PUBLIC_API_URL there
    - Add that API in for the frontend
    ```env
    NEXT_PUBLIC_API_URL=<link-to-your-admin-dashboard/api/<store-id>>
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

5. Open your browser and navigate to `http://localhost:3000`.

## Deployment

You can find the deployed site at: https://e-commerce-store-sooty-psi.vercel.app/

## Contributing

We welcome contributions from the community. To contribute, please fork the repository, create a new branch, and submit a pull request. Make sure to follow the coding standards and ethical practices.

## Contact

For questions or support, please contact Deval Darji by following ways:

1. LinkedIn: [Deval Darji](https://www.linkedin.com/in/deval-darji-a15002226/)

2. Email: [deval135darji@gmail.com](mailto:deval135darji@gmail.com)
