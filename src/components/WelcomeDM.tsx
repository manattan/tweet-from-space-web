import React from 'react'
import SendDMModal from './SendDMModal'

type ownProps = {
    isJapan: boolean
}

type Props = ownProps

const WelcomeDM:React.FC<Props> = (props: Props) => {
    let isOpenDMModal = false

    const open = () => {
        isOpenDMModal = true
    }

    if (props.isJapan) {
        return (
            <div>
                <button onClick={open}>ISSにメッセージを送ってみよう</button>
                <SendDMModal isOpen={isOpenDMModal} />
            </div>
        )
    }

    else {
        return null
    }
}

export default WelcomeDM