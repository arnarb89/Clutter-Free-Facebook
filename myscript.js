var disableMainwall;
var disableAppbox;
var disablePagebox;
var disableFooter;
var disableGroupsuggestions;
var disableRelatedevents;
var disableEventinvite;
var disableSuggestedpages;
var disableGroupphotos;
var disableFriendsbox;
var disableInterestsbox;
var disableGroupsbox;
var disableEventsbox;
var disableNewsfeedbutton;

function getOptions() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    mainwall: true,
    appbox: true,
    pagebox: true,
    footer: true,
    groupsuggestions: true,
    relatedevents: true,
    eventinvite: true,
    suggestedpages: true,
    groupphotos: true,
    friendsbox: true,
    interestsbox: true,
    groupsbox:  true,
    eventsbox: true,
    newsfeedbutton: true
  }, function(items) {
    disableMainwall = items.mainwall;
    disableAppbox = items.appbox;
    disablePagebox = items.pagebox;
    disableFooter = items.footer;
    disableGroupsuggestions = items.groupsuggestions;
    disableRelatedevents = items.relatedevents;
    disableEventinvite = items.eventinvite;
    disableSuggestedpages = items.suggestedpages;
    disableGroupphotos = items.groupphotos;
    disableFriendsbox = items.friendsbox;
    disableInterestsbox = items.interestsbox;
    disableEventsbox = items.eventsbox;
    disableGroupsbox = items.groupsbox;
    disableNewsfeedbutton = items.newsfeedbutton;
  });
}


function init(){

    var themainstream = document.getElementById("stream_pagelet");
    if(themainstream&&disableMainwall)themainstream.parentNode.removeChild(themainstream);

    var appsnav = document.getElementById("appsNav");
    if(appsnav&&disableAppbox)appsnav.parentNode.removeChild(appsnav);

    var listsnav = document.getElementById("listsNav");
    if(listsnav&&disableFriendsbox)listsnav.parentNode.removeChild(listsnav);

    var pagesnav = document.getElementById("pagesNav");
    if(pagesnav&&disablePagebox)pagesnav.parentNode.removeChild(pagesnav);

    var interestsnav = document.getElementById("interestsNav");
    if(interestsnav&&disableInterestsbox)interestsnav.parentNode.removeChild(interestsnav);

    var footer = document.getElementById("pagelet_rhc_footer");
    if(footer&&disableFooter)footer.parentNode.removeChild(footer);

    
    var groups = document.getElementById("GroupsRHCSuggestionSection");
    if(groups&&disableGroupsuggestions)groups.parentNode.removeChild(groups);

    var relatedevents = document.getElementById("event_related_events");
    if(relatedevents&&disableRelatedevents)relatedevents.parentNode.removeChild(relatedevents);

    var eventinvite = document.getElementById("event_invite");
    if(eventinvite&&disableEventinvite)eventinvite.parentNode.removeChild(eventinvite);

    var suggestedpages = document.getElementById("pagelet_ego_pane");
    if(suggestedpages&&disableSuggestedpages)suggestedpages.parentNode.removeChild(suggestedpages);

    var groupsnav = document.getElementById("groupsNav");
    if(groupsnav&&disableGroupsbox)groupsnav.parentNode.removeChild(groupsnav);

    var eventsnav = document.getElementById("eventsNav");
    if(eventsnav&&disableEventsbox)eventsnav.parentNode.removeChild(eventsnav);


    var newsfeedbutton = document.getElementById("navItem_4748854339");
    if(newsfeedbutton&&disableNewsfeedbutton)newsfeedbutton.parentNode.removeChild(newsfeedbutton);

    var groupphotos = document.getElementsByClassName("_4-u2 _3-96 _4-u8");
    for(var i = 0;i<groupphotos.length;i++){
        if(groupphotos[i].firstChild&&disableGroupphotos){
            if(groupphotos[i].firstChild.firstChild){

                if(groupphotos[i].firstChild.firstChild.innerHTML.slice(0,19)==="Recent Group Photos"){
                    groupphotos[i].parentNode.removeChild(groupphotos[i]);
                    break;
                }

            }
        }
        
    }
}
getOptions();
init();


var observer = new WebKitMutationObserver(function (mutations) {
    init();
    //console.log("mutation happened");
});

observer.observe(document.body, {childList : true, subtree : true});
