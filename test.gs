function debug() {
  var test = {
      "update_id" : 893999734,
      "message" : {
          "date" : 1600525466,
          "text" : "/weather 臺北市",
          "from": {
              "language_code" : "zh - hant",
              "username" : "toikusen",
              "first_name" : "昱成",
              "is_bot" : "false",
              "id" : 你的id
          },
          "chat" : {
              "type" : "private",
              "id" : 你的id,
              "first_name" : "昱成",
              "username" : "toikusen"
          },
          "message_id" : 260,
      }
  }
  
  var test2 = {
      "update_id" : 894000208,
      "message" : {
          "entities" : "[Ljava.lang.Object;@ 7e928f86", 
          "message_id" : 480, 
          "date" : 1601532240, 
          "chat" : {
                  "username" : "toikusen",
                  "type" : "private",
                  "id" : 你的id,
                  "first_name" : "昱成"
              }, "text" : "/find", 
              "from":{"username":"toikusen", 
              "id":你的id, 
              "is_bot":"false", 
              "language_code":"zh-hant",
              "first_name":"昱成"}, 
              "reply_to_message":{"photo":['0',{"file_id":"BQACAgUAAxkBAAIB3191cU92qA092dXJ0kTWlrB3VFGWAAKcAQACis6wV23LopUmXBoLGwQ"}],
                                  "message_id":479,
                                  "date":"1601532240",
                                  "from":{"first_name":"昱成", 
                                          "username":"toikusen", 
                                          "id":你的id, 
                                          "language_code":"zh-hant",
                                          "is_bot":false}, 
                                          "chat":{"type":"private", 
                                                  "first_name":"昱成", 
                                                  "id":你的id, 
                                                  "username":"toikusen"}, 
                                                  "document":{"thumb":{"height":"225.0", 
                                                                       "file_unique_id":"AQADXR7pbXQAAz4-AAI", 
                                                                       "width" : "320", 
                                                                       "file_id":"AAMCBQADGQEAAgHfX3VxT3aoDT3Z1cnSRNaWsHdUUZYAApwBAAKKzrBXbcuilSZcGgtdHultdAADAQAHbQADPj4AAhsE",
                                                                       "file_size":"19326"}, 
                                                                       "file_name":"03.png", 
                                                                       "file_size":"3161800.0", 
                                                                       "mime_type":"image/png", 
                                                                       "file_unique_id" : "AgADnAEAAorOsFc", 
                                                                       "file_id" : "BQACAgUAAxkBAAIB3191cU92qA092dXJ0kTWlrB3VFGWAAKcAQACis6wV23LopUmXBoLGwQ"
      }
  }
  }
  
  }
  
    var payload = identificar(test);
    start(payload);
  
  }
  
  function testingSendOut(){
  
        var photoId = "BQACAgUAAxkBAAIB1V91RDezgD2zPmIxeIhTQ93IxJcCAAKHAQACis6wV8MHZmODLpsBGwQ";
        var getFile = {
          "method": "getFile",
          "file_id": photoId
        }
        var message = {
          "method": "post",
          "payload": getFile
        }
        var getUrl = UrlFetchApp.fetch("https://api.telegram.org/bot你機器人的id/" , message);
        var filePath = JSON.parse(getUrl);
        var temp = "https://api.telegram.org/file/bot你機器人的id/" + filePath.result.file_path;
        var payload = imageSearch(temp);
      
    start(payload);
  }