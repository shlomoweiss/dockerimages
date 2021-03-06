var dgram = require('dgram');
var news = [
    "Borussia Dortmund wins German championship",
    "Tornado warning for the Bay Area",
    "More rain for the weekend",
    "Android tablets take over the world",
    "iPad2 sold out",
    "Nation's rappers down to last two samples"
  ];

   
  var server = dgram.createSocket("udp4"); 
  server.bind( function() {
    server.setBroadcast(true)
    server.setMulticastTTL(128);
    setInterval(broadcastNew, 3000);
  });
  
  function broadcastNew() {
    var message = Buffer.from(news[Math.floor(Math.random()*news.length)]);
    server.send(message, 0, message.length, 5007, "224.1.1.1");
    console.log("Sent " + message + " to the wire...");
}