var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // test
  res.render('index', { title: 'Foobar' });
});

const persons = [
  {
    route: 'para',
    name: 'Paramvir Atwal',
    age: 20,
    cityBorn: 'Majari',
    cityResiding: 'Barrie',
    hobby: 'Playing Basketball'
  },
  {
    route: 'Daaman',
    name: 'Daaman Kaushal',
    age: 20,
    cityBorn: 'Ludhiana',
    cityResiding: 'Barrie',
    hobby: 'playing guitar'
  },
  {
    route: 'amar',
    name: 'Amarjeet Singh',
    age: 19,
    cityBorn: 'Pathankot',
    cityResiding: 'Barrie',
    hobby: 'making random music tunes'
  }
];

router.get('/:route', (req, res, next) => {
  // Find the person where their route string equals the route parameter
  const person = persons.find(per => per.route === req.params.route);

  // if no person - render the error page
  if (!person) return next(new Error('Cannot find person'));

  // Res.render - renders a view from our views folder.
  // Pass the person we found in the array above
  return res.render('person', person);
});

// router.get('/para', (req, res) => {
//   // Res.render - renders a view from our views folder.
//   res.render('person', {
//     name: 'Paramvir Atwal',
//     age: 20,
//     cityBorn: 'Majari',
//     cityResiding: 'Barrie',
//     hobby: 'Playing Basketball'
//   });
// });

// router.get('/Daaman', (req, res) => {
//   // Res.render - renders a view from our views folder.
//   res.render('person', {
//     name: 'Daaman Kaushal',
//     age: 20,
//     cityBorn: 'Ludhiana',
//     cityResiding: 'Barrie',
//     hobby: 'playing guitar'
//   });
// });

module.exports = router;
