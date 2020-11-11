<template>
    <div id="category2">
        <ul class="ul2">
            <li class="li2" >
                <a href="https://www.naver.com">
                   식사류
                </a>
            </li>
            <li class="li2">
                <a href="https://www.naver.com">
                    면류
                </a>
            </li>
            <li class="li2">
                <a href="https://www.naver.com">
                    사이드
                </a>
            </li>
            <li class="li2">
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
 @import url('https://fonts.googleapis.com/css2?family=East+Sea+Dokdo&display=swap');
    #category2 {
        font-family: 'East Sea Dokdo', cursive;
    }

    .ul2 {
        list-style-type:none;
        padding-left: 0px;

        padding: 1px 5px 5px 1px;
    }

    .ul2 .li2 {
        display:inline;
        font-size: 25px;
        border-left : 1px solid #c0c0c0;
        padding: 0px 10px 0px 10px;
        margin: 5px 0px 5px 0px;
        float: left;
    
    }



    .ul2 .li2 a {
        color: black;
        text-decoration:none;

    }

    .ul2 .li2 a:hover {
        color: yellow;
        border-bottom: 1px solid yellow;
    }

    .ul2 .li2:first-child {
        border-left: none;
    }

</style>