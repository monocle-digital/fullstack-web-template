# Fullstack Web Monorepo

## Frontend
The frontend package is a next js project using typescript
### Features
- [x] SEO Integration
- [ ] Google Analytics Integration
- [x] GraphQL

## cms
The cms package is strapi headless cms with ckeditor plugin already installed
### Features
- [x] PostgreSQL Database
- [x] CKeditor Rich Text Editor
- [x] SEO Components
- [x] GraphQL
  > graphql playground  
  > http://localhost:1337/graphql
- [ ] Add [Typescript support](https://docs.strapi.io/developer-docs/latest/development/typescript.html#start-developing-in-typescript)

### Roles and Permissions
By default all data requires permissions to be read.  
#### API Token
To setup API tokens go to `Settings -> Global Settings: API Tokens`. Then create new API token.  
Then set the "Authorization": "Bearer <api-token>" on your client request.  
#### Data Access
To configure if data can be accessed publicly without authentication, go to `Settings -> Users & Permissions Plugin: Roles -> Public`.
Then set which data can be accessed and how (create, find, update, delete, etc)

# Setup
## Install Dependencies
```
$ yarn
```

## Setup CMS env variables
- Generate 7 random base64 strings [here](https://onlinebase64tools.com/generate-random-base64)
- Create the file ./packages/cms/.env and add the base64 strings like the following example:
  ```
  HOST=0.0.0.0
  PORT=1337
  APP_KEYS=ZlZuXDAsWEVXd3dqWiFKZT5h,bG1cJ2swb0xJfHdsQixDJg==,JW0jSTVeTCJJb2FLLmpbMUI=,V2Vncy92LWJhTTs4IlNPSSA1
  API_TOKEN_SALT=Nmc6Y2VjPjZxRERFKVZgRmI=
  ADMIN_JWT_SECRET=VT5YLzJPa01OJTFfMEAnM1c=
  JWT_SECRET=ImAhOV9PIGFDLE1hQyw9M21d
  ```

## Run CMS Dev Server
```
$ yarn run dev:cms
```

## Run App Dev Server
```
$ yarn run dev:app
```
