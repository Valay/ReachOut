module.exports = {
  db: 'localhost/MusicConnect',

  sendgrid: {
    user: 'Your SendGrid Username',
    password: 'Your SendGrid Password'
  },

  facebook: {
    clientID: '231642420355463',
    clientSecret: 'af3688ad5e5e3abea12f44ca8d2ed3a4',
    callbackURL: '/auth/facebook/callback',
    passReqToCallback: true
  },

  twitter: {
    consumerKey: 'Your Consumer Key',
    consumerSecret: 'Your Consumer Secret',
    callbackURL: '/auth/twitter/callback',
    passReqToCallback: true
  }/*,

  google: {
    clientID: 'Your Client ID',
    clientSecret: 'Your Client Secret',
    callbackURL: '/auth/google/callback',
    passReqToCallback: true
  }
*/
};
