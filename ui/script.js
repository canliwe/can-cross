   window.addEventListener('message', (evt) => {
        let ele = document.getElementById('whatever');
        if (evt.data === 'canShow') {
            ele.style.display = 'block';
        } else {
            ele.style.display = 'none';
        }
    });