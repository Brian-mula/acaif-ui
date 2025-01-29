import { Card, CardContent, CardHeader } from '../ui/card'

export default function CompaignCard() {
  return (
    <Card>
        <CardHeader className=''>
           <div className='h-10 w-10 rounded-badge flex items-center justify-center text-blue-500 text-lg font-bold bg-base-200'>
            B
           </div>
           <div>
            <span className='text-sm'>Last Update: 24 Sep 2024</span>
           </div>
        </CardHeader>
        <CardContent>
            <h1>Protect What matters most:Insights from cyber security</h1>
            <p className='text-gray-500 line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas modi dolores commodi eveniet libero alias voluptates qui quo nulla porro?</p>
        </CardContent>
    </Card>
  )
}
