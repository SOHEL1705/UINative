import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1  bg-gray-50">
        <section className="py-12 text-center md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              The Foundation for your Design System
            </h1>
            <p className="max-w-[800px] text-muted-foreground md:text-xl mx-auto mt-4">
              A set of beautifully designed components that you can customize,
              extend, and build on. Start here then make it your own. Open
              Source. Open Code.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Button
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                Get Started
              </Button>
              <Button variant={"ghost"}> View Components</Button>
            </div>
          </div>
        </section>
      </main>
      <main className="flex-1 bg-gray-50">
        <section className="px-6 md:px-12 text-center py-12 lg:py-24">
          <div className="flex items-center justify-center gap-3 max-w-xl mx-auto">
            <Input
              type="text"
              placeholder="Search for components, styles, creators..."
              className="w-full py-6  text-gray-900 placeholder-gray-400 bg-white"
            />
            <Button className=" h-full rounded-r-lg px-9  py-3 font-medium">
              Search
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Landing;
