import BreadCumbs from "@/components/common/BreadCumbs"
import ImageZoom from "@/components/test"

const PDP = () => {
  return (
    <section className="container mx-auto px-28 py-8 mb-40 ">
      <BreadCumbs/>
      <ImageZoom
        imageUrl="/images/ig/85051426_2060664737412512_8458893884651247910_nlow.jpg"
        zoomedImageUrl="/images/ig/85051426_2060664737412512_8458893884651247910_nlow.jpg"
        zoomedWidth={600}
        zoomedHeight={600}
      />
    </section>
  )
}

export default PDP