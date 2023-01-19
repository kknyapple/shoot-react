import React from "react"

import styled from "styled-components"

import Div from "../basic/Div"
import Img from "../basic/Img"

import {IconText} from "./IconText"

const SeeMoreIcon = styled(Div)`
  &:hover {
    background-color: #EEEEEE;
  }
`

const SeeMore = props => {
    const parent = props.parent
    const parentInfo = props.parentInfo

    const clickShareEvent = () => {
        alert(`${parentInfo}이 url을 복사함`)
        console.log("click")
        // alert 대신에 나중에 url 복사하는 기능으로 바꿔야함
    }

    const moveModifyEvent = () => {
        alert(`타입이 ${parent}이고 정보가 ${parentInfo}인 것을 수정하는 페이지로 이동`)
        // alert 대신에 나중에 수정 page로 이동하는 기능으로 바꿔야함
    }
    const clickModifyEvent = () => {
        document.getElementById(`modify_${parent}_${parentInfo}`).style.display = "flex";
    }

    const deleteEvent = () => {
        alert(`타입이 ${parent}이고 정보가 ${parentInfo}인 것을 삭제함`)
        // alert 대신에 나중에 삭제하는 기능으로 바꿔야함
    }
    const clickDeleteEvent = () => {
        document.getElementById(`delete_${parent}_${parentInfo}`).style.display = "flex";
    }

    const clickAlarmEvent = () => {
        alert(`타입이 ${parent}이고 정보가 ${parentInfo}인 것을 알림 ${(props.alarm ? "꺼지게 하기" : "켜지게 하기")}`)
        // alert 대신에 나중에 알림 켜짐, 꺼짐하는 기능으로 바꿔야함
    }

    const clickReportEvent = () => {
        alert(`타입이 ${parent}이고 정보가 ${parentInfo}인 것을 신고 모달 띄워줌`)
        // alert 대신에 나중에 신고모달 띄워주는 기능으로 바꿔야함
    }

    return (
        <Div width="48px" height="48px" position="relative">
            <SeeMoreIcon pointer width="100%" height="100%" display="flex" borderRadius="50%">
                <Div width="60%" height="60%"><Img src="./assets/images/dots.svg"/></Div>
            </SeeMoreIcon>
            <Div width="100px" padding="5px" display="flex" flexDirection="column" position="absolute" bottom="0"
                 left="-120px" borderRadius="5px" backgroundColor="#FFFFFF" shadow="0 4px 4px 0 rgba(0,0,0,0.35)">
                {
                    props.share && <IconText onClick={clickShareEvent} src="./assets/images/share.svg" text="공유하기"/>
                }
                {
                    props.modify &&
                    <IconText onClick={clickModifyEvent} src="./assets/images/edit.svg" text="수정하기"/>
                }
                {
                    props.delete &&
                    <IconText onClick={clickDeleteEvent} src="./assets/images/trash.svg" text="삭제하기"/>
                }
                {
                    props.alarm === true &&
                    <IconText onClick={clickAlarmEvent} src="./assets/images/bellOn.svg" text="알림켜짐"/> ||
                    props.alarm === false &&
                    <IconText onClick={clickAlarmEvent} src="./assets/images/bellOff.svg" text="알림꺼짐"/>
                }
                {
                    props.report &&
                    <IconText onClick={clickReportEvent} src="./assets/images/report.svg" text="신고하기"/>
                }
            </Div>
        </Div>
)
}

export default SeeMore