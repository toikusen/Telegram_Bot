function get_weather(location,chatid){

    var response = UrlFetchApp.fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=你的中央氣象局API授權碼" + "&" + "locationName=" + location );
    var weatherData = JSON.parse(response);
    //Logger.log(response);
    return weatherData;
    
  }
  
  function weather_forecast(Weatherfile,location,chatid) {
  
  var payload = {
          "method": "sendMessage",
          'chat_id': chatid,
          'text': '測試傳送天氣預報'
        }
        payload.text = location+ " 36hr天氣預報\n" + "\n" +
        Weatherfile.records.location[0].weatherElement[0].time[0].startTime+ "~" + Weatherfile.records.location[0].weatherElement[0].time[0].endTime +"\n"+
        "天氣狀態："+ Weatherfile.records.location[0].weatherElement[0].time[0].parameter.parameterName+ "\n" + 
        "降雨機率："+ Weatherfile.records.location[0].weatherElement[1].time[0].parameter.parameterName+ "%" + "\n" +
        "最低溫度："+ Weatherfile.records.location[0].weatherElement[2].time[0].parameter.parameterName+ "°C" + "\n" +
        "最高溫度："+ Weatherfile.records.location[0].weatherElement[4].time[0].parameter.parameterName+ "°C" + "\n" +
        "天氣舒適度："+ Weatherfile.records.location[0].weatherElement[3].time[0].parameter.parameterName+ "\n" + "\n" +
        Weatherfile.records.location[0].weatherElement[0].time[1].startTime+ "~" + Weatherfile.records.location[0].weatherElement[0].time[1].endTime +"\n"+
        "天氣狀態："+ Weatherfile.records.location[0].weatherElement[0].time[1].parameter.parameterName+ "\n" +
        "降雨機率："+ Weatherfile.records.location[0].weatherElement[1].time[1].parameter.parameterName+ "%" + "\n" +
        "最低溫度："+ Weatherfile.records.location[0].weatherElement[2].time[1].parameter.parameterName+ "°C" + "\n" +
        "最高溫度："+ Weatherfile.records.location[0].weatherElement[4].time[1].parameter.parameterName+ "°C" + "\n" +
        "天氣舒適度："+ Weatherfile.records.location[0].weatherElement[3].time[1].parameter.parameterName+ "\n" + "\n" +
        Weatherfile.records.location[0].weatherElement[0].time[2].startTime+ "~" + Weatherfile.records.location[0].weatherElement[0].time[2].endTime +"\n"+
        "天氣狀態："+ Weatherfile.records.location[0].weatherElement[0].time[2].parameter.parameterName+ "\n" +
        "降雨機率："+ Weatherfile.records.location[0].weatherElement[1].time[2].parameter.parameterName+ "%" +"\n"+
        "最低溫度："+ Weatherfile.records.location[0].weatherElement[2].time[2].parameter.parameterName+ "°C" + "\n" + 
        "最高溫度："+ Weatherfile.records.location[0].weatherElement[4].time[2].parameter.parameterName+ "°C" + "\n" +
        "天氣舒適度："+ Weatherfile.records.location[0].weatherElement[3].time[2].parameter.parameterName+ "\n" +"";
        //Logger.log(payload.text);    
        return payload;
  }
  
  // Weatherfile.records.location[0].weatherElement[0].time[0].parameter[0].parameterName
  
  function test(){
    var file = {
    "success": "true",
    "result": {
      "resource_id": "F-C0032-001",
      "fields": [
        {
          "id": "datasetDescription",
          "type": "String"
        },
        {
          "id": "locationName",
          "type": "String"
        },
        {
          "id": "parameterName",
          "type": "String"
        },
        {
          "id": "parameterValue",
          "type": "String"
        },
        {
          "id": "parameterUnit",
          "type": "String"
        },
        {
          "id": "startTime",
          "type": "Timestamp"
        },
        {
          "id": "endTime",
          "type": "Timestamp"
        }
      ]
    },
    "records": {
      "datasetDescription": "三十六小時天氣預報",
      "location": [
        {
          "locationName": "新北市",
          "weatherElement": [
            {
              "elementName": "Wx",
              "time": [
                {
                  "startTime": "2020-10-03 18:00:00",
                  "endTime": "2020-10-04 06:00:00",
                  "parameter": {
                    "parameterName": "晴時多雲",
                    "parameterValue": "2"
                  }
                },
                {
                  "startTime": "2020-10-04 06:00:00",
                  "endTime": "2020-10-04 18:00:00",
                  "parameter": {
                    "parameterName": "晴時多雲",
                    "parameterValue": "2"
                  }
                },
                {
                  "startTime": "2020-10-04 18:00:00",
                  "endTime": "2020-10-05 06:00:00",
                  "parameter": {
                    "parameterName": "多雲時陰有雨",
                    "parameterValue": "12"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  };
    weather_forecast(file , "新北市");
  }
  
  