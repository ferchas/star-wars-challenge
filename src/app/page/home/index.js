import React,  { Component }  from 'react';

import Layout from '../../components/layout';
import Headlines  from '../../components/headlines';

import films from '../../services/films';

import './style.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: null,
      listFilms: null,
      closeMenu: false,
    };
    
    this.handleMenu = this.handleMenu.bind(this);
  }

  componentDidMount() {
    films().then(data => this.setState({ listFilms: data}));
  }
  
  handleMenu(){
    this.setState({ closeMenu: !this.state.closeMenu});
  }

  render() {
    return (
      <Layout>
        <div className="home-page">
          <img src="./images/menu.png" className="menu" onClick={this.handleMenu}/>
          <nav className={this.state.closeMenu? '' : 'close'}>
          </nav>
          <article>
            { 
              this.state.listFilms &&
              <Headlines listFilms={this.state.listFilms} />              
            }
          </article>
        </div>
      </Layout>
    );
  }
} 

export default Home;