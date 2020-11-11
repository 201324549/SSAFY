<template>
    <div class="category8">
        <ul v-for ="category in categoryList" :key="category.id" class="tab_menu_container" >
            <button :id="category.id" class="btn8" type="button" @click="clickmenu(category.id)">
                {{category.name}}
            </button>
        </ul>

    </div>
</template>

<script>
export default {
    data() {
        return {
            categoryList : 
            [ 
                {id: 1, name: '한식'},
                {id: 2, name: '일식'},
                {id: 3, name: '중식'},
                {id: 4, name: '양식'},
            
            ],

        }
    }

    ,
    methods: {
        clickmenu(num) {
            document.getElementById(num).style.color = "#03cf5d";
            document.getElementById(num).style.borderBottom = "2px solid #03cf5d";
            for(var i = 1; i <= this.categoryList.length; i++){
                if(num == i){
                    continue;
                }
                document.getElementById(i).style.color = "black";
                document.getElementById(i).style.border = "0px";
            }
        }
    },

    mounted() {
        document.getElementById(1).style.color = "#03cf5d" ;
        document.getElementById(1).style.borderBottom = "2px solid #03cf5d";
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Song+Myung&display=swap');
    .category8 {
        font-family: 'Song Myung', serif;
        font-size : 15px;
    }

   

</style>