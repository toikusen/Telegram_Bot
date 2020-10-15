function auto_send(){
  var payload = {
        "method": "sendPhoto",
        "chat_id": "你的id", 
        "photo": "https://i.pinimg.com/originals/07/31/4f/07314f8ab5bc45b1bc1d9253cb4f1dc9.png"
      }
      start(payload);
   return payload;   
}
