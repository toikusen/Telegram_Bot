//https://api.telegram.org/botKEY/setWebhook?url=https://XXX

var id = "你的id"
var token = "你機器人的token"

function doPost(e){
  var estringa = JSON.parse(e.postData.contents);
  var d = new Date();
  var SpreadSheet = SpreadsheetApp.openById("你試算表的id");
  var Sheet = SpreadSheet.getSheetByName("你試算表的名稱");
  var LastRow = Sheet.getLastRow();
  Sheet.getRange(LastRow+1, 1).setValue(d);  
  Sheet.getRange(LastRow+1, 2).setValue(estringa);
  
  if(estringa.message){
  var payload = sendtext(estringa);
  }
  if(estringa.callback_query){
  var payload = callbackQuery(estringa);
  }
  start(payload);
}

function start(payload) {
  var data = {
      "method": "post",
      "payload": payload
  } 
  var response=UrlFetchApp.fetch("https://api.telegram.org/bot" + token + "/", data);
  Logger.log(response.getContentText());
  
  var d = new Date();
  var SpreadSheet = SpreadsheetApp.openById("你試算表的id");
  var Sheet = SpreadSheet.getSheetByName("你試算表的名稱");
  var LastRow = Sheet.getLastRow();
  Sheet.getRange(LastRow + 1, 1).setValue(d);
  Sheet.getRange(LastRow + 1, 2).setValue(data);
}

function identificar(e){
  
  if (e.callback_query){var message = callbackQuery(e);}
  if(e.message){var message = sendtext(e);}
  return message;
}
