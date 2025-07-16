function convert() {
  const rupees = parseFloat(document.getElementById("rupees").value);
  const result = document.getElementById("result");

  if (isNaN(rupees) || rupees < 0) {
    result.innerText = "Please enter a valid amount!";
    return;
  }

  const rate = 0.012; // Example: ₹1 = $0.012
  const dollars = rupees * rate;

  result.innerText = `₹${rupees} = $${dollars.toFixed(2)} USD`;
}
