var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  addToOrder: () => addToOrder,
  changeFavourite: () => changeFavourite,
  decrease: () => decrease,
  getAll: () => getAll,
  getOrder: () => getOrder,
  increase: () => increase,
  removeFromOrder: () => removeFromOrder
});
var import_foodMenu = __toModule(require("../foodMenu"));
var orderedFoodId = 1;
const getAll = (req, res) => {
  res.json(import_foodMenu.food);
};
const getOrder = (req, res) => {
  res.json(import_foodMenu.order);
};
const addToOrder = (req, res) => {
  for (var i in import_foodMenu.food) {
    if (i == req.params.id - 1) {
      var temp = new import_foodMenu.FoodCard(orderedFoodId, import_foodMenu.food[i].name, import_foodMenu.food[i].picture, import_foodMenu.food[i].price, import_foodMenu.food[i].calories);
      temp.number = import_foodMenu.food[i].number;
      ++orderedFoodId;
      import_foodMenu.order.push(temp);
    }
  }
  res.json(import_foodMenu.order);
};
const removeFromOrder = (req, res) => {
  for (var i in import_foodMenu.order) {
    if (import_foodMenu.order[i].id == req.params.id) {
      import_foodMenu.order.splice(i, 1);
    }
  }
  res.json(import_foodMenu.order);
};
const changeFavourite = (req, res) => {
  for (var i in import_foodMenu.food) {
    if (i == req.params.id - 1) {
      import_foodMenu.food[i].favourite = !import_foodMenu.food[i].favourite;
    }
  }
  res.json(import_foodMenu.food);
};
const increase = (req, res) => {
  for (var i in import_foodMenu.food) {
    if (i == req.params.id - 1) {
      ++import_foodMenu.food[i].number;
    }
  }
  res.json(import_foodMenu.food);
};
const decrease = (req, res) => {
  for (var i in import_foodMenu.food) {
    if (i == req.params.id - 1) {
      if (import_foodMenu.food[i].number > 1) {
        --import_foodMenu.food[i].number;
      }
    }
  }
  res.json(import_foodMenu.food);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addToOrder,
  changeFavourite,
  decrease,
  getAll,
  getOrder,
  increase,
  removeFromOrder
});
//# sourceMappingURL=menu.js.map
