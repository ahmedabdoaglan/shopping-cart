let productsDB = [
    {
      id: 1,
      title: "bike item",
      size: "large",
      imageUrl:"images/bike.jpg",
      qty: 1,
    },
    {
      id: 2,
      title: "car item",
      size: "large",
      imageUrl:"images/car.jpg",
      qty: 1,
    },
    {
      id: 3,
      title: "mobile item",
      size: "medium",
      imageUrl:"images/mobile.jpg",
      qty: 1,
    },
    {
      id: 4,
      title: "wristwatch item",
      size: "small",
      imageUrl:"images/wristwatch.jpg",
      qty: 1,
    },
  ];
localStorage.setItem("products", JSON.stringify(productsDB));