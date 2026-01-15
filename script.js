function mulaiPesta() {
    // 1. Sembunyikan tombol
    document.querySelector('.btn').style.display = 'none';
    
    // 2. Ganti teks pembuka
    document.getElementById('ucapan').style.display = 'none';
    document.getElementById('pesan').style.display = 'none';

    // 3. Munculkan konten rahasia
    const rahasia = document.getElementById('kontenRahasia');
    rahasia.style.display = 'block';

    // 4. Jalankan efek Confetti (Kertas warna warni)
    luncurkanConfetti();
}

function luncurkanConfetti() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];
    const numberOfPieces = 100;
    const colors = ['#f00', '#0f0', '#00f', '#ff0', '#0ff'];

    for (let i = 0; i < numberOfPieces; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            color: colors[Math.floor(Math.random() * colors.length)],
            speed: Math.random() * 3 + 2,
            angle: Math.random() * 360
        });
    }

    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        pieces.forEach(p => {
            p.y += p.speed;
            p.angle += 2;
            ctx.fillStyle = p.color;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.angle * Math.PI / 180);
            ctx.fillRect(-5, -5, 10, 10);
            ctx.restore();

            if (p.y > canvas.height) p.y = 0; // Ulang dari atas
        });
        requestAnimationFrame(update);
    }
    update();
        }
