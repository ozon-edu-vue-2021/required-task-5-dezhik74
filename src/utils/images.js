export function getRandomImage() {
  const names = [
    "6142681673.webp",
    "6142683276.webp",
    "6148226736.webp",
    "6136172483.webp",
    "6140906765.webp",
    "6142673815.webp",
    "6134992334.webp",
    "6136170572.webp",
    "6126039472.webp",
    "6126040354.webp",
    "6128597660.webp",
    "6123150777.webp",
  ];
  const path = "../assets/images";
  return `${path}/${names[Math.floor(Math.random() * names.length + 1)]}`;
}

export function getListofImages() {
  let res = [];
  const names = [
    "6142681673.webp",
    "6142683276.webp",
    "6148226736.webp",
    "6136172483.webp",
    "6140906765.webp",
    "6142673815.webp",
    "6134992334.webp",
    "6136170572.webp",
    "6126039472.webp",
    "6126040354.webp",
    "6128597660.webp",
    "6123150777.webp",
  ];
  names.map((itm) => res.push(require(`../assets/images/${itm}`)));
  return res;

}