/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      common: {
        0: "#000000",
        100: "#ffffff",
        200: "#cacaca"
      },
      neutral: {
        0: "#000000",
        5: "#0f0f0f",
        10: "#171717",
        15: "#1c1c1c",
        20: "#2a2a2a",
        22: "#303030",
        30: "#474747",
        40: "#5c5c5c",
        50: "#737373",
        60: "#8a8a8a",
        70: "#9b9b9b",
        80: "#b0b0b0",
        90: "#c4c4c4",
        95: "#dcdcdc",
        99: "#f7f7f7",
        100: "#ffffff"
      },
      coolNeutral: {
        0: "#000000",
        5: "#0f0f10",
        7: "#141415",
        10: "#171719",
        15: "#1b1c1e",
        17: "#212225",
        20: "#292a2d",
        22: "#2e2f33",
        23: "#333438",
        25: "#37383c",
        30: "#46474c",
        40: "#5a5c63",
        50: "#70737c",
        60: "#878a93",
        70: "#989ba2",
        80: "#aeb0b6",
        90: "#c2c4c8",
        95: "#dbdcdf",
        96: "#e1e2e4",
        97: "#eaebec",
        98: "#f4f4f5",
        99: "#f7f7f8",
        100: "#ffffff"
      },
      blue: {
        0: "#000000",
        10: "#001536",
        20: "#002966",
        30: "#003e9c",
        40: "#0054d1",
        45: "#005eeb",
        50: "#0066ff",
        55: "#1a75ff",
        60: "#3385ff",
        65: "#4f95ff",
        70: "#69a5ff",
        80: "#9ec5ff",
        90: "#c9defe",
        95: "#eaf2fe",
        99: "#f7fbff",
        100: "#ffffff"
      },
      red: {
        0: "#000000",
        10: "#3b0101",
        20: "#730303",
        30: "#b00c0c",
        40: "#e52222",
        50: "#ff4242",
        60: "#ff6363",
        70: "#ff8c8c",
        80: "#ffb5b5",
        90: "#fed5d5",
        95: "#feecec",
        99: "#fffafa",
        100: "#ffffff"
      },
      green: {
        0: "#000000",
        10: "#00240c",
        20: "#004517",
        30: "#006e25",
        40: "#009632",
        50: "#00bf40",
        60: "#1ed45a",
        70: "#49e57d",
        80: "#7df5a5",
        90: "#acfcc7",
        95: "#d9ffe6",
        99: "#f2fff6",
        100: "#ffffff"
      },
      orange: {
        0: "#000000",
        10: "#361e00",
        20: "#663a00",
        30: "#9c5800",
        39: "#d17600",
        40: "#d47800",
        50: "#ff9200",
        60: "#ffa938",
        70: "#ffc06e",
        80: "#ffd49c",
        90: "#fee6c6",
        95: "#fef4e6",
        99: "#fffcf7",
        100: "#ffffff"
      },
      redOrange: {
        0: "#000000",
        10: "#290f00",
        20: "#592100",
        30: "#913500",
        40: "#c94a00",
        48: "#f55a00",
        50: "#ff5e00",
        60: "#ff7b2e",
        70: "#ff9b61",
        80: "#ffbd96",
        90: "#fed9c4",
        95: "#feeee5",
        99: "#fffaf7",
        100: "#ffffff"
      },
      lime: {
        0: "#000000",
        10: "#112900",
        20: "#225200",
        30: "#347d00",
        37: "#429e00",
        40: "#48ad00",
        50: "#58cf04",
        60: "#6be016",
        70: "#88f03e",
        80: "#aef779",
        90: "#ccfca9",
        95: "#e6ffd4",
        99: "#f8fff2",
        100: "#ffffff"
      },
      cyan: {
        0: "#000000",
        10: "#00252b",
        20: "#004854",
        30: "#006f82",
        40: "#0098b2",
        50: "#00bdde",
        60: "#28d0ed",
        70: "#57dff7",
        80: "#8aedff",
        90: "#b5f4ff",
        95: "#defaff",
        99: "#f7feff",
        100: "#ffffff"
      },
      lightBlue: {
        0: "#000000",
        10: "#002130",
        20: "#004261",
        30: "#006796",
        40: "#008dcf",
        50: "#00aeff",
        60: "#3dc2ff",
        70: "#70d2ff",
        80: "#a1e1ff",
        90: "#c4ecfe",
        95: "#e5f6fe",
        99: "#f7fdff",
        100: "#ffffff"
      },
      violet: {
        0: "#000000",
        10: "#11024d",
        20: "#23098f",
        30: "#3a16c9",
        40: "#4f29e5",
        45: "#5b37ed",
        50: "#6541f2",
        60: "#7d5ef7",
        70: "#9e86fc",
        80: "#c0b0ff",
        90: "#dbd3fe",
        95: "#f0ecfe",
        99: "#fbfaff",
        100: "#ffffff"
      },
      pink: {
        0: "#000000",
        10: "#3d0133",
        20: "#730560",
        30: "#a81690",
        40: "#d331b8",
        46: "#e846cd",
        50: "#f553da",
        60: "#fa73e3",
        70: "#ff94ed",
        80: "#ffb8f3",
        90: "#fed3f7",
        95: "#feecfb",
        99: "#fffafe",
        100: "#ffffff"
      },
      purple: {
        0: "#000000",
        10: "#290247",
        20: "#580a7d",
        30: "#861cb8",
        40: "#ad36e3",
        50: "#cb59ff",
        60: "#d478ff",
        70: "#de96ff",
        80: "#e9baff",
        90: "#f2d6ff",
        95: "#f9edff",
        99: "#fefbff",
        100: "#ffffff"
      },
      opacity: {
        5: 5,
        8: 8,
        12: 12,
        16: 16,
        22: 22,
        28: 28,
        35: 35,
        43: 43,
        52: 52,
        61: 61,
        74: 74,
        88: 88,
        97: 97,
        100: 100
      },
      primary: {
        normal: "#0066ff",
        strong: "#005eeb",
        heavy: "#0054d1"
      },
      label: {
        normal: "#171719",
        strong: "#000000",
        neutral: "rgba(46, 47, 51, 0.88)",
        alternative: "rgba(55, 56, 60, 0.61)",
        assistive: "rgba(55, 56, 60, 0.28)",
        disable: "rgba(55, 56, 60, 0.16)"
      },
      background: {
        normal: {
          normal: "#ffffff",
          alternative: "#f7f7f8"
        },
        elevated: {
          normal: "#ffffff",
          alternative: "#f7f7f8"
        },
        transparent: {
          normal: "rgba(255, 255, 255, 0.08)",
          alternative: "rgba(255, 255, 255, 0.28)"
        }
      },
      interaction: {
        inactive: "#989ba2",
        disable: "#f4f4f5"
      },
      line: {
        normal: {
          normal: "rgba(112, 115, 124, 0.22)",
          neutral: "rgba(112, 115, 124, 0.16)",
          alternative: "rgba(112, 115, 124, 0.08)",
          strong: "rgba(112, 115, 124, 0.52)"
        },
        solid: {
          normal: "#e1e2e4",
          neutral: "#eaebec",
          alternative: "#f4f4f5",
          strong: "#aeb0b6"
        }
      },
      fill: {
        normal: "rgba(112, 115, 124, 0.08)",
        strong: "rgba(112, 115, 124, 0.16)",
        alternative: "rgba(112, 115, 124, 0.05)"
      },
      status: {
        positive: "#00bf40",
        cautionary: "#ff9200",
        negative: "#ff4242"
      },
      static: {
        white: "#ffffff",
        black: "#000000"
      },
      accent: {
        background: {
          lime: "#58cf04",
          cyan: "#00bdde",
          lightBlue: "#00aeff",
          violet: "#6541f2",
          pink: "#f553da",
          redOrange: "#ff5e00",
          purple: "#cb59ff"
        },
        foreground: {
          lime: "#429e00",
          cyan: "#0098b2",
          lightBlue: "#008dcf",
          violet: "#5b37ed",
          purple: "#ad36e3",
          pink: "#e846cd",
          redOrange: "#f55a00",
          red: "#e52222",
          orange: "#d17600",
          green: "#009632",
          blue: "#005eeb"
        }
      },
      material: {
        dimmer: "rgba(23, 23, 25, 0.52)"
      },
      inverse: {
        primary: "#3385ff",
        background: "#1b1c1e",
        label: "#f7f7f8"
      }
    },
  },
}