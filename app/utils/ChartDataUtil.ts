export const countPriorityTypes = (data:TodoItem[]) => {
    let lowCount = 0;
    let mediumCount = 0;
    let highCount = 0;
  
    data.forEach((item: { priority: Priority; }) => {
      switch (item.priority) {
        case 'LOW':
          lowCount++;
          break;
        case 'MEDIUM':
          mediumCount++;
          break;
        case 'HIGH':
          highCount++;
          break;
        default:
          break;
      }
    });
  
    return {
      LOW: lowCount,
      MEDIUM: mediumCount,
      HIGH: highCount
    };
  };

