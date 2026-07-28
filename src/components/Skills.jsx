import {
    FaJs,
    FaReact,
    FaNodeJs,
    FaWordpress,
    FaGitAlt,
    FaGithub,
    FaServer,
    FaLeaf,
    FaPlug,
    FaWind
} from "react-icons/fa";

export default function Skills() {
    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h2 className="mb-2">Language </h2>
            <div style={{ display: 'flex', gap: '20px', fontSize: '40px' }} >
                <FaJs className='hover:scale-110 transition-all duration-300' color="#F7DF1E" title="JavaScript" />
            </div>
            <br />
            <h2 className="mb-2">Frontend </h2>
            <div style={{ display: 'flex', gap: '20px', fontSize: '40px' }} >
                <FaReact className='hover:scale-110 transition-all duration-300' color="#61DAFB" title="React" />
                <FaWind className='hover:scale-110 transition-all duration-300' color="#00D2FF" title="Tailwind CSS" />
            </div>
            {/* Grid layout for icons */}
            <br />


            <h2 className="mb-2">Backend</h2>
            <div style={{ display: 'flex', gap: '20px', fontSize: '40px' }}>
                <FaNodeJs className='hover:scale-110 transition-all duration-300' color="#339933" title="Node.js" />
                <FaServer className='hover:scale-110 transition-all duration-300' color="#4D4D4D" title="Server" />
                <FaLeaf className='hover:scale-110 transition-all duration-300' color="#47A248" title="MongoDB" />
                <FaPlug className='hover:scale-110 transition-all duration-300' color="#000000" title="REST API" />

            </div>
            <br />
            <h2 className="mb-2">Infrastructure & Utilities</h2>
            <div style={{ display: 'flex', gap: '20px', fontSize: '40px' }}>

                <FaWordpress className='hover:scale-110 transition-all duration-300' color="#21759B" title="WordPress" />
                <FaGitAlt className='hover:scale-110 transition-all duration-300' color="#F05032" title="Git" />
                <FaGithub className='text-white hover:scale-110 transition-all duration-300' title="GitHub" />
            </div>
        </div>
    );
}
