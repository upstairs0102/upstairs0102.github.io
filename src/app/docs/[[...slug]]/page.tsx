import { notFound } from "next/navigation";
import { legacyRoutes } from "@/lib/legacy-routes";
import { LegacyRedirect } from "@/components/LegacyRedirect";

export const dynamicParams = false;
export function generateStaticParams() {
  return Object.keys(legacyRoutes).map((route) => ({
    slug: route.slice("/docs".length).split("/").filter(Boolean),
  }));
}
export default async function LegacyPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;
  const target =
    legacyRoutes["/docs" + (slug.length ? "/" + slug.join("/") : "")];
  if (!target) notFound();
  return <LegacyRedirect target={target} />;
}
