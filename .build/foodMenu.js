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
  FoodCard: () => FoodCard,
  food: () => food,
  order: () => order
});
var import_picturesURLs = __toModule(require("./picturesURLs"));
class FoodCard {
  id;
  name;
  picture;
  price;
  number;
  calories;
  favourite;
  constructor(id, name, picture, price, calories) {
    this.id = id;
    this.name = name;
    this.picture = picture;
    this.price = price;
    this.calories = calories;
    this.number = 1;
    this.favourite = false;
  }
}
const food = [
  new FoodCard(1, "Whopper Jr. Croissant", import_picturesURLs.WhopperJrCroissant, 1.11, "410 Kcal"),
  new FoodCard(2, "Whopper", import_picturesURLs.Whopper, 2.22, "669 Kcal"),
  new FoodCard(3, "Bacon King", import_picturesURLs.BaconKing, 3.33, "1193 Kcal")
];
const order = [];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FoodCard,
  food,
  order
});
//# sourceMappingURL=foodMenu.js.map
