const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use("/public", express.static(path.join(__dirname, "public")));

// Route for the home page (since index.html is in the root directory)
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
});

// Handle 404 - Page Not Found
app.use((req, res) => {
    res.status(404).send("404 - Page Not Found");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
