const color = require('./_vars/_colors');

module.exports = {
  // Home Page
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    width: 300, 
    height: 350,

  },
  img: {
    width: 300,
    height: 350,
    borderRadius: 10,
  },
  imgText: {
    position: "absolute",
    left: 15,
    bottom: 10,
    fontSize: 30,
    color: color.black,
    justifyContent: 'center',
  },
};