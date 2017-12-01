/*
FILES

README.MD

A markdown file with information about your project

Package.json

{
  "author": "Steve Fenton",
  "name": "typespec-bdd",
  "description": "BDD framework for TypeScript.",
  "keywords": [
    "typespec",
    "typescript",
    "bdd",
    "behaviour",
    "driven"
  ],
  "version": "0.6.9",
  "homepage": "https://github.com/Steve-Fenton/TypeSpec",
  "bugs": "https://github.com/Steve-Fenton/TypeSpec/issues",
  "license": "(Apache-2.0)",
  "files": [
    "src/"
  ],
  "repository": {
    "url": "https://github.com/Steve-Fenton/TypeSpec"
  },
  "main": "src/TypeSpec.js",
  "types":  "src/TypeSpec.d.ts",
  "dependencies": { },
  "devDependencies": { },
  "optionalDependencies": { },
  "engines": {
    "node": "*"
  }
}
*/
/*
ON BUILD - pop the files temporarily in a "distribution" folder (just the .d.ts and .js files, along with the
readme and package.json)

--dist
  |--README.md
  |--package.json
  |--src
     |--TypeSpec.d.ts
     |--TypeSpect.js
     |--...

XCOPY $(ProjectDir)Scripts\TypeSpec\*.d.ts $(ProjectDir)dist\src\ /y

XCOPY $(ProjectDir)Scripts\TypeSpec\*.js $(ProjectDir)dist\src\ /y

XCOPY $(SolutionDir)README.md $(ProjectDir)dist\ /y

XCOPY $(ProjectDir)package.json $(ProjectDir)dist\ /y

TEST IT

Navigate to the dist folder, run

npm package

Open the package file in an archive viewer, such as Z-Zip and check the files are all present, and that no
other files have sneaked in

*/ 
