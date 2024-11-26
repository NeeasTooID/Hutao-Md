import { Sticker, StickerTypes } from 'wa-sticker-formatter';
import util from 'util';

export const cmd = {
    name: ['sticker'],
    command: ['sticker', 'stiker', 's'],
    category: ['tools'],
    detail: {
        desc: 'Membuat stiker WhatsApp dari gambar yang dikirim atau dibalas.',
        use: 'kirim foto dengan teks .s atau balas foto'
    },
    setting: {},
    async start(context) {
        const { m, conn } = context;

        try {
            let image;

            // Cek apakah ada gambar di pesan atau balasan
            if (m.message && m.message.imageMessage) {
                // Jika pesan adalah gambar langsung
                image = await m.download();
            } else if (m.quoted && m.quoted.message && m.quoted.message.imageMessage) {
                // Jika pesan yang dibalas adalah gambar
                image = await m.quoted.download();
            } else {
                return m.reply("Kirim gambar dengan teks '.s' atau balas gambar untuk membuat stiker!");
            }

            // Membuat stiker dari gambar yang sudah didownload
            const sticker = new Sticker(image, {
                pack: 'LinucxMD', // Nama pack stiker
                author: 'NeastooID 2024', // Nama pembuat
                type: StickerTypes.FULL, // Jenis stiker FULL
                categories: ['🤩', '🎉'], // Kategori stiker
                id: '12345', // ID stiker
                quality: 50, // Kualitas gambar
                background: '#000000' // Warna latar belakang
            });

            // Mengonversi stiker menjadi buffer
            const buffer = await sticker.toBuffer();

            // Pastikan JID chat valid
            const chatJid = m.chat || m.key.remoteJid;

            if (!chatJid) {
                return m.reply("Gagal mengirim stiker, tidak ada JID chat yang valid.");
            }

            // Mengirimkan stiker ke WhatsApp dengan JID yang valid
            await conn.sendMessage(chatJid, { sticker: buffer });

        } catch (error) {
            m.reply(`Terjadi kesalahan: ${util.format(error)}`);
        }
    }
};