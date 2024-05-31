"use client"


import TaskTable from "./TaskTable"
import { DoughnutChart } from "./DoughnutChart"
import WelcomeBaner from "./WelcomeBaner"
import ActivityFeed from "./ActivityFeed"
import SideBar from "./SideBar"
import { useEffect, useState , useContext } from "react"
import DashboardService from "../services/DashboardService"
import { countPriorityTypes } from "../utils/ChartDataUtil"
import { LoadingContext } from "../context/LoadingContext"

export default function Layout() {
    const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
    // const [Loading,setLoading] = useContext(LoadingContext)
    const [Loading, setLoading] = useState<boolean>(true);


    const getData = async () => {
        

        try {
            const res = await DashboardService.getDashboardData();
            if (res.status === 200) {
                setTodoItems(res.data);
                setLoading(false);
            }


        } catch (error) {
            console.error("Error occurred while fetching dashboard data:", error);
        }
    };

    useEffect(() => {
        getData()
    }, [])


const chartData= countPriorityTypes(todoItems)


    return (

        <>
            <SideBar />
            <div className=" sm:ml-64 ">
                <div className="content" style={{ marginTop: 100 }}>
                    <WelcomeBaner />
                    <div className="grid  grid-cols-3 grid-rows-2 gap-4 ">
                    <LoadingContext.Provider value={Loading}>

                        <div className="col-span-2 ">

                            <TaskTable 
                                todoItems={todoItems} 
                                Loading={Loading}                            
                            />

                        </div>
                        <div className="gap-3 gap-y-8 m-6">
                            <ActivityFeed />
                            <div className="gap-5">
                                <DoughnutChart data={chartData} loading={Loading} />
                            </div>
                        </div>
                        </LoadingContext.Provider>

                    </div>
                </div>
            </div>
        </>

    )
}

