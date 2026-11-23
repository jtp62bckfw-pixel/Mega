const express = require("express");
const session = require("express-session");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET || "replace-this-before-deploying",
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production" }
}));
app.use(express.static("public"));

app.get("/health", (req, res) => res.json({ ok: true, app: "MEGA" }));
app.listen(process.env.PORT || 3000, () => console.log("MEGA is running"));
