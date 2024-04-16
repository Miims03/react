import { useState } from 'react'
import { Layout , Button} from 'antd'
import Logo from './components/Logo'
import MenuList from './components/MenuList'
import ThemeBtn from './components/ThemeBtn'
import { MenuOutlined , MenuUnfoldOutlined , MenuFoldOutlined} from '@ant-design/icons'

const {Header,Sider} = Layout


function App() {

const [darkTheme, setDarkTheme] = useState(true)
const [collaps, setCollaps] = useState(false)

const toggleTheme = () => {
  setDarkTheme(!darkTheme)
}

  return (
    <Layout>
      <Sider 
      theme={darkTheme ? 'dark' : 'light'} 
      className='sidebar'>
        <Logo />
        <MenuList darkTheme={darkTheme} />
        <ThemeBtn darkTheme={darkTheme} toggleTheme={toggleTheme}/>
      </Sider>
      <Layout>
        <Header>
          <Button 
            type='text' 
            icon={collaps ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} 
          />
        </Header>
      </Layout>
    </Layout>
  )
}

export default App
