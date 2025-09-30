type Props = {
  src: string
}

const CollectionsImage = ({ src }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg h-[600px] w-[490px] pb-10">
      <img
        src={src}
        alt="collection"
        className="w-full h-full object-cover object-fit"
      />
    </div>
  )
}

export default CollectionsImage
