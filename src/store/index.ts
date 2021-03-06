import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

import {NetworkType} from "@/object/network/network"
import {network,additionalInfo} from "@/object/data/defaultNetwork"

export interface State{
  networks:{
    [index:string]:NetworkType
  },
  addtionalInfo:{
    [index:string]:any;
  },
  hasNet:boolean
}

// 定义mutations
export const mutations ={
    // 添加网络
    addNetwork(state:State,{id,network}:any){
        state.networks[id] =network;
        // 将'new'清空，便于下一次创建
        state.networks['new'] ={
          id:"",
          remark:'',
          hosts:[
            {
              id:'',
              ip:'',
              port:''
            }
          ],
          switches:[
            {
              id:"",
              port0:'',
              port1:'',
              port2:'',
              port3:''
            }
          ],
          links:[
            {
              id:'',
              bandWidth:0,
              end1node:'',
              end1port:'',
              end2node:'',
              end2port:''
            }
          ]
        }
    },
    // 向网络中的某一元素列表添加元素
    addElement(state:State,{id,element,elementObj}:any){
        // elementObj就是要添加的element
        (state.networks[id][element as keyof NetworkType] as Array<any>).push(elementObj)
    },
    setIsNet(state:State){
      state.hasNet =true
    }
}

// 定义getters
export const getters ={
    // 获取登录状态
    isNet:(state:State)=>{
      return state.hasNet;
    },
    // 获取网络列表
    getNetworks:(state:State)=>{
      return state.networks
    },
    // 获取指定id的网络
    getNetwork:(state:State)=>(id:string)=>{
        return state.networks[id]
    },
    // 获取指定id的网络额外信息
    getAdditionInfo:(state:State)=>(id:string)=>{
      return state.addtionalInfo[id]
    },
    getElementList:(state:State)=>(element:string)=>{
      // 长度
      const length =(state.networks['new'][element as keyof NetworkType] as Array<any>).length
      return (state.networks['new'][element as keyof NetworkType] as Array<any>)[length-1];
    }

}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    networks:{
      'new':{
        id:'new', 
        remark:"",
        'hosts':[],
        'switches':[],
        'links':[]
      },
      '0001':network
    },
    addtionalInfo:{
      '0001':additionalInfo
    },
    hasNet:false, //用于检测是否登录
  },
  getters:getters,
  mutations:mutations as any
})

// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return baseUseStore(key)
}