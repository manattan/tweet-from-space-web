import React from 'react'

type ownProps = {
    isJapan: boolean
}

type Props = ownProps

class WelcomeDM extends React.Component<Props>{
    render () {
        if (this.props.isJapan) {
            return (
                <div></div>
            )
        }
        else {
            return null
        }
    }
}

export default WelcomeDM