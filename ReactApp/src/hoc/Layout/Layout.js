import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import ControlBar from '../../components/ControlBar/ControlBar';
import { debounce } from 'lodash';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    searchTextChanged = debounce((value) => {
        this.props.onFilterUpdate({
            text: value
        });  
    }, 250)

    searchStatusChanged = (value) => {
        this.props.onFilterUpdate({
            status: value
        });  
    }

    render () {
        return (
            <div className={classes.Wrapper}>
                <Toolbar
                    isAuth={this.props.isAuthenticated}
                    drawerToggleClicked={this.sideDrawerToggleHandler} />              
                <main className={classes.Content}>
                    <ControlBar 
                        onSearchTextChanged={(e) => this.searchTextChanged(e.target.value)}
                        onSearchStatusChanged={(e) => this.searchStatusChanged(e.target.value)} />
                    {this.props.children}
                </main>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFilterUpdate: (filterObject) => dispatch( actions.setFilter(filterObject))
    };
};

const mapStateToProps = state => {
    return {
       
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Layout );