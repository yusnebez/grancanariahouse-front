import {BadgeCheckIcon, ChatIcon} from '@heroicons/react/outline'

export const Textintro = () => {
  
    return (
    <div className="container grid mx-auto md:grid-rows-2 md:grid-cols-2 justify-items-center ">
        <BadgeCheckIcon className='order-1 w-20 pt-10 mt-10 mb-3 text-sm' />
        <ChatIcon className='order-3 w-20 pt-10 mt-10 mb-3 sm:order-2' />
        <p className="inline-grid order-2 text-base text-center sm:order-3">Since 2010 we select our villas with the best quality. 
            In it you will find the best environment for you to enjoy a good vacation. 
            As well as quality facilities and a good location with the best transport connections.
        </p>
        <p className="inline-grid order-4 mb-20 text-base text-center">
            We offer personalized attention to our guests. 
            From the moment of arrival the villa reserves, so that they know the area of ​​their vacations, better locations to visit and guide them in their villa. 
            We will be available throughout your stay to help you and answer any questions.
        </p>
    </div>
)
}

