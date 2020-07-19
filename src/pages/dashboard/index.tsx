import React, { useState } from 'react';

import ComponentContainer from '../../components/container';
import Card from '../../components/card';

import { Container, DivA, DivB, DivC, DivD, DivE } from './styles';


const Dashboard = () => {


    return (
        <Container>
            <DivA>
                <Card title={'Card1'} />
                <Card title={'Card2'} />
                <Card title={'Card3'} />
                <Card title={'Card4'} />
                <Card title={'Card5'} />
                <Card title={'Card6'} />
                <Card title={'Card7'} />
                <Card title={'Card8'} />
                <Card title={'Card9'} />
                <Card title={'Card10'} />
            </DivA>
            <DivB>
                <ComponentContainer title={'DivB'} />
            </DivB>
            <DivC>
                <ComponentContainer title={'DivC'} />
            </DivC>
            <DivD>
                <ComponentContainer title={'DivD'} />
            </DivD>
            <DivE>
                <ComponentContainer title={'DivE'} />
            </DivE>
        </Container>
    );
}

export default Dashboard;