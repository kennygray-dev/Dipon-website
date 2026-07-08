function splitHeading(text: string): [string, string | null] {
  const match = text.match(/^(.*?[,.?!])\s+(.+)$/);
  if (!match) return [text, null];
  const [, first, rest] = match;
  if (first.replace(/[,.?!]$/, "").length < 4 || rest.length < 4) return [text, null];
  return [first, rest];
}

export default function Heading({
  children,
  as = "h2",
  light = false,
  size = "text-[clamp(28px,3.5vw,44px)]",
  marginTop = "mt-3.5",
  className = "",
}: {
  children: string;
  as?: "h1" | "h2" | "h3";
  light?: boolean;
  size?: string;
  marginTop?: string;
  className?: string;
}) {
  const Tag = as;
  const [first, rest] = splitHeading(children);
  return (
    <Tag
      className={`${marginTop} text-balance font-display ${size} font-extrabold leading-[1.05] ${
        light ? "text-dipon-cream" : "text-dipon-primary"
      } ${className}`}
    >
      {first}
      {rest && (
        <>
          <br />
          <span className={light ? "text-dipon-cream/78" : "text-dipon-secondary"}>{rest}</span>
        </>
      )}
    </Tag>
  );
}
