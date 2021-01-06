import React from 'react';
// import ReactDOM from "react-dom";
import Modal from '../recruit/Modal';
import useModal from '../recruit/useModal';
import styled from 'styled-components';

const Box = ({box}) => {

    const Button = styled.button`
        width: 200px;
        height: 200px;
        border: 1px solid black;
    `;
    
    const {isShowing, toggle}= useModal();

    return(
            <div>
                <Button onClick={toggle}>
                </Button>
                <Modal
                    isShowing={isShowing}
                    hide={toggle}
                    teamName={box.name}
                    teamDesc={box.desc}
                    recruitStatus={box.status}
                />
            </div>
    );
};

const ModalList = ({...props}) => {

    const BoxComponents = styled.div`
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr;
        row-gap : 30px;
        `

    const boxs = [
        {   
            id: 1,
            body: '디지털사업팀',
            name: '디지털사업팀',
            desc: '관계사의 개발 요구를 수립하여 앱과 웹 서비스 기획 업무를 하고, 새로운 고객사를 발굴하는 등 영업 업무를 담당합니다.',
            status: '현재 채용중인 공고가 없습니다.',
            color: 'rgb(224,224,224)'
        },
        {   
            id: 2,
            body: '기획/시스템팀',
            name: '기획/시스템팀',
            desc: '시스템 운영을 관리하는 직무로 관련 개발 작업을 하고 계약을 이행합니다.',
            status: '채용공고 보러가기',
            color: 'rgb(190,190,190)'
        },

    ];

    return(
        <BoxComponents>
            <Box box={boxs[0]}/>
            <Box box={boxs[1]}/>
        </BoxComponents>
    );
}


export default ModalList;