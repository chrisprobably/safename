
const SPACE = 32;

const safeclassname = str => {
  if (str == null) return '';

  return str.replace(/[^A-Za-z0-9]/g, s => {
    const c = s.charCodeAt(0);
    if (c === SPACE) return '-';
    return '_x' + c.toString(16);
  });
};

module.exports = safeclassname;
