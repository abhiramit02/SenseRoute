const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/run-detection", (req, res) => {
    const command = `"C:\\Users\\Abhirami\\anaconda3\\envs\\obj_detect\\python.exe" "C:\\Users\\Abhirami\\.spyder-py3\\object_detection_runner.py"`;
  
    console.log(`📤 Running command: ${command}`);
  
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error("❌ Exec error:", error);
        console.error("⚠️ Python stderr:", stderr);
        return res.status(500).json({ message: "Error running script", error: error.message, stderr });
      }
  
      console.log("✅ Python stdout:", stdout);
      res.json({ message: "Object detection triggered successfully!", output: stdout });
    });
  });
  

app.listen(5000, () => {
  console.log("🚀 Backend server running at http://localhost:5000");
});
