import NavBar from "./navbar";
import DashboardImg from "../assets/Dashboard.svg"


export default function SideBar() {
    return (

        <><button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">

        </button><aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-purple-950" aria-label="Sidebar">

                <div className="justify-center whitespace-nowrap px-12 py-7 text-2xl font-semibold tracking-tight leading-8 text-white bg-gray-200 bg-opacity-10 max-md:px-5">
                    Acmy Solutions
                </div>
                <div className="flex flex-col justify-center items-start px-4 py-2 mx-4 mt-16 w-60 max-w-full text-base leading-6 text-white whitespace-nowrap rounded-3xl bg-gray-200 bg-opacity-10 pr-5   ">
                    <div className="flex gap-3">
                        <img
                            loading="lazy"
                            src={DashboardImg.src}
                            className="shrink-0 w-6 aspect-square"
                        />
                        <div>Dashboard</div>
                    </div>
                </div>
            </aside>
            <div className="flex flex-col pt-7 bg-white max-w-full fixed top-0 w-full shadow-md">
                <div className="flex gap-5 justify-between mx-6 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                    <div className="my-auto text-xl font-semibold tracking-tight leading-8 text-black">
                        Dashboard
                    </div>
                    <NavBar />
                </div>
                <div className="shrink-0 mt-5 h-px bg-gray-200 shadow-sm max-md:max-w-full" />
            </div>
        </>
    )
}