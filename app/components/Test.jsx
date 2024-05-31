import ActivityFeed from "./ActivityFeed"
import TaskTable from "./taskTable.tsx.bck"


export default function Test() {
  return (
    <div className="flex flex-col flex-row gap-8">

     
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 	">
            <div className="lg:col-span-2 ">
         <TaskTable/>
            </div>
            <div>
              <ActivityFeed/>
              <PieChart className="w-full h-[200px] bg-lime-700	" />

              </div>
              <h3 className="font-semibold mb-2 mt-8">Tasks Priorities</h3>
            </div>
        
    </div>
  )
}



function PieChart(props) {
  return (
    <div {...props}>
     pie chart
    </div>
  )
}