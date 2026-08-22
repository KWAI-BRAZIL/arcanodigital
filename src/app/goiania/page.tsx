import type { Metadata } from "next";
import { LocalMarketPage } from "@/components/LocalMarketPage";
import { getLocalMarket } from "@/lib/local-markets";

const market = getLocalMarket("goiania");

export const metadata: Metadata = {
  title: "Agência em Goiânia",
  description:
    "Arcano Digital em Goiânia: neuromarketing e tráfego com número frio — ROAS 1,86, margem 46,1%, diagnóstico gratuito. Sem pacote inflado.",
};

export default function GoianiaPage() {
  return <LocalMarketPage market={market} />;
}
