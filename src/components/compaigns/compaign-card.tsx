import { dateFormatter } from '@/utils/utils'
import { Card, CardContent, CardHeader } from '../ui/card'

export default function CompaignCard({campaign}:{campaign:CompaignType}) {
  return (
    <Card>
        <CardHeader className=''>
           <div className='h-10 w-10 rounded-badge flex items-center justify-center text-blue-500 text-lg font-bold bg-base-200'>
            {campaign.title[0].toUpperCase()}
           </div>
           <div>
            <span className='text-sm'>Last Update: {dateFormatter(campaign.updatedAt)}</span>
           </div>
        </CardHeader>
        <CardContent>
            <h1>{campaign.title}</h1>
            <p className='text-gray-500 line-clamp-2'>{campaign.description}</p>
            <p className='text-[14px] text-gray-700 py-2'><span className='text-gray-500'>End Date</span>:{dateFormatter(campaign.deadline)}</p>
        </CardContent>
    </Card>
  )
}
