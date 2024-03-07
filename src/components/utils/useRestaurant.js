import React,{useState,useEffect} from "react";

export default function useRestaurant(id) {
  const [restaurant, setRestaurant] = useState([]);
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json.data.cards[0].card.card.info);
    setMenu(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards
    );
  }
  return {restaurant, menu};
}
