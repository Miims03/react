import React from 'react'
import { Menu } from 'antd'
import { 
    HomeOutlined,
    CalculatorOutlined,
    SunOutlined,
    MoneyCollectOutlined,
    BarsOutlined
} from '@ant-design/icons'

const MenuList = ({darkTheme}) => {
  return (
    <Menu 
        theme={darkTheme ? 'dark' : 'light'} 
        mode='inline' 
        className='bigMenu'>
            <Menu.Item key='home' icon={<HomeOutlined />}>
                Home
            </Menu.Item>

        {/* Optional */}

        <Menu.SubMenu 
            key='sousMenu' 
            icon={<BarsOutlined />} 
            title='Tâches'>
        <Menu.Item key='tache1'>Tâche 1</Menu.Item>   
        <Menu.Item key='tache2'>Tâche 2</Menu.Item>       
        </Menu.SubMenu>

        {/* Optional */}

        <Menu.Item key='calculator' icon={<CalculatorOutlined />}>
            Calculator
        </Menu.Item>
        <Menu.Item key='weather' icon={<SunOutlined />}>
            Weather
        </Menu.Item>
        <Menu.Item key='convertor' icon={<MoneyCollectOutlined />}>
            Convertor
        </Menu.Item>
    </Menu>
  )
}

export default MenuList