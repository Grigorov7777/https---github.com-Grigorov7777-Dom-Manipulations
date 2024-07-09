function calculateVolume() {
  const radius = document.getElementById('radius').value;
  const volume = (4/3) * Math.PI * Math.pow(radius, 3);
  document.getElementById('result').innerText = `The volume of the sphere is: ${volume.toFixed(2)}`;
}