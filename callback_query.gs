function callbackQuery(estringa) {
    var callback_chatid = estringa.callback_query.message.chat.id.toFixed();
    var payload;
    if(estringa.callback_query){
      
        payload = {
          "method": "sendMessage",
          'chat_id': callback_chatid,
          'text': '測試callback', 
        };
        if(estringa.callback_query.data.indexOf("chinese") === 0){ 
          payload.text = "感謝";
        }
        if(estringa.callback_query.data.indexOf("english") === 0){ 
          payload.text = estringa.callback_query.data +"："+ "Thank you";
        }
        if(estringa.callback_query.data.indexOf("japanese") === 0){ 
          payload.text = estringa.callback_query.data +"："+ "ありがとうございました";
        }
        if(estringa.callback_query.data.indexOf("korean") === 0){ 
          payload.text = estringa.callback_query.data +"："+ "감사합니다";
        }
        return payload;
    
    }
  }
  