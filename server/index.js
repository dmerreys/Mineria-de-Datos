import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import multer from "multer";
//import modelRoutes from "./routes/model.js";
import generalRoutes from "./routes/general.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import { register } from "./controllers/auth.js";
import { verifyToken } from "./middleware/auth.js";

import historicosRoutes from "./controllers/historicos.js";
import studentRoutes from "./controllers/student.js";
import User from "./models/User.js";
import Students from "./models/Students.js";


//data Imports
import { users } from "./data/index.js";

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

/* ROUTES */
app.post("/auth/register",upload.none(),register);
app.use("/users", userRoutes);
//app.use("/model", modelRoutes)
app.use("/general", generalRoutes);
app.use("/auth", authRoutes);
app.use("/student", studentRoutes);
app.use("/historicos", historicosRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ONLY ADD DATA ONE TIME */     
   //User.insertMany(users);
   //Students.insertMany(dataStudent);
  })  
  .catch((error) => console.log(`${error} did not connect`));
