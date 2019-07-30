import React from 'react'
import { withStyles } from '@material-ui/core/styles/index'

const styles = {
  counterWrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  input: {
    width: '40px',
    border: '1px solid #ccc',
    borderRadius: '3px',
    margin: '0 10px',
    height: '20px'
  },
  button: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: 'transparent',
    border: '1px solid #ccc',
    fontSize: '20px',
    color: '#707070',
    cursor: 'pointer'
  }
}

class Counter extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            currentValue: 1
        }
    }
   
    setNewValue = ({ target: value }) => {
        this.setState({
            currentValue : value
        })
    }
 
  onIncrement = () => {    
    this.setState({
        currentValue: this.state.currentValue + 1
    })
  }

  onDecrement = () => {
    this.setState({
        currentValue: this.state.currentValue - 1
    })
  }

  render(){
    const { classes } = this.props

    return (
            <div className={ classes.counterWrapper }>
            <button
                className={ classes.button }
                onClick={ this.onIncrement }>+</button>
            <input
                className={ classes.input }
                type="number"
                value={ this.state.currentValue }

                products

                onChange={ this.setNewValue }
            />
            <button
                className={ classes.button }
                onClick={ this.onDecrement }>-</button>
            </div>
        )
  }
}

export default withStyles(styles)(Counter)
