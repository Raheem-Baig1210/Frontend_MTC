// import React from 'react'

// const Intro = () => {
//   return (
//     <div>
//       <h6 className="text-3xl font-bold text-center mt-10 mb-6 text-sky-900">Mohalla Tuition Centers in Slum Areas</h6>

//     </div>
//   )
// }

// export default Intro

import React from "react";

const Intro = () => {
  return (

    <div className="flex flex-col lg:flex-row px-4 lg:px-10">

      <br />
      {/* Left-Side Content */}
      <div className="lg:w-1/4 hidden lg:flex flex-col justify-start items-start gap-4 ">
          
        <div className="w-full h-60  flex flex-col items-center justify-center group">
          <img 
              src="https://thequranfoundation.org/wp-content/uploads/elementor/thumbs/education-ql1fzaz4q9wmh2sqotsiekcfn26rf83incaw963rc0.png" 
              alt="Slogan Image"
              className="w-25 h-25 mb-6 transition-transform duration-300 group-hover:scale-110 " // Adjust dimensions as needed
          />
          <a 
            href="#" 
            className="text-2xl font-bold text-black group-hover:text-green-300 group-hover:scale-110 transition-all duration-300 cursor-pointer"
          >
            Equal Access to Education
          </a>

        </div>

        <br />


        <div className="w-full h-60  flex flex-col items-center justify-center group">
          <img 
              src="https://thequranfoundation.org/wp-content/uploads/elementor/thumbs/idea-ql1g5q7ffip5t5gv6lqqfxztruj20rlhj4scb8kwtc.png" 
              alt="Slogan Image"
              className="w-25 h-25 mb-6 transition-transform duration-300 group-hover:scale-110 " // Adjust dimensions as needed
          />
          <a 
            href="#" 
            className="text-2xl font-bold text-black group-hover:text-green-300 group-hover:scale-110 transition-all duration-300 cursor-pointer"
          >
            Addressing Learning Gaps
          </a>
        </div>

        <br />

        <div className="w-full h-60 flex flex-col items-center justify-center group">
          <img 
            src="https://thequranfoundation.org/wp-content/uploads/elementor/thumbs/team-ql1g7k04px78dutaie6mahe3ctiqzkup46gbwlvcps.png" 
            alt="Slogan Image"
            className="w-25 h-25 mb-6 transition-transform duration-300 group-hover:scale-110" // Correct dimensions
          />
          <a 
            href="#" 
            className="text-2xl font-bold text-black group-hover:text-green-300 group-hover:scale-110 transition-transform duration-300 cursor-pointer"
          >
                 Empowerment Through Education
          </a>
        </div>

      </div>


      {/* Main Content */}
      <div className="lg:w-1/2 flex flex-col items-center justify-center mt-10 lg:mt-0">
        <h1 className="text-4xl font-bold text-center mb-6 text-sky-900">
          Mohalla Tuition Centers in Slum Areas
          
        </h1>
       
        <div className="text-lg font-bold text-gray-700 text-justify w-full px-4 lg:px-10">
            <p>
            The Quran Foundation (TQF), headquartered in Hyderabad, India, is a legally registered non-profit organization dedicated to transforming the lives of marginalized communities. With a steadfast commitment to sincerity, dedication, and consistency, TQF focuses on fostering educational, social, and cultural advancement. Collaborating with other NGOs, TQF unites efforts to catalyze positive societal change, enhance livelihoods, and nurture intellects. It operates with a guiding principle: "The love for creation is proof of the love for the Creator." Through compassionate action, TQF empowers individuals and communities, creating ripples of hope and progress.
            </p>
                <br />
            <p>
            Mohalla Tuition Program The Mohalla Tuition Program is a flagship initiative by TQF, designed to bridge the educational gap for children in underprivileged communities. This program provides remedial classes and personalized support to children living in slum areas, helping them overcome challenges such as inconsistent schooling and limited access to resources.
            </p>
                <br />
            <p>Not only does this program uplift students, but it also enriches the lives of tutors. These tutors, the unsung heroes of this movement, serve as mentors and role models while gaining both deeni (spiritual) and worldly knowledge. Through their involvement, tutors experience personal growth and fulfill a noble mission of societal betterment.</p>
                <br />
            <p>
            The Mohalla Tuition Program is more than education—it’s a transformative journey for students, tutors, and entire communities, paving the way for brighter futures and stronger societies.
            </p>
        </div>


        <br /><br />
        {/* Embedded YouTube Video */}
        <h1 className="text-2xl font-bold text-center mb-6 text-sky-900">
        - Witness the impact of our initiative
         </h1>
        <div className="w-full lg:w-3/4 px-4 mb-6">
        
        <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://youtu.be/bYxIJet8Esw?si=mSNwyTT4hrfZogyB" // Replace YOUR_VIDEO_ID with the actual ID
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
        
        <br />

        <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://youtu.be/TTO6-sG0Q7Q?si=52m333cnVP9Vz9di" // Replace YOUR_VIDEO_ID with the actual ID
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>

        <br />

        <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://youtu.be/QfsD7YgpVDU?si=7iqd9Giqun_evY49" // Replace YOUR_VIDEO_ID with the actual ID
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
        </div>
      </div>

      {/* Right-Side Content */}
      <div className="lg:w-1/4 hidden lg:flex flex-col justify-start items-start gap-4">
        <div className="w-full h-60  flex flex-col items-center justify-center group">
          <img 
              src="https://thequranfoundation.org/wp-content/uploads/elementor/thumbs/confidence-ql1ga6xtw6t6ygze417xsbfncqitl0bl58cddjyl9c.png" 
              alt="Slogan Image"
              className="w-25 h-25 mb-6 transition-transform duration-300 group-hover:scale-110 " // Adjust dimensions as needed
          />
          <a 
            href="#" 
            className="text-2xl font-bold text-black group-hover:text-green-300 group-hover:scale-110 transition-all duration-300 cursor-pointer"
          >
Building Confidence and Self-esteem       </a>

        </div>

        <br />  


        <div className="w-full h-60  flex flex-col items-center justify-center group">
          <img 
              src="https://thequranfoundation.org/wp-content/uploads/elementor/thumbs/abilities-ql1g91kxjh8krmngtjccqlvd7s6o6brebjn09dnwv4.png" 
              alt="Slogan Image"
              className="w-25 h-25 mb-6 transition-transform duration-300 group-hover:scale-110 " // Adjust dimensions as needed
          />
          <a 
            href="#" 
            className="text-2xl font-bold text-black group-hover:text-green-300 group-hover:scale-110 transition-all duration-300 cursor-pointer"
          >
            Enhancing Literacy and Numeracy Skills
          </a>
        </div>

        <br />

        <div className="w-full h-60 flex flex-col items-center justify-center group">
          <img 
            src="https://thequranfoundation.org/wp-content/uploads/elementor/thumbs/school-ql1gve6s1nu0tu6qb7500ytxpm0v78hmq62n28iwww.png" 
            alt="Slogan Image"
            className="w-25 h-25 mb-6 transition-transform duration-300 group-hover:scale-110" // Correct dimensions
          />
          <a 
            href="#" 
            className="text-2xl font-bold text-black group-hover:text-green-300 group-hover:scale-110 transition-transform duration-300 cursor-pointer"
          >
           Preventing School Dropout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
