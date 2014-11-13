UserSchema = new SimpleSchema({
  "profile.firstName": {
    type: String,
    label: "First name",
    optional: true
  },
  "profile.lastName": {
    type: String,
    label: "Last name",
    optional: true
  },
  "languages": {
    type: [String],
    optional: true,
    label: "Languages",
    autoform: {
      options: [
        {value: 'en', label: 'English'},
        {value: 'de', label: 'German'},
        {value: 'fr', label: 'French'}
      ]
    }
  }
});


//Meteor.users.attachSchema(UserSchema);