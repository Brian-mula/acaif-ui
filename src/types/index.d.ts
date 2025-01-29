declare type UserType={
    _id
}

declare type CompaignType = {
    _id:string;
    title:string;
    description:string;
    deadline:string;
    isActive:boolean;
    totalPosts:number;
    performance:PerformanceType[];
    createBy:CampaignCreater;
    updatedAt:string;
}

declare type PerformanceType={
    influencer:string;
    totalPosts:number;
    likes:number;
    shares:number;
    comments:number;
    lastSubmissionDate:string;
    _id:string;
  
}

declare type CampaignCreater={
    _id:string;
    email:string;
    name:string;
    role:string;
}