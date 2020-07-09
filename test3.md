## Stop the loop after n seconds
Write a function that will calclulate total time taken to deliver the package to the customer

#### Input
```
[
    { id: 1, title: orderPlaced, createdAt: 1589265720000 },
    { id: 2, title: orderPacked, createdAt: 1589272920000 },
    { id: 3, title: orderShipped, createdAt: 1589316120000 },
    { id: 4, title: orderArrivedCourierFacility, createdAt: 1589316120000, location: '1st' },
    { id: 5, title: orderLeftCourierFacility, createdAt: 1589347800000, location: '1st' },
    { id: 6, title: orderArrivedCourierFacility, createdAt: 1589560200000, location: '2st' },
    { id: 7, title: orderLeftCourierFacility, createdAt: 1589581800000, location: '2st' },
    { id: 8, title: orderArrivedCourierFacility, createdAt: 1589970600000, location: '3rd' },
    { id: 9, title: orderLeftCourierFacility, createdAt: 1590136200000, location: '3rd' },
    { id: 10, title: orderOutForDelivery, createdAt: 1590226200000 },
    { id: 11, title: orderDelivered, createdAt: 1590169740000 }
]
```
#### Output
- It should return the total time from order placement to order delivered.
- It should also mentioned how many halts were there (CourierFacility). *Count arrived and left as 1 entity*
- It should mentioned the time courier stay at CourierFacility and on which facility it stays for long (use the location key for name of the facility).