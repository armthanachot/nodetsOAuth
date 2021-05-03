import * as GoogleStrategy from "passport-google-oauth20"
const googleStrategy = new GoogleStrategy.Strategy(
    {
      clientID: "429844871156-up6ij1ua1ooc34i1j7e9pjj77aq8p1gs.apps.googleusercontent.com",
      clientSecret: "KwWFZIJ4qGKN1aYCDrvBhXA6",
      callbackURL: "http://localhost:4400/login/callback", // ใส่ callback เข้าไป ต้องเหมือนกับใน credential ด้วย
    },
    (accessToken, refreshToken, profile, done)=>{
        return done(null, profile)
    //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   })
    }
  )

  export {
  googleStrategy
  }