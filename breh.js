'use strict'

var target_date = new Date('November, 1, 2021').getTime();
 

var days, hours, minutes, seconds;
 

var countdown = document.getElementById('countdown');
 

setInterval(function () {
 
    
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
    
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
     
    
    countdown.innerHTML = '<span class="days">' + days +  ' <label>Days</label></span> <span class="hours">' + hours + ' <label>Hours</label></span> <span class="minutes">'
    + minutes + ' <label>Minutes</label></span> <span class="seconds">' + seconds + ' <label>Seconds</label></span>';  
 
}, 1000);