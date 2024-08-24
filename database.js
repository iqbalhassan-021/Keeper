import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = "UserDatabase.db";
const database_version = "1.0";
const database_displayname = "SQLite React Native";
const database_size = 200000;

let db;

export const openDatabase = async () => {
  db = await SQLite.openDatabase(
    database_name,
    database_version,
    database_displayname,
    database_size
  );
  console.log("Database opened");
};

export const createTables = async () => {
  try {
    // Create Login Table
    await db.executeSql(
      `CREATE TABLE IF NOT EXISTS LoginCredentials (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT,
        fullname TEXT,
        password TEXT,
        appPin TEXT
      );`
    );

    // Create Credit Cards Table
    await db.executeSql(
      `CREATE TABLE IF NOT EXISTS CreditCards (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        cardName TEXT,
        cardType TEXT,
        cardNumber TEXT,
        cardExpiry TEXT,
        cardCVV TEXT
      );`
    );

    console.log("Tables created or already exist");
  } catch (error) {
    console.log("Error creating tables:", error);
  }
};

export const insertLoginCredentials = async (username, fullname, password, appPin) => {
  try {
    await db.executeSql(
      `INSERT INTO LoginCredentials (username, fullname, password, appPin) VALUES (?, ?, ?, ?)`,
      [username, fullname, password, appPin]
    );
    console.log("Login credentials inserted");
  } catch (error) {
    console.log("Error inserting login credentials:", error);
  }
};

export const insertCreditCard = async (cardName, cardType, cardNumber, cardExpiry, cardCVV) => {
  try {
    await db.executeSql(
      `INSERT INTO CreditCards (cardName, cardType, cardNumber, cardExpiry, cardCVV) VALUES (?, ?, ?, ?, ?)`,
      [cardName, cardType, cardNumber, cardExpiry, cardCVV]
    );
    console.log("Credit card inserted");
  } catch (error) {
    console.log("Error inserting credit card:", error);
  }
};

export const getLoginCredentials = async () => {
  try {
    const results = await db.executeSql(`SELECT * FROM LoginCredentials`);
    return results[0].rows.raw();
  } catch (error) {
    console.log("Error getting login credentials:", error);
    return [];
  }
};

export const getCreditCards = async () => {
  try {
    const results = await db.executeSql(`SELECT * FROM CreditCards`);
    return results[0].rows.raw();
  } catch (error) {
    console.log("Error getting credit cards:", error);
    return [];
  }
};
