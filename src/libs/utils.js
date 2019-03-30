export function svgEncodeHexColor(hexColor) {

  if (!hexColor) {
    console.log('hexColor was not passed in svgEncodedHexColor');
    return;
  }
  let svgColor = '';
  if (hexColor.length > 0 && hexColor[0] === '#'){
      svgColor = '%23' + hexColor.substring(1);
  } else {
    svgColor = hexColor;
  }
  return svgColor;
}

const utils = {
  svgEncodeHexColor: svgEncodeHexColor
};

export default utils;
