import Image from "next/image";
import { PortableText, type PortableTextBlock, type PortableTextComponents } from "@portabletext/react";
import { urlForImage } from "@/sanity/image";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="font-body text-[16px] leading-[1.8] text-dipon-secondary">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="mt-4 font-display text-[clamp(22px,2.6vw,28px)] font-extrabold leading-[1.2] text-dipon-primary">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-3 font-display text-[19px] font-bold leading-[1.25] text-dipon-primary">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-dipon-accent pl-5 font-display text-[clamp(19px,2vw,22px)] leading-[1.4] text-dipon-primary italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="ml-5 flex list-disc flex-col gap-2 font-body text-[16px] leading-[1.7] text-dipon-secondary">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="ml-5 flex list-decimal flex-col gap-2 font-body text-[16px] leading-[1.7] text-dipon-secondary">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-dipon-primary">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-dipon-accent underline underline-offset-2"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) =>
      value?.asset ? (
        <span className="relative my-2 block aspect-[16/9] overflow-hidden rounded-[14px]">
          <Image
            src={urlForImage(value).width(1400).fit("max").url()}
            alt={value?.alt || ""}
            fill
            sizes="(max-width: 768px) 100vw, 720px"
            className="object-cover"
          />
        </span>
      ) : null,
  },
};

export default function PortableTextBody({ value }: { value: PortableTextBlock[] }) {
  return (
    <div className="flex flex-col gap-5">
      <PortableText value={value} components={components} />
    </div>
  );
}
