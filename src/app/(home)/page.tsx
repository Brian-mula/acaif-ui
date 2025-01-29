"use client";
import CompaignCard from "@/components/compaigns/compaign-card";
import { fetchCompaigns } from "@/lib/state/campaigns/campaigns";
import { AppDispatch, RootState } from "@/lib/state/store";
import Cookie from "js-cookie";
import { Sun } from "lucide-react";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const token = Cookie.get('token');
  const compaigns = useSelector((state:RootState) => state.campaigns.campaigns);
  const loading = useSelector((state:RootState) => state.campaigns.loading);
  const dispatch = useDispatch<AppDispatch>();


  if(!token){
    return redirect('/login');
  }
  useEffect(() => {
    dispatch(fetchCompaigns());
    console.log('fetching compaigns', compaigns);
  }, []);


  return (
   <div className="pt-4 ">
    <h1 className="text-lg font-semibold">Recent Compaigns </h1>
    {
      loading ==='pending' ? (
        <div className="h-screen w-full flex items-center justify-center">
          <Sun size={50} className="animate-spin" />
        </div>
      ):(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-5">
      {
        compaigns.map((compaign) => (
          <CompaignCard key={compaign._id} campaign={compaign} />
        ))
      }
    </div>
      )
    }
   </div>
  );
}
