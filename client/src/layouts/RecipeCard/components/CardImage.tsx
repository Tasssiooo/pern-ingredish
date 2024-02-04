import placeholder from "@/assets/pexels-photo.jpeg";

export default function CardImage() {
  return (
    <div className="w-full">
      <img
        src={placeholder}
        width={350}
        height={350}
        alt=""
        className="rounded-t-xl"
      />
    </div>
  );
}
