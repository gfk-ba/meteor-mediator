if (Meteor.isServer) {
  Mediator = Npm.require('mediator-js').Mediator;
} else {
  Mediator = require('mediator-js').Mediator;
}
