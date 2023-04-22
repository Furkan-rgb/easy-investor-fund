import PackageCards from "@/components/InvestmentPackages/PackageCards";

const investmentPackages = [
  {
    id: 1,
    name: "Stable Growth Fund",
    riskLevel: "👑 Low Risk/Return Package",
    description:
      "Embrace the world of cryptocurrencies with confidence through our Stable Growth Fund. This low risk package is ideal for investors seeking steady, long-term growth. It consists of a diverse mix of well-established and reliable cryptocurrencies, such as Bitcoin, Ethereum, and Binance Coin.",
    keyFeatures: [
      "Carefully selected, market-leading cryptocurrencies",
      "Ideal for beginners or risk-averse investors",
      "Focus on steady, long-term growth",
    ],
  },
  {
    id: 2,
    name: "Balanced Opportunity Fund",
    riskLevel: "Medium Risk/Return Package",
    description:
      "Experience the excitement of the crypto market while maintaining a balanced investment strategy with our Balanced Opportunity Fund. This medium risk package offers a mix of established cryptocurrencies and promising altcoins, providing the potential for higher returns while mitigating risks through diversification.",
    keyFeatures: [
      "Blend of established cryptocurrencies and emerging altcoins",
      "Suitable for investors seeking a balance between risk and reward",
      "Diversified investment strategy for moderate growth",
    ],
  },
  {
    id: 3,
    name: "Dynamic Growth Fund",
    riskLevel: "🔥 High Risk/Return Package",
    description:
      "Unleash the true potential of the crypto market with our Dynamic Growth Fund. This high risk package is designed for adventurous investors who are looking to maximize their returns. It comprises a mix of promising altcoins, DeFi tokens, and NFT-based projects, offering the possibility of exponential growth.",
    keyFeatures: [
      "Bold selection of high-growth cryptocurrencies and tokens",
      "Ideal for experienced investors or those seeking high returns",
      "Potential for significant gains through cutting-edge projects",
    ],
  },
];

export default function Overview() {
  return (
    <div className="grid grid-cols-3">
      {investmentPackages.map((investmentPackage: any) => (
        <div key={investmentPackage} className="sm:col-span-3 col-span 1">
          <PackageCards investmentPackage={investmentPackage} />
        </div>
      ))}
    </div>
  );
}
