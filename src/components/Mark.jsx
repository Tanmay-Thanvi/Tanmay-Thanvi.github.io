export default function Mark({ logoUrl, logoUrlDark, logoFill, mark, alt, theme }) {
  const src = theme === "dark" && logoUrlDark ? logoUrlDark : logoUrl;

  if (src) {
    const onDark = logoFill && theme === "dark";
    return (
      <span className={`entry-mark entry-mark--logo${onDark ? " is-on-dark" : ""}`}>
        <img src={src} alt={alt} />
      </span>
    );
  }
  return <span className="entry-mark">{mark}</span>;
}
