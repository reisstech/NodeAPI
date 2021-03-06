"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
function ensureAuthenticated(request, response, next) {
    var authToken = request.headers.authorization;
    if (!authToken) {
        return response.status(401).end();
    }
    var _a = authToken.split(" "), token = _a[1];
    try {
        var sub = (0, jsonwebtoken_1.verify)(token, "993987fa737ef7d49d539f592aa196185e35b71b").sub;
        request.user_id = sub;
        return next();
    }
    catch (err) {
        return response.status(401).end();
    }
}
exports.ensureAuthenticated = ensureAuthenticated;
