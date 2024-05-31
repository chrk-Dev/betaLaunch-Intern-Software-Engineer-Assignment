import Avatar1 from "../assets/Avatar-1.svg"
import Avatar2 from "../assets/Avatar-2.svg"



export default function ActivityFeed() {
  return (


    <div className="flex flex-col  py-4 bg-white rounded-lg border border-gray-300 border-solid max-w-full">
      <div className="ml-4 text-base font-medium leading-6 text-black max-md:ml-2.5">
        Activity Feed
      </div>
      <div className="shrink-0 self-stretch mt-4 h-px bg-gray-200 max-md:max-w-full" />
      <div className="flex  items-start ml-4 max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col grow shrink-0 mt-3.5 basis-0 w-fit">
          <div className="flex  pr-2.5">
            <img
              loading="lazy"
              src={Avatar1.src}
              className="shrink-0 self-start w-8 aspect-square"
            />
            <div className="flex flex-col">
              <div className="text-sm leading-6 text-pink-700">
                <span className="font-semibold">Kushantha Charuka</span> created{" "}
                <span className="font-semibold text-pink-700">
                  Contract #00124 need John Beige’s signature
                </span>
              </div>
              <div className="text-xs leading-6 text-neutral-500">
                Sep 16, 2022 at 11:30 AM
              </div>
            </div>
          </div>
          <div className="shrink-0 mt-4 h-px bg-gray-200 border border-gray-200 border-solid" />
          <div className="flex gap-2 pr-2.5 mt-4">
            <img
              src={Avatar2.src}
              className="shrink-0 self-start w-8 aspect-square"
            />
            <div className="flex flex-col">
              <div className="text-sm leading-6 text-black">
                Lorem ipsum{" "}
                <span className="font-semibold">dolor sit amet,</span>{" "}
                consectetur adipiscing elit.{" "}
                <span className="font-semibold">Maecenas</span> pretium neque
              </div>
              <div className="text-xs leading-6 text-neutral-500">
                Sep 16, 2022 at 11:45 AM
              </div>
            </div>
          </div>
          <div className="shrink-0 mt-4 h-px bg-gray-200 border border-gray-200 border-solid" />
          <div className="flex gap-2 pr-2.5 mt-4">
            <img
              loading="lazy"
              srcSet={Avatar2.src}
              className="shrink-0 self-start w-8 aspect-square"
            />
            <div className="flex flex-col">
              <div className="text-sm leading-6 text-black">
                Lorem ipsum{" "}
                <span className="font-semibold">dolor sit amet,</span>{" "}
                consectetur adipiscing elit.{" "}
                <span className="font-semibold">Maecenas</span> pretium neque
              </div>
              <div className="text-xs leading-6 text-neutral-500">
                Sep 16, 2022 at 11:45 AM
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col pb-20 rounded border border-solid bg-neutral-50 border-zinc-100">
          <div className="shrink-0 rounded bg-zinc-100 h-[98px]" />
        </div>
      </div>
    </div>



  )
}