import { Layout } from 'antd';
import { Header } from './../components/Header/Header';
import { Content, Footer } from 'antd/es/layout/layout';
import { contentStyle, footerStyle, headerStyle } from './style';
import { CardWrapper } from '../components/CardWrapper/CardWrapper';


export const Applayout = () => {
    return (
        <Layout>
			<Header  style={headerStyle}/>
			<Content  style={contentStyle}>
                <CardWrapper/>
            </Content>
			<Footer style={footerStyle}>Footer</Footer>
		</Layout>
    )
}