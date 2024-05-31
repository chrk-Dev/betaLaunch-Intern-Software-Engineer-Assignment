"use client"

import { useState } from "react"
import moment from "moment";
import PriorityHighLogo from "../Assets/Priority-High.svg"
import PriorityMediumLogo from "../Assets/Priority-Medium.svg"
import PriorityLowLogo from "../Assets/Priority-Low.svg"
import LoadingComp from "./LoadingComp";



type Props = {
    todoItems:TodoItem[]
    Loading:boolean
  }


export default function TaskTable({todoItems,Loading}: Props) {

    






    const [currentPage, setCurrentPage] = useState(1);
    let maxPages = todoItems.length / 10;
    let items = [];
    let leftSide = currentPage - 2;
    if (leftSide <= 0) leftSide = 1;
    let rightSide = currentPage + 2;
    if (rightSide > maxPages) rightSide = maxPages;
    for (let number = leftSide; number <= rightSide; number++) {
        items.push(
            <div key={number} className={(number === currentPage ? 'text-pink-700 border-pink-700 border-solid' : '')} onClick={() => { setCurrentPage(number) }}>
                {number}
            </div>,
        );
    }
    const nextPage = () => {
        if (currentPage < maxPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const NotificationsLogoPri = (pri: string) => {
        if (pri == "HIGH") {
            return PriorityHighLogo.src
        } else if (pri == "MEDIUM") {
            return PriorityMediumLogo.src
        } else if (pri == "LOW") {
            return PriorityLowLogo.src
        }
    }


    return (


        <>

            <div className="border w-full flex-col grow pt-3.5 pb-6 w-full bg-white rounded-lg border   flex  justify-between px-4 mx-6 mt-6 bg-white rounded-lg border border-gray-300 border-solid max-md:flex-wrap max-md:mr-2.5 ">
                <div className=" text-base font-medium leading-6 text-black ">
                    Tasks
                    <div className="shrink-0 self-stretch mt-4 h-px bg-gray-200 max-md:max-w-full" />

                </div>

                {Loading ? ( <LoadingComp/>
                ) : (
                    todoItems.slice((currentPage - 1) * 8, currentPage * 10).map((item: TodoItem, index: Number) => (
                        
                        <>
                        <div key={index.toString()+'div1'} className="flex  justify-between w-full h-full gap-x-1">
                            <div key={index.toString()+'div2'} className="flex gap-2 my-auto  text-sm leading-6  flex justify-center items-center  text-black">
                                <img
                                key={index.toString()+'div3'}
                                    loading="lazy"
                                    src={NotificationsLogoPri(item.priority)}
                                    className="shrink-0 w-5 aspect-square" />
                                <div key={index.toString()+'div4'} className="flex  items-start">

                                    <div key={index.toString()+'div5'} className="flex flex-col grow shrink-0 mt-1.5 basis-0 w-fit">
                                        <div key={index.toString()+'div6'} className="text-sm leading-6 text-black flex justify-center items-center">
                                            {item.todo}
                                        </div>
                                        {!item.completed && <div key={index.toString()+'div7'} className="mt-3  text-xs font-medium leading-6 text-pink-700">
                                          <button className="focus:ring-1 focus:ring-2  rounded-md focus:ring-pink-700">Mark as done</button>  
                                        </div>}

                                    </div>
                                </div>

                            </div>
                            <div key={index.toString()+'div8'} className="flex items-center text-xs">
                                {item.completed ? (<div key={index.toString()+'div9'} className="justify-center px-2 py-0.5 font-medium  text-center text-green-600  bg-green-100 rounded-2xl">
                                    Done
                                </div>) : (<div key={index.toString()+'div10'} className="justify-center px-2 py-0.5 font-medium leading-6 text-center text-amber-300 whitespace-nowrap rounded-2xl bg-amber-300 bg-opacity-10">
                                    In-Progress
                                </div>)}
                                <div key={index.toString()+'div11'} className="my-auto text-right whitespace-nowrap ml-2	 text-neutral-500">
                                    {moment(item.createdAt).format('MMM D')}
                                </div>
                            </div>
                            
                        </div>
                        <div key={index.toString()+'div12'} className="shrink-0 mt-3 h-px bg-gray-200 max-md:max-w-full" />
                        </>
                    )
                    )
        )

            
  }  





                <div className="flex gap-4 self-center mt-7 text-base leading-6 text-center text-black whitespace-nowrap">
                    <img
                        onClick={prevPage}
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c89b8d98dac13e52d283d03ba65e2fd09e1489bb6011e9d9831dab708ef0afe4?"
                        className="shrink-0 w-8 border border-solid aspect-square border-zinc-100"
                    />
                    {
                        items.map((num, index) =>
                            <div key={index} className=" w-8 h-8 font-semibold tracking-normal  bg-white rounded border" onClick={nextPage}>
                                {num}
                            </div>
                        )
                    }
                    <img
                        onClick={nextPage}
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8238f477423c80c6e2d31ce639493a63ac08f585f469a798f2eff19df5faa62?"
                        className="shrink-0 w-8 border border-solid aspect-square border-zinc-100"
                    />
                </div>




            </div>
        </>

    )
}