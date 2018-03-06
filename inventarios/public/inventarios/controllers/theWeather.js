(function () {
    'use strict';
    
/*global angular*/
var app =   angular.module('myApp') || {};

app.controller("theweather",[
    '$scope','$http',
    function($s, http){
        var ctl=this;
        ctl.init=function(){
            http.get('https://samples.openweathermap.org/data/2.5/weather?q=Mexico,mx&appid=b1b15e88fa797225412429c1c50c122a1')
            .then(function(res){
                ctl.temp=res.data.main.temp;
                ctl.city=res.data.name;
                ctl.icon=res.data.weather[0].icon;
                ctl.description=res.data.weather[0].description;
            },function(res){
                
            });
        };
        ctl.init();
    }
    ]);
    
})();


