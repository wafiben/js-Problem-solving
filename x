 let regex = /[A-Z]/i;
  /* return str.match(regex); */
  const table = str
    .split(" ")
    .map((elt, index) => {
      if (!regex.test(elt)) {
        return null;
      } else {
        return elt;
      }
    })
    .filter((elt) => elt != null);
  return table;