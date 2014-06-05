Template.autoform.helpers({

    Page: function () {
        return Pages; // return Pages collection
    },
    firstPage: function () {
        return Pages.findOne(); // find the first item
    },

    formMethod: function () {
        return Template.autoform.firstPage() ? 'update' : 'insert'; // set method
    },

    isUpdate: function () {
        return Template.autoform.firstPage(); // boolean for update
    }
});

Template.autoform.events({
    "blur #pagesForm :input, input #pagesForm :input, change #pagesForm :input": function (ev, templ) {
        window.clearTimeout($(this).data("timeout"));
        $(this).data("timeout", setTimeout(function () {
            console.log("tryout autosave")
            templ.$('form')[0].submit();
        }, 350));
    }

});