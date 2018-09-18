import nav from '@/store/homedata.js';

export default {
    state:{
        headTabIndex:0,
        isSelfJump:false,
        typeId:0,
        typesubId:0,
        headTabTitle:'',
        index:0,
        clist:0,
        homedatas:nav.navdata,
        navindex:0,//选择首页组件
        checkindex:0,//首页导航高亮
        dataindex:'',
        listcontent:[nav.licontent1,nav.licontent2,nav.licontent3], // 热门事项 按主题分类 按特定对象分类 数据

    },
    mutations:{
        changeheadTabIndex(state,payload){
            state.headTabIndex+=payload.count;
        },
        changeTabIndex(state,payload){
        state.headTabIndex=payload.count;
      },
        getTypeid(state,payload){
            state.typeId=payload.id
           
        },
        getTypesubid(state,payload){
        
            state.typesubId=payload.sid
        },
        getTabTitle(state,payload){
            state.headTabTitle=payload.title
        },
    //     HOME_DATA: (state, datas) => {
    //         state.homedatas = datas;
    // },
        listengo(state,payload){
            state.navindex=payload.sindex
            state.dataindex=payload.dataindex
        },
        changecheckindex(state,payload){
            state.checkindex=payload.index
        }
        
    },
    actions:{
        getHomedata: (context) => {
            var getp= async function(){
                let data = await navdata;
                context.commit('HOME_DATA', data);
            }
            getp()
        },



    },
    getters:{}
}

