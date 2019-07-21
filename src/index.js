import React from 'react'
import ReactDOM from 'react-dom'
import Grid from '@material-ui/core/Grid';
import axios from 'axios'
import Item from './components/item/item'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      products: []
    }
  }

  componentDidMount(){
    const self = this

    axios.get('/mock/products.json')
      .then(function (response) {
        self.setState({
          products: response.data.products
        })
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  render(){
    const { classes } = this.props;

    return (<div>
      <Grid container spacing={1}>
        { 
          this.state.products.map((item) => {
            return <Grid container item xs={3} spacing={0}>
              <Item product={item}/>
            </Grid>
          })
        }
      </Grid>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
