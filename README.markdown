# xmpp.js
## Server-side XMPP in Javascript

[xmpp.js](http://xmppjs.prosody.im/) is a library for [Node.js](http://nodejs.org/) that allows
you to connect to an XMPP server as a component.

For those already familiar with the client-side [Strophe.js](http://code.stanziq.com/strophe/)
library then there is almost nothing to learn - the API is almost exactly the same. The only
difference is that this time you can run your code on the server, and handle XMPP traffic from
clients on behalf of a whole domain. It's like writing an XMPP server but with the hard parts
handled for you.

xmpp.js works with any [XEP-0114](http://www.xmpp.org/extensions/xep-0114.html)-compliant server
(that's practically all of them), so you need not worry about your code being tied in to a
particular server implementation.

### How it works at the XMPP level
XMPP components "bind" to a domain, usually a subdomain of the main XMPP service, such as
pubsub.example.org, or conference.example.org. All incoming stanzas addressed to that domain 
(to='service.example.org') or to entities on that domain (to='user@service.example.org') will be
routed to your xmpp.js-based code.

For outgoing stanzas your component is in full control. You can specify any 'from' address on
your stanzas, many servers don't even enforce that the originating domain of the stanza is the
component's domain, allowing you to send stanzas on behalf of any user on the server.

### Getting started
Firstly, you'll need Node installed if you haven't it already, this is fairly straightforward -
[instructions are here](http://nodejs.org/#build). xmpp.js is confirmed to work with version 
0.1.30 (2010.02.22).

Check out the source xmpp.js code, from either the
[Mercurial repository](http://code.matthewwild.co.uk/xmppjs/) or
[Github project](http://github.com/mwild1/xmppjs).

In the examples directory you will find an example component which echoes messages it receives
back to the sender. If you have a local [Prosody](http://prosody.im/) server installed then you
can simply add these lines to your Prosody config to make this example work:

	        Component "echo.localhost"
	                component_secret = "hellohello"

Ater restarting Prosody try running:

	        node examples/echo.js

Log into your Prosody with a client and send a message to anything@echo.localhost - you should
receive an instant response back - congratulations!
