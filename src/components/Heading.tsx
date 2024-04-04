interface HeadingProps {
  className?: string; 
  children: React.ReactNode; 
}

const Heading: React.FC<HeadingProps> = ({ className, children }) => {
  return (
    <div className={`text-3xl font-semibold ${className}`}>{children}</div>
  );
};

export default Heading;
