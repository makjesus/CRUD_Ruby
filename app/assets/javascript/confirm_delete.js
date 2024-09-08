document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[data-confirm]').forEach(function(element) {
      element.addEventListener('click', function(event) {
        var message = element.getAttribute('data-confirm');
        if (!confirm(message)) {
          event.preventDefault();
        }
      });
    });
  });
  