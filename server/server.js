Meteor.publish(null, function () {
    return Pages.find();
});

Pages.allow({
    insert: function (userId, doc) {
        return true;
    },
    // TODO: proper check
    update: function (userId, doc, fields, modifier) {
        return true;
    },
    remove: function () {
        return true;
    }
});