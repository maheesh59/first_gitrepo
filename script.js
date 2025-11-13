function calculateBMI() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;

  if (weight === "" || height === "") {
    document.getElementById("result").innerHTML = "⚠️ Please enter both weight and height!";
    return;
  }

  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

  let category = "";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 24.9) category = "Normal weight";
  else if (bmi < 29.9) category = "Overweight";
  else category = "Obese";

  document.getElementById("result").innerHTML = `Your BMI is <strong>${bmi}</strong> (${category})`;
}