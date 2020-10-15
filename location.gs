function locationData(chatid){
    var SpreadSheet = SpreadsheetApp.openById("你的試算表id");
    var Sheet = SpreadSheet.getSheetByName("你的試算表名稱");
    var data = Sheet.getDataRange().getValues();
    var row = 0;
    if(chatid == 0) return data;
    for (var i = 0; i < data.length; i++) {
      if(chatid == data[i][0]){
        row = i;
        break;
      }
    }
    var userData = {"chatid": data[row][0] , "location": data[row][1] , "row": row};
    return userData;
  }
  
  function saveLocation(location,chatid ,row){
      var SpreadSheet = SpreadsheetApp.openById("你的試算表id");
      var Sheet = SpreadSheet.getSheetByName("你的試算表名稱");  
      Sheet.getRange(row + 1 , 2).setValue(location);
  }
  
  function clockWeather(){
    var allData = locationData(0);
    for(var i = 0;i < allData.length;i++){
      var data = {"chatid": allData[i][0].toFixed() , "location": allData[i][1]};
      Logger.log(data);
      var Weatherfile = get_weather(data.location,data.chatid);
      var mensaje = weather_forecast(Weatherfile,data.location,data.chatid);
      start(mensaje);
    }
  }
  