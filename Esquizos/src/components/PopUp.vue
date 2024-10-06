<template>
<div class="pop-up">
    <div class ="pop-up-inner">
        <div class ="pop- up-close" @click="closePopUp()">
            &times;

        </div>
        <h1>
            Hello from my vue pop up
        </h1>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium illum dicta, vel quia temporibus non, possimus consectetur sit iusto maxime ad natus, labore officia minus optio ipsam inventore consequuntur. Saepe!
        </p>

        <p> 
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores sint commodi excepturi molestias saepe praesentium corporis asperiores, fugit quis est animi cupiditate nisi eligendi ad omnis reprehenderit dolorem voluptatum. Amet!
        </p>
    <button class = "btn" @click="closePopUp()">
        Close pop up 
        

    </button>

</div>

</div>
</template>

<script>
export default{

    name: 'PopUp',
    methods: {
        closePopUp(){
            this.$emit('close');
        }
    }

}
</script>

<style lang="scss">
.pop-up{
    position: fixed;
    top: 0;
    left: 0;
    z-index:10 ;
    padding: 32px 16px 120px;
    height: 100vh;
    width: 100%;
    background-color: rgba($color:#52a07e, $alpha: 0.5);
    display: grid;
    place-items: center;

    &-close{
        position: absolute;
        height: 52px;
        width: 52px;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        right: 0;
        font-size: 3rem;
        color: #d6d6d6;
        cursor: pointer;

    }

    &-inner{
        background-color: #fff;
        color: #000;
        position: relative;
        width: 60%;
        padding: 40px;
        border-radius: 8px;
        box-shadow: 0 5px 5px rgba($color: #000, $alpha: 0.2);
    }

}

</style>
