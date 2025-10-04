import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";

const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
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
              <Button>Get Started</Button>
              <Button variant={"ghost"}> View Components</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a
              href="#"
              target="_blank"
              className="font-medium underline underline-offset-4"
            >
              UINative
            </a>
            . The source code is available on{" "}
            <a
              href="#"
              target="_blank"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
