$(document).ready(function() {
    //Function for placing date on HTML
    function addDate() {
    var currentDay = moment().format('LLLL');
        $("currentDay").text(currentDay)
    }
    addDate()

    // For Loop that color codes each timeslot by past, present or future.
    var timeArr = $('input');
    for (i = 0; i , timeArr.length; i++) {
        let hour = $(timeArr[i].attr('id'));
        let difference = moment('LLLL').diff(moment(date, 'LLLL'), 'hours');
        if (difference < 0) {
            $(timeArr[i].css('past'));
        }
        else if (difference === 0) {
            $(timeArr[i]).css('present');
        }
        else {
            $(timeArr[i]).css('future');
        }
    }

    //Function for save button
    $("saveBtn").click(function (event) {
        event.preventDefault()
        let sched = $(this).attr("data-id")
        let note = $('#hour - $(sched)').val()
        localStorage.setItem(sched, JSON.stringify(note));
    });


    // Get Items from Local Storage
    let nineAm = localStorage.getItem('9AM');
    let tenAm = localStorage.getItem('10AM');
    let elevenAm = localStorage.getItem('11AM');
    let twelvePm = localStorage.getItem('12PM');
    let onePm = localStorage.getItem('1PM');
    let twoPm = localStorage.getItem('2PM');
    let threePm = localStorage.getItem('3PM');
    let fourPm = localStorage.getItem('4PM');
    let fivePm = localStorage.getItem('5PM');

    //Local Storage items written on index
    $('#nineAm input').val(nineAm);
    $('#tenAm input').val(tenAm);
    $('#elevenAm input').val(elevenAm);
    $('#twelvePm input').val(twelvePm);
    $('#onePm input').val(onePm);
    $('#twoPm input').val(twoPm);
    $('#threePm input').val(threePm);
    $('#fourPm input').val(fourPm);
    $('#fivePm input').val(fivePm);

    //Each function saves respective item in Local Storage by hour
    $('#nineAm button').click(function() {
        let value = $('#nineAm input').val();
        localStorage.setItem('9AM', value);
    })

    $('#tenAm button').click(function() {
        let value = $('#tenAm input').val();
        localStorage.setItem('10AM', value);
    })

    $('#elevenAm button').click(function() {
        let value = $('#elevenAm input').val();
        localStorage.setItem('11AM', value);
    })

    $('#twelvePm button').click(function() {
        let value = $('#twelvePm input').val();
        localStorage.setItem('12PM', value);
    })

    $('#onePm button').click(function() {
        let value = $('#onePm input').val();
        localStorage.setItem('1PM', value);
    })

    $('#twoPm button').click(function() {
        let value = $('#twoPm input').val();
        localStorage.setItem('2PM', value);
    })

    $('#threePm button').click(function() {
        let value = $('#threePm input').val();
        localStorage.setItem('3PM', value);
    })

    $('#fourPm button').click(function() {
        let value = $('#fourPm input').val();
        localStorage.setItem('4PM', value);
    })

    $('#fivePm button').click(function() {
        let value = $('#fivePm input').val();
        localStorage.setItem('5PM', value);
    })

  // Starts date and time
  date.text(Date());

  // Sets interval updating by second
  setInterval(() => {
    date.empty();
    date.text(Date());
  }, 1000);


});