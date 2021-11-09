import {useReady} from "@tarojs/taro";
import { View } from '@tarojs/components'
import './index.scss'

function Index() {

  useReady(()=>{
    console.log('111111111')
  })

  return (
    <View className='index flex-c-c height100'>
        <View className='animation_gradient'>

        </View>
    </View>
  )
}

export default Index
