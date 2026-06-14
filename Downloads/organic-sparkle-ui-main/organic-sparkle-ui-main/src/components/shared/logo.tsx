import logo from "@/assets/logo.jpeg.asset.json";

export function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <img
      src={logo.url}
      alt="Sparsh Organics"
      className={`${className} rounded-full object-cover ring-1 ring-primary/15`}
    />
  );
}
