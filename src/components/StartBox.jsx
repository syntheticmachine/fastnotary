import Link from "next/link"

export function StartBox({ className, ...props }) {
{
  return (
      <>
        <div className="p-8 rounded-xl bg-white w-auto m-4 border boder-gray-200 transition-all hover:shadow-lg duration-500">
          <div>
            <div className="grid gap-8 grid-cols-12 items-center">
              <div className="col-span-5">
                <div className="flex gap-4">
                  <img className="object-contain w-64 rounded-lg object-top" src={props.image} />
                </div>
              </div>
              <div className="flex gap-4 col-span-7">
                <div>
                  <h3 className="font-semibold text-primary text-3xl leading-tight">{props.title}</h3>
                  <p className="text-gray-800 mt-2 mb-6 text-lg leading-7 pr-6">{props.description}</p>
                </div>
                <div>
                  {props.Id}
                </div>
              </div>
            </div>
            <div className="block text-center mt-6 px-4">
              <Link href={props.linkName} className="rounded-full border-black border-4 px-6 py-3 text-bold text-primary inline-block text-lg w-full hover:bg-yellow-400 transition duration-300 text-center">{props.linkName}</Link>
            </div>
          </div>
        </div>
      </>
    )
  }
}