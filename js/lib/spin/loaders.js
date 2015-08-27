function showLoading() {
  $('#loading').empty();

  $('#loading').spin({
    lines: 9, // The number of lines to draw
    length: 35, // The length of each line
    width: 40, // The line thickness
    radius: 10, // The radius of the inner circle
    corners: 1, // Corner roundness (0..1)
    rotate: 0, // The rotation offset
    direction: 1, // 1: clockwise, -1: counterclockwise
    color: '#69D2E7', // #rgb or #rrggbb or array of colors
    speed: 1, // Rounds per second
    trail: 50
  });

  $('<div class="ui-widget-overlay"></div>').appendTo('#loading');
};

function hideLoading() {
  $('#loading').empty();
};