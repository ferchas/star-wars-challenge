import React,  { Component }  from 'react';

import Layout from '../../components/layout';
import Headlines  from '../../components/headlines';

import './style.css';

class character extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  
  }

  render() {
    return (
      <Layout>
        <div className="character-page">
          <aside>
            <h3>Filter</h3>
            <p></p>
          </aside>
          <article>
            { 
              this.state.headlines && this.state.headlines.articles &&
              <Headlines articles={this.state.headlines.articles} />              
            }
          </article>
        </div>
      </Layout>
    );
  }
} 

export default character;