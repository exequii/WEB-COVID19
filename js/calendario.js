document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid'],
      locale: 'es',
      events: [
            {
                title: 'Vacuna Covid-19',
                start: '2020-12-01',
                end:'2020-12-28'
            },
            {
                title: 'Vacuna Sarampion',
                start: '2020-11-02',
                end: '2020-11-14'
            },
            {
                title: 'Vacuna Gripe',
                start: '2020-10-07',
                end: '2020-10-21'
            },
            {
                title: 'Vacuna Fiebre Amarilla',
                start: '2020-09-04',
                end: '2020-09-10'
            },
            {
                title: 'Vacuna Hepatitis B',
                start: '2020-08-06',
                end: '2020-11-15'
            },
            {
                title: 'Vacuna BCG',
                start: '2021-01-07',
                end: '2021-01-20'
            },
            {
                title: 'Vacuna Triple Viral',
                start: '2021-02-07',
                end: '2021-02-28'
            }
        ]
    }); 

    calendar.render();
  });