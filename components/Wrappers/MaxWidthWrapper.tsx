const MaxWidthWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-18">{children}</div>
  );
};

export default MaxWidthWrapper;
