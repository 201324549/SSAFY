<template>
    <div id="category5">
        <ul class="ul5">
            <li class="li5" >
                <a href="https://www.naver.com">
                   파스타
                </a>
            </li>
            <li class="li5">
                <a href="https://www.naver.com">
                    식사류
                </a>
            </li>
            <li class="li5">
                <a href="https://www.naver.com">
                    주류
                </a>
            </li>
            <li class="li5">
                <a href="https://www.naver.com">    
                    Pizza
                </a>
            </li>
            <li class="li5">
                <a href="https://www.naver.com">    
                    Salad
                </a>
            </li>
            <li class="li5">
                <a href="https://www.naver.com">    
                    Side
                </a>
            </li>
            <li class="li5">
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
    #category5 {
        font-family: 'Song Myung', serif;
    }

    .ul5 {
        list-style-type:none;
        padding-left: 0px;

        padding: 1px 5px 5px 1px;
    }

    .ul5 .li5 {
        display:inline;
        font-size: 20px;
        padding: 10px 5px 10px 5px;
        margin: 5px 0px 5px 0px;
        text-align: center;
        
        border-radius: 20px;
        border: 1px solid black;
        margin-right : 10px;
    }

    .ul5 .li5 a {
        color: black;
        width : 70px;
        text-decoration:none;
        display: inline-block;
    }

    

    .ul5 .li5:hover {
        background-color: black;
        opacity: 0.5;
    }

    .ul5 .li5:hover a {
        color: red;
    }
    


    

</style>