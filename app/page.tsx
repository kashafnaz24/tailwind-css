
 import Image from "next/image"

export default function HomePage(){
  return(
  <div>
   <Image
        src="/artificial-intelligence-3706562_1280.jpg"
        alt="Image"
        width={1100}
        height={450}
        className="w-[100%] h-[450px]"
        priority/>

     <h1  className="text-neutral-100  text-[30px] italic text-center capitalize font-bold">Wellcome to SynapticAI</h1>

   <p id="text" className="p-[20px]">Welcome to SynapticAI, a cutting-edge platform inspired by the neural pathways of the human brain. Our mission is to bring the intelligence of machines closer to
      human-like decision-making through advanced deep learning and neural networks.
       At our core, we replicate the adaptive nature of human synapses-learning from data, strengthening over time, and continuously evolving.
        Our platform is designed to solve complex problems, uncover hidden patterns,
        and provide insights that empower businesses, researchers, and developers to achieve groundbreaking innovations.
       </p> 
       
       <h1 className="text-[30px] capitalize text-neutral-100 text-center m-[20px] font-extrabold font-[cursive]">our portfolio</h1>
       
       <div className="grid grid-cols-2 gap-[20px] m-[40px]">
        <span> 
          <Image
           src="/health.jpg"
           alt="Intelligent Data Analysis for healthcare" 
           width={400}
           height={300}
           className="border border-[aliceblue] rounded-[20px] w-[400px] m-[30px] h-[300px] hover:p-[40px] hover:shadow-[5px_5px_5px_aliceblue]"
           priority/>
          <h4 className="text-center">Intelligent Data Analysis for Healthcare </h4>
        </span>
        <span>
        <Image
        src="/language.png"
         alt="Natural Language Processing for Customer Support" 
         width={400}
         height={300}
         className="border border-[aliceblue] rounded-[20px] w-[400px] m-[30px] h-[300px] hover:p-[40px] hover:shadow-[5px_5px_5px_aliceblue]"
         priority/>
        
        <h4 className="text-center">Natural Language Processing for Customer Support</h4>
        </span>
        <span>
        <Image 
        src="/mechanics.jpg"
         alt="Predictive Maintenance for Manufacturing"
         width={400}
         height={300}
         priority
         className="border border-[aliceblue] rounded-2xl w-[400px] m-[30px] h-[300px] hover:p-[40px] hover:shadow-[5px_5px_5px_0_aliceblue]"
         />
         <h4 className="text-center">Predictive Maintenance for Manufacturing</h4>
        </span>
        <span>
          <Image
           src="/industries.webp" 
           alt="Smart Energy Management System for Industrial Facilities"
           width={400}
           height={300}
           className="border border-[aliceblue] rounded-[20px] w-[400px] m-[30px] h-[300px] hover:p-[40px] hover:shadow-[5px_5px_5px_aliceblue]"
           priority/>
          <h4 className="text-center">Smart Energy Management System for Industrial Facilities</h4>
        </span>
       </div>
  </div>
)
}

