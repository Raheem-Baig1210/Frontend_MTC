import React from "react";

const Intro = () => {

  const videoOptions = {
    height: '256', // h-64
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (


    <div className="flex flex-col lg:flex-row px-4 lg:px-10 relative" style={{ 
      backgroundImage: `url('https://thequranfoundation.org/wp-content/uploads/2020/06/map-bg.jpg')`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      

      <br />
      {/* Left-Side Content */}
      <div className="lg:w-1/4 hidden lg:flex flex-col justify-start items-center gap-8">
        {/* Card 1 */}
        <div className="w-full h-60 flex flex-col items-center justify-center group">
          <img
            src="https://thequranfoundation.org/wp-content/uploads/elementor/thumbs/education-ql1fzaz4q9wmh2sqotsiekcfn26rf83incaw963rc0.png"
            alt="Equal Access to Education"
            className="w-28 h-28 mb-4 transition-transform duration-300 group-hover:scale-110 text-cyan-700"
          />
          <a
            href="#"
            className="text-xl font-bold text-violet-400 group-hover:text-green-300 group-hover:scale-110 transition-all duration-300 cursor-pointer text-center"
          >
            Equal Access to Education
          </a>
        </div>

        {/* Card 2 */}
        <div className="w-full h-60 flex flex-col items-center justify-center group">
          <img
            src="https://thequranfoundation.org/wp-content/uploads/elementor/thumbs/idea-ql1g5q7ffip5t5gv6lqqfxztruj20rlhj4scb8kwtc.png"
            alt="Addressing Learning Gaps"
            className="w-28 h-28 mb-4 text-sky-300 transition-transform duration-300 group-hover:scale-110"
          />
          <a
            href="#"
            className="text-xl font-bold text-sky-300 group-hover:text-green-300 group-hover:scale-110 transition-all duration-300 cursor-pointer text-center"
          >
            Addressing Learning Gaps
          </a>
        </div>

        {/* Card 3 */}
        <div className="w-full h-60 flex flex-col items-center justify-center group">
          <img
            src="https://thequranfoundation.org/wp-content/uploads/elementor/thumbs/team-ql1g7k04px78dutaie6mahe3ctiqzkup46gbwlvcps.png"
            alt="Empowerment Through Education"
            className="w-28 h-28 mb-4 transition-transform duration-300 group-hover:scale-110"
          />
          <a
            href="#"
            className="text-xl font-bold text-fuchsia-900 group-hover:text-green-300 group-hover:scale-110 transition-all duration-300 cursor-pointer text-center"
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
        
      </div>

      {/* Right-Side Content */}
      <div className="lg:w-1/4 hidden lg:flex flex-col justify-start items-center gap-8">
        {/* Card 4 */}
        <div className="w-full h-60 flex flex-col items-center justify-center group">
          <img
            src="https://thequranfoundation.org/wp-content/uploads/elementor/thumbs/confidence-ql1ga6xtw6t6ygze417xsbfncqitl0bl58cddjyl9c.png"
            alt="Building Confidence and Self-esteem"
            className="w-28 h-28 mb-4 transition-transform duration-300 group-hover:scale-110"
          />
          <a
            href="#"
            className="text-xl font-bold text-violet-400 group-hover:text-green-300 group-hover:scale-110 transition-all duration-300 cursor-pointer text-center"
          >
            Building Confidence and Self-esteem
          </a>
        </div>

        {/* Card 5 */}
        <div className="w-full h-60 flex flex-col items-center justify-center group">
          <img
            src="https://thequranfoundation.org/wp-content/uploads/elementor/thumbs/abilities-ql1g91kxjh8krmngtjccqlvd7s6o6brebjn09dnwv4.png"
            alt="Enhancing Literacy and Numeracy Skills"
            className="w-28 h-28 mb-4 transition-transform duration-300 group-hover:scale-110"
          />
          <a
            href="#"
            className="text-xl font-bold text-sky-300 group-hover:text-green-300 group-hover:scale-110 transition-all duration-300 cursor-pointer text-center"
          >
            Enhancing Literacy and Numeracy Skills
          </a>
        </div>

        {/* Card 6 */}
        <div className="w-full h-60 flex flex-col items-center justify-center group">
          <img
            src="https://thequranfoundation.org/wp-content/uploads/elementor/thumbs/school-ql1gve6s1nu0tu6qb7500ytxpm0v78hmq62n28iwww.png"
            alt="Preventing School Dropout"
            className="w-28 h-28 mb-4 transition-transform duration-300 group-hover:scale-110"
          />
          <a
            href="#"
            className="text-xl font-bold text-fuchsia-900 group-hover:text-green-300 group-hover:scale-110 transition-all duration-300 cursor-pointer text-center"
          >
            Preventing School Dropout
          </a>
        </div>
      </div>

      {/* <div
        className="absolute bottom-0 left-0 w-full h-full bg-no-repeat bg-bottom bg-contain pointer-events-none"
          style={{
             backgroundImage: `url('https://thequranfoundation.org/wp-content/uploads/2020/06/paral-23.jpg')`, // Replace with actual footer image URL
      }}
      ></div> */}

    </div>
  );
};

export default Intro;
