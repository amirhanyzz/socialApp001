"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrap = bootstrap;
const modules_1 = require("./modules");
const DB_1 = require("./DB");
const modules_2 = require("./modules");
function bootstrap(app, express) {
    app.use(express.json());
    app.use("/auth", modules_2.authRouter);
    app.use("/user", modules_2.userRouter);
    app.use("/post", modules_1.postRouter);
    app.use("/{*dummy}", (req, res, next) => {
        res.status(404).json({ message: "Not Found", success: false });
    });
    app.use((error, req, res, next) => {
        return res.status(error.statusCode || 500).json({
            message: error.message,
            success: false,
            data: error.errorDetails
        });
    });
    (0, DB_1.connectDB)();
}
