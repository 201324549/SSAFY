<template>
    <div class="category7">
        <div v-for ="category in categoryList" :key="category.id" class="tab_menu_container" >
            <button :id="category.id" class="tab_menu_btn" type="button" @click="clickmenu(category.id)">
                {{category.name}}
            </button>
        </div>

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
            document.getElementById(num).style.borderTop = "2px solid black";
            document.getElementById(num).style.borderLeft = "2px solid black";
            document.getElementById(num).style.borderRight = "2px solid black";
            document.getElementById(num).style.backgroundColor = "#ece6cc" ;
            for(var i = 1; i <= this.categoryList.length; i++){
                if(num == i){
                    continue;
                }
                document.getElementById(i).style.color = "#292927";
                document.getElementById(i).style.border = "0px";
                document.getElementById(i).style.backgroundColor = "white";
            }
        }
    },

    mounted() {
        document.getElementById(1).style.backgroundColor = "#ece6cc" ;
        document.getElementById(1).style.borderTop = "2px solid black";
        document.getElementById(1).style.borderLeft = "2px solid black";
        document.getElementById(1).style.borderRight = "2px solid black";
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Gugi&display=swap');

    .category7{
        font-family: 'Gugi', cursive;
        font-size: 15px;
    }

    button {
        background : none;
        border: 0;
        outline: 0;
        cursor:pointer;
    }
    .tab_menu_container {
        display: flex;
        float:left;
    }
    .tab_menu_btn {
        width: 100px;
        height: 40px;
        transition: 0.3s all;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
    }
    .tab_menu_btn.hover {
        color: red;
    }

    button:focus {
        outline: none !important
    }

</style>