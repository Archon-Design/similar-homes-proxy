const axios = require('axios');


const getGallery = (req, res) => {
  axios.get('http://localhost:3002/1')
    .then((result) => {
      let { data } = result;
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    })
}

const getSimilar = (req, res) => {
  axios.get('http://localhost:3001/1')
    .then((result) => {
      let { data } = result;
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    })
}

const reviews = (req, res) => {
  axios.get('http://localhost:3004/reviews')
    .then((result) => {
      let { data } = result;
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    })
}

const features = (req, res) => {
  axios.get('http://localhost:3004/features')
    .then((result) => {
      let { data } = result;
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    })
}

const getReviews = (req, res) => {
  axios.get('http://localhost:3004/1')
    .then((result) => {
      let { data } = result;
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    })
}

const getCalculator = (req, res) => {
  axios.get('http://localhost:3003/1')
    .then((result) => {
      let { data } = result;
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    })
}

module.exports = {
  getGallery, getSimilar, getReviews, getCalculator, reviews, features
}