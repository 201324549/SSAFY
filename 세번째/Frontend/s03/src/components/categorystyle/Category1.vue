<template>
    <div id="category1">
        <ul class="ul1">
            <li class="li1" >
                <a href="https://www.naver.com">
                   식사류
                </a>
            </li>
            <li class="li1">
                <a href="https://www.naver.com">
                    면류
                </a>
            </li>
            <li class="li1">
                <a href="https://www.naver.com">
                    사이드
                </a>
            </li>
            <li class="li1">
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
@import url('https://fonts.googleapis.com/css2?family=Gaegu:wght@700&display=swap');

    #category1 {
        font-family: 'Gaegu', cursive;
    }

    .ul1 {
        list-style-type:none;
        padding-left: 0px;

        padding: 1px 5px 5px 1px;
    }

    .ul1 .li1 {
        display:inline;
        font-size: 35px;
        border-left : 1px solid #c0c0c0;
        padding: 0px 10px 0px 10px;
        margin: 5px 0px 5px 0px;
        float: left;
    
    }

    .ul1 .li1 a {
        color: black;
        text-decoration:none;

    }

    .ul1 .li1 a:hover {
        color: yellow;
        border-bottom: 1px solid yellow;
    }

    .ul1 .li1:first-child {
        border-left: none;
    }

</style>