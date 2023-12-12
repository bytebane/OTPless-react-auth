# OTPless Auth(React + Vite)

## For Simple 2 Step Implementation [checkout official documentation](https://otpless.com/platforms/react)

### This implementation goes a little beyond bare minimum, and adds modularity, scalability and reusability of the auth process

### Features

- Fully implemented OTPless Auth
- Dynamic Loading of the Scripts
- Protected Routes
- Persistent Login(Local Storage+Redux)

```json
// otpless user Format
{
    "token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "timestamp": "YYYY-MM-DD HH:MM:SS",
    "timezone": "+XX:XX",
    "mobile": {
        "name": "User Name",
        "number": "User Mobile Number"
    },
    "email": {
        "name": "User Name ",
        "email": "User Email"
    }
}
```
