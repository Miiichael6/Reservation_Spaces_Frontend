interface Props extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

const CustomCard = ({ className, children } :Props) => {
  return (
    <div className={`bg-gray-100 rounded-md ${className}`}>
        {children}
    </div>
  );
};

export default CustomCard;
