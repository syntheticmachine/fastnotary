import Link from "next/link"

export function StartBox({ className, ...props }) {
{
  return (
      <>
        <div className="p-12 rounded-xl bg-white w-auto m-4 border boder-gray-200 transition-all hover:shadow-lg duration-500">
          <div class="grid h-full items-center justify-center text-center">
            <div className="grid gap-8 grid-cols">
              <div className="col-span- hidden">
                <div className="gap-4 hidden">
                  <img className="object-contain w-64 rounded-lg object-top" src={props.image} />
                </div>
              </div>
              <div className=" gap-4 col-span-">
                <div>
                  {props.recommended > 0 &&
                    <span className="text-white inline-block mb-4 rounded-full px-4 py-2 text-xs bg-gray-900 text-primary">
                      Recommended Package
                    </span>
                  }
                  <h3 className="font-semibold text-primary text-3xl leading-tight mb-4">{props.title}</h3>
                  <p className="text-gray-600 mt-2 mb-5 text-base leading-6">{props.description}</p>
                </div>
                <div>
                  {props.Id}
                </div>
              </div>
            </div>
            <div className="block text-center mt-2">
              <Link href={props.linkId} className="rounded-full border-black border-4 px-6 py-3 text-bold text-primary inline-block text-lg w-full hover:bg-yellow-400 transition duration-300 text-center">{props.linkName}</Link>
            </div>
          </div>
        </div>
      </>
    )
  }
}