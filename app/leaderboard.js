//http://courses.ics.hawaii.edu/ics314f17/morea/meteor-1/inclass-meteor-leaderboard.html

PlayersList = new Mongo.Collection('players');

if (Meteor.isClient) {
  Template.leaderboard.helpers({
    'player': function () {
      return PlayersList.find();
    },
    'count': function () {
      return PlayersList.find().count();
    },
    'selectedClass': function () {
      var playerId = this._id;
      var selectedPlayer = Session.get('selectedPlayer');
      if (playerId == selectedPlayer) {
        return "selected"
      }
    }
  });
  Template.leaderboard.events({
    'click .player': function () {
      var playerId = this._id;
      Session.set('selectedPlayer', playerId);
    }
  });
}

if (Meteor.isServer) {

}