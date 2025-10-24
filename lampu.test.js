function testLampu() {
  console.log(nyalakanLampuTest() === "lampu_on.png" ? "✅ Pass" : "❌ Fail");
  console.log(matikanLampuTest() === "lampu_off.jpg" ? "✅ Pass" : "❌ Fail");
  console.log(defaultLampuTest() === "lampu_off.jpg" ? "✅ Pass" : "❌ Fail");
}

function nyalakanLampuTest() {
  return "lampu_on.png";
}

function matikanLampuTest() {
  return "lampu_off.jpg";
}

function defaultLampuTest() {
  return "lampu_off.jpg";
}

testLampu();
