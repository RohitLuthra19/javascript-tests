const input = [
    { id: 1, title: "orderPlaced", createdAt: 1589265720000 },
    { id: 2, title: "orderPacked", createdAt: 1589272920000 },
    { id: 3, title: "orderShipped", createdAt: 1589316120000 },
    { id: 4, title: "orderArrivedCourierFacility", createdAt: 1589316120000, location: '1st' },
    { id: 5, title: "orderLeftCourierFacility", createdAt: 1589347800000, location: '1st' },
    { id: 6, title: "orderArrivedCourierFacility", createdAt: 1589560200000, location: '2st' },
    { id: 7, title: "orderLeftCourierFacility", createdAt: 1589581800000, location: '2st' },
    { id: 8, title: "orderArrivedCourierFacility", createdAt: 1589970600000, location: '3rd' },
    { id: 9, title: "orderLeftCourierFacility", createdAt: 1590136200000, location: '3rd' },
    { id: 10, title: "orderOutForDelivery", createdAt: 1590226200000 },
    { id: 11, title: "orderDelivered", createdAt: 1590169740000 }
]

function totalTimeTakenToDeliverPackage(input) {
    const lastItem = input.length - 1;
    const orderPlacedTime = input[0]?.createdAt;
    const orderDeliveredTime = input[lastItem].createdAt;
    const orderTimeDiff = orderDeliveredTime - orderPlacedTime;
    const totalTime = new Date(orderTimeDiff).toLocaleTimeString("en-US")

    let haltsCount = 0;
    let maxStay = 0
    let longerStayLocationName
    input.forEach((item, index) => {
        if (item?.title.indexOf("LeftCourierFacility") > -1) {
            haltsCount++
        }
        if (item?.title === "orderArrivedCourierFacility") {
            const time = input[index + 1].createdAt - input[index].createdAt
            if (time > maxStay) {
                maxStay = time
                longerStayLocationName = input[index].location
            }
        }
    })

    return [totalTime, haltsCount, longerStayLocationName]
}