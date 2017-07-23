const color = require('./_vars/_colors');

module.exports = {
  // Home Page
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    marginTop: 30,
    width: 250,
    height: 250,
    borderWidth: 3,
    borderColor: color.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 240,
    height: 240,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  roundButton: {
    marginLeft: 30,
    marginRight: 30,
    width: 75,
    height: 75,
  },
  roundButtonImg: {
    width: 75,
    height: 75,
  },
  roundButtonTitle: {
    marginTop: 15,
    color: color.black,
    textAlign: 'center',
    fontSize: 20,
  },
};