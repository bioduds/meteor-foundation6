// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by uikit3.js.
import { name as packageName } from "meteor/bioduds:uikit3";

// Write your tests here!
// Here is an example.
Tinytest.add('uikit3 - example', function (test) {
  test.equal(packageName, "uikit3");
});
