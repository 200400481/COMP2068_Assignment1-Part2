// File: routes/index.js
// Author: Jakob Clements
// Project: COMP2068 Assignment 1 - Express Portfolio Site
// Description: Contains routes to each page of the site

'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function (req, res) {
    res.render('about', { title: 'About me' });
});

/* GET projects page. */
router.get('/projects', function (req, res) {
    res.render('projects', { title: 'Projects' });
});

/* GET services page. */
router.get('/services', function (req, res) {
    res.render('services', { title: 'Services' });
});

/* GET contact page. */
router.get('/contact', function (req, res) {
    res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
