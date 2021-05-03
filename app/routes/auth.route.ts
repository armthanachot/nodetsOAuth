/*
 * Copyright (C) 2021 Depwhite Software
 *
 * This file is part of the Depwhite Software project.
 *
 * Depwhite Software project can not be copied and/or distributed without the express
 */

"use strict"

import * as passport from "passport";


export default (prefix,app)=>{
    app.route(`${prefix}/google`).get([],passport.authenticate("google", { scope: ["profile", "email"] }))
}