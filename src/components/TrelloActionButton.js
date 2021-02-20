import { Button, Card, Icon } from "@material-ui/core";
import React from "react";
import TextareaAutosize from 'react-textarea-autosize';

class TrelloActionButton extends React.Component{

    state={
        openForm: false,
        text: ''
    }

    renderAddButton = () =>{
        const {list} = this.props
        const buttonText = list ? 'Add another list' : 'Add another list'
        const buttonTextOpacity = list ? 1 : 0.5
        const buttonTextColor = list ? 'white' : 'inherit'
        const buttonTextBackground = list ? 'rgba(0,0,0,.15)' : 'inherit'
        return(
            <div style={{
                ...styles.openForDataGroup,
                opacity: buttonTextOpacity,
                color: buttonTextColor,
                background: buttonTextBackground,
            }} onClick={this.openForm}>
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    }

    openForm = () =>{
        this.setState({
            openForm: true
        })
    }

    closeForm = () =>{
        this.setState({
            openForm: false
        })
    }
    handleInputChange = (e) =>{
        this.setState({
            text: e.target.value
        })
    }

    renderForm =()=>{
        const { list } = this.props
        const placeHolder = list ? 'Enter list title' : 'Enter title for this card...'
        const buttontitle = list ? 'Add List' : 'Add Title'
        return(
            <div>
                <Card style = {{
                    minHeight: 80,
                    minWidth: 272,
                    padding: '6px 8px 2px'
                }}>
                    <TextareaAutosize style = {{
                        resize: 'none',
                        width: '100%',
                        outline: 'none',
                        border: 'none',
                        overflow:'hidden'
                    }} autoFocus onBlur={this.closeForm} placeHolder={placeHolder} value={this.state.text} onChange={this.handleInputChange}/>
                </Card>
                <div style={styles.formButtonGroup}>
                <Button variant='contained' style={{
                    color: 'white',
                    backgroundColor: '#5acc44' 
                }}>{buttontitle}{' '}</Button>
                <Icon style={{marginLeft: 8, cursor: 'pointer'}}>close</Icon>
                </div>
            </div>
        )
    }

    render(){
        return this.state.openForm ? this.renderForm() : this.renderAddButton()
    }
}

const styles = {
    openForDataGroup: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft: 10
    },
    formButtonGroup: {
        marginTop: 8,
        display: 'flex',
        alignItems: 'center'
    }
}

export default TrelloActionButton