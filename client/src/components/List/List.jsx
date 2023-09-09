import React from 'react'
import "./List.scss"
import Card from "../Cards/Card"
import useFetch from "../../hooks/useFetch"
const List = ({subCats,maxPrice,sort,catId}) => {

    const {data, loading, error} = useFetch(
        `products?populate=*&[filter][categories][id]=${catId}${subCats.map(
            (item)=>`&[filters][sub_categories][id]=${item}`
            )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
        );

    

  return (

    <div className="list">
        {loading ? "loading"
        :data?.map(item =>(
            <Card item = {item} key = {item.id}></Card>
        ))}
    </div>
  )
}

export default List