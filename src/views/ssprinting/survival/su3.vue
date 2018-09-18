<template>
    <div>
        <div class="su-pup">
            <h1>以下信息查验一致</h1>
        <div class="su-list">
            <ul>
                <li>姓名：SSX</li>
                <li>参保地：</li>
                <li>社会保障号：</li>
            </ul>
        </div>
        </div>
        <div></div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.su-pup{
    width:720px;
    height:290px;
    background:rgba(246,246,246,1);
    border:1px solid rgba(221,221,221,1);
    border-radius:20px;
    margin: 160px auto 0 auto ;
    h1{
        font-size: 32px;
        color: #333;
        height: 70px;
        line-height: 70px;
        width: 80%;
        margin: 0 auto;
        border-bottom: 1px solid #ccc;
    }
    }
    .su-list{
        width: 80%;
        margin: 30px auto 0 auto;
        li{
            float: left;
            font-size: 28px;
            color: #333;
            width: 100%;
            text-align: left;
            line-height: 50px;
        }
    }
    
</style>
