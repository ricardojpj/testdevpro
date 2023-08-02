function log_message(log, status, info){
   var today = new Date();
   var date = today.getFullYear()+'-'+String(today.getMonth()+1).padStart(2, '0')+'-'+String(today.getDate()).padStart(2, '0');
   var time = today.getHours() + ":" + ('0'+today.getMinutes()).slice(-2) + ":" + ('0'+today.getSeconds()).slice(-2);
   var dateTime = "["+date+' '+time+"]";
   let new_status= status;
   let new_info= "["+info+"]";
   return dateTime +new_info+new_status
}

var answer=log_message("application.log","Failed login attemp","WARNING");
console.log("Output",answer);