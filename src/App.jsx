
import './App.css'
import MenuData from './data/MenuData'
import DropdownComponent from "./components/DropdownComponent"
import FoodComponent from "./components/FoodComponent"
import { useState,useEffect } from 'react'

function App() {
  const [foods,setFood] = useState(MenuData)
  const [choice,setChoice] = useState('เมนูทั้งหมด')

  useEffect(() => {
    const changeFoodData = () => {
      const result = MenuData.filter((e) => {
        if (choice === 'เมนูทั้งหมด') {
          return foods
        } else {
          return e.menu === choice
        }
      })
      setFood(result)
      console.log(result)
    }
    changeFoodData()
  }, [choice])

  return (
    <div className="container">
      <DropdownComponent  setChoice={setChoice} />
      <div className='content'>
        {foods.map((food,index) => {
          return <FoodComponent key={index} food={food}/>
        })}
      </div>
    </div>
  )
}

export default App
