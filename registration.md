---
title: Registration
weight: 4
layout: page
---

<div style="width:100%; text-align:left;"><iframe id="eventbrite" src="" frameborder="0" height="460" width="100%" vspace="0" hspace="0" marginheight="5" marginwidth="5" scrolling="auto" allowtransparency="true"></iframe><div style="font-family:Helvetica, Arial; font-size:12px; padding:10px 0 5px; margin:2px; width:100%; text-align:left;" ><a class="powered-by-eb" style="color: #ADB0B6; text-decoration: none;" target="_blank" href="http://www.eventbrite.com/">Powered by Eventbrite</a></div></div>

<script>
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
var eventbriteURL = "//eventbrite.com/tickets-external?eid=35543958938&ref=etckt"
if (getUrlParameter('discount'))
    eventbriteURL += "&discount=" + getUrlParameter('discount');
document.getElementById("eventbrite").src = eventbriteURL;
</script>
