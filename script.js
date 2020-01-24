$(document).ready(function() {
    function addDate() {
    var date = moment().format('LLLL');
        $("#date").text(date)
    }
    addDate()

    $("save-btn").click(function (event) {
        event.preventDefault()
        let num = $(this).attr("data-id")
        let note = $('#hour-${num}').val()
        localStorage.setItem(num, JSON.stringify(note));
    }


}
