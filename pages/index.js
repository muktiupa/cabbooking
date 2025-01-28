import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners"; // Import the loader

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Start the loader and navigate to cabnow
    const timer = setTimeout(() => {
      router.push("/cabnow").then(() => setLoading(false)); // Stop loading after navigation
    }, 2000); // Delay for demonstration

    return () => clearTimeout(timer); // Cleanup the timer
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {loading ? (
        <PuffLoader
          color="#4A90E2" // Customize the color
          loading={loading}
          size={100} // Adjust the size of the loader
        />
      ) : null}
    </div>
  );
}
