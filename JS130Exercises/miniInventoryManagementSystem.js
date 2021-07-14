let ItemCreator = (function() {
  function createSKU(itemName, category) {
    itemName = itemName.split(' ').join('').toUpperCase();
    category = category.toUpperCase();
    let SKU = '';
    SKU += itemName[0] + itemName[1] + itemName[2] + category[0] + category[1];
    return SKU;
  }

  function checkValid(itemName, category, quantity) {
    if ((itemName.split(' ').join('').length < 5) || (category.split(' ').length > 1)
    || (category.length < 5) || (quantity === undefined)) {
      return false;
    }
    return true;
  }

  return function(itemName, category, quantity) {
    if (checkValid(itemName, category, quantity)) {
      this.SKU = createSKU(itemName, category);
      this.itemName = itemName;
      this.category = category;
      this.quantity = quantity;
    } else {
      return { notValid: true };
    }
  }
})();

let ItemManager = {
  items: {},
  create(itemName, category, quantity) {
    let item = new ItemCreator(itemName, category, quantity);
    if (item.notValid) {
      return false;
    } else {
      this.items[item.SKU] = { 
        itemName: item.itemName,
        category: item.category,
        quantity: item.quantity,
      }
    }

  },

  update(SKU, obj) {
    let keys = Object.keys(obj);
    keys.forEach(key => {
      this.items[SKU][key] = obj[key];
    });
  },

  delete(SKU) {
    delete this.items[SKU];
  },

  inStock() {
    let newList = {};
    for (const prop in this.items) {
      if (this.items[prop].quantity > 0) {
        newList[prop] = this.items[prop];
      }
    }
    return newList;
  },

  itemsInCategory(category) {
    let newList = {};
    for (const prop in this.items) {
      if (this.items[prop].category === category) {
        newList[prop] = this.items[prop];
      }
    }
    return newList;
  }
}

let ReportManager = {
  init(ItemManager) {
    this.items = ItemManager;
    return this;
  },

  createReporter(SKU) {
    let items = this.items;
    return {
      itemInfo() {
        console.log(`skuCode: ${SKU}`);
        console.log(`itemName: ${items.items[SKU].itemName}`);
        console.log(`category: ${items.items[SKU].category}`);
        console.log(`quantity: ${items.items[SKU].quantity}`);
      }
    }
  },

  reportInStock() {
    let newList = this.items.inStock();
    let arr = [];
    for (const prop in newList) {
      arr.push(newList[prop].itemName)
    }
    return arr.join(',');
  }
}



ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
console.log(ItemManager.items);

ReportManager.init(ItemManager);
// // logs soccer ball,football,kitchen pot
console.log(ReportManager.reportInStock());

ItemManager.update('SOCSP', { quantity: 0 });
// // returns list with the item objects for football and kitchen pot
console.log(ItemManager.inStock());
// // football,kitchen pot
console.log(ReportManager.reportInStock());

// // returns list with the item objects for basket ball, soccer ball, and football
console.log(ItemManager.itemsInCategory('sports'));

ItemManager.delete('SOCSP');
// // returns list the remaining 3 valid items (soccer ball is removed from the list)
console.log(ItemManager.items);

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 10