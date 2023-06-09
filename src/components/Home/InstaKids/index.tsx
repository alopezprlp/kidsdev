import { francois } from "@/utils/fonts";
import Image from "next/image";

const data = [
  {
    id: 1,
    urlImg: "/images/ig/87339849_530805007551424_292323017375800029_nlow.jpg",
  },
  {
    id: 2,
    urlImg: "/images/ig/87413583_2660130777540405_5722961474466513534_nlow.jpg",
  },
  {
    id: 3,
    urlImg: "/images/ig/85069033_185901059177965_6767010623440980864_nlow.jpg",
  },
  {
    id: 4,
    urlImg: "/images/ig/84981049_620107085435507_4260875787090681190_nlow.jpg",
  },
  {
    id: 5,
    urlImg: "/images/ig/85051426_2060664737412512_8458893884651247910_nlow.jpg",
  },
];

const InstaKids = () => {
  return (
    <section className="mt-20 w-full">
      <h1
        className={`after-img uppercase text-4xl text-center mt-2 text-[#486683] ${francois.className} relative`}
      >
        INSTAGRAM @kIDSRUS
      </h1>

      <div className="mt-20 w-full flex justify-between flex-wrap items-center">
        {data.map((cat) => (
          <Image
            key={cat.id}
            src={cat.urlImg}
            alt="Img"
            width={200}
            height={200}
            className="cursor-pointer hover:opacity-90 transform transition-all duration-200"
          />
        ))}
      </div>
    </section>
  );
};

export default InstaKids;
