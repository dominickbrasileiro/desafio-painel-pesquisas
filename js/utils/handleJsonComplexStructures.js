// Inspired by unform complex structures parsing:
// https://unform.dev/guides/complex-structures
function handleJsonComplexStructures(json) {
  const object = {...json};

  const keys = Object.keys(object);

  keys.forEach(key => {
    const structure = key.split('.', 2);

    if (structure.length > 1) {
      const parent = structure[0];
      const child = structure[1];

      if (!object[parent]) {
        object[parent] = {};
      }

      object[parent][child] = object[key];

      delete object[key];
    }
  })

  return object;
}
