"use client";

export default function FadedHeading({
  title = "Testimonials",
  children,
  className = "",
  overlapClass = "-mt-4 md:-mt-8 lg:-mt-12",
  theme = "light",
}: {
  title?: string;
  children?: React.ReactNode;
  className?: string;
  overlapClass?: string;
  theme?: "light" | "dark";
}) {
  const gradientStyles = theme === "light"
    ? "from-white via-white/50 to-transparent"
    : "from-[#030303] via-[#030303]/50 to-transparent";

  return (
    <div className="relative overflow-hidden">
      <h2
        className={`
          relative
          text-5xl
          sm:text-7xl
          md:text-8xl
          lg:text-[12rem]
          font-bold
          font-cal-sans
          ${theme === 'light' ? 'text-[#DCDCDC]' : 'text-white/5'}
          text-center
          leading-none
          select-none
          pointer-events-none
          overflow-hidden
          ${className}
        `}
      >
        {/* bottom fade */}
        <span
          className={`
            absolute inset-0
            bg-linear-to-t
            ${gradientStyles}
            pointer-events-none`}
        />
        {title}
      </h2>

      {/* overlapping content */}
      {children && <div className={`relative ${overlapClass}`}>{children}</div>}
    </div>
  );
}
