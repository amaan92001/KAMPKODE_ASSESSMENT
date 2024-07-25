import ShinyButton from "@/components/magicui/shiny-button";
import OrbitingCircles from "../components/magicui/orbiting-circles";
import ShimmerButton from "@/components/magicui/shimmer-button";

export const BG = () => {
  return (
    <div className="relative flex h-[800px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl mt-10 sm:mt-auto">
      <div className="text-center w-[350px] z-10 md:w-[800px] sm:w-[600px] flex flex-col items-center">
        <h1 className="text-4xl sm:text-6xl w-screen font-bold mb-4 text-wrap">We’ve really sped up our workflow</h1>
        <p className="text-lg text-gray-600 mb-6 w-full"><span className="font-bold">
          Discover the power of our innovative solutiWe’ve just released a new update!</span>Check out the all new dashboard view. Pages and now load faster.you can try us for free for 30 days.<br /><br />
        Join 4,000+ companies already growing</p>
        <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-2">
            <ShinyButton text="Start Learning Today" className="w-[300px] h-[50px] sm:w-auto"/>
            <ShimmerButton className="font-bold w-[300px] h-[50px] sm:w-auto">
                Join Now
            </ShimmerButton>
        </div>
      </div>

      <OrbitingCircles
        className="size-[30px] border-2 border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-2 border-none bg-transparent"
        duration={20}
        delay={20}
        radius={140}
      >
        <Icons.css />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={140}
      >
        <Icons.gitlab />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={200}
        duration={20}
        reverse
      >
        <Icons.react />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={200}
        duration={20}
        delay={20}
        reverse
      >
        <Icons.aws />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={260}
        duration={20}
      >
        <Icons.nodejs />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={260}
        duration={20}
        delay={20}
      >
        <Icons.android />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={320}
        duration={20}
        delay={20}
        reverse
      >
        <Icons.flutter />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={380}
        duration={20}
        
      >
        <Icons.html />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={380}
        duration={20}
        delay={20}
        
      >
        <Icons.prisma />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  
  nodejs: () => (
    <img src="/nodejs.png" alt="" />
  ),
  aws: () => (
    <img src="/aws.png" alt="" />
  ),
  react: () => (
    <img src="/react.png" alt="" />
  ),
  flutter: () => (
    <img src="/flutter.png" alt="" />
  ),
  gitlab: () => (
    <img src="/gitlab.png" alt="" />
  ),
  css: () => (
    <img src="/css.png" alt="" />
  ),
  html: () => (
    <img src="/html.png" alt="" />
  ),
  android: () => (
    <img src="/android.png" alt="" />
  ),
  prisma: () => (
    <img src="/prisma.png" alt="" />
  ),

};
