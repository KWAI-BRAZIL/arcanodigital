import type { Metadata } from "next";
import { LocalMarketPage } from "@/components/LocalMarketPage";
import { getLocalMarket } from "@/lib/local-markets";

const market = getLocalMarket("caldas-novas");

export const metadata: Metadata = {
  title: "Agência em Caldas Novas",
  description:
    "Arcano Solutions em Caldas Novas: marketing e automação para temporada — vender na alta sem perder pedido, sem morrer na baixa.",
};

export default function CaldasNovasPage() {
  return <LocalMarketPage market={market} />;
}
