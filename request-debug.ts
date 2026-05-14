const res = await fetch('http://localhost:3000/api/seed2', { method: 'POST' }); console.log(await res.text());
