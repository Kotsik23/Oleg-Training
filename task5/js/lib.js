class Username {
   constructor() {
      this._username;
   }

   set username(value) {
      this._username = value;
   }

   get username() {
      return this._username;
   }
};

const ModuleLib = (function () {
   return {
      isArray: function (obj) {
         return Array.isArray(obj)
      },

      isDate: function (obj) {
         return obj instanceof Date
      },

      isBool: function (obj) {
         return typeof obj === "boolean"
      },

      isNumber: function (obj) {
         return typeof obj === "number"
      },

      isString: function (obj) {
         return typeof obj === "string"
      },

      isFunction: function (obj) {
         return typeof obj === "function"
      },

      isUndefined: function (obj) {
         return typeof obj === "undefined"
      },

      isNull: function (obj) {
         return typeof obj === "object" && obj === null
      },

      isNaN: function (obj) {
         return Number.isNaN(obj)
      },

      deepEqual: function deepEqual(obj1, obj2) {

         if (obj1 === obj2)
            return true;

         if (obj1 !== Object(obj1) && obj2 !== Object(obj2))
            return obj1 === obj2;

         if (Object.keys(obj1).length !== Object.keys(obj2).length)
            return false;

         for (let key in obj1) {
            if (!(key in obj2)) return false;
            if (!deepEqual(obj1[key], obj2[key])) return false;
         }

         return true;
      },

      singleton: function () {
         let instance;

         function createInstance() {
            return new Username();
         }

         return {
            getInstance: function () {
               if (!instance) {
                  instance = createInstance();
               }
               return instance;
            },
         };
      }
   }
})()