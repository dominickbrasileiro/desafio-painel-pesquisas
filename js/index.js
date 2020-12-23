(function() {
  function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;

    const formJson = convertFormDataToJson(form.elements);

    const data = handleJsonComplexStructures(formJson);

    const { longitude, latitude } = data;

    let convertedLongitude = convertDMSToDecimalDegrees({
      degree: Number(longitude.degree),
      minute: Number(longitude.minute),
      second: Number(longitude.second),
    })

    let convertedLatitude = convertDMSToDecimalDegrees({
      degree: Number(latitude.degree),
      minute: Number(latitude.minute),
      second: Number(latitude.second),
    })

    if (longitude.direction === 'W') {
      convertedLongitude *= -1;
    }

    if (latitude.direction === 'S') {
      convertedLatitude *= -1;
    }

    data.LONGITUDE = convertedLongitude;
    data.LATITUDE = convertedLatitude;

    delete data.longitude;
    delete data.latitude;

    console.log(data);

    window.alert('Tudo certo! Verifique o console.')
  }

  const form = document.getElementById('form');
  form.addEventListener('submit', handleFormSubmit);
})()
