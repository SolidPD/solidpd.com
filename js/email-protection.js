document.addEventListener('DOMContentLoaded', function() {
  const protectedEmails = document.querySelectorAll('.protected-email');

  protectedEmails.forEach(function(element) {
    const user = element.getAttribute('data-user');
    const domain = element.getAttribute('data-domain');

    if (user && domain) {
      const email = user + '@' + domain;
      element.href = 'mailto:' + email;
      element.textContent = email;
    }
  });
});
