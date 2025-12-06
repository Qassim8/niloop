import Image from "next/image";

function WorkCard({ work, onOpen, t }) {
  return (
    <div
      onClick={onOpen}
      className="relative block h-[250px] group shadow-xl border-16 border-[#fffdf9] rounded-md overflow-hidden cursor-pointer"
    >
      <Image
        src={work.image}
        alt="Work"
        width={500}
        height={500}
        className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-900/0 md:opacity-0 group-hover:opacity-100 transition duration-500 flex items-start justify-center p-4">
        <p className="text-white font-semibold hover:!text-blue-700 duration-300">
          {t("show")}
        </p>
      </div>
    </div>
  );
}

export default WorkCard;
