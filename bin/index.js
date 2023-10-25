#!/usr/bin/env node
const main = require("../index");
const minimist = require('minimist');
const { keyPress } = require("../lib/keypress");
const { loadConfig } = require("../lib/readConfig");
const argv = minimist(process.argv.slice(2));
const { compararScriptsConCodigo } = require("../lib/inquirerFunctions");
const { descargarScriptsEnCodigo } = require("../lib/descargarScriptsEnCodigo");

async function tmpMain() {
    
    
    if (argv.init) {
        await loadConfig()
        await descargarScriptsEnCodigo('./scripts/')
        await keyPress()
        console.clear()
        console.log('Comparar scripts con el código')
        await compararScriptsConCodigo()
        await keyPress()
    }
    if (argv.test) {
        //

    }
    main()
}


tmpMain()
