/*
 you can use <a> or <form>


 <form action="/targetUrl"
 class="formWithResponse"

 data-wait-place="#myDiv"
 data-success-place="#myDiv"
 data-error-place="#errorDiv"

 data-success-function="mySuccessFunction"
 data-error-function="myErrorFunction"
 data-wait-function="myWaitFunction"

 method="post">


 <a href="/" id="ffffffffffffffffff" class="aWithResponse">fsdvsdvsd</a>




 window.myWaitFunction(form,wait-place)

 window.mySuccessFunction(form,success-place, data)


 window.myErrorFunction(form,error-place, xhr)


 */



/*____________________________________________________________default____functions__*/

/**
 *
 * show the waiting sign when ajax request start
 *
 * @param text targetPlace : the css selector for target div or html place
 * @return html : the target place old html
 *
 */
function defaultWaitAjax(form, targetPlace) {
    var model=$('#generalPopupModel');
    if(model.length > 0){
        $('#generalPopupModel').modal({
            show: 'false'
        });
    }
    var targetNode = $(targetPlace);
    var oldTargetHtml = $(targetPlace).html();
   // targetNode.html('<div style="padding-bottom:5px;text-align:center;"> loading ... </div>');

   targetNode.html('<center> <img  src="/assets/website/images/loading.gif"> </center>');




    return oldTargetHtml;
}

/**
 *
 * show data which return from ajax request
 *
 * @param text targetPlace : the selector for place where the data will be
 * @param mix(html,text,json) data : the data which return from the ajax request
 * @return void
 *
 */

function defaultSuccessAjax(form, targetPlace, data) {
    var html = 'Success';
    try {
        var responseJson = jQuery.parseJSON(data);
        if (typeof  responseJson.status == "undefined") {

        } else {


            if (typeof  responseJson.redirect != "undefined") {
                window.location.href = responseJson.redirect;
            }
        }
    } catch (e) {
        html = data;
    }

    $(targetPlace).html(html);
}

/**
 *
 * to remove html after success ajax delete function
 *
 *
 */
window.successDelete=function(form, targetPlace, data){

    var removeHtml = form.data('success-delete');
    removeHtml = ( typeof removeHtml === "undefined") ? form : $(removeHtml);

    removeHtml.remove();
}

/**
 *
 * show error messages or error text when ajax fail
 *
 * @param text errorPlace : the selector for error place
 * @param object xhr  : the error object my it contain validation messages
 * @return void
 *
 */

function defaultErrorAjax(form, errorPlace, xhr) {

    removeCurrentMessages(form);
    console.log(xhr.responseText);


    var errorsHtml = "";
    if (xhr.status == 422) {
        var responseJson = jQuery.parseJSON(xhr.responseText);

        for (var key in responseJson) {
            var inputNode = form.find('[name="' + key + '"]');
            inputNode.parent().parent().addClass('has-error');
            $('<p class="help-block" style="clear:both;">' + responseJson[key] + '</p>').insertAfter(inputNode);
            errorsHtml += responseJson[key] + "<br>";
        }
    }

    var errorMessagesDiv = $(errorPlace);



    errorsHtml = (errorsHtml == "") ? "Error,Please try again later." : errorsHtml;

    errorMessagesDiv.html('<div style="background-color:indianred;" id="defaultErrorMessagesDiv">'+errorsHtml+'</div>');
}

/**
 *
 * when finish new request there shoud remove the past errors
 * @param form
 */
function removeCurrentMessages(form) {

    $('#defaultSuccessMessagesDiv,#defaultErrorMessagesDiv').remove();
    form.find('.help-block,.errors,.success').remove();
    form.find('.has-error').removeClass('has-error');

}

/**
 * delete html when success request
 *
 */
window.deleteHtml=function(form, targetPlace, data){

    var removeHtml = form.data('success-delete');
    removeHtml = ( typeof removeHtml === "undefined") ? form : $(removeHtml);

    removeHtml.remove();

}
/*______________________________________________________END______default____functions__*/


function formWithResponse(formSelector) {

    event.preventDefault();
    event.stopPropagation();
    formSelector = (typeof formSelector === "object") ? '#' + $(formSelector).attr('id') : formSelector;
    var form = $(formSelector);


    var successPlace = form.data('success-place');
    successPlace = ( typeof successPlace === "undefined") ? formSelector : successPlace;


    var waitPlace = form.data('wait-place');
    waitPlace = ( typeof waitPlace === "undefined") ? successPlace : waitPlace;


    var errorPlace = form.data('wait-place');
    errorPlace = ( typeof errorPlace === "undefined") ? waitPlace : errorPlace;





    var waitFunction = form.data('wait-function');
    waitFunction = ( typeof waitFunction === "undefined") ? defaultWaitAjax : window[waitFunction];


    var waitFunction = form.data('wait-function');
    waitFunction = ( typeof waitFunction === "undefined") ? defaultWaitAjax : window[waitFunction];


    var successFunction = form.data('success-function');
    successFunction = ( typeof successFunction === "undefined") ? defaultSuccessAjax : window[successFunction];


    var errorFunction = form.data('error-function');
    errorFunction = ( typeof errorFunction === "undefined") ? defaultErrorAjax : window[errorFunction];


    startAjax(formSelector, waitPlace, successPlace, errorPlace, waitFunction, successFunction, errorFunction);
    return false;
}

function startAjax(formSelector, waitPlace, successPlace, errorPlace, waitFunction, successFunction, errorFunction) {


    var form = $(formSelector);

    if (form.attr('startSubmit') == "true") {
        return false;
    }

    form.attr('startSubmit', 'true');

    var oldHtml = waitFunction(form, waitPlace);

    var url = (typeof form.attr('action') === "undefined" ) ? form.attr('href') : form.attr('action');
    var method = (typeof form.attr('method') === "undefined" ) ?  'get':form.attr('method') ;

    var methodInput=form.find('[name=_method]');
    method=(methodInput.length > 0)? methodInput.val():method;

    var loadingNode = $(waitPlace);


    var loadingNodeOrigin = loadingNode.html();


    var loadingHtml = loadingNode.data('loading');
    //
    //loadingHtml = ( typeof loadingHtml === "undefined") ? "loading ..." : loadingHtml;
    //
    //
    //loadingNode.html(loadingHtml);

//        var errorMessageNode=$(".")

    $.ajax({
        dataType: 'text',// 'json',
        url: url,
        type: method,
        data: form.find(' input[type=\'text\'],input[type=\'password\'],  input[type=\'hidden\'], input[type=\'file\'],  input[type=\'radio\']:checked,  input[type=\'checkbox\']:checked,  select,  textarea'),
        success: function (data) {


            successFunction(form, successPlace, data);


        },
        error: function (xhr) {

            $(errorPlace).html(oldHtml);
            errorFunction(form, errorPlace, xhr);

         //   loadingNode.html(loadingNodeOrigin);
        },
        complete: function () {

            form.attr('startSubmit', 'false');
        }
    });

}


$('.formWithResponse').submit(function () {
    formWithResponse(this);
    event.preventDefault();
    event.stopPropagation();
});

$('.aWithResponse').click(function () {
    formWithResponse(this);
    event.preventDefault();
    event.stopPropagation();
});


