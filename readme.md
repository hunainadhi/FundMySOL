# FundYourSOL

FundYourSOL is a decentralized crowdfunding platform built on the Solana blockchain. This application allows users to create and support fundraising campaigns using SOL tokens, ensuring transparency and security through smart contracts. The platform features automatic refunds if funding goals aren't met.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create fundraising campaigns using SOL tokens
- Support various fundraising initiatives
- Smart contracts to handle donations
- Automatic refunds if funding goals aren't met
- Transparent and secure transactions

## Technologies Used

- **Solana:** Blockchain platform for deploying smart contracts.
- **MERN Stack:**
  - **MongoDB:** NoSQL database for storing campaign data.
  - **Express.js:** Web framework for Node.js to handle server-side logic.
  - **React.js:** Frontend library for building user interfaces (not included in this project).
  - **Node.js:** JavaScript runtime for building the backend.
- **Anchor:** Framework for building Solana smart contracts.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hunainadhi/FundYourSOL.git
   cd FundYourSOL
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up the Solana environment:**
   - Ensure you have Rust and Solana CLI installed. Follow the [official Solana installation guide](https://docs.solana.com/cli/install-solana-cli-tools) for detailed instructions.

4. **Install Anchor:**
   ```bash
   cargo install --git https://github.com/project-serum/anchor anchor-cli --locked
   ```

5. **Verify the installation:**
   ```bash
   anchor --version
   ```

6. **Create a new Anchor project:**
   ```bash
   anchor init myproject
   ```

7. **Run the project:**
   ```bash
   npm start
   ```

## Usage

- After setting up the project, you can create new fundraising campaigns by interacting with the smart contracts.
- Users can browse existing campaigns and make donations.
- In case a campaign does not meet its funding goal, automatic refunds will be processed.

## Contributing

Contributions are welcome! If you would like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
