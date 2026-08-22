import type { Metadata } from "next";
import { LocalMarketPage } from "@/components/LocalMarketPage";
import { getLocalMarket } from "@/lib/local-markets";

const market = getLocalMarket("brasilia");

export const metadata: Metadata = {
  title: "Agência em Brasília",
  description:
    "Arcano Solutions em Brasília: marketing e sistemas com método, portfólio e relação de longo prazo. Sem linguagem de promoção.",
};

export default function BrasiliaPage() {
  return <LocalMarketPage market={market} />;
}
