const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080')
});


app.get('/pet', function(요청, 응답){
    응답.send('펫용품 쇼핑 할 수 있는 페이지');
});

app.get('/beauty', function(요청, 응답){
    응답.send('뷰티용품 쇼핑 할 수 있는 페이지');
});

app.get('/', function(요청, 응답){
    응답.sendFile(__dirname + '/index.html')
});