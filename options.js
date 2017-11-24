// Saves options to chrome.storage
function save_options() {
  var mainwall = document.getElementById('mainwall').value;
  var appbox = document.getElementById('appbox').checked;
  var pagebox = document.getElementById('pagebox').checked;
  var footer = document.getElementById('footer').checked;
  var groupsuggestions = document.getElementById('groupsuggestions').checked;
  var relatedevents = document.getElementById('relatedevents').checked;
  var eventinvite = document.getElementById('eventinvite').checked;
  var suggestedpages = document.getElementById('suggestedpages').checked;
  var groupphotos = document.getElementById('groupphotos').checked;
  var friendsbox = document.getElementById('friendsbox').checked;
  var interestsbox = document.getElementById('interestsbox').checked;
  var groupsbox = document.getElementById('groupsbox').checked;
  var eventsbox = document.getElementById('eventsbox').checked;
  var newsfeedbutton = document.getElementById('newsfeedbutton').checked;
  chrome.storage.sync.set({
    mainwall: mainwall,
    appbox: appbox,
    pagebox: pagebox,
    footer: footer,
    groupsuggestions: groupsuggestions,
    relatedevents: relatedevents,
    eventinvite: eventinvite,
    suggestedpages: suggestedpages,
    groupphotos: groupphotos,
    friendsbox: friendsbox,
    interestsbox: interestsbox,
    groupsbox : groupsbox,
    eventsbox : eventsbox,
    newsfeedbutton : newsfeedbutton
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
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
    document.getElementById('mainwall').checked = items.mainwall;
    document.getElementById('appbox').checked = items.appbox;
    document.getElementById('pagebox').checked = items.pagebox;
    document.getElementById('footer').checked = items.footer;
    document.getElementById('groupsuggestions').checked = items.groupsuggestions;
    document.getElementById('relatedevents').checked = items.relatedevents;
    document.getElementById('eventinvite').checked = items.eventinvite;
    document.getElementById('suggestedpages').checked = items.suggestedpages;
    document.getElementById('groupphotos').checked = items.groupphotos;
    document.getElementById('friendsbox').checked = items.friendsbox;
    document.getElementById('interestsbox').checked = items.interestsbox;
    document.getElementById('groupsbox').checked = items.groupsbox;
    document.getElementById('eventsbox').checked = items.eventsbox;
    document.getElementById('newsfeedbutton').checked = items.newsfeedbutton;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);