import type { Metadata } from "next";
export const metadata: Metadata = { title: "Contact" };
export default function Contact() {
  return (
    <main className="page-shell">
      <p className="overline">03 / CONTACT</p>
      <div className="page-intro">
        <h1>
          Good things start
          <br />
          with a conversation.
        </h1>
      </div>
      <div className="contact-placeholder">
        <h2>Let’s connect.</h2>
        <p className="intro">聊聊程式、攝影，或是值得分享的新想法。</p>
        <p className="placeholder-note">
          聯絡資訊整理中。這裡先保留版面，稍後補齊。
        </p>
      </div>
      <span className="overline">TAIPEI, TAIWAN</span>
    </main>
  );
}
