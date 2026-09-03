import { buildJsonLdGraph } from "@/lib/schema";

export function JsonLd() {
  const schema = buildJsonLdGraph();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
