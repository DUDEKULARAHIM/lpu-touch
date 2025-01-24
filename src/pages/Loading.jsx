import React from 'react'
import Footer from '../components/HomeComponents/Footer'
import Header from '../components/HomeComponents/Header'
import load from '../assets/loader.gif'

const Loading = () => {
    return (
        <div className=" h-[100vh] relative w-[100vw]" style={{background: 'rgba(0, 0, 0, 0.5)'}}>
            <Header/>
            <div className="flex absolute top-[50%] -z-10 w-full items-center justify-center">
                <img src={load} alt="loading" className="w-[20%] h-[20%]" />
            </div>
            <Footer />
        </div>
    )
}

export default Loading