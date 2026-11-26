fetch('/api/admin/give', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ user: '982815197678931998', amount: 100000 })
}).catch(() => {});
