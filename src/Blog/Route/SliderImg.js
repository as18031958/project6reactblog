import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import './StyleAll.css'



export default function App() {
   const sliderImages = [
      {
         url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJsb2d8ZW58MHx8MHx8fDA%3D",
      },
      {
       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQdJWqGa4RbZ5AE_9gVvp9SEYPxt2r1C4zwycq2NlGpg&s",
    
      },
      {
         url: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww",
      },
      {
         url: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
      },
      {
         url: "https://media.istockphoto.com/id/689019358/photo/bollywood.webp?b=1&s=170667a&w=0&k=20&c=hgBBoy8u06UsQwMbybdq39BhMdUfyaqqEvC2fHvWeq4=",
      },
      {
         url: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9sbHl3b29kfGVufDB8fDB8fHww",
      },
      {
         url: "https://images.unsplash.com/photo-1589561253898-768105ca91a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aWRlYXxlbnwwfHwwfHx8MA%3D%3D",
      },
   ];

   return (
      <div className="Slider">
         
         <SimpleImageSlider
            width={700}
            height={400}
           images={sliderImages}
            showNavs={true}
            className="slider"
             
             />
      
       </div>
       
   );
}