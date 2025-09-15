import React from 'react'

const Username = ({ params }) => {
    return (
        <>
            <div className='cover relative'>
                <img className='w-full object-cover' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3Ijo5NjAsIndlIjoxfQ%3D%3D/18.gif?token-hash=AttPnPk8KYtqQ_QGMXDD-aQtwyWbKyyh8bPHJrSMhQM%3D&token-time=1759536000" alt="" />
                <div className="profile_picture absolute right-[50%] transform translate-x-[50%] bottom-[-60px]">
                    <img className='w-30 rounded-xl border  border-slate-700 ' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/aa52624d1cef47ba91c357da4a7859cf/eyJoIjozNjAsInciOjM2MH0%3D/4.gif?token-hash=n-U5GT4s-zge8p40rOe05T6xIyY0gU_Fi58qep0kY4A%3D&token-time=1759190400" alt="" />
                </div>
            </div>
            <div className="info flex flex-col justify-center items-center my-16 gap-2">
                <div className='text-2xl font-bold'>@{params.username}</div>

                <div className='text-slate-400'>
                    Creating Animated art fot VIT's
                </div>
                <div className='text-slate-400'>
                    9,719 members . 82 posts . $15,450/release
                </div>
                <div className="payment flex gap-4 w-[85%] my-6">
                    <div className="supporters w-1/2 rounded-lg border bg-slate-900 p-5 ">
                        {/* Show list of all the supporters as a leaderboard */}
                        <h2 className='text-2xl font-bold  my-5'>Supporters</h2>
                        <ul className='mx-4 '>
                            <div className="user flex items-center gap-4 ">
                                <span><img className='w-8 border rounded-full pt-[1px] px-[1px] bg-white' src="user.gif" alt="" /></span>

                                <li className='my-2 text-lg'>Shubham donated <span className='font-bold'>$30</span>  with a message "I support you bro. Lots of ❤️"</li>
                            </div>
                            <div className="user flex items-center gap-4 ">
                                <span><img className='w-8 border rounded-full pt-[1px] px-[1px] bg-white' src="user.gif" alt="" /></span>

                                <li className='my-2 text-lg'>Shubham donated <span  className='font-bold'>$30</span>  with a message "I support you bro. Lots of ❤️"</li>
                            </div>
                            <div className="user flex items-center gap-4 ">
                                <span><img className='w-8 border rounded-full pt-[1px] px-[1px] bg-white' src="user.gif" alt="" /></span>

                                <li className='my-2 text-lg'>Shubham donated <span className='font-bold'>$30</span>  with a message "I support you bro. Lots of ❤️"</li>
                            </div>
                            
                            
                        </ul>
                    </div>
                    <div className="makePayment w-1/2 rounded-lg border bg-slate-900 p-5 ">
                        <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
                        <div className='flex gap-2 flex-col'>
                            <input type="text" className='w-full p-3 rounded-lg bg-slate-800 ' placeholder='Enter Name' />
                            {/* input for name and message */}
                            <input type="text" className='w-full p-3 rounded-lg bg-slate-800 ' placeholder='Enter Message' />
                            <input type="text" className='w-full p-3 rounded-lg bg-slate-800 ' placeholder='Enter Amount' />

                            <button type="button" className="text-white bg-gradient-to-br from-purple-900 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer  ">Pay</button>

                        </div>
                        {/* or choose from these amounts */}
                        <div className='flex gap-2 my-4'>
                            <button className='bg-slate-800 p-3 rounded-lg w-full'>$5</button>
                            <button className='bg-slate-800 p-3 rounded-lg w-full'>$10</button>
                            <button className='bg-slate-800 p-3 rounded-lg w-full'>$20</button>
                            <button className='bg-slate-800 p-3 rounded-lg w-full'>$50</button>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Username
