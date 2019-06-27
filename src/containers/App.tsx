import React, { useState } from 'react';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';
import defaultTheme from '../themes/defaultTheme';
import { Layout } from '../components/Layout';
import store from '../store';
import Editor from './Editor';

export default () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={defaultTheme}>
                <Layout>
                    <Editor />
                </Layout>
            </ThemeProvider>
        </Provider>
    );
};