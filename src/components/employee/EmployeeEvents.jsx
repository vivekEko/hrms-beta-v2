import React from "react";

const EmployeeEvents = () => {
  const eventData = [
    {
      eventMonth: "Sept 2022",
      eventMonthData: [
        {
          eventName: "Durga Puja",
          eventType: "Holiday",
          eventDate: "Sept 09-15 ",
          eventTypeColor: "#5f66e1",
          eventTypeBgColor: "#5f65e10e",
        },
        {
          eventName: "Casual",
          eventType: "Leave",
          eventDate: "Sept 09-15 ",
          eventTypeColor: "#f3ab3f",
          eventTypeBgColor: "#f3ab3f13",
        },
        {
          eventName: "Durga Puja",
          eventType: "Holiday",
          eventDate: "Sept 09-15 ",
          eventTypeColor: "#5f66e1",
          eventTypeBgColor: "#5f65e10e",
        },
        {
          eventName: "Sick",
          eventType: "Leave",
          eventDate: "Sept 09-15 ",
          eventTypeColor: "#f3ab3f",
          eventTypeBgColor: "#f3ab3f13",
        },
      ],
    },
    {
      eventMonth: "Oct 2022",
      eventMonthData: [
        {
          eventName: "Sick",
          eventType: "Leave",
          eventDate: "Oct 09-15 ",
          eventTypeColor: "#f3ab3f",
          eventTypeBgColor: "#f3ab3f13",
        },
        {
          eventName: "Gandhi Jayanti",
          eventType: "Holiday",
          eventDate: "Oct 09-15 ",
          eventTypeColor: "#5f66e1",
          eventTypeBgColor: "#5f65e10e",
        },
      ],
    },
  ];

  return (
    <div className="h-full pt-5 w-full  bg-white rounded-lg">
      <div className="flex justify-between items-end px-5 pb-3">
        <h1 className="text-xl  ">Events</h1>

        <h3 className="text-sm text-gray-500 space-x-2  ">
          <span>All</span>
          <span>|</span>
          <span>Custom</span>
        </h3>
      </div>

      <div className="pt-5 max-h-[300px] md:max-h-[200px] overflow-y-scroll">
        {eventData?.map((data, index) => {
          return (
            <div key={index} className="p-5 pt-0 ">
              <div>
                <div className="flex items-center ">
                  <div className="h-[2px] bg-gray-300 w-full"></div>
                  <h4 className="text-xs text-gray-600 mb-1 min-w-[100px] text-center ">
                    {data?.eventMonth}
                  </h4>
                  <div className="h-[2px] bg-gray-300 w-full"></div>
                </div>

                <div>
                  {data?.eventMonthData?.map((eventData, eventIndex) => {
                    return (
                      <div
                        key={eventIndex}
                        className="p-2  py-4  mb-2 "
                        style={{
                          borderBottom:
                            eventIndex === data?.eventMonthData?.length - 1
                              ? "0px"
                              : "1px solid #e5e7eb",
                        }}
                      >
                        <h1 className="text-lg font-semibold ">
                          {eventData?.eventName}
                        </h1>
                        <div className="flex justify-between items-center text-xs">
                          <h3>{eventData?.eventDate}</h3>
                          <h3
                            className=" p-1 rounded-lg min-w-[60px] text-center font-medium"
                            style={{
                              color: eventData?.eventTypeColor,
                              backgroundColor: eventData?.eventTypeBgColor,
                            }}
                          >
                            {eventData?.eventType}
                          </h3>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmployeeEvents;
