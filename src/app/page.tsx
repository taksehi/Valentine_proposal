import ValentineLandingPage from "@/components/valentine-landing-page";
import FloatingHearts from "@/components/floating-hearts";
// Removed FallingFlowers import

export default function Home() {
  return (
    <div className="min-h-screen bg-valentine-background">
      <FloatingHearts />
      {/* Removed FallingFlowers component */}
      <ValentineLandingPage />
    </div>
  );
}