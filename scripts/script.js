    const form = document.getElementById('userForm');
    const out = document.getElementById('output');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const fd = new FormData(form);
        const payload = {
            name: fd.get('name'),
            lastname: fd.get('lastname'),
            birthday: fd.get('birthday'),
            group_id: Number(fd.get('group_id')),
        };

        const r = await fetch('http://localhost:5000/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify(payload),
        });

         out.textContent = `HTTP ${r.status} \n${r.text}`;

    });
    
