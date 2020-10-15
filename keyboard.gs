var id = "你的id"
var token = "你機器人的token"

function keyboards() {
    var keyboard = [[{'text':'1'},{'text':'2'}],[{'text':'3'},{'text':'4'}]]
        var url_inline_keyboard = [
      [{"text":"Google","url": "https://www.google.com"},{"text":"Yahoo","url": "https://tw.yahoo.com/"}],
      [{"text":"YouTube","url": "https://www.youtube.com/"},{"text":"Twitch","url": "https://www.twitch.tv/"}]
    ]
    
    var inline_keyboard = [
      [{"text":"中文","callback_data": "chinese"},{"text":"英文","callback_data": "english"}],
      [{"text":"日文","callback_data": "japanese"},{"text":"韓文","callback_data": "korean"}]
    ]
    
    var InlineKeyboardMarkup = {
        'inline_keyboard': inline_keyboard
    }
    var ReplyKeyboardMakeup = {
        'keyboard': keyboard,
        'resize_keyboard': true,
        'one_time_keyboard': false,
        'selective': false
    }
    var ReplyKeyboardRemove = {
        'remove_keyboard': true,
        'selective': false
    }
    var ForceReply = {
        'force_reply': true,
        'selective': false
    }
    var payload = {
        "method": "sendMessage",
        'chat_id': id,
        'text': '你想知道哪國的"謝謝"講法呢？',
        'reply_markup': JSON.stringify(InlineKeyboardMarkup)
    }
    start(payload);
}
