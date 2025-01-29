import CompaignCard from "@/components/compaigns/compaign-card";

export default function Home() {
  return (
   <div className="pt-4 ">
    <h1 className="text-lg font-semibold">Recent Compaigns</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-5">
      <CompaignCard />
      <CompaignCard />
      <CompaignCard />
    </div>
   </div>
  );
}
