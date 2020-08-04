<template>
    <b-container class="head">
        <b-row class="head">
            <b-col sm="4">
                <h1>RESTURANT</h1>
            </b-col>
            <b-col sm="8">
                <input type="text" placeholder="Search"/>
            </b-col>
        </b-row>
        <b-row class="mt-5">
            <b-col>
                <h3>Menu Items
                <b-icon icon="book"></b-icon>
                </h3>
            </b-col>
        </b-row>
        <b-row class="justify-content-between">
            <div v-for="item in menuitems" class="item mt-4">
                <div class="image">
                    <img v-bind:src="`src/assets/images/${item.img}.jpg`">
                    <p>{{item.delivery_time}}</p>
                </div>
                <h4>{{item.name}}</h4>
                <div class="d-flex">
                    <b-icon icon="x-diamond-fill"></b-icon>
                    <p class="mr-3"><strong>{{item.rating}}</strong></p>
                    <p>{{item.cost}}</p>
                </div>
            </div>

        </b-row>
    </b-container>
</template>

<script>
import '../assets/css/home.scss'
import meals from '../assets/json/meals.json'
console.log(meals)
export default {
    name: "Home",
    data: function(){ 
        return {
            menuitems: meals
        }
     }
}
</script>
