import ValentineLandingPage from "@/components/valentine-landing-page";
import FloatingHearts from "@/components/floating-hearts";
import FallingFlowers from "@/components/falling-flowers"; // Import the new component

export default function Home() {
  return (
    <div className="min-h-screen bg-valentine-background">
      <FloatingHearts />
      <FallingFlowers /> {/* Add the falling flowers here */}
      <ValentineLandingPage />
    </div>
  );
}