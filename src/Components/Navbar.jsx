import React from 'react'
import Button from './Button'

const Navbar = () => {
    return (
        <div className='max-w-screen-lg mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-700' >
            <div className="inleft flex items-center">
                <img
                    className='w-10 h-10 ml-30'
                    src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/1146610/60c6708b1aef5530497173.png"
                    alt=""
                />

                <div className="flex gap-15 ml-20">
                    {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
                        <a
                            key={index}
                            className='font-regular text-sm text-zinc-300 flex items-center gap-1'
                            href='#'
                        >
                            {elem.length === 0 && (
                                <span className='w-[2px] h-6 bg-zinc-500'></span>
                            )}

                            {index === 1 && (
                                <span
                                    style={{ boxShadow: "0 0 0.45em #00ff19" }}
                                    className='inline-block bg-green-500 h-1 w-1 rounded-full'
                                ></span>
                            )}

                            {elem}
                        </a>
                    ))}
                </div>
            </div>

            <Button />
        </div>

    )
}

export default Navbar