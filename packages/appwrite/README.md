# @nativescript/appwrite

Appwrite is an open-source backend as a service server that abstract and simplify complex and repetitive development tasks behind a very simple to use REST API. Appwrite aims to help you develop your apps faster and in a more secure way. Use the Appwrite SDK for NativeScript to integrate your app with the Appwrite server to easily start interacting with all of Appwrite backend APIs and tools.

```bash
npm install @nativescript/appwrite
```

## Usage

Register an Appwrite account [here](https://appwrite.io/) and create a project to gather your endpoint and project id.

Setup a `.env` file at the root of your project with the following:

```base
APP_WRITE_ENDPOINT=https://[YOUR_APPWRITE_ENDPOINT]
APP_WRITE_PROJECT_ID=[YOUR_APPWRITE_PROJECT_ID]
```

Within you `webpack.config.js` you can also `npm install dotenv --save-dev` and configure it to load them:

```js
require('dotenv').config();

module.exports = (env) => {
    // rest of config
}
```

### Connect Client

```ts
import { Client, Account, ID } from '@nativescript/appwrite';

const client = new Client()
    .setEndpoint(process.env.APP_WRITE_ENDPOINT)
    .setProject(process.env.APP_WRITE_PROJECT_ID)
    .setSelfSigned(true); // for development
const account = new Account(client);
```

### Create Account

```ts
const response = await account.create(ID.unique(), 'me@company.com', 'password');
console.log('Account created:', response);
```

### Login

```ts
const response = await account.createEmailPasswordSession('me@company.com', 'password');console.log('Logged in:', response);
```

### List Documents

```ts
const database = new Databases(client);
const documents = await database.listDocuments('database-id', 'collection-id');
console.log('documents:', documents);
```

### Create Documents

```ts
const result = await database.createDocument(
    'database-id', 
    'collection-id',
    crypto.randomUUID(),
    { message: 'Hello World' }
);
console.log('Document created:', result);
```


## License

Apache License Version 2.0
