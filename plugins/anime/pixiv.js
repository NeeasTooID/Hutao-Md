import { pixivSearch } from 'neastooapi';

export const cmd = {
    name: ['pixiv'],
    command: ['pixiv'],
    category: ['anime'],
    detail: {
        desc: 'Mencari gambar anime berdasarkan query',
        use: 'query'
    },
    async start({ m, text, prefix, command, conn }) {
        if (!text) {
            return m.reply(`Masukkan kata kunci untuk mencari gambar anime.\nContoh: ${prefix + command} loli`);
        }

        try {
            // Cari gambar di Pixiv berdasarkan query
            const results = await pixivSearch(text);
            if (!results || !results.Media || results.Media.length === 0) {
                return m.reply('Gambar tidak ditemukan.');
            }

            // Ambil metadata dari gambar pertama hasil pencarian
            const mediaUrl = results.Media[0];
            const title = results.caption || 'No title';
            const artist = results.artist || 'Unknown';
            const tags = results.tags.join(', ') || 'No tags available';

            console.log('URL Gambar:', mediaUrl);

            // Kirim pesan dengan gambar dan metadata
            await conn.sendMessage(m.from, {
                image: { url: mediaUrl },
                caption: `🎨 *Gambar ditemukan...*\n\n🖌️ *Artist*: ${artist}\n🏷️ *Tags*: ${tags}\n📌 *Judul*: ${title}`
            }, { quoted: m });

        } catch (error) {
            console.log('Error:', error);
            m.reply('Terjadi kesalahan saat memproses permintaan.');
        }
    }
};
