export default function CrossedTapes() {
    return (
      <div className="relative w-full h-full sm:h-[600px] flex items-center justify-center overflow-hidden bg-white">
        {/* Tape 1 - Diagonal from top left to bottom right */}
        <img
          src="tape-2.png"
          alt="tape 1"
          className="absolute w-[160%] max-w-none rotate-15 top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
  
        {/* Tape 2 - Diagonal from bottom left to top right */}
        <img
          src="tape-1.png"
          alt="tape 2"
          className="absolute w-[160%] max-w-none -rotate-15 top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
  
        {/* 3D shape image in center */}
        <div className="relative z-100">
        <img
  src="shapes-6.png"
  alt="3D Shape"
  className="relative sm:w-[240px] animate-float  "
/>

        </div>
      </div>
    );
  }
  