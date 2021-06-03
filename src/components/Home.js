import React from 'react'
import Section from './Section';
import styled from 'styled-components';

export default function Home() {
    return (
        <Container>
            <Section  
            title="Model S"
            description="Order Online For Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftButtonText="custom order"
            rightButtonText="Existing Inventory"
            
            />
            
            <Section  
            title="Model Y"
            description="Order Online For Touchless Delivery"
            backgroundImg="model-y.jpg"
            leftButtonText="custom order"
            rightButtonText="Existing Inventory"
            
            />
            <Section  
            title="Model 3"
            description="Order Online For Touchless Delivery"
            backgroundImg="model-3.jpg"
            leftButtonText="custom order"
            rightButtonText="Existing Inventory"
            
            />
              <Section  
            title="Model X"
            description="Order Online For Touchless Delivery"
            backgroundImg="model-x.jpg"
            leftButtonText="custom order"
            rightButtonText="Existing Inventory"
            
            />
            <Section  
            title="Lowest Cost Solar Panels in America"
            description="Money-Back guarantee"
            backgroundImg="solar-panel.jpg"
            leftButtonText="order now"
            rightButtonText="Learn more"
            
            />
            <Section  
            title="Solar for New Roofs"
            description="Solar Room Costs Less Than New Roof"
            backgroundImg="solar-roof.jpg"
            leftButtonText="order now"
            rightButtonText="Learn more"
            
            />
             <Section  
            title="Accessories"
            description=""
            backgroundImg="accessories.jpg"
            leftButtonText="shop now"
           
            
            />
          
        </Container>
    )
}
 const Container = styled.div`
    height: 100vh;
 `