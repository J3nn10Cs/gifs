export default function GifItem({title,url}) {
  return (
    <div
      className="bg-white w-full p-3 my-3 md:my-0 rounded-4xl transition hover:translate-y-2.5"
    >
      <h1 className="text-xl font-bold p-3 text-center">{title}</h1>
      <img
        className="rounded-2xl w-72 mx-auto h-48 "
        src={url}
        alt="hola"
      />
    </div>
  )
}
