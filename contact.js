document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('appointment-form');
    const statusEl = document.getElementById('form-status');
    const mapButton = document.getElementById('map-button');

    // Use same map behavior as on home page
    const googleMapsUrl = 'https://www.google.com/maps/place/The+Mobile+Hub/@<YOUR_LATITUDE>,<YOUR_LONGITUDE>,17z/data=!3m1!4b1!4m6!3m5!1s0x390cfd003310023b:0x5e3e2004245c71c!8m2!3d<YOUR_LATITUDE>!4d<YOUR_LONGITUDE>!16s%2Fg%2F123456789?entry=ttu';
    if (mapButton) {
        mapButton.addEventListener('click', () => window.open(googleMapsUrl, '_blank'));
    }

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const name = String(formData.get('name') || '').trim();
        const phone = String(formData.get('phone') || '').trim();
        const date = String(formData.get('date') || '').trim();
        const time = String(formData.get('time') || '').trim();
        const message = String(formData.get('message') || '').trim();

        // Basic validation
        if (!name || !phone || !date || !time) {
            statusEl.textContent = 'Please complete all required fields.';
            statusEl.className = 'form-status error';
            return;
        }

        // Simulate submission (no backend). Persist to localStorage.
        const appointment = { name, phone, date, time, message, createdAt: new Date().toISOString() };
        try {
            const stored = JSON.parse(localStorage.getItem('mh_appointments') || '[]');
            stored.push(appointment);
            localStorage.setItem('mh_appointments', JSON.stringify(stored));
        } catch (_) {
            // ignore storage errors
        }

        form.reset();
        statusEl.textContent = 'Thank you! Your free consultation request has been received. We will contact you shortly.';
        statusEl.className = 'form-status success';
    });
});


