function getFileFromTG(cheak1 , cheak2 , chatid){
    if(cheak1){var array = cheak1;}
    else{var array = cheak2;}
    var text = array[1];
    var photoId = text.file_id;
  
    var payload = {
      "method": "post",
      "payload": {
        "method": "getFile",
        "file_id": photoId
      }
    }
    var getUrl = UrlFetchApp.fetch("https://api.telegram.org/bot你的機器人id/" , payload);
    var filePath = JSON.parse(getUrl);
    var temp = "https://api.telegram.org/file/bot你的機器人id/" + filePath.result.file_path;
    return temp;
    }
  
  function imageSearch(TGfile , chatid){
  var payload = {
          "method": "sendMessage",
          'chat_id': chatid,
          'text': '測試search'
        }
      
      payload.text ="找到啦！\n" + "https://www.google.com/searchbyimage?&image_url=" + TGfile + "";
      
      return payload;
  
  }
  
  
  