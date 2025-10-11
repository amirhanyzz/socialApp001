"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrap = bootstrap;
const DB_1 = require("./DB");
const modules_1 = require("./modules");
function bootstrap(app, express) {
    app.use(express.json());
    app.use("/auth", modules_1.authRouter);
    app.use("/user", modules_1.userRouter);
    app.use("/{*dummy}", (req, res, next) => {
        res.status(404).json({ message: "Not Found", success: false });
    });
    app.use((error, req, res, next) => {
        return res.status(error.statusCode).json({
            message: error.message,
            success: false,
            data: error.errorDetails
        });
    });
    (0, DB_1.connectDB)();
}
