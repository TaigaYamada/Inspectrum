const colors = {
  // True black
  trueBlack : {
    rgb : {
      r : 0,
      g : 0,
      b : 0
    },
    hsl : {
      h : 0,
      s : 0,
      l : 0
    },
    hex : {
      hex : '#000000'
    },
    wcagLum : 0,
    index   : 0
  },

  // True white
  trueWhite : {
    rgb : {
      r : 255,
      g : 255,
      b : 255
    },
    hsl : {
      h : 0,
      s : 0,
      l : 1
    },
    hex     : { hex : '#ffffff' },
    wcagLum : 1,
    index   : 1
  },

  red : {
    rgb : {
      r : 255,
      g : 0,
      b : 0
    },
    hsl : {
      h : 0,
      s : 1,
      l : 0.5
    },
    hex     : { hex : '#ff0000' },
    wcagLum : 0.2126,
    index   : 0.2126
  }

};

export default colors;