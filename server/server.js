Meteor.publish(null, function () {
  return Meteor.users.find({
    _id: this.userId
  }, {
    fields: {
      profile: 1,
      languages: 1
    }
  })
});


Meteor.methods({
  updateUser: function (doc, modif, userId) {
    if(!userId && !Meteor.users.find(userId) && userId !== this.userId) {
      throw new Meteor.Error("This is not allowed");
    }

    check(modif, UserSchema);

    Meteor.users.update(userId, modif);

  }
});