# Fullstack Web Monorepo

## Frontend
The frontend package is a next js project using typescript
### Features
- [ ] SEO Integration
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

### Roles and Permissions
By default all data requires permissions to be read.  
#### API Token
To setup API tokens go to `Settings -> Global Settings: API Tokens`. Then create new API token.  
Then set the "Authorization": "Bearer <api-token>" on your client request.  
#### Data Access
To configure if data can be accessed publicly without authentication, go to `Settings -> Users & Permissions Plugin: Roles -> Public`.
Then set which data can be accessed and how (create, find, update, delete, etc)