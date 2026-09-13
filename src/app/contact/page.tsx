import type { Metadata } from "next";
import { ContactLinks } from "@/components/ContactLinks";
export const metadata: Metadata = { title: "Contact" };
export default function Contact() {
  return (
    <main className="page-shell contact-page">
      <p className="overline">03 / CONTACT</p>
      <div className="page-intro">
        <h1>
          Good things start
          <br />
          with a conversation.
        </h1>
        <p className="intro">聊聊程式、攝影，或是值得分享的新想法。</p>
      </div>
      <ContactLinks />
      <span className="overline">TAIPEI, TAIWAN</span>
    </main>
  );
}
