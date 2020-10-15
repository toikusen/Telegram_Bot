function sendtext(estringa,name,row){
    var chatid = estringa.message.chat.id.toFixed();
    var id = "你的id";
    var payload;
     
    if (estringa.message.text){    
      if(estringa.message.text === "/shark") {
      payload = {
          "method": "sendMessage",
          'chat_id': chatid,
          'text': 'shark!!!'
        }
        Logger.log(payload.text)
        return payload;
        
      }
      if(estringa.message.text === "/thank_you") {
        keyboards()
      }
      if(estringa.message.text === "/search") {
        
        payload = {
          "method": "sendMessage",
          'chat_id': chatid,
          'text': '請上傳一個照片檔案'
        }
        search()
        return payload;
      }
      if(estringa.message.text === "/help") {
      payload = {
          "method": "sendMessage",
          'chat_id': chatid,
          'text': "gura です！\n"+
          " /shark 鯊鯊會對你大吼大叫\n"+
          " /thank_you 看各國謝謝的說法\n"+
          " /find 回覆圖片來以圖搜圖\n"+
          " /weather 加上城市就可以搜尋36hr天氣資訊\n"
        }
        return payload;
      }
      
    
    if(estringa.message.text === "/find"){
      var cheak1 = estringa.message.photo;
      if(estringa.message.reply_to_message == null){var cheak2 = null;}
      else{var cheak2 = estringa.message.reply_to_message.photo;}
      if(cheak1 || cheak2){
        var TGfile = getFileFromTG(cheak1 , cheak2  , chatid);
        var mensaje = imageSearch(TGfile , chatid);
      }
      else{
        var payload = {
        "method": "sendMessage",
        "chat_id": chatid, 
        "text": "直接輸入/find是不行的喔!\n"+"要回覆想搜尋的圖片並且輸入/find才行!"}
        start(payload);
      }
      return mensaje;
    }
    
    if(estringa.message.text === "/weather") {
      payload = {
          "method": "sendMessage",
          'chat_id': chatid,
          'text': "直接輸入/weather是不行的喔!\n"+"要在/weather 後面加上地點才行!"
        }
        return payload;
      }
    if(estringa.message.text === "/weather ") {
      payload = {
          "method": "sendMessage",
          'chat_id': chatid,
          'text': "直接輸入/weather 是不行的喔!\n"+"要在/weather 後面加上地點才行!"
        }
        return payload;
      }
    if(estringa.message.text.match("/weather ")){
      var temp  = estringa.message.text.split("/weather ");
      var location = temp[1];
      var Weatherfile = get_weather(location,chatid);
      var mensaje = weather_forecast(Weatherfile,location,chatid); 
      var data = locationData(chatid);
      saveLocation(location,chatid ,data.row);
    return mensaje;
    } 
    
  
       
    }
    
  }
  