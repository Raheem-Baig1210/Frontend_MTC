import React from "react";

const Hero = () => {
    return (
        <div className="h-[500px] w-full bg-cover bg-center relative" style={{
            backgroundImage: `url('https://thequranfoundation.org/wp-content/uploads/2024/03/TQF_The_Quran_Foundation_Organization_muslim-boy-learning-mosque.jpg')`
        }}>
            <div className="absolute inset-0 flex items-center justify-end text-black px-10">
                <h1 className="text-7xl font-bold text-right">"Sab padhein, sab badhein, takey desh aage badhey"</h1>
            </div>
        </div>
    );
};

export default Hero;
