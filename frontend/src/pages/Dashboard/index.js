import React, { useState, Component } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn, FiPower } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';
import Menu from '../Menu/index.js'

export default function DashBoard() {
       return (
        <div className="dashboard-container">
            <Menu />

         <div className="corpo">
             
        </div>
    </div>


   );
}