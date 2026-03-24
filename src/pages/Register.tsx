import { Layout } from "@/components/layout/Layout";
import poster from "@/assets/poster.jpeg"; // 👈 import your image

const Register = () => {
  return (
    <Layout>
      <section className="min-h-screen flex flex-col items-center justify-center bg-white text-black px-4 py-10">
        
        {/* Poster Image */}
        <img
          src={poster}
          alt="Sports Hackathon Poster"
          className="w-full max-w-3xl mb-8 border-2 border-black"
        />

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Sports Hackathon
        </h1>

        {/* Description */}
        <p className="text-center text-lg max-w-2xl mb-8 text-black/70">
          Join the Sports Hackathon and showcase your innovation in the world of sports and technology.
          Collaborate, build, and compete with passionate minds to create impactful solutions that redefine
          the future of sports.
        </p>

        {/* Register Button */}
        <a
          href="https://bit.ly/4lKneZo"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-black text-white font-bold border-2 border-black hover:bg-white hover:text-black transition"
        >
          Register Now
        </a>

      </section>
    </Layout>
  );
};

export default Register;