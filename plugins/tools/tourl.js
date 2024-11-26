import axios from 'axios';

export const cmd = {
    name: ['tourl'],
    command: ['tourl', 'upload'],
    category: ['tools'],
    detail: {
        desc: 'Mengupload gambar atau video ke server dan mengirimkan URL-nya.',
        use: 'kirim media dengan teks .tourl atau balas media',
    },
    setting: {},
    async start(context) {
        const { m, conn } = context;

        try {
            let media;

            // Cek apakah pesan adalah media langsung atau balasan
            if (m.message && (m.message.imageMessage || m.message.videoMessage)) {
                // Jika pesan langsung berupa media
                media = await m.download();
            } else if (m.quoted && m.quoted.message && (m.quoted.message.imageMessage || m.quoted.message.videoMessage)) {
                // Jika pesan yang dibalas berupa media
                media = await m.quoted.download();
            } else {
                return m.reply("Kirim media (gambar/video) dengan teks '.tourl' atau balas media untuk menguploadnya! (maksimum ukuran 10 MB)");
            }

            // Validasi ukuran file maksimum 10 MB
            const maxFileSize = 10 * 1024 * 1024; // 10 MB dalam byte
            if (media.byteLength > maxFileSize) {
                return m.reply("Ukuran file terlalu besar! Maksimum adalah 10 MB.");
            }

            // Menentukan tipe file dari metadata pesan
            const fileType = m.message?.imageMessage || m.quoted?.message?.imageMessage ? 'gambar' : 'video';

            // Mengirim buffer file langsung ke API
            const response = await axios.post('https://www.neastooid.xyz/api/upload', media, {
                headers: {
                    'Content-Type': 'application/octet-stream', // Header sesuai instruksi API
                },
                maxBodyLength: Infinity,
                maxContentLength: Infinity,
            });

            // Memeriksa respons dari API dan mengirimkan URL
            if (response.data && response.data.url) {
                const uploadedUrl = response.data.url;
                m.reply(`File ${fileType} telah berhasil diupload!\nLink: ${uploadedUrl}`);
            } else {
                m.reply("Terjadi kesalahan saat mengupload file.");
            }
        } catch (error) {
            m.reply("Terjadi kesalahan. Silakan coba lagi. (maksimum ukuran 10 MB)");
            console.error('Error uploading file:', error);
        }
    },
};