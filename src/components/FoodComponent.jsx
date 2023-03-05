

function FoodComponent({food}) {

  return (
    <div className="single-food">
        <h2>{food.foodName}</h2>
        <img src={food.image_url}  alt={food.foodName}/>
    </div>
  )
}

export default FoodComponent