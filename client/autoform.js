Template.autoform.helpers({

    Page: function () {
        return Pages; // return Pages collection
    },
    firstPage: function () {
        //console.log(Pages.findOne())
        return Pages.findOne(); // find the first item
    },

    formMethod: function () {
        return Template.autoform.firstPage() ? 'update' : 'insert'; // set method
    },

    isUpdate: function () {
        return Template.autoform.firstPage() ? true : false; // boolean for update
    }
});

Template.autoform.events({
    "blur #pagesForm :input, input #pagesForm :input, change #pagesForm :input": function (ev, templ) {
        window.clearTimeout($(this).data("timeout"));


        $(this).data("timeout", setTimeout(function () {
            if (Template.autoform.isUpdate()) {
                if (ev.target && !$(ev.target).hasClass("btn")) {
                    templ.$('form#pagesForm').submit();
                }
            }
        }, 350));
    }

});