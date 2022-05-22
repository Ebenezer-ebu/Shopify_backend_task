# Shopify Task

# Documentation on postman
    Visit [documentation](https://documenter.getpostman.com/view/9073495/UyxoijhN)

To start up the application locally and install dependencies
```
    npm install 
        ...............................
    npm start
```
# Or

```
    yarn
        ...............................
    yarn start
```

# Routes For Inventory
* POST: /api/inventory 
    To create inventory 

* PATCH: /api/inventory/:itemId
    To edit inventory

* DELETE: /api/inventory/:itemId
    To delete inventory

* GET: /api/inventory
    To get all inventories

# Routes For locations
* POST: /api/inventory-location
    To create a location

* PATCH: /api/inventory-location/:id
    To edit location and assign inventory to location

* GET: /api/inventory-location
    To get all inventory locations