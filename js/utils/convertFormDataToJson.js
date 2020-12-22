function convertFormDataToJson(formElements) {
  const data = {};

  const elementsArray = [...formElements];

  const inputtableElements = elementsArray.filter(element => {
    if (element.tagName === 'BUTTON') {
      return false;
    }

    return element.value || element.value === '';
  })

  inputtableElements.forEach(element => {
    data[element.name] = element.value;
  });

  return data;
}
