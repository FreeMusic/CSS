import {useState} from "react";
import Taro ,{useReady} from "@tarojs/taro";
import { View, Text } from '@tarojs/components'

function Index() {

  const [listData, setListData] = useState([])

  useReady(()=>{
    setListData([
      {title: '渐变色动画', routeUrl: '/pages/animation/gradient'},
      {title: '渐变色动画-多分', routeUrl: '/pages/animation/gradientelse'},
      {title: '动画的延迟', routeUrl: '/pages/animation/delay'},
      {title: '动画的循环次数', routeUrl: '/pages/animation/cycle'},
      {title: '动画的播放方向', routeUrl: '/pages/animation/direction'},
      {title: '动画的速度曲线', routeUrl: '/pages/animation/curve'},
    ])
  })

  return (
    <View className='index flex-1 flex-column'>
      {listData.map((elem)=>{
        return (<View onClick={()=>{
          Taro.navigateTo({url: elem.routeUrl})
        }} className='flex-c-c width100 backFFF marginT16'
        >
          <Text className='marginT24 margin-b24'>{elem.title}</Text>
        </View>)
      })}
    </View>
  )
}

export default Index
