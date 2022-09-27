const transalateBtn = document.getElementById("transalateBtn");
const transalatingInput = document.getElementById("input");
const translatingOutput = document.getElementById("output");
const transalationOption = document.getElementById("transalation-option");
const yodaServerURL = "https://api.funtranslations.com/translate/yoda.json";
const pirateServerURL = "https://api.funtranslations.com/translate/pirate.json";
const hodorServerURL = "https://api.funtranslations.com/translate/hodor.json";
const generateServerURL = () => {
  let serverURL;
  const input = transalatingInput.value;
  if (!input.trim()) {
    alert("Please enter some text");
    return;
  }
  switch (transalationOption.value) {
    case "yoda":
      serverURL = `${yodaServerURL}?text=${input}`;
      break;
    case "pirate":
      serverURL = `${pirateServerURL}?text=${input}`;
      break;
    case "hodor":
      serverURL = `${hodorServerURL}?text=${input}`;
      break;
  }
  return serverURL;
};
const errorHandler = () => {
  alert("Something went wrong");
};
const clickHandler = async () => {
  const url = generateServerURL();
  if (!url) {
    return;
  }
  try {
    const responseBody = await fetch(url);
    const responseJson = await responseBody.json();
    translatingOutput.innerText = responseJson.contents.translated;
  } catch (error) {
    console.log(error);
    errorHandler(error);
  }
};
const handleChange = () => {
  transalateBtn.innerText = `Transalate to ${
    transalationOption.options[transalationOption.selectedIndex].text
  }`;
};
transalateBtn.addEventListener("click", clickHandler);
transalationOption.addEventListener("change", handleChange);
