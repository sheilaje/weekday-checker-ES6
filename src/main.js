'use strict';

import { Weekday } from './Weekday';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  let weekday = new Weekday();
  console.log(weekday.getDay(1941, 1, 16));
});
