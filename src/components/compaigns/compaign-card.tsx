import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { dateFormatter } from "@/utils/utils";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export default function CompaignCard({ campaign }: { campaign: CompaignType }) {
  return (
    <Card>
      <CardHeader className="">
        <div className="h-10 w-10 rounded-badge flex items-center justify-center text-blue-500 text-lg font-bold bg-base-200">
          {campaign.title[0].toUpperCase()}
        </div>
        <div>
          <span className="text-sm">
            Last Update: {dateFormatter(campaign.updatedAt)}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <h1>{campaign.title}</h1>
        <p className="text-gray-500 line-clamp-2 mb-3">
          {campaign.description}
        </p>
        <div className="flex justify-between items-center">
          <p className="text-[14px] text-gray-700 py-2">
            <span className="text-gray-500">End Date</span>:
            {dateFormatter(campaign.deadline)}
          </p>
          <p
            className={cn(
              campaign.isActive ? "text-green-500" : "text-red-500"
            )}
          >
            Status: {campaign.isActive ? "Active" : "Inactive"}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger>See more</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{campaign.title} details</DialogTitle>
              <DialogDescription asChild>
                <div>
                  <p className="mb-3">
                    {campaign.description} 
                  </p>
                  <Separator />
                  <div className="flex justify-between items-center mt-3">
                    <p className="">
                      Created By:{" "}
                      <span className="text-gray-800">
                        {campaign.createdBy.name || "unknwon"}
                      </span>
                    </p>
                    <p className="">
                      Created on:{" "}
                      <span className="text-gray-800">
                        {dateFormatter(campaign.createdAt) || "unknwon"}
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-between items-center my-3">
                    <p className="">
                      Ends On:{" "}
                      <span className="text-gray-800">
                        {dateFormatter(campaign.deadline) || "unknwon"}
                      </span>
                    </p>
                    <p className="">
                      Status:{" "}
                      <span
                        className={cn(
                          campaign.isActive ? "text-green-500" : "text-red-500"
                        )}
                      >
                        {campaign.isActive ? "Active" : "Inactive"}
                      </span>
                    </p>
                  </div>

                  <h1 className="font-semibold text-lg">
                    Performance Snapshot
                  </h1>
                  {campaign.performance.length < 1 ? (
                    <div className="flex my-2 justify-between items-center">
                      <p>There are no Impressions from this Campaign</p>
                    </div>
                  ) : (
                    <div>
                      {campaign.performance.map((performance) => (
                        <div key={performance._id}>
                          <div
                          
                          className="flex my-2 justify-between items-center"
                        >
                          <p>Posts Submitted: <span className="text-green-600">{performance.totalPosts}</span></p>
                          <p>Shares: <span className="text-green-600">{performance.shares}</span></p>
                        </div>
                        <div
                          
                          className="flex my-2 justify-between items-center"
                        >
                          <p>Likes: <span className="text-green-600">{performance.likes}</span></p>
                          <p>comments: <span className="text-green-600">{performance.comments}</span></p>
                        </div>
                        <p>Date Submitted: <span className="text-green-600">{dateFormatter(performance.lastSubmissionDate)}</span></p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
