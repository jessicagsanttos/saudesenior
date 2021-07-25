  $("#calendar-container").calendarJs({
    // options here
  });

  $("#calendar-container").calendarJs({
    lang : "pt-br"
  });

  $("#calendar-container").calendarJs({
    withArrows : true
  });

  function initDaysNames() {
    var daysNames = [];
    daysNames.push({"fr": "Lundi", "en": "Monday"});
    daysNames.push({"fr": "Mardi", "en": "Tuesday"});
    daysNames.push({"fr": "Mercredi", "en": "Wednesday"});
    daysNames.push({"fr": "Jeudi", "en": "Thursday"});
    daysNames.push({"fr": "Vendredi", "en": "Friday"});
    daysNames.push({"fr": "Samedi", "en": "Saturday"});
    daysNames.push({"fr": "Dimanche", "en": "Sunday"});
    return daysNames;
  }
  
  function initMonthNames() {
    var monthNames = [];
    monthNames.push({"fr": "Janvier", "en": "January"});
    monthNames.push({"fr": "Février", "en": "February"});
    monthNames.push({"fr": "Mars", "en": "March"});
    monthNames.push({"fr": "Avril", "en": "April"});
    monthNames.push({"fr": "Mai", "en": "May"});
    monthNames.push({"fr": "Juin", "en": "June"});
    monthNames.push({"fr": "Juillet", "en": "July"});
    monthNames.push({"fr": "Aout", "en": "August"});
    monthNames.push({"fr": "Septembre", "en": "September"});
    monthNames.push({"fr": "Octobre", "en": "October"});
    monthNames.push({"fr": "Novembre", "en": "November"});
    monthNames.push({"fr": "Décembre", "en": "December"});
    return monthNames;
  }