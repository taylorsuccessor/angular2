
function showSuccess(form, data) {

    var defaultSuccessMessagesDiv = '<div style="background-color:lightgreen;padding:5px 10px;" id="defaultSuccessMessagesDiv"></div>';


    var successHtml = "Success";

    var successMessagesDiv = $('.successMessagesDiv,.success,.successMessages');
    if (successMessagesDiv.length == 0) {
        $(defaultSuccessMessagesDiv).insertBefore(form);
        successMessagesDiv = $('#defaultSuccessMessagesDiv');
    }

    successMessagesDiv.html(successHtml)
}

function showErrors(form, xhr) {

    var defaultErrorMessagesDiv = '<div style="background-color:indianred;padding:5px 10px;" id="defaultErrorMessagesDiv"></div>';


    var errorsHtml = "";
    if (xhr.status == 422) {
        var responseJson = jQuery.parseJSON(xhr.responseText);

        for (var key in responseJson) {
            var inputNode = form.find('[name="' + key + '"]');
            inputNode.parent().parent().addClass('has-error');
            $('<p class="help-block">' + responseJson[key] + '</p>').insertAfter(inputNode);
            errorsHtml += responseJson[key] + "<br>";
        }
    }

    var errorMessagesDiv = $('.errorMessagesDiv,.errors,.errorsMessages');
    if (errorMessagesDiv.length == 0) {
        $(defaultErrorMessagesDiv).insertBefore(form);
        errorMessagesDiv = $('#defaultErrorMessagesDiv');
    }

    errorsHtml = (errorsHtml == "") ? "Error,Please try again later." : errorsHtml;
    errorMessagesDiv.html(errorsHtml);
}
function removeCurrentMessages(form) {

    $('#defaultSuccessMessagesDiv,#defaultErrorMessagesDiv').remove();
    form.find('.help-block,.errors,.success').remove();
    form.find('.has-error').removeClass('has-error');

}
function submitForm(formJsForm) {
    var form = $(formJsForm);

    if (form.attr('startSubmit') == "true") {
        return false;
    }
    removeCurrentMessages(form);
    form.attr('startSubmit', 'true');

    var url = form.attr('action');
    var method = form.attr('method');

    var loadingNode = $('.loading');
    loadingNode = ( loadingNode.length == 0) ? form.find("[type='submit']") : loadingNode;


    var loadingNodeOrigin = loadingNode.html();


    var loadingHtml = loadingNode.data('loading');

    loadingHtml = ( typeof loadingHtml === "undefined") ? "loading ..." : loadingHtml;


    loadingNode.html(loadingHtml);

//        var errorMessageNode=$(".")

    $.ajax({
        dataType: 'text',// 'json',
        url: url,
        type: method,
        data: form.find(' input[type=\'text\'],input[type=\'password\'],  input[type=\'hidden\'],  input[type=\'radio\']:checked,  input[type=\'checkbox\']:checked,  select,  textarea'),
        success: function (data) {


            try {
                var responseJson = jQuery.parseJSON(data);
            } catch (e) {
                showErrors(form, data);
                return false;
            }
            if (typeof  responseJson.status == "undefined") {

            } else {

                showSuccess(form, data);

                if (typeof  responseJson.redirect != "undefined") {
                    window.location.href = responseJson.redirect;
                }
            }

        },
        error: function (xhr) {
            console.log(xhr.responseText);
            showErrors(form, xhr);

        },
        complete: function () {

            loadingNode.html(loadingNodeOrigin);
            form.attr('startSubmit', 'false');
        }
    });

}

$('.ajaxForm').submit(function () {
    submitForm(this);

    event.preventDefault();
    event.stopPropagation();
});