Meteor.users.find(Meteor.userId()).observeChanges({
  changed: function (id, fields) {
    console.log("CHANGED", arguments);
  }
});

Template.pageForm.events({
  "change form": function () {
    $("#userUpdate").submit();
  }
});