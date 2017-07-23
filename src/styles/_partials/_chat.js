const color = require('./_vars/_colors');
module.exports = {
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
    backgroundColor: color.gray,
  },
  chatMsgBox: {
  
  },
  chatMsgText: {

  },
  isTyping: {
    fontStyle: 'italic',
    color: color.deepGray,
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
    color: color.black,
    backgroundColor: color.gray,
  },
};