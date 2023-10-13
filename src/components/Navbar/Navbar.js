import React, { Component } from 'react'
import logo from '../../img/logo.svg'
import logoAlt from '../../img/logo-alt.svg'
import rekl from '../../img/369638665.jpg'
import './Navbar.css'

class Navbar extends Component {
    state={ clicked: false }
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render() {
        return (
            <nav>
                <div className='header-top'>
                    <div className='rekl'>
                        <a>
                            <img src={rekl} />
                        </a>
                    </div>
                </div>
        
                <div className='header-bottom'>
                    <div className='hb-wrap'>
                        <div id='menu' onClick={this.handleClick}>
                            <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}> </i>
                        </div>
                        <div className='logo-catalog'>
                            <div className='logo'>
                                <a href='index.html'>
                                    <img src={logo} alt=''/>
                                </a>
                            </div>
                            <div id='mobile' className='logo-alt'>
                                <a href='index.html'>
                                    <img src={logoAlt} alt=''/>
                                </a>
                            </div>
        
                            <button className='catalog-button'>
                                <div className="btn-content">
                                    <i className="fa-solid fa-folder-open" />
                                    <span>Каталог</span>
                                </div>
                            </button>
                        </div>
        
                        <div className='search'>
                            <i class="fa-solid fa-magnifying-glass" />
                            <input
                                type='text'
                                placeholder='Пошук'
                                name='search'
                                className='search-input'
                            />
                        </div>
                        
                        <div className='cart'>
                            <i class="fa-sharp fa-solid fa-user"></i>
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                    </div>

                </div>
        

                
            </nav>
        ) 
    }
  
}

export default Navbar