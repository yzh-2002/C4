// 默认网络topo
import {NetworkType} from "../network/network"
const network:NetworkType ={
    id:'0001',
    remark:"实验测试网络用例",
    hosts:[
        {
            id:"h1a", //网络名称
            ip:"2001:1:1::a/64", //ipv6地址
            port:"00:00:00:00:00:1A" //主机mac地址（相当于其标识符？？）
        },
        {
            id:"h1b", 
            ip:"2001:1:1::b/64", 
            port:"00:00:00:00:00:1B" 
        },
        {
            id:"h1c", 
            ip:"2001:1:1::c/64", 
            port:"00:00:00:00:00:1C" 
        },
        {
            id:"h2", 
            ip:"2001:1:2::1/64", 
            port:"00:00:00:00:00:20" 
        },
        {
            id:"h3", 
            ip:"2001:2:3::1/64", 
            port:"00:00:00:00:00:30" 
        },
        {
            id:"h4", 
            ip:"2001:2:4::1/64", 
            port:"00:00:00:00:00:40" 
        },
        {
            id:"h5", 
            ip:"2001:3:1::5/64", 
            port:"00:00:00:00:00:50" 
        },
        {
            id:"h6", 
            ip:"2001:3:1::6/64", 
            port:"00:00:00:00:00:60" 
        },
        {
            id:"h7", 
            ip:"2001:4:1::7/64", 
            port:"00:00:00:00:00:70" 
        },
        {
            id:"h8", 
            ip:"2001:4:1::8/64", 
            port:"00:00:00:00:00:80" 
        },
    ],
    switches:[
        {
            id:"device:leaf1",
            port0:"2001:1:1::ff/64", //交换机端口ip
            port1:'2001:1:1:ff/64',
            port2:"2001:1:1::ff/64",
            port3:"2001:1:2::ff/64"
        },
        {
            id:'device:leaf2',
            port0:'2001:2:3::ff/64',
            port1:'2001:2:4::ff/64',
            port2:"",
            port3:""
        },
        {
            id:'device:leaf3',
            port0:'2001:3:1::ff/64',
            port1:'2001:3:2::ff/64',
            port2:"",
            port3:""
        },
        {
            id:'device:leaf4',
            port0:'2001:4:1::ff/64',
            port1:'2001:4:2::ff/64',
            port2:"",
            port3:""
        },
        {
            id:'device:spine1',
            port0:'',
            port1:'',
            port2:"",
            port3:""
        },
        {
            id:'device:spine2',
            port0:'',
            port1:'',
            port2:"",
            port3:""
        },
    ],
    links:[
        {
            id:"link01", //自命名
            bandWidth:100, //默认全是100Mb
            end1node:"device:leaf1", 
            end1port:"",
            end2node:"device:spine1",
            end2port:""
        },
        {
            id:"link02", 
            bandWidth:100, 
            end1node:"device:leaf2", 
            end1port:"",
            end2node:"device:spine1",
            end2port:""
        },
        {
            id:"link03", 
            bandWidth:100, 
            end1node:"device:leaf2", 
            end1port:"",
            end2node:"device:spine2",
            end2port:""
        },
        {
            id:"link04", 
            bandWidth:100, 
            end1node:"device:leaf1", 
            end1port:"",
            end2node:"device:spine2",
            end2port:""
        },
        {
            id:"link05", 
            bandWidth:100, 
            end1node:"h1a", 
            end1port:"",
            end2node:"device:leaf1",
            end2port:"" //不用考虑端口是哪个，没有必要（？？？）
        },
        {
            id:"link06", 
            bandWidth:100, 
            end1node:"h1b", 
            end1port:"",
            end2node:"device:leaf1",
            end2port:""
        },
        {
            id:"link07", 
            bandWidth:100, 
            end1node:"h1c", 
            end1port:"",
            end2node:"device:leaf1",
            end2port:""
        },
        {
            id:"link08", 
            bandWidth:100, 
            end1node:"h2", 
            end1port:"",
            end2node:"device:leaf1",
            end2port:""
        },
        {
            id:"link09", 
            bandWidth:100, 
            end1node:"h3", 
            end1port:"",
            end2node:"device:leaf2",
            end2port:""
        },
        {
            id:"link10", 
            bandWidth:100, 
            end1node:"h4", 
            end1port:"",
            end2node:"device:leaf2",
            end2port:""
        },
        {
            id:"link11", 
            bandWidth:100, 
            end1node:"h5", 
            end1port:"",
            end2node:"device:leaf3",
            end2port:""
        },
        {
            id:"link12", 
            bandWidth:100, 
            end1node:"h6", 
            end1port:"",
            end2node:"device:leaf3",
            end2port:""
        },
        {
            id:"link13", 
            bandWidth:100, 
            end1node:"h7", 
            end1port:"",
            end2node:"device:leaf4",
            end2port:""
        },
        {
            id:"link14", 
            bandWidth:100, 
            end1node:"h8", 
            end1port:"",
            end2node:"device:leaf4",
            end2port:""
        },
        {
            id:"link15", 
            bandWidth:100, 
            end1node:"device:spine1", 
            end1port:"",
            end2node:"device:leaf3",
            end2port:""
        },
        {
            id:"link16", 
            bandWidth:100, 
            end1node:"device:spine2", 
            end1port:"",
            end2node:"device:leaf4",
            end2port:""
        },
        {
            id:"link17", 
            bandWidth:100, 
            end1node:"device:spine2", 
            end1port:"",
            end2node:"device:spine1",
            end2port:""
        },
    ]
}

// 由于network的数据结构已经设置好，在进行改动太麻烦，所以为了补充之前未涉及到的信息，就多设一个数据结构进行存储
const additionalInfo ={
    '0001':{
        hosts:{
            'h1a':{
                gw:"2001:1:1::ff" //默认网关
            },
            'h1b':{
                gw:"2001:1:1::ff"
            },
            'h1c':{
                gw:"2001:1:1::ff"
            }, 
            'h2':{
                gw:"2001:1:2::ff"
            }, 
            'h3':{
                gw:"2001:2:3::ff"
            }, 
            'h4':{
                gw:"2001:2:4::ff"
            },
            'h5':{
                gw:"2001:3:1::ff"
            },
            'h6':{
                gw:"2001:3:1::ff"
            },
            'h7':{
                gw:"2001:4:1::ff"
            },
            'h8':{
                gw:"2001:4:1::ff"
            },
        },
        switches:{
            'device:leaf1':{
                sid:"3:101:2::", //SRV6中使用
                mac:"00:aa:00:00:00:01", //用于标识交换设备
                manage:"grpc://mininet:50001?device_id=1",
                driver:"stratum-bmv2",
                isSpine:false
            },
            'device:leaf2':{
                sid:"3:102:2::", 
                mac:"00:aa:00:00:00:02",
                manage:"grpc://mininet:50002?device_id=1",
                driver:"stratum-bmv2",
                isSpine:false 
            },
            'device:leaf3':{
                sid:"3:301:2::", 
                mac:"00:aa:00:00:00:03",
                manage:"grpc://mininet:50003?device_id=1",
                driver:"stratum-bmv2",
                isSpine:false 
            },
            'device:leaf4':{
                sid:"3:302:2::", 
                mac:"00:aa:00:00:00:04",
                manage:"grpc://mininet:50004?device_id=1",
                driver:"stratum-bmv2",
                isSpine:false 
            },
            'device:spine1':{
                sid:"3:201:2::", 
                mac:"00:bb:00:00:00:01",
                manage:"grpc://mininet:50003?device_id=1",
                driver:"stratum-bmv2",
                isSpine:true 
            },
            'device:spine2':{
                sid:"3:202:2::", 
                mac:"00:bb:00:00:00:02",
                manage:"grpc://mininet:50004?device_id=1",
                driver:"stratum-bmv2",
                isSpine:true
            },
        },
        links:{
            // 每条链路的时延信息
            'link01':{
                delayTime:4,
                payload:1544,
            },
            'link02':{
                delayTime:2,
                payload:1936,
            },
            'link03':{
                delayTime:3,
                payload:1720,
            },
            'link04':{
                delayTime:2,
                payload:1936,
            },
            'link05':{
                delayTime:2,
                payload:1552,
            },
            'link06':{
                delayTime:2,
                payload:1720,
            },
            'link07':{
                delayTime:5,
                payload:1544,
            },
            'link08':{
                delayTime:2,
                payload:1552,
            },
            'link09':{
                delayTime:5,
                payload:2343,
            },
            'link10':{
                delayTime:6,
                payload:2196,
            },
            'link11':{
                delayTime:3,
                payload:2531,
            },
            'link12':{
                delayTime:4,
                payload:3011,
            },
            'link13':{
                delayTime:14,
                payload:2734,
            },
            'link14':{
                delayTime:3,
                payload:2053,
            },
            'link15':{
                delayTime:4,
                payload:2341,
            },
            'link16':{
                delayTime:7,
                payload:2831,
            },
            'link17':{
                delayTime:4,
                payload:1200,
            }
        }
    }
}

export {network,additionalInfo}