import express from "express";
const app = express();

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.send({
     success: true,
     message: "TaskFlow API is running",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 