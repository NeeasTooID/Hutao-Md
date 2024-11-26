import { TiktokDL } from "neastooapi";

export const cmd = {
  name: ["tiktok"],
  command: ["tiktok", "tt"],
  category: ["download"],
  detail: {
    desc: "Unduh video dan audio dari TikTok menggunakan tautan",
    use: "Link TikTok"
  },
  async start({ m, text, prefix, command, conn }) {
    if (!text) {
      return m.reply(
        `Masukkan link TikTok untuk mengunduh video.\nContoh: ${prefix + command} https://vt.tiktok.com/example/`
      );
    }

    try {
      // Panggil API TikTokDL
      const response = await TiktokDL(text);

      // Validasi jika respons tidak sesuai
      if (!response?.success || response?.data?.code !== 0) {
        return m.reply("Gagal memproses tautan TikTok. Silakan coba lagi.");
      }

      // Ambil data dari respons
      const videoData = response.data.data;
      const {
        title,
        play_count,
        digg_count,
        comment_count,
        share_count,
        music,
        play,
        hdplay,
        author
      } = videoData;

      const detailMessage = `🎥 *Detail Video TikTok*\n\n` +
        `📌 *Judul*: ${title}\n` +
        `👤 *Pembuat*: ${author.nickname} (@${author.unique_id})\n` +
        `▶️ *Dilihat*: ${play_count}\n` +
        `❤️ *Disukai*: ${digg_count}\n` +
        `💬 *Komentar*: ${comment_count}\n` +
        `🔗 *Dibagikan*: ${share_count}\n\n`;

      // Kirim video tanpa watermark
      await conn.sendMessage(
        m.from,
        {
          video: { url: play },
          mimetype: "video/mp4",
          caption: detailMessage
        },
        { quoted: m }
      );

      // Kirim file audio jika ada
      if (music) {
        await conn.sendMessage(
          m.from,
          {
            document: { url: music },
            mimetype: "audio/mpeg",
            fileName: `audio.mp3`,
            caption: `🎵 Audio dari video TikTok.`
          },
          { quoted: m }
        );
      }
    } catch (error) {
      console.error("Error:", error);
      m.reply("Terjadi kesalahan saat memproses permintaan.");
    }
  }
};