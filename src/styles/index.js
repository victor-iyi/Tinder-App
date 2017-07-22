import { StyleSheet } from 'react-native';

const themeBlack = '#080808';
const themeWhite = '#fff';


export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 23,
  },
  container: {
    flex: 1,
    backgroundColor: themeWhite,
    padding: 5,
  },
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Image
  imgContainer: {
    marginTop: 30,
    width: 250,
    height: 250,
    borderWidth: 3,
    borderColor: themeBlack,
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
  // Round Button
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
    color: themeBlack,
    textAlign: 'center',
    fontSize: 20,
  },
  // Conversation page
  convHeading: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 30,
  },
  convNo: {
    fontWeight: 'bold',
    color: 'red',
  }
});