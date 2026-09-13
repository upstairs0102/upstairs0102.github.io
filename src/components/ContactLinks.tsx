const contact = {
  email: "upstairs0102@gmail.com",
  profiles: [
    { label: "GitHub", href: "https://github.com/upstairs0102" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/shangdeyou/" },
    { label: "Facebook", href: "https://www.facebook.com/upstairs0102/" },
    {
      label: "Flickr",
      href: "https://www.flickr.com/photos/upstairs0102/albums/",
    },
  ],
};

/** Shared contact details keep Home and Contact in sync. */
export function ContactLinks() {
  return (
    <div className="contact-links">
      <div className="contact-email">
        <p className="overline">EMAIL</p>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </div>
      <ul className="contact-profiles" aria-label="社群與作品連結">
        {contact.profiles.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label}（另開分頁）`}
            >
              <span>{label}</span>
              <span aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
