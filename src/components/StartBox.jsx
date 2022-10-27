import Link from "next/link"

export function StartBox({ className, ...props }) {
{
  return (
      <>
        <div className="p-12 rounded-xl bg-white w-auto m-4 border boder-gray-200 transition-all hover:shadow-lg duration-500 relative">
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
                    <span className="text-white inline-block rounded-full px-6 py-2 text-base text-gray-900 bg-yellow-400 shadow-sm text-primary recommended">
                      Our Recommended Package
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
              <Link href={props.linkId} className="rounded-full border-black border-4 px-4 md:px-12 py-3 text-bold text-primary text-lg w-full hover:bg-yellow-400 transition duration-300 text-center flex items-center gap-4 hover:gap-6 justify-center transition-all duration-300">{props.linkName}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  }
}