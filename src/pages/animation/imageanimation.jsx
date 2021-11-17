import {View , Image} from '@tarojs/components'
import './index.scss'
import image from '../../image/f95573131fb8cbbd7725f6b868e180b5.gif'

function Index() {

  return (
    <View className='index height100 backFFF'>
      <View className='pos-absolute marginT104 width276 height1 background-color-3A99FE'></View>
      <View className='pos-absolute marginT104 height272 width1 background-color-3A99FE margin-l102'></View>
      <View className='pos-absolute marginT376 width558 height1 background-color-3A99FE margin-l102'></View>
      <Image src={image} className='pos-absolute img-80 animation_gif' />
    </View>
  )
}

export default Index
