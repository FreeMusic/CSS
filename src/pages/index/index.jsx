import {useState} from "react";
import Taro ,{useReady} from "@tarojs/taro";
import { View, Text } from '@tarojs/components'
import './index.scss'


function Index() {

  const [listData, setListData] = useState([])

  useReady(()=>{
    setListData([
      '动画',
    ])
  })

  return (
    <View className='index flex-1'>
      {listData.map((title)=>{
        return (<View onClick={()=>{
          Taro.navigateTo({url: '/pages/animation/index'})
        }} className='flex-c-c width100 backFFF marginT16'
        >
          <Text className='marginT24 margin-b24'>{title}</Text>
        </View>)
      })}
    </View>
  )
}

export default Index
