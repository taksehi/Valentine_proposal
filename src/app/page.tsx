import ValentineLandingPage from "@/components/valentine-landing-page";
import FloatingHearts from "@/components/floating-hearts";

export default function Home() {
  return (
    <div className="min-h-screen bg-valentine-background">
      <FloatingHearts />
      <ValentineLandingPage />
    </div>
  );
}