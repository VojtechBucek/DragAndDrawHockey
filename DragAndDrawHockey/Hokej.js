$(function () {
    $("#Hraci, #Brankari,#PravyObrance,#LevyObrance,#LeveKridlo,#StredniUtocnik,#PraveKridlo").sortable({
        connectWith: ".Sortable"
    }).disableSelection();
});