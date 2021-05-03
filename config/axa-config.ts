import * as Auth0Strategy from "passport-auth0"
const axaStrategy = new Auth0Strategy(
    {
      domain: "maam.axa.com/maam/v2",
      clientID: "ff1ae215",
      clientSecret: "12345678",
      callbackURL: "https://maam.axa.com/maam/v2/api/v1/oauth2-redirect.html",
      passReqToCallback: false,
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
      console.log(refreshToken);
      console.log(profile);

      //
      // State value is in req.query.state ...
      //
      return done(null, profile)
    }
  )

export {
    axaStrategy
}