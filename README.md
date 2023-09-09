# E-commerce-Back-End

## 🌟 Features

This e-commerce back-end project provides the following features:

- API endpoints for managing categories, products, and tags.
- Supports CRUD operations for categories, products, and tags.
- Provides associations between products, categories, and tags.
- Uses Sequelize and MySQL2 for database interaction.
- Includes seed data and schema creation scripts for easy setup.
- Tested with Insomnia Core for functionality demonstration.

## 📸 Screenshot

<div style="text-align:center">
  <img src="./assets/screenshots/Screenshot 2023-09-10 031042.png" alt="App Screenshot" width="100%"/>
</div>

## 🚀 Demo GIF

<div align="center">
  <img src="./assets/screenshots/demobackend.gif" alt="App Demo GIF" width=100%">
</div>

## 📷 Video Demo and Links

- [Google Drive Video Demo](https://drive.google.com/file/d/19LSoQU8h0CqQV4Nwf0uBT27THRx1iLWE/view?usp=sharing)

  Encouraged to watch demo in highest quality for better readiblity on computer screens.

- [Github Repo](https://github.com/Charltonortega/E-commerce-Back-End)

## 🛠 Setup

To set up and run this project, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using

```
npm install
```

4. Create a `.env` file and set the following environment variables:

```
DB_NAME=(your_database_name)
DB_USER=(your_database_user)
DB_PASSWORD=(your_database_password)
```

5. Initialize the database by running:

```
npm run seed
```

6. Start the server using

```
npm start
```

## 💻 Usage

To use this project, you can interact with it via API requests using a tool like [Insomnia](https://insomnia.rest/products/insomnia). Here are some example routes that will help you get started:

### Products

- GET all products: `http://localhost:3001/api/products`
- GET a single product by ID: `http://localhost:3001/api/products/{product_id}`
- POST to create a new product: `http://localhost:3001/api/products`
- PUT to update a product by ID: `http://localhost:3001/api/products/{product_id}`
- DELETE a product by ID: `http://localhost:3001/api/products/{product_id}`

### Categories

- GET all categories: `http://localhost:3001/api/categories`
- GET a single category by ID: `http://localhost:3001/api/categories/{category_id}`
- POST to create a new category: `http://localhost:3001/api/categories`
- PUT to update a category by ID: `http://localhost:3001/api/categories/{category_id}`
- DELETE a category by ID: `http://localhost:3001/api/categories/{category_id}`

### Tags

- GET a Tag by ID: `http://localhost:3001/api/tags/{tag_id}`
- POST to create a new tag: `http://localhost:3001/api/tags`
- PUT to update a tag by ID: `http://localhost:3001/api/tags/{tag_id}`
- DELETE a tag by ID: `http://localhost:3001/api/tags/{tag_id}`

## 📚 Resources

- [Inquirer](https://www.npmjs.com/package/inquirer) - for interacting with user input generating prompts
- [MySQL2](https://www.npmjs.com/package/mysql2) - for interacting with MySQL

## 🤝 Contributing

Pull request are welcome, For major changes please open issue first to dicuss what you would like to change.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
