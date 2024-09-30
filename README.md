# **Keeper - ATM & Credit Card Manager**

**Keeper** is a React Native-based Android application designed to securely manage ATM and credit card details. This app allows users to store essential card-related data, such as card numbers, CVV, and login credentials, in a safe and easy-to-access manner. It offers a sleek interface to scroll through a list of saved cards and view important card details whenever needed.

## **Features**

- **Secure Storage**: Store ATM and credit card details, including card name, type, number, CVV, and expiration date.
- **Credential Management**: Save login credentials like username, password, and app PIN.
- **User-Friendly Interface**: Scrollable card list with an intuitive interface for managing multiple cards.
- **Local Data Storage**: All card data is stored securely on the device using SQLite.
- **Data Privacy**: Sensitive information is not transmitted over the internet, ensuring user privacy.

---

## **Installation**

To set up the Keeper app locally for development, follow the steps below.

### **Prerequisites**

Ensure you have the following tools installed on your system:

- **Node.js** (version 14.x or above)
- **React Native CLI** (latest version)
- **Android Studio** (for Android emulators or a physical device for testing)

### **Setup**

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/iqbalhassan-021/Keeper.git
    cd keeper
    ```

2. **Install Dependencies**:

    Use the following command to install all required Node packages:

    ```bash
    npm install
    ```

3. **Link Native Dependencies**:

    Since the app uses native modules for SQLite, run the following:

    ```bash
    npx react-native link
    ```

4. **Run the App**:

    Connect an Android device or open an Android emulator, then use:

    ```bash
    npx react-native run-android
    ```

---

## **Usage**

1. **Add a New Card**: Click the "Add Card" button and input the required details.
2. **View Cards**: Scroll through the list of saved cards on the home screen.
3. **View Card Details**: Tap a card button to reveal full card details, including card number and CVV.

---

## **Technologies Used**

- **React Native**: The main framework for building the app.
- **SQLite**: Local database to store card information securely.
- **React Navigation**: For navigation between screens.
- **AsyncStorage**: For storing user preferences and small data locally.

---

## **Folder Structure**

```bash
.
├── android/                  # Android-specific code
├── ios/                      # iOS-specific code (if needed)
├── src/                      # Main application source code
│   ├── components/           # Reusable components
│   ├── screens/              # Application screens (e.g., Home, AddCard, CardDetails)
│   ├── database/             # SQLite setup and queries
│   └── utils/                # Helper functions
├── assets/                   # Images and other assets
├── App.js                    # Main application component
├── package.json              # App dependencies
└── README.md                 # This file
```

---

## **Contribution**

Contributions are welcome! Please follow the steps below to contribute:

1. Fork the repository.
2. Create a new branch:

    ```bash
    git checkout -b feature-branch-name
    ```

3. Commit your changes:

    ```bash
    git commit -m 'Add some feature'
    ```

4. Push to the branch:

    ```bash
    git push origin feature-branch-name
    ```

5. Open a pull request.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
