import { StyleSheet } from 'react-native';

const themeBlack = '#0a0a0a';
const themeWhite = '#fff';
const themeGray = '#eee';
const themeDeepGray = '#999';


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
    marginTop: 15,
    fontSize: 18,
    textAlign: 'center',
  },
  convNo: {
    fontWeight: 'bold',
    color: 'red',
  },
  convContainer: {
    margin: 10,
  },
  convCard: {
    marginTop: 20,
    padding: 20,
    borderWidth: 3,
    borderColor: themeBlack,
  },
  convCardText: {
    fontSize: 16,
    color: themeBlack,
    textAlign: 'left',
  },

  // Chat Page 
  chatContainer: {
    padding: 5,
    flex: 1,
  },
  chatArea: {
    flex: 10,
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    overflow: 'scroll',
    backgroundColor: themeGray,
  },
  chatMsgBox: {
  
  },
  chatMsgText: {

  },
  isTyping: {
    fontStyle: 'italic',
    color: themeDeepGray,
  },
  chatInputContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
  },
  chatInput: {
    height: 50,
    padding: 10,
    borderRadius: 10,
    color: themeBlack,
    backgroundColor: themeGray,
  },

});