var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
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
var import_express = __toModule(require("express"));
var import_path = __toModule(require("path"));
var import_menu = __toModule(require("./routes/menu.js"));
var import_foodMenu = __toModule(require("./foodMenu"));
const __dirname1 = import_path.default.resolve();
const app = (0, import_express.default)();
app.use(import_express.default.static(import_path.default.resolve(__dirname1, "static")));
app.use(import_menu.default);
app.use(import_express.default.json());
app.use(import_express.default.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", import_path.default.resolve(__dirname1, "ejs"));
app.get("/", (req, res) => {
  res.render("pages/mainMenu", {
    cards: import_foodMenu.food
  });
});
app.get("/order", (req, res) => {
  res.render("pages/order");
});
app.get("/favourites", (req, res) => {
  res.render("pages/favourites", { cards: import_foodMenu.food });
});
app.listen(() => {
});
//# sourceMappingURL=index.js.map
