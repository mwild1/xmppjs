var jid = "echo.localhost", password = "hellohello";
var xmpp = require("../xmpp");
var conn = new xmpp.Connection();
var sys = require("sys");

conn.log = function (_, m) { sys.puts(m); };

conn.connect(jid, password, function (status, condition) {
	if(status == xmpp.Status.CONNECTED)
		conn.addHandler(onMessage, null, 'message', null, null,  null);
	else
		conn.log(xmpp.LogLevel.DEBUG, "New connection status: " + status + (condition?(" ("+condition+")"):""));
});

function onMessage(message) {
	conn.send(xmpp.message({
		to:message.getAttribute("from"),
		from:message.getAttribute("to"),
		type: "chat"})
			.c("body").t(message.getChild("body").getText()));
}

