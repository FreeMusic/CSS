import { View } from '@tarojs/components'
import './index.scss'

function Index() {

  return (
      <View className='stage slop'>
          <View className='container background-color-3A99FE slop'>
            <View className='side front'>1</View>
            <View className='side back'>2</View>
            <View className='side left'>3</View>
            <View className='side right'>4</View>
            <View className='side top'>5</View>
            <View className='side bottom'>6</View>
          </View>
      </View>
  )
}

export default Index
