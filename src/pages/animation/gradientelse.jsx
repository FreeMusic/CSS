import {useReady} from "@tarojs/taro";
import { View } from '@tarojs/components'
import './index.scss'

function Index() {

  useReady(()=>{
    console.log('111111111')
  })

  return (
    <View className='index height100'>
      <View className='animation_gradient_else_cut'>

      </View>
    </View>
  )
}

export default Index
