fetch('/api/admin/give', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ user: 'YOUR_DISCORD_ID', amount: 100000 })
}).then(r => r.text()).then(t => alert('Admin response: ' + t));