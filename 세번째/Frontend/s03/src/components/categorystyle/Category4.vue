<template>
    <div id="category4">
        <ul class="ul4">
            <li class="li4" >
                <a href="https://www.naver.com">
                   Pasta
                </a>
            </li>
            <li class="li4">
                <a href="https://www.naver.com">
                    Steak
                </a>
            </li>
            <li class="li4">
                <a href="https://www.naver.com">
                    Pilau
                </a>
            </li>
            <li class="li4">
                <a href="https://www.naver.com">    
                    Pizza
                </a>
            </li>
            <li class="li4">
                <a href="https://www.naver.com">    
                    Salad
                </a>
            </li>
            <li class="li4">
                <a href="https://www.naver.com">    
                    Side
                </a>
            </li>
            <li class="li4">
                <a href="https://www.naver.com">    
                    Drink
                </a>
            </li>
        </ul>
    </div>


</template>

<script>
export default {
    
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Song+Myung&display=swap');
    #category4 {
        font-family: 'Song Myung', serif;
    }

    .ul4 {
        list-style-type:none;
        padding-left: 0px;

        padding: 1px 5px 5px 1px;
    }

    .ul4 .li4 {
        display:inline;
        font-size: 25px;
        padding: 0px 10px 0px 10px;
        margin: 5px 0px 5px 0px;
        float: left;
        width : 100px;
        border-bottom: 1px solid black;
    
    }

    .ul4 .li4 a {
        color: black;
        text-decoration:none;

    }

    .ul4 .li4 a:hover {
        color: red;
    }
    

    

</style>