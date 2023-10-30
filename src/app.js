require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

const authRoute = require("./routes/authRoute");
const errorMiddleware = require("./middleWare/errorMiddleware");
const notFoundMiddleware = require("./middleWare/notFoundMiddleware");
const authenticateMiddleware = require("./middleWare/authenticateMiddleware");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/auth", authRoute);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`SERVER RUN IN PORT :${PORT}`));
