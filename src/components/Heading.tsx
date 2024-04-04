interface HeadingProps {
  className?: string; // CSS class for styling, optional
  children: React.ReactNode; // Content of the heading
}

const Heading: React.FC<HeadingProps> = ({ className, children }) => {
  return (
    <div className={`text-3xl font-semibold ${className}`}>{children}</div>
  );
};

export default Heading;
