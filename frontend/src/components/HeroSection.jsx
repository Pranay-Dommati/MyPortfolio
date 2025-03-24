const HeroSection = () => {
  return (
    <div
      className="flex-1 h-screen bg-cover bg-center flex items-center px-10 relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop')",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-5xl font-bold text-white mb-4">Pranay Dommati</h1>
        <p className="text-2xl text-gray-300 mb-6">I'm a Full Stack Web Developer</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition duration-300">
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
