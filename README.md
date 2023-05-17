# UniBill

The Billing System is a web application developed using Angular and Firebase Firestore. It aims to provide customers with an easy and efficient way to manage and pay their electricity, telephone, and water bills. The system combines various billing systems into a single unit, offering reliable services and all the required functionalities. This product is self-contained, providing a comprehensive solution for bill management.

## Features

The Billing System consists of three main sections:

### Electricity Billing Section
- Calculates the total monthly bill based on the total units used.
- Displays the last date for payment.
- Adds a fixed amount of due for the monthly bill if the payment is made after the last date.
- Each user is provided with a unique user ID, enabling them to log into the system and view their account details.
- Generates a password-protected bill for each user, stored in their respective accounts.
- Supports both online and offline payment methods. Offline users can pay in cash, while online users can pay their bills online.
- Updates the account after every payment.
- The administrator has the authority to modify basic functionalities and manage databases.

### Water Billing Section
- Provides similar functionalities as the Electricity Billing Section.
- Enables users to manage their water bills and view account details using a single user ID.

### Telephone Section
- Allows users to maintain all billing accounts within a single user account.
- Provides information about various service providers and their tariff details.
- Displays bill details for a particular user, with the option to pay the bill online.
- Presents various offers provided by different service providers.
- Offers two billing options: Pre-paid and Post-paid. 
    - Pre-paid billing calculates the bill based on pre-defined offers specified by the service provider.
    - Post-paid billing calculates the bill using the total usage details.

## Technologies Used

The Billing System is built using the following technologies:
- Angular: A popular TypeScript-based web application framework for building dynamic and responsive user interfaces.
- Firebase Firestore: A cloud-based NoSQL database provided by Google, used for storing and managing user accounts, bills, and other relevant data.

## Installation and Setup

To set up and run the Billing System locally, follow these steps:

1. Clone the repository from GitHub: `git clone <repository-url>`
2. Navigate to the project directory: `cd billing-system`
3. Install the dependencies: `npm install`
4. Configure the Firebase Firestore connection by adding your Firebase credentials in the project.
5. Build and run the application: `ng serve`

Access the Billing System by opening a web browser and visiting `http://localhost:4200`.

## Screenshots 
![image](https://github.com/ahmedmaged3k1/angular-UniBill/assets/60134186/6a1afc90-1e68-41bf-9c8c-d081695651c4)
![image](https://github.com/ahmedmaged3k1/angular-UniBill/assets/60134186/aa2b26ea-873e-4a89-91ed-5fa4d943d704)
![image](https://github.com/ahmedmaged3k1/angular-UniBill/assets/60134186/2515fd4a-98c1-4274-b19f-2dc868afc5f2)
![image](https://github.com/ahmedmaged3k1/angular-UniBill/assets/60134186/f47d2032-a6d4-4981-88c4-b4116467d265)

## Documentation 

[UI Documentation (1).pdf](https://github.com/ahmedmaged3k1/angular-UniBill/files/11501049/UI.Documentation.1.pdf)

