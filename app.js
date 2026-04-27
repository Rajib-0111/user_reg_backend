import express from 'express';
import dotenv from 'dotenv';
import multer from 'multer';
import cookieParser from 'cookie-parser';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

export { app };
