import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import SECTIONS_DATA from './sections.data';

class Directory extends React.Component {

    constructor() {
        super();

        this.state = {
            sections: SECTIONS_DATA
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map((item) => {
                    return <MenuItem key={item.id} item={item} subtitle='Shop Now' history={this.props.history} />
                })}
            </div>
        );

    }
}

export default Directory;
