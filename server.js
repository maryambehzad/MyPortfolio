import dotenv from "dotenv";
dotenv.config();

import config from "./config/config.js";
import app from "./server/express.js";

import dns from "dns";
dns.setServers(["8.8.8.8"]);
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

// Import Models
import Portfolio from "./models/portfolio.model.js";

// Import Routes
import contactRoutes from "./routes/contact.routes.js";
import projectRoutes from "./routes/project.routes.js";
import qualificationRoutes from "./routes/qualification.routes.js";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";

mongoose.Promise = global.Promise;
mongoose
  .connect(config.mongoUri, {
    //useNewUrlParser: true,
    //useCreateIndex: true,
    //useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  });

mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`);
});

// Middleware for cookies
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to User application." });
});

// Use the modular routes & authentication routes
app.use("/", contactRoutes);
app.use("/", projectRoutes);
app.use("/", qualificationRoutes);
app.use("/", userRoutes);
app.use("/", authRoutes);

// Original database portfolio route
app.get("/api/portfolios", async (req, res) => {
  try {
    const items = await Portfolio.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", config.port);
});
