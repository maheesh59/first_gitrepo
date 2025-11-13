# 🧮 BMI Calculator Website

A simple Body Mass Index (BMI) calculator built with HTML, CSS, and JavaScript — containerized using Docker.

## 🚀 How to Run

### Using Docker
```bash
docker build -t bmi-calculator .
docker run -d -p 8080:80 bmi-calculator
```

Then open your browser at [http://localhost:8080](http://localhost:8080).

### 📂 Project Structure
```
index.html
style.css
script.js
Dockerfile
README.md
```

## 💡 Features
- Calculates BMI based on weight and height.
- Displays result and category (Underweight, Normal, Overweight, Obese).
- Responsive design and clean UI.
