import React from 'react'

type ownProps = {
    isJapan: boolean
}

type Props = ownProps

class WelcomeDM extends React.Component<Props>{
    render () {
        if (!this.props.isJapan) {
            return (
                <div>
                    <button>ISSにメッセージを送ってみよう!</button>
                </div>
            )
        }
        else {
            return null
        }
    }
}

export default WelcomeDM