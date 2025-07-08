interface Props {
  title: string;
  des: string;
}

// import { useTranslation } from "react-i18next";

const Title = ({ title, des }: Props) => {
  // const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h3 className="text-sm font-light tracking-wide uppercase text-designColor">
        {title}
      </h3>
      <h1 className="text-4xl font-bold text-gray-300 capitalize md:text-5xl">
        {des}
      </h1>
    </div>
  );
};

export default Title;
