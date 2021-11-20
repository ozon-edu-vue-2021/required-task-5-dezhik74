export function getListofImages() {
  let res = [];
  let r = require.context('../assets/images/', false, /\.webp$/);
  r.keys().forEach((el) => {
    res.push(require(`../assets/images${el.substr(1)}`));
  });
  return res;
}
