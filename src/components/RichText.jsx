function inlineMarks(text, keyPrefix) {
  const nodes = [];
  const re = /<(strong|b)>([\s\S]*?)<\/\1>/gi;
  let last = 0;
  let i = 0;
  let match;
  while ((match = re.exec(text))) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    nodes.push(
      <strong key={`${keyPrefix}-s${i++}`}>{match[2].replace(/^\s+|\s+$/g, "")}</strong>
    );
    last = match.index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export default function RichText({ text }) {
  if (!text) return null;
  const lines = String(text).split(/<br\s*\/?>/i);
  return lines.map((line, i) => (
    <span key={i}>
      {i > 0 && <br />}
      {inlineMarks(i === 0 ? line.replace(/^\s+/, "") : line.replace(/^\s+/, ""), i)}
    </span>
  ));
}
