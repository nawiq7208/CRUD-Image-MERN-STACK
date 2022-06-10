import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";

const app = express ();

app.listen(5000, ()=> console.log("Server Up and Running..."));