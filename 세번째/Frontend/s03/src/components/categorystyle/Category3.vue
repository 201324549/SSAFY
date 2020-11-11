<template>
    <div id="category3">
        <ul class="ul3">
            <li class="li3" >
                <a href="https://www.naver.com">
                   식사류
                </a>
            </li>
            <li class="li3">
                <a href="https://www.naver.com">
                    면류
                </a>
            </li>
            <li class="li3">
                <a href="https://www.naver.com">
                    사이드
                </a>
            </li>
            <li class="li3">
                <a href="https://www.naver.com">    
                    음료
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
@import url('https://fonts.googleapis.com/css2?family=Sunflower:wght@500&display=swap');   #category3 {
        font-family: 'Sunflower', sans-serif;
    }

    .ul3 {
        list-style-type:none;
        padding-left: 0px;

        padding: 1px 5px 5px 1px;
    }

    .ul3 .li3 {
        display:inline;
        font-size: 25px;
        border-left : 1px solid #c0c0c0;
        padding: 0px 10px 0px 10px;
        margin: 5px 0px 5px 0px;
        float: left;
    
    }



    .ul3 .li3 a {
        color: black;
        text-decoration:none;

    }

    .ul3 .li3 a:hover {
        color: yellow;
        border-bottom: 1px solid yellow;
    }

    .ul3 .li3:first-child {
        border-left: none;
    }

</style>