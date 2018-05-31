const express= require('express');
var app=express();
app.use(express.static(__dirname+'/public'));
app.get('/',(req ,res)=>{
	//res.send('<h1>Hello Express!</h1>');
	res.send('<h2> Here is my first Node Web app</h2>') ;
});

app.get('/test',(req,res)=>{
	res.send('its a test page');
})
const port=process.env.PORT || 3000;
app.listen(port);  