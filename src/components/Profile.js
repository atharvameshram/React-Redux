import React from 'react';
import { connect } from 'react-redux';

const Profile = ({ modelName }) => {
    return (
        <div>
            <h2>Profile Page</h2>
            <p>This is the profile page content.</p>
            <p>Model Name: {modelName}</p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        modelName: state.modelName,
    };
};

export default connect(mapStateToProps)(Profile);