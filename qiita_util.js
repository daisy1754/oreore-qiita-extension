const API_END_POINT = 'https://qiita.com/api/v1';
var qiita = {};

function getToken(onCompletion) {
  $.post(API_END_POINT + '/auth',
      {url_name:'abc_part',
       password:'chinchin'},
      function(data){
         qiita.token = data.token;
         onCompletion(qiita.token);
      });
}

function showPageAction() {
  chrome.extension.sendRequest({operation: 'show-icon'},
      function(response) {});
}

function useGETAPI(api, token, callback) {
  var data = {};
  if (token)
    data.token = token;
  $.get(API_END_POINT + api, data, callback);
}