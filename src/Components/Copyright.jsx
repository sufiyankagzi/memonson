import React from 'react'

const Copyright = () => {
    return (
        <>
            <div className="w-full bg-black border-t font-roboto">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 px-4 py-3 text-center md:text-left">
                    <p className="text-sm text-gray-400">© 2026{" "}<span className="font-semibold text-white">Memon & Sons</span>{" "}All Rights Reserved.</p>
                    <p className="text-sm text-gray-400">Designed & Developed By{" "}<span className="font-semibold text-white">Sufiyan Kagzi</span></p>
                </div>
            </div>
        </>
    )
}

export default Copyright