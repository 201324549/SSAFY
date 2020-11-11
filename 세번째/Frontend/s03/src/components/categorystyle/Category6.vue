<template>
    <div id="category6">
        <ul class="ul6">
            <li class="li6" >
                <a href="https://www.naver.com">
                   파스타
                </a>
            </li>
            <li class="li6">
                <a href="https://www.naver.com">
                    식사류
                </a>
            </li>
            <li class="li6">
                <a href="https://www.naver.com">
                    주류
                </a>
            </li>
            <li class="li6">
                <a href="https://www.naver.com">    
                    Pizza
                </a>
            </li>
            <li class="li6">
                <a href="https://www.naver.com">    
                    Salad
                </a>
            </li>
            <li class="li6">
                <a href="https://www.naver.com">    
                    Side
                </a>
            </li>
            <li class="li6">
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
    #category6 {
        font-family: 'Song Myung', serif;
    }

    .ul6 {
        list-style-type:none;
        padding-left: 0px;

        padding: 1px 5px 5px 1px;
    }

    .ul6 .li6 {
        display:inline;
        font-size: 20px;
        padding: 10px 5px 10px 5px;
        margin: 5px 0px 5px 0px;
        text-align: center;
        background-color: black;
        border-radius: 15px;
        border: 8px outset #CDD4D4;
        margin-right : 10px;
    }

    .ul6 .li6 a {
        color: #0BEFE2;
        width : 90px;
        text-decoration:none;
        display: inline-block;
    }

    

    .ul6 .li6:hover {
        background:radial-gradient(#ccc, #000);
    }

    

    

</style>