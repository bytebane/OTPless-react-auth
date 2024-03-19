# OTPless Auth(React + Vite)

## For Simple 2 Step Implementation [checkout official documentation](https://otpless.com/platforms/react)

### This implementation goes a little beyond bare minimum, and adds modularity, scalability and reusability of the auth process

### Features

- Fully implemented OTPless Auth
- Dynamic Loading of the Scripts
- Protected Routes
- Persistent Login(Local Storage+Redux)

### Usage

> **Prerequisites**:
> - [NodeJS](https://nodejs.org/en)
> - **Create an App in [OTPless dashboard](https://otpless.com/dashboard/app) and copy the `APP ID`**

- Clone the repo

    ```bash
    git clone https://github.com/bytebane/OTPless-react-auth.git
    ```

- Navigate to the directory

    ```bash
    cd OTPless-react-auth
    ```

- Open [OTPless Helper fucnction](./src/helpers/index.js#L7) and replace `PASTE_YOUR_APP_ID_HERE` with your `APP ID`.

- Install Packages

    ```bash
    npm install
    ```

- Run the demo

    ```bash
    npm run dev
    ```

- Open [localhost:5173](http://localhost:5173) in your browser

## *Thank You*
