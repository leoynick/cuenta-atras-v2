import Link from "next/link";

const Button = ({ day, href }) => {
  return (
    <Link href={href}>
      <div className="text-white col-span-1 flex shadow-sm rounded-md bg-jw h-14 w-52 justify-center items-center">
        <span className="text-lg">{day}</span>
      </div>
    </Link>
  );
};

export default Button;
