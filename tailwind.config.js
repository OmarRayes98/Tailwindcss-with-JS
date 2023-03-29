module.exports = {
  content: [
    "./src/**/*.{html,js}",

    '*.{html,js}'
],
  theme: {

    extend: {
        fontFamily:{
            "maven": ["Marven Pro","sans-serif"]
        },
        colors: {
          primary:"#fcac11",
          textColor : "#5b5b5b",
          grey:"#EEEEEE",
          secondary:"#47465A",
          headingColor:"#353535",
          headingColor2:"#484848"

        },


    },
  },
  plugins: [],

}